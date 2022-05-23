import React from 'react';
import {Container as MuiContainer, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import Button from "../button";
import Section from "../section";
import {Pie, PieChart, ResponsiveContainer} from "recharts";

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
    const data01 = [
        {
            "name": "PRIVATE",
            "value": 10
        },
        {
            "name": "TEAM",
            "value": 3
        },
        {
            "name": "P2E",
            "value": 2
        },
        {
            "name": "FAIRLAUNCH",
            "value": 50
        },
        {
            "name": "LAUNCH",
            "value": 35
        },
    ];
    return (
        <Section>
            <Grid container spacing={1}>
                <Grid item sm={12} md={6}>
                    <Container>
                        <Stack spacing={1}>
                            <Typography variant={'h6'}>BLACKSHEEP is ownerless, fully decentralized, and supported by
                                its community of enthusiasts.</Typography>
                            <Typography variant={"h3"} sx={{fontWeight: 'bold'}}>$BLACKSHEEP</Typography>
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
                </Grid>
                <Grid item sm={12} md={6} sx={{margin: 'auto', width: "100%"}}>
                    <ResponsiveContainer height={200} width={"100%"}>
                        <PieChart>
                            <Pie data={data01} dataKey={"value"} nameKey={"name"} innerRadius={"60%"} outerRadius={"100%"} cx="50%" cy="50%" label={props => `${props.name} ${props.value}%`} />
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </Section>
    );
}

export default SectionButtons;
