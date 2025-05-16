<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import helvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json?url'

const container = ref(null)

let scene, camera, renderer, mesh, animationId

onMounted(() => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x111111)

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 100

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // Brighter lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(10, 10, 10)
  scene.add(directionalLight)

  // Load font and add text
  const loader = new FontLoader()
  loader.load(helvetikerFont, (font) => {
    const geometry = new TextGeometry('Welcome', {
      font,
      size: 4,
      height: 0.5,
      curveSegments: 10,
      bevelEnabled: false,
    })

    geometry.center()

    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    animate()
  })

  window.addEventListener('resize', onWindowResize)
})

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  animationId = requestAnimationFrame(animate)
  if (mesh) {
    mesh.rotation.y += 0.01
  }
  renderer.render(scene, camera)
}

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onWindowResize)
  renderer.dispose()
})
</script>

<style scoped>
.three-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>

