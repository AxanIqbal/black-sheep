import React from 'react';
import Section from "../section";
import {Box, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import {Pie, ResponsiveContainer, PieChart, Tooltip, Legend} from "recharts";

const MySection = styled(Section)`
  background: linear-gradient(141deg, rgba(47, 79, 79, 0.8) 10%, rgba(54, 21, 14, 0.8) 50%);
`

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  text-align: center;
  font-family: 'Macondo', cursive;

  text-shadow: rgb(0, 0, 0) 3px 5px 2px;
`

const CustomTooltip = ({ active, payload }) => {
    console.log(active,payload)
    if (active && payload && payload.length) {
        return (
            <Box>
                <Typography>{`${payload[0].name}  ${payload[0].value}%`}</Typography>
            </Box>
        );
    }

    return null;
};

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
            "fill": colors[0]
        },
        {
            "title": "STAKING",
            "value": 10,
            "fill": colors[1]
        },
        {
            "title": "P2E",
            "value": 10,
            "fill": colors[2]
        },
        {
            "title": "PRESALE/LAUNCH",
            "value": 70,
            "fill": colors[3]
        },
    ];
    return (
        <Section>
            <Stack width={"100%"}>
                <Typography variant={"h3"} fontWeight={600} paddingY={8} align={'center'}>TOKENOMICS</Typography>
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
                        {/*<PieChart*/}
                        {/*    data={data01}*/}
                        {/*    label={({dataEntry})=> `${dataEntry.title} ${dataEntry.value}%`}*/}
                        {/*    animate*/}
                        {/*    labelStyle={(index) => ({*/}
                        {/*        fill: "whitesmoke",*/}
                        {/*        fontSize: '3.4px',*/}
                        {/*    })}*/}
                        {/*    lineWidth={20}*/}
                        {/*    rounded*/}
                        {/*    paddingAngle={15}*/}
                        {/*    labelPosition={79}*/}
                        {/*    startAngle={120}*/}
                        {/*/>*/}
                        {/*<PieChart*/}
                        {/*    data={data01}*/}
                        {/*    startAngle={280}*/}
                        {/*    // label={({ dataEntry }) => `${dataEntry.title}\n${dataEntry.value}%`}*/}
                        {/*    label={({x, y, dx, dy, dataEntry, textAnchor, dataIndex}) => {*/}
                        {/*        const transform = [*/}
                        {/*            "rotate(-60deg) translate(-51%, 40%)",*/}
                        {/*            "rotate(-27deg) translate(-22%, 29%)",*/}
                        {/*            "rotate(4deg) translate(9%, -5%)",*/}
                        {/*            null,*/}
                        {/*        ]*/}
                        {/*        return <text*/}
                        {/*            x={x}*/}
                        {/*            y={y}*/}
                        {/*            dx={dx}*/}
                        {/*            dy={dy}*/}
                        {/*            dominantBaseline={"central"}*/}
                        {/*            textAnchor={textAnchor}*/}
                        {/*            style={{*/}
                        {/*                fill: "whitesmoke",*/}
                        {/*                fontSize: '4px',*/}
                        {/*                transform: transform[dataIndex]*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            {dataEntry.title + ' ' + Math.round(dataEntry.percentage) + '%'}*/}
                        {/*        </text>*/}
                        {/*    }}*/}
                        {/*    labelPosition={50}*/}
                        {/*/>*/}
                        <ResponsiveContainer height={"100%"} width={"100%"} minHeight={600} >
                            <PieChart>

                                <Pie
                                    data={data01}
                                    dataKey="value"
                                    nameKey="title"
                                    legendType="diamond"
                                    style={{
                                        fontSize: 20,
                                    }}
                                    label={props => `${props.value}%`}
                                />
                                <Tooltip content={<CustomTooltip/>}/>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Stack>
        </Section>
    );
}

export default SectionTokenomics;
