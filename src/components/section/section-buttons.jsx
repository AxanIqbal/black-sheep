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
        <Section>>
            <Container>
                <Stack spacing={1}>
                    <Typography variant={'h6'}>Blacksheep represents the anomaly, blacksheep represents
                        YOU!</Typography>
                    <Typography variant={"h3"} sx={{fontWeight: 'bold'}} align={"center"}>BLACKSHEEP</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button variant={'outlined'}
                                    href={'https://pancakeswap.finance/swap?inputCurrency=0xaff35436558e8ea27f6b4c728d042b22381bc038'}>PANCAKESWAP</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant={'outlined'}
                                    href={'/WHITEPAPER.pdf'}>WHITEPAPER</Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Section>
    );
}

export default SectionButtons;
