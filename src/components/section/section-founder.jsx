import React from 'react';
import Section from "../section";
import styled from "@emotion/styled";
import Founder from "../../assets/founder.png";
import {Stack, Typography as MuiTypography} from "@mui/material";

const HeroImageStyled = styled.img`
  width: 60vw;

`
const Typography = styled(MuiTypography)`
  font-family: 'Macondo', cursive;
`

function SectionFounder() {
    return (
        <Section>
            <Stack width={"100%"} alignItems={"center"}>
                <Typography variant={"h3"} fontWeight={600} align={"center"} paddingY={8}>FOUNDER</Typography>
                <HeroImageStyled src={Founder} alt={"Founder image"}/>
            </Stack>
        </Section>
    );
}

export default SectionFounder;
