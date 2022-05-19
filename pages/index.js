import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber'
import SpaceThreejs from "../components/section/space-threejs";
import HeroSection from "../components/section/hero-section";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <Canvas id={'canvas-space'} linear flat>
                <Suspense fallback={null}>
                    <SpaceThreejs/>
                </Suspense>
            </Canvas>
        </>
    )
}
