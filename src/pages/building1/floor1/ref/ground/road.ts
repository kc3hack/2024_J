import * as THREE from "three";
import { frameArea } from "../frameArea.ts";
import { resizeRendererToDisplaySize } from "../resizeRender.ts";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { objectSetting } from "../objectSetting.ts";
import { drawSkybox } from "../../../../../utils/god-class.ts";
import { Object3D, Texture } from "three";
import { Swipe } from "../../../../../utils/swipe.ts";

interface Material {
  map?: Texture;
}

export function Road(query: string, gltfURL: string, pageURL: string) {
  const canvas = document.querySelector(query) as HTMLCanvasElement;
  const gltfRenderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  const fov = 45;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 0);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();
  const scene = new THREE.Scene();
  drawSkybox(scene);
  Swipe(pageURL);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(gltfURL);
  {
    objectSetting(scene);
  }
  {
    const gltfLoader = new GLTFLoader();
    const url = "/public/Field.gltf";
    gltfLoader.load(url, (gltf) => {
      const root = gltf.scene;
      root.traverse(function (child: Object3D) {
        if ((<THREE.Mesh>child).isMesh) {
          (<Material>(<THREE.Mesh>child).material).map = texture;
        }
      });
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
  function gltfRender() {
    if (resizeRendererToDisplaySize(gltfRenderer)) {
      const canvas = gltfRenderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    gltfRenderer.render(scene, camera);

    requestAnimationFrame(gltfRender);
  }
  requestAnimationFrame(gltfRender);
}
