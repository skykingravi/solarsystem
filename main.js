import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AmbientLight, Color, Mesh } from 'three';
const scene = new THREE.Scene();

const radii = {
  sun: 696340,
  mercury: 2439.7,
  venus: 6051.8,
  earth: 6371,
  mars: 3389.5,
  jupiter: 69911,
  saturn: 58232,
  uranus: 25362,
  neptune: 24622,
};
const distance = {
  sun: 0,
  mercury: 58,
  venus: 108.2,
  earth: 149.6,
  mars: 227.9,
  jupiter: 778.5,
  saturn: 1434,
  uranus: 2871,
  neptune: 4495,
};

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(radii.sun / 1000, 64, 32),
  new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('images/sun.jpeg'),
  })
);
scene.add(sun);

function createSystem (size, texture, position, ring) {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(size, 64, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(texture),
    })
  );
  const obj = new THREE.Object3D();
  obj.add(mesh);
  if (ring) {
    const ringMesh = new THREE.Mesh(
        new THREE.RingGeometry(
          ring.innerRadius,
          ring.outerRadius,
          64,
          32,
        ),
        new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load(ring.texture),
          side: THREE.DoubleSide,
        }),
      );
      obj.add(ringMesh);
      ringMesh.position.z = position;
      ringMesh.rotation.x = -0.5 * Math.PI;
  }
  scene.add(obj);
  mesh.position.z = position;
  return {mesh, obj};
}
const mercury = createSystem(radii.mercury/1000, 'images/mercury.jpeg', radii.sun / 1000 + distance.mercury);
const venus = createSystem(radii.venus/1000, 'images/venus.jpeg', radii.sun / 1000 + distance.venus);
const earth = createSystem(radii.earth/1000, 'images/earth-day.jpeg', radii.sun / 1000 + distance.earth);
const mars = createSystem(radii.mars/1000, 'images/mars.jpeg', radii.sun / 1000 + distance.mars);
const jupiter = createSystem(radii.jupiter/1000, 'images/jupiter.jpeg', radii.sun / 1000 + distance.jupiter);
const saturn = createSystem(radii.saturn/1000, 'images/saturn.jpeg', radii.sun / 1000 + distance.saturn, {innerRadius: 78.565, outerRadius: 132.78, texture: 'images/saturn-ring.png'});
const uranus = createSystem(radii.uranus/1000, 'images/uranus.jpeg', radii.sun / 1000 + distance.uranus, {innerRadius: 35.563, outerRadius: 60.7, texture: 'images/uranus-ring.png'});
const neptune = createSystem(radii.neptune/1000, 'images/neptune.jpeg', radii.sun / 1000 + distance.neptune);


// const sun = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.sun/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/sun.jpeg'),
//   })
// );
// scene.add(sun);

// const mercury = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.mercury/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/mercury.jpeg'),
//   })
// );
// mercury.position.z = radii.sun / 1000 + distance.mercury;
// scene.add(mercury);

// const venus = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.venus/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/venus.jpeg'),
//   })
// );
// venus.position.z = radii.sun / 1000 + distance.venus;
// scene.add(venus);

// const earth = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.earth/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/earth-day.jpeg'),
//   })
// );
// earth.position.z = radii.sun / 1000 + distance.earth;
// scene.add(earth);

// const mars = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.mars/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/mars.jpeg'),
//   })
// );
// mars.position.z = radii.sun / 1000 + distance.mars;
// scene.add(mars);

// const jupiter = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.jupiter/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/jupiter.jpeg'),
//   })
// );
// jupiter.position.z = radii.sun / 1000 + distance.jupiter;
// scene.add(jupiter);

// const saturn = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.saturn/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/saturn.jpeg'),
//   })
// );
// saturn.position.z = radii.sun / 1000 + distance.saturn;
// scene.add(saturn);

// const saturnRing = new Mesh(
//   new THREE.RingGeometry(78.565, 132.78, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/saturn-ring.png'),
//     side: THREE.DoubleSide,
//   })
// );
// saturnRing.rotateX(90 * (Math.PI/180));
// saturnRing.position.z = saturn.position.z;
// scene.add(saturnRing);

// const uranus = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.uranus/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/uranus.jpeg'),
//   })
// );
// uranus.position.z = radii.sun / 1000 + distance.uranus;
// scene.add(uranus);

// const neptune = new THREE.Mesh(
//   new THREE.SphereGeometry(radii.neptune/1000, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: new THREE.TextureLoader().load('images/neptune.jpeg'),
//   })
// );
// neptune.position.z = radii.sun / 1000 + distance.neptune;
// scene.add(neptune);


// let i = 0;
// let r = () => {
//   sun.rotateY(i);
//   mercury.rotateY(i);
//   venus.rotateY(i);
//   earth.rotateY(i);
//   mars.rotateY(i);
//   jupiter.rotateY(i);
//   saturn.rotateY(i);
//   saturnRing1.rotateZ(-1*i);
//   saturnRing2.rotateZ(-1*i);
//   uranus.rotateY(i);
//   neptune.rotateY(i);
//   i+=0.00001;
//   setTimeout(r, 20);
// };
// r();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
// const light = new THREE.PointLight(0xffffff, 1, 100);
// light.position.set(10, 10, 10);
const pointLight = new THREE.PointLight(0xFFFFFF, 2, 10000);
scene.add(pointLight);
pointLight.position.set(0,0,0);
const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(ambientlight);
// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100000);
camera.position.x = 2000;
camera.position.y = 2000;
camera.position.z = 7000;
scene.add(camera);
const canvas = document.querySelector("#bg");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);
const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.enableZoom = false;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 5;
scene.background = new THREE.TextureLoader().load('images/space1.jpeg');
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
})
function animate() {
  //Self-rotation
  sun.rotateY(0.004);
  mercury.mesh.rotateY(0.004);
  venus.mesh.rotateY(0.002);
  earth.mesh.rotateY(0.02);
  mars.mesh.rotateY(0.018);
  jupiter.mesh.rotateY(0.04);
  saturn.mesh.rotateY(0.038);
  uranus.mesh.rotateY(0.03);
  neptune.mesh.rotateY(0.032);

  // //Around-sun-rotation
  mercury.obj.rotateY(0.04);
  venus.obj.rotateY(0.015);
  earth.obj.rotateY(0.01);
  mars.obj.rotateY(0.008);
  jupiter.obj.rotateY(0.002);
  saturn.obj.rotateY(0.0009);
  uranus.obj.rotateY(0.0004);
  neptune.obj.rotateY(0.0001);

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
// const loop = () => {
//   // controls.update();
//   // sun.rotation.y += 0.001;
//   // renderer.render(scene, camera);
//   window.requestAnimationFrame(loop);
// }
// loop();