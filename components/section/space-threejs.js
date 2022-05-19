import React from 'react';
import {Environment, OrbitControls, Stars, useTexture} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {CubeCamera, CubeTextureLoader, LinearMipmapLinearFilter, RGBFormat, WebGLCubeRenderTarget} from "three";

function SkyBox() {
    const {scene} = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    // Set the scene background property to the resulting texture.
    const texture = loader.load([
        "/bg3-je3ddz.jpg",
        "/bg3-je3ddz.jpg",
        "/bg3-je3ddz.jpg",
        "/bg3-je3ddz.jpg",
        "/bg3-je3ddz.jpg",
        "/bg3-je3ddz.jpg",
    ]);
    console.log(texture, "the texture")
    scene.background = texture
    return null;
}

const Background = () => {

    const {gl} = useThree();

    const texture = useTexture('/bg3-je3ddz.jpg')
    const formatted = new WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
    return (
        <primitive attach="background" object={formatted.texture}/>
    )
}

// Geometry
function Sphere() {
    const {scene, gl} = useThree();
    // The cubeRenderTarget is used to generate a texture for the reflective sphere.
    // It must be updated on each frame in order to track camera movement and other changes.
    const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
        format: RGBFormat,
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter
    });
    const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
    cubeCamera.position.set(0, 0, 0);
    scene.add(cubeCamera);

    // Update the cubeCamera with current renderer and scene.
    useFrame(() => cubeCamera.update(gl, scene));

    return (
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
            <directionalLight intensity={0.5}/>
            <sphereGeometry attach="geometry" args={[2, 32, 32]}/>
            <meshBasicMaterial
                attach="material"
                envMap={cubeCamera.renderTarget.texture}
                color="white"
                roughness={0.1}
                metalness={1}
            />
        </mesh>
    );
}

function SpaceThreejs(props) {
    return (
        <>
            <OrbitControls
                autoRotate={true}
                autoRotateSpeed={1}
                enableZoom={false}
            />
            <Sphere/>
            <Stars count={200} radius={20} fade speed={2}/>
            {/*<Environment background>*/}
            {/*    <mesh >*/}
            {/*        /!*<sphereGeometry args={[1, 64, 64]} />*!/*/}
            {/*        <Background/>*/}
            {/*    </mesh>*/}
            {/*</Environment>*/}
            {/*<SkyBox/>*/}
            {/*<Image url={"/black sheep.png"}/>*/}
            <Background/>
        </>
    );
}

export default SpaceThreejs;
