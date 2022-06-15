import React from 'react';
import {Container as MuiContainer, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import Button from "../button";
import Section from "../section";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  font-family: 'Macondo', cursive;
`

const Container = styled(MuiContainer)`
  justify-content: center;
  align-items: center;
  margin: auto;
  display: flex;
`

function SectionButtons() {
    return (
        <Section>
            <Container>
                <Stack spacing={1}>
                    <Typography variant={'h6'} align={"center"}>Blacksheep represents the anomaly, blacksheep represents
                        YOU!</Typography>
                    <Typography variant={"h3"} sx={{fontWeight: 'bold'}} align={"center"}>BLACKSHEEP</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button variant={'outlined'}
                                    href={'https://pancakeswap.finance/swap?outputCurrency=0x0d3326f49e8ACf72942dC0873b3a522797557706'}>PANCAKESWAP</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant={'outlined'}
                                    href={'/whitepaper.pdf'}>WHITEPAPER</Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Section>
    );
}

export default SectionButtons;
