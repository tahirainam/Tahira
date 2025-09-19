import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Earth() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Light
    const light = new THREE.PointLight(0xffffff, 1.8);
    light.position.set(2, 2, 2);
    scene.add(light);

    // Texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth.jpg"); // put earth.jpg in public folder

    // Earth
    const sphere = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      //wireframe: true,
      roughness: 0.6,
      metalness: 0.3,
    });
    const earth = new THREE.Mesh(sphere, material);
    scene.add(earth);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
controls.enablePan = false;

    // Resize handler
     const handleResize = () => {
       const width = mountRef.current.clientWidth;
       const height = mountRef.current.clientHeight;
       renderer.setSize(width, height);
       camera.aspect = width / height;
       camera.updateProjectionMatrix();
     };
     window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002;
      //controls.update();
      renderer.render(scene, camera);
    };
    animate();


    // Cleanup
return () => {
  window.removeEventListener("resize", handleResize);

  if (mountRef.current && renderer.domElement) {
    mountRef.current.removeChild(renderer.domElement);
  }

  renderer.dispose();
};

  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "500px", overflow: "hidden" }}
    />
  );
}
