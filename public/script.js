// console.log(THREE)

// 4 elements to get started

// A scene that will contain objects
// Some objects
// A camera
// A render

// Scene
const scene = new THREE.Scene()

// Geometry
const geo = new THREE.BoxGeometry(1, 1, 1)

// Material
const mater = new THREE.MeshBasicMaterial({ color: 'red' })

// new Mesh, and add geometry and material to the Mesh
const mesh = new THREE.Mesh(geo, mater)


// Camera
const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)

camera.position.x = 1.2
camera.position.z = 6
camera.position.y = -1

// add Mesh and Camera to the Scene
scene.add(mesh, camera)

// RENDERER
// Render the scene from the camera point of view, Result drawn into a canvas
// A canvas is a HTML element in which you can draw stuff.
// Three.js will use WebGL to draw the render inside this canvas.
// You can create it or you can let Three.js do it.
const canvas = document.querySelector('.three')
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)