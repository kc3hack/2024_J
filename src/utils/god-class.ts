import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { frameArea } from "../pages/building1/floor1/ref/frameArea.ts";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function drawSkybox(
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  renderer: THREE.WebGLRenderer,
) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.8;

  const gltfLoader = new GLTFLoader();
  const url = "src/3d/model/plane.gltf";
  gltfLoader.load(url, (gltf) => {
    const root = gltf.scene;
    scene.add(root);
    const box = new THREE.Box3().setFromObject(root);
    const boxSize = box.getSize(new THREE.Vector3()).length();
    const boxCenter = box.getCenter(new THREE.Vector3());
    frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    controls.maxDistance = boxSize * 10;
    controls.target.copy(boxCenter);
    controls.update();
  });
}
