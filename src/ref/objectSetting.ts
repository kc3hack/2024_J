import * as THREE from "three";

export function objectSetting(scene: THREE.Scene) {
  const color = 0xffffff;
  const intensity = 2.5;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(5, 10, 2);
  scene.add(light);
  scene.add(light.target);
}
