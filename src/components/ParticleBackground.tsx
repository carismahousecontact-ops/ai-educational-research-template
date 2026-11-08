import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1) Initialize WebGLRenderer with alpha transparency
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    const PR = Math.min(window.devicePixelRatio || 1, 1.5); // Pixel ratio cap
    renderer.setPixelRatio(PR);

    const FOV = 50;
    const Z = 5;
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
    camera.position.z = Z;
    const scene = new THREE.Scene();

    // 2) Particle count based on screen width
    const N = window.innerWidth < 768 ? 4000 : 12000;
    const base = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      base[i * 3] = Math.random() * 2 - 1; // x in [-1, 1]
      base[i * 3 + 1] = Math.random() * 2 - 1; // y in [-1, 1]
      base[i * 3 + 2] = Math.random(); // per-particle randomness
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(base, 3));

    // 3) ShaderMaterial with sin-wave motion and mouse repulsion
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(10, 10) },
        uHalf: { value: new THREE.Vector2(1, 1) },
        uRadius: { value: 1.2 },
        uStrength: { value: 0.6 },
        uSize: { value: 2.0 },
        uPR: { value: PR },
      },
      vertexShader: /* glsl */ `
        uniform float uTime, uRadius, uStrength, uSize, uPR;
        uniform vec2 uMouse, uHalf;
        void main() {
          vec2 b = position.xy;
          vec2 p = b * uHalf;
          // Continuous wave motion: sin waves
          p += vec2(sin(b.y * 3.0 + uTime * 0.4 + position.z * 6.0),
                    cos(b.x * 3.0 + uTime * 0.35 + position.z * 6.0)) * 0.08;
          // Repulsion diminishing with distance
          vec2 m = uMouse * uHalf;
          vec2 d = p - m;
          float f = 1.0 - smoothstep(0.0, uRadius, length(d));
          p += normalize(d + 1e-4) * f * uStrength;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
          gl_PointSize = uSize * uPR * (0.6 + position.z * 0.8);
        }
      `,
      fragmentShader: /* glsl */ `
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          gl_FragColor = vec4(0.55, 0.65, 1.0, smoothstep(0.5, 0.0, r) * 0.9);
        }
      `,
    });
    scene.add(new THREE.Points(geo, mat));

    // 4) Dynamic resize handling
    function resize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const halfH = Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * Z;
      mat.uniforms.uHalf.value.set(halfH * camera.aspect, halfH);
    }
    window.addEventListener('resize', resize);
    resize();

    // 5) Normalized mouse target + lerp
    const target = new THREE.Vector2(10, 10);
    const onPointerMove = (e: PointerEvent) => {
      target.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    };
    window.addEventListener('pointermove', onPointerMove);

    // 6) Pause rendering when off-screen or tab hidden
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();

    renderer.setAnimationLoop(() => {
      if (!visible) return;
      mat.uniforms.uMouse.value.lerp(target, 0.08);
      if (!reduce) mat.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      observer.disconnect();
      renderer.setAnimationLoop(null);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return (
    <canvas
      id="bg"
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};
