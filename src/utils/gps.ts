import { Vector2 } from "three";
import { GetCorrespondDocument, GetMapPairDocument } from "../gql/graphql.ts";
import { buildGQLClient } from "./gqlClient.ts";
import { PriorityQueue } from "./priorityQueue.ts";

export class GPSWrap {
  gps_origin: Vector2;
  map_origin: Vector2;
  scale1: Vector2; // gps / map
  scale2: Vector2; // map / gps
  gps_now: Vector2; // (lat, lon)
  constructor(
    gps_origin: Vector2,
    gps_point: Vector2,
    map_origin: Vector2,
    map_point: Vector2,
  ) {
    this.gps_origin = gps_origin;
    this.map_origin = map_origin;
    this.scale1 = GPSWrap.calculateScale(
      gps_origin,
      gps_point,
      map_origin,
      map_point,
    );
    this.scale2 = GPSWrap.calculateScale(
      map_origin,
      map_point,
      gps_origin,
      gps_point,
    );
    this.gps_now = this.getGPSPos();
  }
  private static calculateScale(
    origin_A: Vector2,
    origin_B: Vector2,
    remote_A: Vector2,
    remote_B: Vector2,
  ): Vector2 {
    const origin_vector = origin_B.clone().sub(origin_A);
    const remote_vector = remote_B.clone().sub(remote_A);
    return new Vector2(
      origin_vector.x / remote_vector.x,
      origin_vector.y / remote_vector.y,
    );
  }
  public gpsToMap(gps: Vector2): Vector2 {
    return gps
      .clone()
      .sub(this.gps_origin)
      .multiply(this.scale1)
      .add(this.map_origin);
  }
  public mapToGps(map: Vector2): Vector2 {
    return map
      .clone()
      .sub(this.map_origin)
      .multiply(this.scale2)
      .add(this.gps_origin);
  }
  public getGPSPos(): Vector2 {
    let pos: Vector2;
    pos = new Vector2(Infinity, Infinity);
    if (!navigator.geolocation) throw new Error("GPS is not available");
    const Ok = (position: GeolocationPosition) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      pos = this.gps_now = new Vector2(lat, lon);
      console.log(`${lat}, ${lon}`);
    };
    const Ng = () => {
      console.log("kokodoko...");
      throw new Error("GPS is not available");
    };
    navigator.geolocation.getCurrentPosition(Ok, Ng);
    return pos;
  }
  public getMapPos(): Vector2 {
    return this.gpsToMap(this.getGPSPos());
  }
}

export type edge = {
  to: number;
  weight: number;
};
type vec2 = { x: number; y: number };

/*
 * vec2 = [lat, lon]
 * return: vec2[] = [[lat, lon], ...], i = node number
 */
export async function getMapPair(floor_id: number): Promise<vec2[]> {
  const gps: vec2[] = [];
  const client = await buildGQLClient();
  const data = await client.request(GetMapPairDocument, { floor: floor_id });
  data.GuidingNodes.forEach((node) => {
    gps[node.id] = { x: node.lat, y: node.lon };
  });
  return gps;
}

/*
 * correspond: [from, to], csv = from, to
 * return: [from, to][]
 */
export async function getCorrespond(
  floor_id: number,
): Promise<[number, number][]> {
  const correspond: [number, number][] = [];
  const client = await buildGQLClient();
  const data = await client.request(GetCorrespondDocument, { floor: floor_id });
  data.point_relation.forEach((relation) => {
    correspond.push([relation.rFrom.id, relation.rTo.id]);
  });

  return correspond;
}
/*
 * using correspond and gps, return graph
 * graph: edge[from][] = {to, weight}
 */
export async function getGraph(
  gps: vec2[],
  correspond: [number, number][],
): Promise<edge[][]> {
  const graph: edge[][] = [];
  for (let i = 0; i < gps.length; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < correspond.length; i++) {
    const from = correspond[i][0];
    const to = correspond[i][1];
    const x = gps[from].x - gps[to].x;
    const y = gps[from].y - gps[to].y;
    const weight = (x > 0 ? x : -x) + (y > 0 ? y : -y);
    graph[from].push({ to: to, weight });
    graph[to].push({ to: from, weight });
  }
  return graph;
}

export async function dijkstra(start: number, end: number): Promise<number[]> {
  const inf: number = 1e18;
  const graph: edge[][] = await getGraph(
    await getMapPair(1),
    await getCorrespond(1),
  );
  const dist: number[] = [];
  const from: number[] = [];

  for (let i = 0; i < graph.length; i++) {
    dist[i] = inf;
    from[i] = inf;
  }

  const pq = new PriorityQueue();
  pq.push([0, start, inf]);

  while (pq.size() != 0) {
    const v = pq.pop();
    if (dist[v[1]] != inf) continue;

    dist[v[1]] = v[0];
    from[v[1]] = v[2];

    if (v[1] == end) break;

    for (let i = 0; i < graph[v[1]].length; i++) {
      if (dist[graph[v[1]][i].to] != inf)
        pq.push([v[0] + graph[v[1]][i].weight, graph[v[1]][i].to, v[1]]);
    }
  }

  const res: number[] = [];
  let now = end;
  res.push(now);
  while (now != start) {
    now = from[now];
    res.push(now);
  }

  res.reverse();
  return res;
}
