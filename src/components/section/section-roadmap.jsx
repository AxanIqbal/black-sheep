import Section from "../section";
import {Stack, Typography as MuiTypography} from "@mui/material";
import styled from "@emotion/styled";
import {
    Timeline,
    TimelineConnector as MuiTimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {map, keys} from 'lodash'

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  font-family: 'Macondo', cursive;
`

const TimelineConnector = styled(MuiTimelineConnector)`
  background-image: linear-gradient(to right,#04bfcd , #7731e7 );
`

const roadMapData = {
    development: [
        "Whitepaper 2.0",
        "Website 2.0",
        "Roadmap 2.0",
        "Migration",
        "Presale Marketing",
        "WL presale on Pinksale",
    ],
    growth: [
        "Miner/Staking Deploy",
        "Shill2Earn Teaser Release",
        "3000 Holders",
        "Listings",
    ],
    expansion: [
        "CEX LISTINGS",
        "NFT PARTNERSHIPS",
        "20000 HOLDERS",
    ],
    utilities: [
        "Shill2Earn v1 App Release (IOS/ANDROID)",
        "7000 Holders",
        "NFTs",
    ]
}

const roadMapDataHead = keys(roadMapData)

function SectionRoadmap() {
    return (
        <Section>
            <Stack sx={{width: '100%'}}>
                <Typography variant={"h3"} fontWeight={600} paddingY={8} align={'center'}>ROADMAP</Typography>
                <Timeline position={"alternate"}>
                    {map(roadMapData, (value,key)=>(
                        <TimelineItem>
                            <TimelineOppositeContent
                                fontFamily={"'Macondo', cursive"}
                                sx={{ m: 'auto 0' }}
                            >
                                <Typography
                                    variant={"h6"}
                                    sx={{fontWeight: "bold", fontSize: {xs: 16, sm: 20} }}
                                    textTransform={"uppercase"}>
                                    {key}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot sx={{
                                    backgroundColor: "#04bfcd"
                                }}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                                fontFamily={"'Macondo', cursive"}
                                textTransform={"uppercase"}
                            >
                                {value.map(e=><span>{roadMapDataHead.indexOf(key) % 2 === 0 && "- "}{e}{roadMapDataHead.indexOf(key) % 2 === 1 && " -"}<br/></span>)}
                            </TimelineContent>
                        </TimelineItem>
                        ))}
                </Timeline>
            </Stack>
        </Section>
    );
}

export default SectionRoadmap;
