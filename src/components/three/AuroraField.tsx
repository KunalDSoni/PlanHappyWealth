"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Subtle Three.js layer: a slow-drifting constellation of gold/ivory motes
 * over the navy canvas, with gentle pointer parallax. Intentionally quiet —
 * depth, not spectacle. Skipped entirely for reduced-motion users.
 */
export function AuroraField({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Build a layered point cloud
    const COUNT = 520;
    const positions = new Float32Array(COUNT * 3);
    const scales = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 46;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
      scales[i] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

    // Soft circular sprite via canvas texture
    const sprite = makeGlowTexture();
    const material = new THREE.PointsMaterial({
      size: 0.5,
      map: sprite,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: new THREE.Color("#D4AF37"),
      opacity: 0.55,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // A second, cooler layer for depth
    const material2 = material.clone();
    material2.color = new THREE.Color("#7C93B8");
    material2.opacity = 0.3;
    material2.size = 0.32;
    const points2 = new THREE.Points(geometry.clone(), material2);
    points2.position.z = -6;
    scene.add(points2);

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const clock = new THREE.Clock();
    let frame = 0;
    const render = () => {
      const t = clock.getElapsedTime();
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      points.rotation.y = t * 0.02 + pointer.x * 0.15;
      points.rotation.x = pointer.y * 0.1;
      points2.rotation.y = t * 0.012 + pointer.x * 0.08;

      camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.03;
      camera.position.y += (-pointer.y * 1.0 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      points2.geometry.dispose();
      material.dispose();
      material2.dispose();
      sprite.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}

/** Generate a soft radial glow sprite on a canvas. */
function makeGlowTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.3, "rgba(255,255,255,0.7)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
