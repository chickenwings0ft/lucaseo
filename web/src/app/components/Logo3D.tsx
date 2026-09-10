"use client";

import { useEffect, useRef } from "react";

export default function Logo3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    let animationId: number;
    let scrollY = 0;

    // Dynamic import to avoid SSR issues
    async function init() {
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");

      const w = container.clientWidth || 500;
      const h = container.clientHeight || 400;

      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.set(0, 0, 5);

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.domElement.style.display = "block";
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.4;
      container.appendChild(renderer.domElement);

      // Lighting
      const ambient = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambient);

      const dir1 = new THREE.DirectionalLight(0xffffff, 2);
      dir1.position.set(5, 5, 5);
      scene.add(dir1);

      const dir2 = new THREE.DirectionalLight(0x004aad, 1.2);
      dir2.position.set(-5, -2, 3);
      scene.add(dir2);

      const rim = new THREE.DirectionalLight(0x88aaff, 0.8);
      rim.position.set(0, -5, -5);
      scene.add(rim);

      // Load GLB
      let model: InstanceType<typeof THREE.Object3D> | null = null;
      const loader = new GLTFLoader();
      loader.load("/logo-3d.glb", (gltf) => {
        model = gltf.scene;

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;

        model.position.sub(center.multiplyScalar(scale));
        model.scale.setScalar(scale);

        scene.add(model);
      });

      // Scroll tracking
      function onScroll() {
        scrollY = window.scrollY;
      }
      window.addEventListener("scroll", onScroll, { passive: true });

      // Float animation base
      let floatT = 0;

      // Animate
      function animate() {
        animationId = requestAnimationFrame(animate);
        floatT += 0.01;

        if (model) {
          // Gentle auto-rotation
          model.rotation.y += 0.004;

          // Float up/down
          model.position.y = Math.sin(floatT) * 0.12;

          // Scroll-driven rotation on X axis
          const targetRotX = scrollY * 0.001;
          model.rotation.x += (targetRotX - model.rotation.x) * 0.05;
        }

        renderer.render(scene, camera);
      }
      animate();

      // Resize
      function onResize() {
        const nw = container.clientWidth;
        const nh = container.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      }
      window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    let cleanup: (() => void) | undefined;
    init().then((fn) => { cleanup = fn; });

    return () => { cleanup?.(); };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "clamp(280px, 45vw, 520px)",
        height: "clamp(220px, 28vw, 360px)",
        overflow: "hidden",
        display: "block",
        position: "relative",
      }}
    />
  );
}
