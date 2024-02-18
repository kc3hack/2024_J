import { objectSetting } from "../objectSetting";
import * as THREE from "three";
import { frameArea } from "../frameArea";
import { resizeRendererToDisplaySize } from "../resizeRender";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
export function Road() {
  const canvas = document.querySelector("#c") as HTMLCanvasElement;
  const glftRenderer = new THREE.WebGLRenderer({ antialias: true, canvas });
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
  {
    objectSetting(scene);
  }
  {
    const gltfLoader = new GLTFLoader();
    const url = "src/3d/model/KC3.gltf";
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
  function glftRender() {
    if (resizeRendererToDisplaySize(glftRenderer)) {
      const canvas = glftRenderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    glftRenderer.render(scene, camera);

    requestAnimationFrame(glftRender);
  }
  requestAnimationFrame(glftRender);
}
