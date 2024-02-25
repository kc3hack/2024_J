import * as THREE from "three";
import { frameArea } from "../frameArea.ts";
import { resizeRendererToDisplaySize } from "../resizeRender.ts";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { objectSetting } from "../objectSetting.ts";
import { drawSkybox } from "../../../../../utils/Skybox.ts";
import { Object3D, Texture } from "three";
import { Swipe } from "../../../../../utils/swipe.ts";
import { GPSWrap } from "../../../../../utils/gps.ts";
import { getGraph } from "../../../../../utils/gps.ts";
import { getMapPair } from "../../../../../utils/gps.ts";
import { getCorrespond } from "../../../../../utils/gps.ts";


interface Material {
  map?: Texture;
}

export async function Road(
  gltfURL: string,
  prevURL: string | null,
  nextURL: string | null,
) {
  const canvas = document.querySelector("#c") as HTMLCanvasElement;
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
  Swipe(prevURL, nextURL);
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
  const gps_origin= new THREE.Vector2(34.99476928327886, 135.74033184232056
  );
  const gps_point =  new THREE.Vector2(34.994700069011465, 135.74017694476333
  );
  const map_origin= new THREE.Vector2(0, 0);
  const map_point = new THREE.Vector2(1, 1)
  const GPS = new GPSWrap(gps_origin,gps_point,map_origin,map_point);

  const t = await getMapPair(1);
  const u = await getCorrespond(1);
  const graph = await getGraph(t, u);
  console.log(graph);
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  sphere.position.y = 1;

  function userFollowsGPS() {
    const pos = GPS.gpsToMap(GPS.getGPSPos());
    sphere.position.x = pos.x;
    sphere.position.y = pos.y;
  }
  function gltfRender() {
    if (resizeRendererToDisplaySize(gltfRenderer)) {
      const canvas = gltfRenderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    userFollowsGPS();
    gltfRenderer.render(scene, camera);

    requestAnimationFrame(gltfRender);
  }
  requestAnimationFrame(gltfRender);
}
