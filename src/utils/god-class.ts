import * as THREE from "three";
import * as fs from "fs";
import { parse } from "@fast-csv/parse";

export class GPSWrap {
  gps_origin: THREE.Vector2;
  map_origin: THREE.Vector2;
  scale1: THREE.Vector2; // gps / map
  scale2: THREE.Vector2; // map / gps
  gps_now: THREE.Vector2; // (lat, lon)
  constructor(
    gps_origin: THREE.Vector2,
    gps_point: THREE.Vector2,
    map_origin: THREE.Vector2,
    map_point: THREE.Vector2,
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
    origin_A: THREE.Vector2,
    origin_B: THREE.Vector2,
    remote_A: THREE.Vector2,
    remote_B: THREE.Vector2,
  ): THREE.Vector2 {
    const origin_vector = origin_B.clone().sub(origin_A);
    const remote_vector = remote_B.clone().sub(remote_A);
    return new THREE.Vector2(
      origin_vector.x / remote_vector.x,
      origin_vector.y / remote_vector.y,
    );
  }
  public gpsToMap(gps: THREE.Vector2): THREE.Vector2 {
    return gps
      .clone()
      .sub(this.gps_origin)
      .multiply(this.scale1)
      .add(this.map_origin);
  }
  public mapToGps(map: THREE.Vector2): THREE.Vector2 {
    return map
      .clone()
      .sub(this.map_origin)
      .multiply(this.scale2)
      .add(this.gps_origin);
  }
  public getGPSPos(): THREE.Vector2 {
    let pos: THREE.Vector2;
    pos = new THREE.Vector2(Infinity, Infinity);
    if (!navigator.geolocation) throw new Error("GPS is not available");
    const Ok = (position: GeolocationPosition) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      pos = this.gps_now = new THREE.Vector2(lat, lon);
      console.log(`${lat}, ${lon}`);
    };
    const Ng = () => {
      console.log("kokodoko...");
      throw new Error("GPS is not available");
    };
    navigator.geolocation.getCurrentPosition(Ok, Ng);
    return pos;
  }
}

export type edge = {
  from: number;
  to: number;
  weight: number;
};
type vec2 = { x: number; y: number };
/*
 GPS and Map-point corsponding function
 load gps.csv and calculate weight, memorize it.
 connecting nodes are in correspoond.csv
 gps.csv is a file that contains the latitude and longitude of the map point.
 lat, lon, map_x, map_y
    35.6895, 139.6917, 0, 0
 getGraph() : edge[], returning the graph of the map point.
 */

/*
 * vec2 = [lat, lon]
 * return: vec2[] = [[lat, lon], ...], i = node number
 */
export async function getMapPair(): Promise<vec2[]> {
  const gps: vec2[] = [];
  fs.createReadStream("gps.csv")
    .pipe(parse())
    .on("data", (row) => {
      gps.push({ x: row[0], y: row[1] });
    })
    .on("end", () => {
      console.log(gps);
    })
    .on("error", (err) => {
      console.error(err);
      throw err;
    });
  return gps;
}

/*
 * correspond: [from, to], csv = from, to
 * return: [from, to][]
 */
export async function getCorrespond(): Promise<[number, number][]> {
  const correspond: [number, number][] = [];
  fs.createReadStream("correspond.csv")
    .pipe(parse())
    .on("data", (row) => {
      correspond.push([row[0], row[1]]);
    })
    .on("end", () => {
      console.log(correspond);
    })
    .on("error", (err) => {
      console.error(err);
      throw err;
    });
  return correspond;
}

// using correspond and gps, return graph
// graph: edge[from][] = {to, weight}
export async function toGraph(
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
    const weight = gps[from].x - gps[to].x + gps[from].y - gps[to].y;
    graph[from].push({ from, to, weight });
  }
  return graph;
}

// const correspond: [number, number][] = [];
// fs.createReadStream('correspond.csv')
//     .pipe(parse())
//     .on('data', (row) => {
//       correspond.push([row[0], row[1]]);
//     })
//     .on('end', () => {
//       console.log(correspond);
//     })
//     .on('error', (err) => {
//       console.error(err);
//       throw err;
//     });
// return correspond;
// graph: edge[from][] = {to, weight}
//export async function toGraph(gps: vec2[], correspond: [number, number][]): Promise<edge[][]> {
//    const graph: edge[][] = [];
//    for (let i = 0; i < gps.length; i++) {
//        graph[i] = [];
//    }
//    for (let i = 0; i < correspond.length; i++) {
//        const from = correspond[i][0];
//        const to = correspond[i][1];
//        const weight = gps[from].x - gps[to].x + gps[from].y - gps[to].y;
//        graph[from].push({from, to, weight});
//    }
//    return graph;
//}

//const graph: edge[] = [];
//correspond.forEach((pair) => {
//  const from = pair[0];
//  const to = pair[1];
//  const weight = // L2 norm
//      Math.sqrt(Math.pow((gps[from].x - gps[to].x), 2) + Math.pow((gps[from].y - gps[to].y), 2));
//  graph.push({ from: from, to: to, weight: weight });
//})
//return graph;
