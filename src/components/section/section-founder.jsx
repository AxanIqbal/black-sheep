import React from 'react';
import Section from "../section";
import styled from "@emotion/styled";
import Founder from "../../assets/founder.png";
import {Container as MuiContainer, Stack, Typography as MuiTypography} from "@mui/material";

const HeroImageStyled = styled.img`
  width: 30vw;

  @media (max-width: 700px) {
    width: 60vw;
  }
`

const Typography = styled(MuiTypography)`
  font-family: 'Macondo', cursive;
`

const Container = styled(MuiContainer)`
  display: flex;
  background-image: linear-gradient(to right, #7731E7, #04BFCD);
  border-radius: 200px;
  margin: auto;
  width: auto;
`

function SectionFounder() {
    return (
        <Section>
            <Stack width={"100%"} alignItems={"center"}>
                <Typography variant={"h3"} fontWeight={600} align={"center"} paddingY={8}>FOUNDER</Typography>
                <HeroImageStyled src={Founder} alt={"Founder image"}/>
                {/*<Container>*/}
                {/*    <Typography variant={"h4"} padding={3}>Black Sheep Family</Typography>*/}
                {/*</Container>*/}
            </Stack>
        </Section>
    );
}

export default SectionFounder;
