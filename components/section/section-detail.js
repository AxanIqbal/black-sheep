import Section from "../section";
import {Container, Grid, styled, Typography as MuiTypography} from "@mui/material";
// import SectionImage from "../assets/TRANSPARANT 2.png";
import React from "react";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  padding-bottom: 0.5em;
`

function SectionDetail() {
    return (
        <Section>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Container>
                        <Typography variant={"h3"}>WHY CATFUN, WHY MOONSHOT ?</Typography>
                        <Typography variant={"subtitle1"}>
                            Most projects are MOONSHOT but exaggerate as ECOSYSTEM. Meme projects are successful as
                            moonshot with heavy marketing.
                            <br/>
                            <br/>
                            We strongly believe that with the current hype of catcoin with Mcdonald&apos;s, Elon Musk.
                            This will certainly create extra hype for social algorithms.
                            <br/>
                            <br/>
                            However as the community and project grows. We have plans to develop a unique ecosystem that
                            will benefit many &quot;Cat/Shiba/Floki&quot; related projects on the platform where their
                            holders will be able to benefit from $CATFUN Ecosystem.
                        </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} sx={{margin: 'auto'}} textAlign={'center'}>
                    {/*<MyContainer>*/}
                    {/*<Image alt={'section image'} src={SectionImage} width={'450em'} height={"400em"}*/}
                    {/*/>*/}
                    {/*</MyContainer>*/}
                </Grid>
            </Grid>
        </Section>
    );
}

export default SectionDetail;
