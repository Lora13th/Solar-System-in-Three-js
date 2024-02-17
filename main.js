import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Star from "/getStarfield.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 14, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-90, 80, 180);



new OrbitControls(camera, renderer.domElement);
const solarSystem = new THREE.Group();
scene.add(solarSystem);

const pointLight = new THREE.PointLight (0xffffff , 3 , 300);
scene.add(pointLight);

// Funkcja do tworzenia informacji o planecie
function createPlanetInfo(name, description, diameter, type, distanceFromSun) {
    return {
        name,
        description,
        diameter,
        type,
        distanceFromSun,
    };
}

/// Słońce
const sunGeometry = new THREE.SphereGeometry(5, 64, 64);
const sunMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("images/sunmap1.png")
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.name = 'Sun';
sun.type = 'Star';
sun.description = 'The Sun is the star at the center of the Solar System.';
sun.diameter = '1 392 700 km';
sun.distanceFromSun = '0 km';
solarSystem.add(sun);

// Włącz raycasting dla planet
solarSystem.children.forEach(planet => {
    planet.userData.isPlanet = true;
});


// Merkury
const mercuryOrbit = new THREE.Group();
solarSystem.add(mercuryOrbit);

const mercuryDistance = 10;
const mercuryGeometry = new THREE.SphereGeometry( 0.7, 64, 64);
const mercuryMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("images/mercurymap.jpg"),
 });
 const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
 mercury.name = 'Mercury';
 mercury.type = 'Planet';
 mercury.description = 'Merkury is the smallest and closest planet to the Sun in the Solar System.';
 mercury.diameter = '4 879,4 km';
 mercury.distanceFromSun = '57.9 million km';
 mercury.position.x = mercuryDistance;
 mercuryOrbit.add(mercury);

//Orbita dla Merkurego
const mercuryOrbitGeometry = new THREE.RingGeometry(mercuryDistance - 0, mercuryDistance + 0, 64);
const mercuryOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const mercuryOrbitLine = new THREE.LineLoop(mercuryOrbitGeometry, mercuryOrbitMaterial);
mercuryOrbitLine.rotation.x = Math.PI / 2; 
mercuryOrbit.add(mercuryOrbitLine);


// Wenus
const venusOrbit = new THREE.Group();
solarSystem.add(venusOrbit);

const venusDistance = 15;
const venusGeometry = new THREE.SphereGeometry( 1.1, 64, 64);
const venusMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("images/venusmap.jpg"),
 });
const venus = new THREE.Mesh( venusGeometry, venusMaterial );
venus.name = 'Venus';
venus.type = 'Planet';
venus.description = 'Venus is the second planet from the Sun and is the hottest planet in our solar system.';
venus.diameter = '12 104 km';
venus.distanceFromSun = '108.2 million km';
venus.position.x = venusDistance;
venusOrbit.add(venus);

//Orbita dla Wenus
const venusOrbitGeometry = new THREE.RingGeometry(venusDistance - 0, venusDistance + 0, 64);
const venusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const venusOrbitLine = new THREE.LineLoop(venusOrbitGeometry, venusOrbitMaterial);
venusOrbitLine.rotation.x = Math.PI / 2; // Obrót orbity do pozycji Y
venusOrbit.add(venusOrbitLine);

// Ziemia
const earthOrbit = new THREE.Group();
solarSystem.add(earthOrbit);

const earthDistance = 20;
const earthGeometry = new THREE.SphereGeometry( 1.2, 64, 64);
const earthMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("images/earthmap.jpg"),
 });
const earth = new THREE.Mesh( earthGeometry, earthMaterial );
earth.name = 'Earth';
earth.type = 'Planet';
earth.description = 'Earth is the third planet from the Sun and is the only astronomical object known to harbor life.';
earth.diameter = '12 742 km';
earth.distanceFromSun = '149.6 million km';
earth.position.x = earthDistance;
earthOrbit.add(earth);

//Orbita dla Ziemi
const earthOrbitGeometry = new THREE.RingGeometry(earthDistance - 0, earthDistance + 0, 64);
const earthOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const earthOrbitLine = new THREE.LineLoop(earthOrbitGeometry, earthOrbitMaterial);
earthOrbitLine.rotation.x = Math.PI / 2; // Obrót orbity do pozycji Y
earthOrbit.add(earthOrbitLine);

// Mars
const marsOrbit = new THREE.Group();
solarSystem.add(marsOrbit);

const marsDistance = 25;
const marsGeometry = new THREE.SphereGeometry( 0.8, 64, 64);
const marsMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("images/marsmap1k.jpg"),
 });
const mars = new THREE.Mesh( marsGeometry, marsMaterial );
mars.name = 'Mars';
mars.type = 'Planet';
mars.description = 'Mars is the fourth planet from the Sun and the second smallest planet in our solar system.';
mars.diameter = '6 779 km';
mars.distanceFromSun = '227.9 million km';
mars.position.x = marsDistance;
marsOrbit.add(mars);

//Orbita dla Marsa
const marsOrbitGeometry = new THREE.RingGeometry(marsDistance - 0, marsDistance + 0, 64);
const marsOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const marsOrbitLine = new THREE.LineLoop(marsOrbitGeometry, marsOrbitMaterial);
marsOrbitLine.rotation.x = Math.PI / 2; // Obrót orbity do pozycji Y
marsOrbit.add(marsOrbitLine);

// Jowisz
const jupiterOrbit = new THREE.Group();
solarSystem.add(jupiterOrbit);

const jupiterDistance = 30;
const jupiterGeometry = new THREE.SphereGeometry( 2, 64, 64);
const jupiterMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("images/jupitermap.jpg"),
 });
const jupiter = new THREE.Mesh( jupiterGeometry, jupiterMaterial );
jupiter.name = 'Jupiter';
jupiter.type = 'Planet';
jupiter.description = 'Jupiter is the largest planet in our solar system, and it is a gas giant with no solid surface.';
jupiter.diameter = '139 820 km';
jupiter.distanceFromSun = '778.5 million km';
jupiter.position.x = jupiterDistance;
jupiterOrbit.add(jupiter);

//Orbita dla Jowisza
const jupiterOrbitGeometry = new THREE.RingGeometry(jupiterDistance - 0, jupiterDistance + 0, 64);
const jupiterOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const jupiterOrbitLine = new THREE.LineLoop(jupiterOrbitGeometry, jupiterOrbitMaterial);
jupiterOrbitLine.rotation.x = Math.PI / 2; // Obrót orbity do pozycji Y
jupiterOrbit.add(jupiterOrbitLine);

// Saturn
const saturnOrbit = new THREE.Group();
solarSystem.add(saturnOrbit);

const saturnDistance = 35;
const saturnGeometry = new THREE.SphereGeometry(1.5, 64, 64);
const saturnMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/saturnmap.jpg"),
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.name = 'Saturn';
saturn.type = 'Planet';
saturn.description = 'Saturn is the sixth planet from the Sun and is known for its prominent ring system.';
saturn.diameter = '116 460 km';
saturn.distanceFromSun = '1.4 billion km';
saturn.position.x = saturnDistance;
saturnOrbit.add(saturn);

//Orbita dla Saturn
const saturnOrbitGeometry = new THREE.RingGeometry(saturnDistance - 0, saturnDistance + 0, 64);
const saturnOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const saturnOrbitLine = new THREE.LineLoop(saturnOrbitGeometry, saturnOrbitMaterial);
saturnOrbitLine.rotation.x = Math.PI / 2; // Obrót orbity do pozycji Y
saturnOrbit.add(saturnOrbitLine);

// Dodanie pierścieni dla Saturna
const saturnRingGeometry = new THREE.RingGeometry(1.9, 2.5, 64);
const saturnRingMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/saturnringcolor.jpg"),
    side: THREE.DoubleSide,
});
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRing.rotation.x = -0.5 *Math.PI; // Ustawienie pierścienia w płaszczyźnie xy
saturn.add(saturnRing);

// Uran
const uranusOrbit = new THREE.Group();
solarSystem.add(uranusOrbit);

const uranusDistance = 40;
const uranusGeometry = new THREE.SphereGeometry(1, 64, 64);
const uranusMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/uranusmap.jpg"),
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.name = 'Uranus';
uranus.type = 'Planet';
uranus.description = 'Uranus is the seventh planet from the Sun and is an ice giant, similar to Neptune.';
uranus.diameter = '50 724 km';
uranus.distanceFromSun = '2.9 billion km';
uranus.position.x = uranusDistance;
uranusOrbit.add(uranus);

//Orbita dla Uranu
const uranusOrbitGeometry = new THREE.RingGeometry(uranusDistance - 0, uranusDistance + 0, 64);
const uranusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const uranusOrbitLine = new THREE.LineLoop(uranusOrbitGeometry, uranusOrbitMaterial);
uranusOrbitLine.rotation.x = Math.PI / 2; // Obrót orbity do pozycji Y
uranusOrbit.add(uranusOrbitLine);

// Dodanie pierścieni dla Uranu
const uranusRingGeometry = new THREE.RingGeometry(1.5, 1.6, 34);
const uranusRingMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("images/uranusringcolour.jpg"),
    side: THREE.DoubleSide,
});
const uranusRing = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);
uranusRing.rotation.x = Math.PI / 3.5; // Ustawienie pierścienia w płaszczyźnie xy
uranus.add(uranusRing);

// Neptun
const neptuneOrbit = new THREE.Group();
solarSystem.add(neptuneOrbit);

const neptuneDistance = 45;
const neptuneGeometry = new THREE.SphereGeometry( 1.1, 64, 64);
const neptuneMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("images/neptunemap.jpg"),
 });
const neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );
neptune.name = 'Neptune';
neptune.type = 'Planet';
neptune.description = 'Neptune is the eighth and farthest-known planet from the Sun in our solar system.';
neptune.diameter = '49 244 km';
neptune.distanceFromSun = '4.5 billion km';
neptune.position.x = neptuneDistance;
neptuneOrbit.add(neptune);

//Orbita dla Neptun
const neptuneOrbitGeometry = new THREE.RingGeometry(neptuneDistance - 0, neptuneDistance + 0, 64);
const neptuneOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const neptuneOrbitLine = new THREE.LineLoop(neptuneOrbitGeometry, neptuneOrbitMaterial);
neptuneOrbitLine.rotation.x = Math.PI / 2; // Obrót orbity do pozycji Y
neptuneOrbit.add(neptuneOrbitLine);

//Gwiazdy
const stars = Star({numStars: 2000});
scene.add(stars);

//Ustawienie napisu do planet
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedPlanet = null;

const planetInfoDiv = document.createElement('div');
planetInfoDiv.style.position = 'absolute';
planetInfoDiv.style.top = '30px';
planetInfoDiv.style.left = '30px';
planetInfoDiv.style.color = '#fff';
planetInfoDiv.style.fontSize = '28px';
document.body.appendChild(planetInfoDiv);

function hidePlanetInfo() {
    selectedPlanet = null;
    planetInfoDiv.innerHTML = '';
}

function onMouseMove(event) {
    // Normalizacja pozycji myszy
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Ustawienie raycaster'a
    raycaster.setFromCamera(mouse, camera);

    // Sprawdzenie kolizji z planetami
    const intersects = raycaster.intersectObjects(solarSystem.children, true);

    // Wyświetlenie informacji o planecie
    if (intersects.length > 0) {
        const planet = intersects[0].object;

        
        showPlanetInfo(planet);
    } else {
        hidePlanetInfo();
    }
}

function showPlanetInfo(planet) {
    if (planet !== selectedPlanet) {
        selectedPlanet = planet;

        // Wyświetl informacje o planecie
        const planetInfo = createPlanetInfo(
            planet.name,
            planet.description || '',
            planet.diameter || '',
            planet.type,
            planet.distanceFromSun || ''
        );

        // Wyświetl informacje o planecie w divie
        planetInfoDiv.innerHTML = `
            <strong>${planetInfo.type === 'Star' ? 'Star' : 'Planet'}:</strong> ${planetInfo.name} <br>
            <strong>Description:</strong> ${planetInfo.description} <br>
            <strong>Diameter:</strong> ${planetInfo.diameter} <br>
            <strong>Distance from Sun:</strong> ${planetInfo.distanceFromSun}
        `;
    }
}


window.addEventListener('mousemove', onMouseMove, false);

function animate() {
    requestAnimationFrame( animate );

    // Obrót wokół osi Y dla każdej planety
    sun.rotation.y +=0.002;
    mercury.rotation.y += 0.001;
    venus.rotation.y += 0.0012;
    earth.rotation.y += 0.012;
    mars.rotation.y += 0.013;
    jupiter.rotation.y += 0.04;
    saturn.rotation.y += 0.01;
    uranus.rotation.x += 0.01;
    neptune.rotation.y += 0.01;

    // Obrót wokół osi Y dla orbit planet
    
    mercuryOrbit.rotation.y += 0.001;
    venusOrbit.rotation.y += 0.0015;
    earthOrbit.rotation.y += 0.0012;
    marsOrbit.rotation.y += 0.0019;
    jupiterOrbit.rotation.y += 0.0023;
    saturnOrbit.rotation.y += 0.0021;
    uranusOrbit.rotation.y += 0.0015;
    neptuneOrbit.rotation.y += 0.001;

    renderer.render( scene, camera);
}

animate();

function handleWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', handleWindowResize, false);
