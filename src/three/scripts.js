import * as THREE from 'three';
import {
  simulationVertexShader,
  simulationFragmentShader,
  renderVertexShader,
  renderFragmentShader,
} from "./shaders.js";

export default function runThreeScene() {

  const scene = new THREE.Scene();
  const simScene = new THREE.Scene();

  const container = document.querySelector('.three-liquid-container');
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  renderer.setSize(container.clientWidth, container.clientHeight);

  // Check for float texture support
  if (!renderer.capabilities.isWebGL2 && !renderer.extensions.has('OES_texture_float')) {
    console.error('Floating-point textures not supported on this device.');
    return;
  }

  const width = window.innerWidth * window.devicePixelRatio;
  const height = window.innerHeight * window.devicePixelRatio;

  const mouse = new THREE.Vector2(-1, -1); // offscreen by default
  let frame = 0;

  const options = {
    format: THREE.RGBAFormat,
    type: THREE.FloatType, // 🟢 CHANGED
    minFilter: THREE.NearestFilter, // 🟢 CHANGED
    magFilter: THREE.NearestFilter, // 🟢 CHANGED
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
    stencilBuffer: false,
    depthBuffer: false,
  };

  let rtA = new THREE.WebGLRenderTarget(width, height, options);
  let rtB = new THREE.WebGLRenderTarget(width, height, options);

  // 🟢 Clear render targets at the start
  renderer.setRenderTarget(rtA);
  renderer.clearColor();
  renderer.clear(true, true, true);

  renderer.setRenderTarget(rtB);
  renderer.clearColor();
  renderer.clear(true, true, true);

  renderer.setRenderTarget(null);

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

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { alpha: true });

  ctx.fillStyle = "#075b82";
  ctx.fillRect(0, 0, width, height);

  const fontSize = Math.round(100 * window.devicePixelRatio);
  ctx.fillStyle = "#f7f5c0";
  ctx.font = `bold ${fontSize}px Test Söhne`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("david figueiredo", width / 2, height / 2);

  const textTexture = new THREE.CanvasTexture(canvas);
  textTexture.minFilter = THREE.LinearFilter;
  textTexture.magFilter = THREE.LinearFilter;
  textTexture.format = THREE.RGBAFormat;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth * window.devicePixelRatio;
    const newHeight = window.innerHeight * window.devicePixelRatio;

    renderer.setSize(window.innerWidth, window.innerHeight);
    rtA.setSize(newWidth, newHeight);
    rtB.setSize(newWidth, newHeight);
    simMaterial.uniforms.resolution.value.set(newWidth, newHeight);

    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.fillStyle = "#075b82";
    ctx.fillRect(0, 0, newWidth, newHeight);

    const newFontSize = Math.round(100 * window.devicePixelRatio);
    ctx.fillStyle = "#f7f5c0";
    ctx.font = `bold ${newFontSize}px Test Söhne`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("david figueiredo", newWidth / 2, newHeight / 2);

    textTexture.needsUpdate = true;
  });

  // 🟢 Mouse now in pixel coordinates (not UV)
  window.addEventListener('mousemove', (e) => {
    const bounds = container.getBoundingClientRect();
    mouse.x = (e.clientX - bounds.left) * window.devicePixelRatio;
    mouse.y = (bounds.bottom - e.clientY) * window.devicePixelRatio;
  });

  renderer.domElement.addEventListener("mouseleave", () => {
    mouse.set(-1, -1);
  });

  const animate = () => {
    simMaterial.uniforms.frame.value = frame++;
    simMaterial.uniforms.time.value = performance.now() / 1000;

    simMaterial.uniforms.textureA.value = rtA.texture;
    renderer.setRenderTarget(rtB);
    renderer.render(simScene, camera);

    renderMaterial.uniforms.textureA.value = rtB.texture;
    renderMaterial.uniforms.textureB.value = textTexture;

    renderer.setRenderTarget(null);
    renderer.render(scene, camera);

    [rtA, rtB] = [rtB, rtA]; // ping-pong

    requestAnimationFrame(animate);
  };

  animate();
}

