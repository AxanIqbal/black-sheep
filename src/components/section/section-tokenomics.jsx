import React from 'react';
import Section from "../section";
import {Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import {PieChart} from "react-minimal-pie-chart";

const MySection = styled(Section)`
  background: linear-gradient(141deg, rgba(47, 79, 79, 0.8) 10%, rgba(54, 21, 14, 0.8) 50%);
`

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  text-align: center;
  font-family: 'Macondo', cursive;

  text-shadow: rgb(0, 0, 0) 3px 5px 2px;
`

function SectionTokenomics() {
    const colors = [
        "rgba(47, 79, 79, 0.7)",
        "rgba(245, 245, 245, 0.7)",
        "rgba(119,49,231,0.7)",
        "rgba(4,191,205,0.7)"
    ]
    const data01 = [
        {
            "title": "OPERATIONS (CEX)",
            "value": 10,
            "color": colors[0]
        },
        {
            "title": "STAKING",
            "value": 10,
            "color": colors[1]
        },
        {
            "title": "P2E",
            "value": 10,
            "color": colors[2]
        },
        {
            "title": "PRESALE/LAUNCH",
            "value": 70,
            "color": colors[3]
        },
    ];
    return (
        <Section>
            <Stack width={"100%"}>
                <Typography variant={"h3"} paddingY={8} textAlign={"center"} align={"center"}>TOKENOMICS</Typography>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Stack width={"100%"} height={"100%"} justifyContent={"center"}>
                            <Typography variant={"body1"} paddingY={1}>
                                $666 is a BEP20 token which started on the
                                BINANCE SMART CHAIN blockchain MAY 26, 2022.
                                The max supply is 666 trillion and one of its key
                                functionalities is its decentralized finance protocol.</Typography>
                            <Typography variant={"body1"} paddingY={1}>TOTAL SUPPLY:<br/>
                                666 666 666 666 666</Typography>
                            <Typography variant={"body1"} paddingY={1}>CIRCULATING SUPPLY:<br/>
                                666 666 666 666 666</Typography>
                            <Typography variant={"body1"} paddingY={1}>BUY TAX: 0%</Typography>
                            <Typography variant={"body1"} paddingY={1}>SELL TAX: 6% to LP & 6% to
                                MARKETING/DEVELOPMENT</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <PieChart
                            data={data01}
                            startAngle={280}
                            lineWidth={30}
                            paddingAngle={5}
                            label={({ dataEntry }) => `${dataEntry.title}\n${dataEntry.value}%`}
                            labelStyle={(index) => ({
                                fill: "whitesmoke",
                                fontSize: '4px',
                            })}
                            labelPosition={69}
                        />
                            {/*<ResponsiveContainer height={"100%"} width={"80%"} minHeight={200} minWidth={200}>*/}
                        {/*    <PieChart>*/}
                        {/*        <Pie data={data01} dataKey={"value"} innerRadius={"40%"} outerRadius={"70%"} nameKey={"name"} label={props => `${props.name} ${props.value}%`}>*/}
                        {/*            {data01.map((value, index) => <Cell key={index} fill={colors[index]}/>)}*/}
                        {/*        </Pie>*/}
                        {/*    </PieChart>*/}
                        {/*</ResponsiveContainer>*/}
                    </Grid>
                </Grid>
            </Stack>
        </Section>
    );
}

export default SectionTokenomics;
