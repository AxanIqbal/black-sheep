import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber'
import SpaceThreejs from "../components/section/space-threejs";
import Button from "../components/button";
import {Box} from "@mui/material";
import HeroSection from "../components/section/hero-section";
import SectionButtons from "../components/section/section-buttons";
import SectionTokenomics from "../components/section/section-tokenomics";
import SectionWhyBlackSheep from "../components/section/section-why-black-sheep";
import SectionRoadmap from "../components/section/section-roadmap";
import SectionP2e from "../components/section/section-p2e";
import Layout from "../components/layout";
import "./globals.css"
import './index.css'
import SectionNftGalleria from "../components/section/section-nft-galleria";
import SectionFounder from "../components/section/section-founder";

export default function Home() {
    const [door, setDoor] = React.useState(false);
    const openDoor = React.useCallback(
        () => {
            setDoor(true);
        },
        [],
    );

    if (door) {
        return (
            <Layout>
                <HeroSection/>
                <SectionButtons/>
                <SectionWhyBlackSheep/>
                <SectionTokenomics/>
                <SectionP2e/>
                <SectionNftGalleria/>
                <SectionRoadmap/>
                <SectionFounder/>
            </Layout>
        );
    }

    return (
        <>
            <Box style={{position: "relative"}}>
                <Canvas id={'canvas-space'}>
                    <Suspense fallback={null}>
                        <SpaceThreejs/>
                    </Suspense>

                </Canvas>
                <Button
                    variant={"contained"}
                    backcolor={"darkslategrey"}
                    onClick={openDoor}
                    sx={{
                        width: "18em",
                        position: "absolute",
                        left: "50%",
                        marginLeft: "-9em",
                        bottom: "7em",
                    }}>
                    Open the Door
                </Button>
            </Box>
        </>
    )
}
