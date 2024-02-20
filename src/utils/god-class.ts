import * as THREE from "three";

export class GPSWrap {
  gps_origin: THREE.Vector2;
  map_origin: THREE.Vector2;
  scale1: number; // gps / map
  scale2: number; // map / gps
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
  ): number {
    const origin_scale = origin_A.distanceTo(origin_B);
    const remote_scale = remote_A.distanceTo(remote_B);
    return origin_scale / remote_scale;
  }
  public gpsToMap(gps: THREE.Vector2): THREE.Vector2 {
    return gps
      .clone()
      .sub(this.gps_origin)
      .multiplyScalar(this.scale1)
      .add(this.map_origin);
  }
  public mapToGps(map: THREE.Vector2): THREE.Vector2 {
    return map
      .clone()
      .sub(this.map_origin)
      .multiplyScalar(this.scale2)
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
