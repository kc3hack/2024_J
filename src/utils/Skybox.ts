import * as THREE from "three";
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader.js";
import {DataTexture} from "three";

export function drawSkybox(scene: THREE.Scene) {
    const loader = new RGBELoader();
    const url = "/skybox/kloppenheim_02_puresky_4k.hdr";
    const textures = loader.load(url, (texture: DataTexture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = false;
    });
    scene.background = textures;
    scene.environment = textures;
}
