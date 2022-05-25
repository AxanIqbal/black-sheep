import React from 'react';
import Section from "../section";
import {Container, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import {Cell, Pie, PieChart, ResponsiveContainer} from "recharts";

const MySection = styled(Section)`
  background: linear-gradient(141deg, rgba(47, 79, 79, 0.8) 10%, rgba(54, 21, 14, 0.8) 50%);
`

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  text-align: center;
  font-family: 'Macondo', cursive;

  text-shadow: rgb(0, 0, 0) 3px 5px 2px;
  
  @media (max-width: 600px) {
    background: rgba(0, 0, 0, 0.25);
  }

`

function SectionTokenomics() {
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
    const colors = [
        "rgba(47, 79, 79, 0.7)",
        "rgba(54, 21, 14, 0.7)",
        "rgba(245, 245, 245, 0.7)",
        "rgba(119,49,231,0.7)",
        "rgba(4,191,205,0.7)"
    ]
    return (
        <Section>
            <Stack width={"100%"}>
            <Typography variant={"h3"} paddingY={8} textAlign={"center"} align={"center"}>TOKENOMICS</Typography>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Stack >
                        <Typography variant={"body1"} paddingY={1}>$666 is a BEP20 token which started on the
                            BINANCE SMART CHAIN blockchain MAY 26, 2021.
                            The max supply is 666 trillion and one of its key
                            functionalities is its decentralized finance protocol.</Typography>
                        <Typography variant={"body1"} paddingY={1}>TOTAL SUPPLY:<br/>
                            666 666 666 666 666</Typography>
                        <Typography variant={"body1"} paddingY={1}>CIRCULATING SUPPLY:<br/>
                            666 666 666 666 666</Typography>
                        <Typography variant={"body1"} paddingY={1}>BUY TAX: 0%</Typography>
                        <Typography variant={"body1"} paddingY={1}>SELL TAX: 6%</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ResponsiveContainer height={"100%"} width={"100%"}>
                        <PieChart height={200} width={200}>
                            <Pie data={data01} dataKey={"value"} nameKey={"name"} innerRadius={"50%"} outerRadius={"80%"} cx="50%" cy="50%" label={props => `${props.name} ${props.value}%`}>
                                {data01.map((value, index) => <Cell key={index} fill={colors[index]}/>)}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
            </Stack>
        </Section>
    );
}

export default SectionTokenomics;
