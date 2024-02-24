import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Road } from "./ref/ground/road.ts";

const gltfURL: string = "/public/umeda1.png";
const prevURL: string | null = null;
const nextURL: string | null = "../floor2/index.html";
function main() {
  const canvas = document.querySelector("#c") as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  const fov = 45;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();
  const scene = new THREE.Scene();

  function render() {
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
Road(gltfURL, prevURL, nextURL);
