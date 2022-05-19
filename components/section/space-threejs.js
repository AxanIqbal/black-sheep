import React from 'react';
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import {useLoader} from "@react-three/fiber";

function randomPointSphere(radius) {
    let theta = 2 * Math.PI * Math.random();
    let phi = Math.acos(2 * Math.random() - 1);
    let dx = (radius * Math.sin(phi) * Math.cos(theta));
    let dy = (radius * Math.sin(phi) * Math.sin(theta));
    let dz = (radius * Math.cos(phi));
    return new THREE.Vector3(dx, dy, dz);
}

function BackGround() {
    const textureSphereBg = useLoader(THREE.TextureLoader, 'https://i.ibb.co/MSfFyjt/popro.jpg');
    textureSphereBg.anisotropy = 16;
    return (
        <mesh>
            <sphereBufferGeometry args={[150, 40, 40]}/>
            <meshBasicMaterial side={THREE.BackSide} map={textureSphereBg}/>
        </mesh>
    );
}

export function Nucleus() {
    const textureNucleus = useLoader(THREE.TextureLoader, 'https://i.ibb.co/xSkNWbx/black-sheep.png');
    textureNucleus.anisotropy = 16;

    return (
        <mesh>
            <icosahedronGeometry args={[30, 10]}/>
            <meshPhongMaterial map={textureNucleus}/>
        </mesh>
    )
}

function FixedStars() {
    const texture1 = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");
    const texture2 = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");
    const texture4 = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");

    function CreateStars({texture, size, total}) {
        let pointGeometry = new THREE.BufferGeometry();

        let vertices = []
        for (let i = 0; i < total; i++) {
            let radius = THREE.MathUtils.randInt(149, 70);
            let particles = randomPointSphere(radius);
            vertices.push(particles.x, particles.y, particles.z)
            // pointGeometry.vertices.push(particles);
        }
        pointGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );
        return (
            <points args={[pointGeometry]}>
                <pointsMaterial size={size} map={texture} blending={THREE.AdditiveBlending}/>
            </points>
        );
    }

    return (
        <>
            <CreateStars texture={texture1} size={15} total={20}/>
            <CreateStars texture={texture2} size={5} total={5}/>
            <CreateStars texture={texture4} size={7} total={5}/>
        </>
    )
}

function Stars() {
    const textureStar = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");
    const vertices = [];
    const starsGeometry = new THREE.BufferGeometry();

    for (let i = 0; i < 50; i++) {
        let particleStar = randomPointSphere(150);
        particleStar.velocity = THREE.MathUtils.randInt(50, 200);
        particleStar.startX = particleStar.x;
        particleStar.startY = particleStar.y;
        particleStar.startZ = particleStar.z;

        vertices.push(particleStar.x, particleStar.y, particleStar.z)
    }

    starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
    );


    return (
        <points args={[starsGeometry]}>
            <pointsMaterial
                side={5}
                color={"#ffffff"}
                transparent
                opacity={0.8}
                map={textureStar}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function SpaceThreejs() {
    return (
        <>
            <OrbitControls
                autoRotate={true}
                autoRotateSpeed={4}
                maxDistance={350}
                minDistance={150}
                enablePan={false}
            />
            {/*<perspectiveCamera args={[55, window.innerWidth / window.innerHeight, 0.01, 1000]} position={[0,0,230]} />*/}
            <directionalLight args={["#fff", 2]} position={[0, 50, 20]}/>
            <ambientLight args={["#ffffff", 1]} position={[0, 20, 20]}/>
            <Nucleus/>
            <BackGround/>
            <Stars/>
            <FixedStars/>
        </>
    );
}

export default SpaceThreejs;
