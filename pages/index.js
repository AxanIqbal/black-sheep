import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber'
import SpaceThreejs from "../components/section/space-threejs";
import Button from "../components/button";
import {Box} from "@mui/material";
import HeroSection from "../components/section/hero-section";

export default function Home() {
    const [door, setDoor] = React.useState(false);
    const openDoor = React.useCallback(
        () => {
            setDoor(true);
        },
        [],
    );

    if (door) {
        return (<>
            <HeroSection/>
        </>);
    }

    return (
        <>
            <Box style={{position: "relative"}}>
                <Canvas id={'canvas-space'} >
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
                        bottom: "5em",
                    }}>
                    Open the Door
                </Button>
            </Box>
        </>
    )
}
