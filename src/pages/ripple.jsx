// RippleEffect.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  simulationVertexShader,
  simulationFragmentShader,
  renderVertexShader,
  renderFragmentShader
} from './shaders.js';

const RippleEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const simScene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2();
    let frame = 0;
    const width = window.innerWidth * window.devicePixelRatio;
    const height = window.innerHeight * window.devicePixelRatio;

    const options = {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      stencilBuffer: false,
      depthBuffer: false,
    };

    let rtA = new THREE.WebGLRenderTarget(width, height, options);
    let rtB = new THREE.WebGLRenderTarget(width, height, options);

    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        mouse: { value: mouse },
        resolution: { value: new THREE.Vector2(width, height) },
        time: { value: 0 },
        frame: { value: 0 },
      },
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });

    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        textureB: { value: null },
      },
      vertexShader: renderVertexShader,
      fragmentShader: renderFragmentShader,
      transparent: true,
    });

    const plane = new THREE.PlaneGeometry(2, 2);
    const simQuad = new THREE.Mesh(plane, simMaterial);
    const renderQuad = new THREE.Mesh(plane, renderMaterial);
    simScene.add(simQuad);
    scene.add(renderQuad);

    const loader = new THREE.TextureLoader();
    loader.load("/images/career_video.mp4", (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      renderMaterial.uniforms.textureB.value = texture;
      animate();
    }, undefined, (err) => {
      console.error('Failed to load background texture:', err);
      animate();
    });

    function animate() {
      simMaterial.uniforms.frame.value = frame++;
      simMaterial.uniforms.time.value = performance.now() / 100;
      simMaterial.uniforms.textureA.value = rtA.texture;

      renderer.setRenderTarget(rtB);
      renderer.render(simScene, camera);
      renderer.setRenderTarget(null);

      renderMaterial.uniforms.textureA.value = rtB.texture;
      renderer.render(scene, camera);

      const temp = rtA;
      rtA = rtB;
      rtB = temp;

      requestAnimationFrame(animate);
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX * window.devicePixelRatio;
      mouse.y = (window.innerHeight - e.clientY) * window.devicePixelRatio;
    };

    const onMouseLeave = () => {
      mouse.set(0, 0);
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseleave', onMouseLeave);

    return () => {
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    />
  );
};

export default RippleEffect;
