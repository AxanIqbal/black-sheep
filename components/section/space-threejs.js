import React, {useRef} from 'react';
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import {useFrame, useLoader, useThree} from "@react-three/fiber";
import {SimplexNoise} from "three/examples/jsm/math/SimplexNoise";

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
    const mesh = useRef();
    textureSphereBg.anisotropy = 16;

    useFrame(() => {
        mesh.current.rotation.x += 0.002
        mesh.current.rotation.y += 0.002
        mesh.current.rotation.z += 0.002
    })

    return (
        <mesh ref={mesh}>
            <sphereBufferGeometry args={[100, 30, 30]}/>
            <meshBasicMaterial side={THREE.BackSide} map={textureSphereBg}/>
        </mesh>
    );
}

export function Nucleus() {
    const mesh = useRef()
    const textureNucleus = useLoader(THREE.TextureLoader, 'https://i.ibb.co/xSkNWbx/black-sheep.png');
    const noise = new SimplexNoise();
    // textureNucleus.anisotropy = 16;

    console.log(mesh)

    useFrame(() => {
        mesh.current.verticesNeedUpdate = true;
        mesh.current.normalsNeedUpdate = true;
        mesh.current.rotation.y += 0.002
    })

    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[30, 10]}/>
            <meshPhongMaterial map={textureNucleus}/>
        </mesh>
    )
}

function FixedStars() {
    const texture = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");

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
            <CreateStars texture={texture} size={15} total={20}/>
            <CreateStars texture={texture} size={5} total={5}/>
            <CreateStars texture={texture} size={7} total={5}/>
        </>
    )
}

function Stars() {
    const textureStar = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");
    const vertices = [];
    const starsGeometry = new THREE.BufferGeometry();
    const point = useRef()

    console.log(point, "the point")

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
        <points ref={point} args={[starsGeometry]}>
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
    useThree(({camera}) => {
        camera.position.set(0, 0, 230);
    })
    // const camera = <perspectiveCamera args={[55,window.innerWidth / window.innerHeight, 0.01, 1000]} position={[0,0,230]}/>
    return (
        <>
            <OrbitControls
                autoRotate={true}
                autoRotateSpeed={4}
                maxDistance={350}
                minDistance={150}
                enablePan={false}
                // camera={camera}
            />
            {/*<perspectiveCamera args={[55, window.innerWidth / window.innerHeight, 0.01, 1000]} position={[0,0,230]} />*/}
            <directionalLight args={["#fff", 2]} position={[0, 50, -20]}/>
            <ambientLight args={["#ffffff", 1]} position={[0, 20, 20]}/>
            <Nucleus/>
            <BackGround/>
            <Stars/>
            <FixedStars/>
        </>
    );
}

export default SpaceThreejs;
