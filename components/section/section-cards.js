import Section from "../section";
import {Stack, Typography as MuiTypography} from "@mui/material";
import roadmapImage from "../../assets/WHITEPAPER_Page_09.png";
import styled from "@emotion/styled";
import Image from "next/image";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
`

const ImageComp = styled(Image)`
  background-size: cover;
`

function SectionCards() {
    return (
        <Section>
            <Stack sx={{width: '100%'}}>
                <Typography variant={"h3"} fontWeight={600} align={'center'}>ROADMAP</Typography>
                <Typography align={'center'}>WHEN MOON? WHEN LAMBO? WHEN BIGMAC?</Typography>
                <ImageComp src={roadmapImage} alt={"image"}/>
            </Stack>
        </Section>
    );
}

export default SectionCards;
