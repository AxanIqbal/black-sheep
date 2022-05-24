import React from 'react';
import Section from "../section";
import {Container, Grid, styled, Typography as MuiTypography} from "@mui/material";
import GalleriaImage from "../../assets/galleria.png"
const Typography = styled(MuiTypography)`
  font-family: 'Macondo', cursive;
`

const GalleriaImg = styled('img')`
  filter: blur(0.5px) drop-shadow(10px 10px 14px #000000);
  width: 80%;
`

function SectionNftGalleria() {
    return (
        <Section>
            <Container>
                <Typography variant={"h3"} fontWeight={600} align={"center"} paddingY={8}>NFT Galleria</Typography>
                <Grid container paddingX={7} spacing={2}>
                    <Grid item sm={12} md={6} alignItems={"center"} margin={"auto"}>
                        <GalleriaImg src={GalleriaImage} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography variant={"h5"} fontWeight={600} paddingY={2}>NFTS IN 360</Typography>
                        <Typography variant={"body1"}>
                            BLACKSHEEP NFTS BELONG IN THE METAVERSE AS WEB3 PROPERTY,
                            ENTER THE REALM OF GALLERIA, VISIT DIFFERENT LANDS AND
                            PURCHASE THE NFTS.
                        </Typography>
                        <Typography variant={"h5"} fontWeight={600} paddingY={2}>666 EXCLUSIVE NFTS IN 360 COLLECTIONS</Typography>
                        <Typography variant={"body1"}>
                            666 REPRESENTS THE NEW WORLD ORDER, WHERE YOU ARE JUST A
                            GRAIN IN THE DESERT.<br/>
                            666 WILL BE AVAILABLE ON OPENSEA AND WILL GIVE YOU ACCESS
                            TO PRIVATE SECRET CLUB.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}

export default SectionNftGalleria;
