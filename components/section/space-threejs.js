import React from 'react';
import {OrbitControls, Stars} from "@react-three/drei";
import * as THREE from "three";
import {useLoader} from "@react-three/fiber";


export function ThreeInit() {
    // const {setDefaultCamera } = useThree()
    //
    // setDefaultCamera()

    // const scene = new THREE.Scene();
    const textureSphereBg = useLoader(THREE.TextureLoader, 'https://i.ibb.co/MSfFyjt/popro.jpg');
    const textureNucleus = useLoader(THREE.TextureLoader, 'https://i.ibb.co/xSkNWbx/black-sheep.png');
    // const textureStar = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");
    // const texture1 = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");
    // const texture2 = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");
    // const texture4 = useLoader(THREE.TextureLoader, "https://i.ibb.co/xSkNWbx/black-sheep.png");

    /*  Nucleus  */
    textureNucleus.anisotropy = 16;
    // let icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
    // let lambertMaterial = new THREE.MeshPhongMaterial({map: textureNucleus});
    // const nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);

    /*    Sphere  Background   */
    textureSphereBg.anisotropy = 16;
    // let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
    // let materialSphereBg = new THREE.MeshBasicMaterial({
    //     side: THREE.BackSide,
    //     map: textureSphereBg,
    // });
    // const sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
//     scene.add(sphereBg);

    return (
        <>
            <ambientLight intensity={1}/>
            <directionalLight/>
            <mesh>
                <icosahedronGeometry args={[30, 10]}/>
                <meshPhongMaterial map={textureNucleus}/>
            </mesh>
            <mesh>
                <sphereBufferGeometry args={[150, 40, 40]}/>
                <meshBasicMaterial side={THREE.BackSide} map={textureSphereBg}/>
            </mesh>
        </>
    )
}

function SpaceThreejs() {
    return (
        <>
            <OrbitControls
                autoRotate={true}
            />
            <ThreeInit/>
            <Stars radius={50} fade speed={2}/>
        </>
    );
}

export default SpaceThreejs;
