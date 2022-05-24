import Section from "../section";
import {Container, styled, Typography as MuiTypography} from "@mui/material";
// import SectionImage from "../assets/TRANSPARANT 2.png";
import React from "react";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  text-align: center;
  font-family: 'Macondo', cursive;
`

function SectionWhyBlackSheep() {
    return (
        <Section>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography variant={"h2"} paddingY={8} >WHY BLACKSHEEP</Typography>
                <Typography variant={"h6"}>
                    Everyone secretly wishes they'd stand out and do things "their way".<br/>
                    Everyone desires to be a cut above the rest but most aren't willing to be a black
                    sheep.
                    <br/>
                    <br/>
                    Becoming one requires you to go your way, and risk being alienated.<br/>
                    But are also envied by the majority for your uncapped freedom and potential.
                </Typography>
            </Container>
        </Section>
    );
}

export default SectionWhyBlackSheep;
