import React from 'react';
import {Container as MuiContainer, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import Button from "../button";
import Section from "../section";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
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
            <Grid container spacing={1}>
                <Grid item sm={12} md={6}>
                    <Container>
                        <Stack spacing={1}>
                            <Typography variant={'h6'}>Catcoin with Mcdonald&apos;s, Elon Musk. What kind of sparks will the three produce?</Typography>
                            <Typography variant={"h3"} sx={{fontWeight: 'bold'}}>$CATFUN</Typography>
                            <Typography >ARE YOU READY TO DIE LAUGHING, BECAUSE WE GOING TO MCDONALD&apos;S, JOIN CATFUN COMMUNITY, HAVING FUN WHILE WE EAT BIGMAC MEAL</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://pancakeswap.finance/swap?inputCurrency=0xaff35436558e8ea27f6b4c728d042b22381bc038'} >PANCAKESWAP</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://www.dextools.io/app/bsc/pair-explorer/0xfe8d6d0381205e5adc559e4886014ce3a95ada6d'} >DEXTOOLS</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://thesphynx.co/launchpad/locker/launchpad/40/56'} >LP LOCKER</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://dessertswap.finance/audits/Cat-Fun-BSC-Audit-15829366.pdf'} >AUDIT</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://bscscan.com/token/0xaff35436558e8ea27f6b4c728d042b22381bc038'} >BSCSCAN</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://coinmarketcap.com/'} >CMC</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://www.coingecko.com/'} >CG</Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Container>
                </Grid>
                <Grid item sm={12} md={6} sx={{margin: 'auto'}}>
                    <Container>
                        {/*<Image alt={'section image'} src={SectionImage} width={'300em'} height={"250em"}*/}
                        {/*       />*/}
                    </Container>
                </Grid>
            </Grid>
        </Section>
    );
}

export default SectionButtons;
