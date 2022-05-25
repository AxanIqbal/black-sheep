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

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  font-family: 'Macondo', cursive;
`

const TimelineConnector = styled(MuiTimelineConnector)`
  background-image: linear-gradient(to right,#04bfcd , #7731e7 );
`

const Image = styled.img`
  background-size: cover;
  width: 100%;
`

function SectionRoadmap() {
    return (
        <Section>
            <Stack sx={{width: '100%'}}>
                <Typography variant={"h3"} fontWeight={600} align={'center'}>ROADMAP</Typography>
                <Timeline position={"alternate"}>
                    <TimelineItem>
                        <TimelineOppositeContent
                            fontFamily={"'Macondo', cursive"}
                            sx={{ m: 'auto 0' }}
                        >
                            <Typography variant={"h6"} sx={{fontWeight: "bold", fontSize: {xs: 16, sm: 20} }} textTransform={"uppercase"}>Development</Typography>
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
                            - Whitepaper<br/>
                            - Website<br/>
                            - Roadmap<br/>
                            - Private Sale<br/>
                            - Fair launch Marketing<br/>
                            - Audit<br/>
                            - FAIR LAUNCH ON PINKSALE<br/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0', fontWeight: "bold" }}
                            variant={"h6"}
                            fontFamily={"'Macondo', cursive"}
                            textTransform={"uppercase"}
                        >
                            Launch
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{
                                backgroundColor: "#04bfcd"
                            }}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            fontFamily={"'Macondo', cursive"}
                            textTransform={"uppercase"}
                        >
                            1000 HOLDERS -<br/>
                            LAUNCH MARKETING -<br/>
                            LISTINGS -<br/>
                            2000 TELEGRAM MEMBERS -<br/>
                            3000 HOLDERS -<br/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0', fontWeight: "bold" }}
                            variant={"h6"}
                            fontFamily={"'Macondo', cursive"}
                            textTransform={"uppercase"}
                        >
                            GROWTH
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{
                                backgroundColor: "#04bfcd"
                            }}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            fontFamily={"'Macondo', cursive"}
                        >
                            - NFT GALLERIA (PoC)<br/>
                            - P2E (PoC)<br/>
                            - 7000 HOLDERS<br/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0', fontWeight: "bold" }}
                            variant={"h6"}
                            fontFamily={"'Macondo', cursive"}
                            textTransform={"uppercase"}
                        >
                            EXPANSION
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{
                                backgroundColor: "#04bfcd"
                            }}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            fontFamily={"'Macondo', cursive"}
                            textTransform={"uppercase"}
                        >
                            CEX LISTINGS -<br/>
                            NFT PARTNERSHIPS -<br/>
                            20000 HOLDERS -<br/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0', fontWeight: "bold" }}
                            variant={"h6"}
                            fontFamily={"'Macondo', cursive"}
                            textTransform={"uppercase"}
                        >
                            UTILITIES
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{
                                backgroundColor: "#04bfcd"
                            }}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            fontFamily={"'Macondo', cursive"}
                            textTransform={"uppercase"}
                        >
                            - NFT GALLERIA<br/>
                            - P2E<br/>
                            - 10000 HOLDERS<br/>
                            - RENOUNCE OWNERSHIP<br/>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Stack>
        </Section>
    );
}

export default SectionRoadmap;
