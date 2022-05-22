import Section from "../section";
import {Stack, styled, Typography as MuiTypography} from "@mui/material";
import Card from "../card";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
`

const MyStack = styled(Stack)`
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

function SectionCards() {
    return (
        <Section>
            <Stack sx={{width: '100%'}}>
                <Typography variant={"h2"} align={'center'}>FUNMAP</Typography>
                <Typography align={'center'}>WHEN MOON? WHEN LAMBO? WHEN BIGMAC?</Typography>
                <MyStack direction={'row'} py={5} spacing={1}>
                    <Card
                        title={<Typography>JOKE<br/>(Development)</Typography>}
                        select={false}
                        features={[
                            {title: "DEVELOPMENT OF PROJECT", color: "#231A09"},
                            {title: "WHITEPAPER LAUNCH", color: "#231A09",},
                            {title: "WEBSITE LAUNCH", color: "#231A09",},
                            {title: "PRIVATE SALE (50 BNB)", color: "#231A09",},
                            {title: "DEPLOY SMART CONTRACT ON BSC", color: "#231A09",},
                            {title: "KYC+AUDIT", color: "#231A09",},
                            {title: "PRESALE MARKETING (PROMOS)", color: "#231A09",},
                            {title: "PRESALE AMAs", color: "#231A09",},
                            {title: "BUILDING TELEGRAM COMMUNITY", color: "#231A09",},
                            {title: "SWEEPWIDGET FOR WHITELIST PRESALE", color: "#231A09",},
                            {title: "PRESALE ON SPHYNX (300 BNB HC)", color: "#231A09",},
                        ]}
                    />
                    <Card
                        title={<Typography>MEMES<br/>(Phase 1)</Typography>}
                        select={false}
                        features={[
                            {title: "LAUNCH ON PANCAKESWAP", color: "#231A09"},
                            {title: "CMC LISTING",},
                            {title: "POOCOIN ADS/COINSNIPER ADS",},
                            {title: "TWITTER CAMPAIGN",},
                            {title: "Influencers Marketing",},
                            {title: "Asian Marketing",},
                            {title: "2000 HOLDERS",},
                        ]}
                    />
                    <Card
                        title={<Typography>STANDUP COMEDY<br/>(Phase 2)</Typography>}
                        select={false}
                        features={[
                            {title: "CG Listing/Crypto.com Tracker",},
                            {title: "DEXTOOL TRENDING",},
                            {title: "MEME/GIF CONTESTS",},
                            {title: "LUNARCRUSH (SOCIAL RANKS)",},
                            {title: "BILLBOARD ADS",},
                            {title: "8000 HOLDERS",},
                        ]}
                    />
                    <Card
                        title={<Typography>COMMUNITY<br/>(Phase 3)</Typography>}
                        select={false}
                        features={[
                            {title: "Mid Tier CEX Listings",},
                            {title: "DEVELOPMENT OF GAMING BEGINS",},
                            {title: "YouTube Influencers",},
                            {title: "MEME/GIF CONTESTS",},
                            {title: "METAVERSE PROPERTY",},
                            {title: "PRESS RELEASES",},
                            {title: "REVAMP WEBSITE",},
                            {title: "15000 HOLDERS",},
                        ]}
                    />
                    <Card
                        title={<Typography>HOLD <br/> (Phase 4)</Typography>}
                        select={false}
                        features={[
                            {title: "CATFUN SWAP",},
                            {title: "SATOSHISTREETBETS PARTNERSHIP",},
                            {title: "CATFUN MERCHSTORE/CATFUN GAME LAUNCH",},
                            {title: "TIER 1 CEX LISTINGS",},
                            {title: "CATFUN ASIA ADVERTISEMENTS",},
                            {title: "40000 HOLDERS",},
                        ]}
                    />
                    {/*<Image src={Stage0} alt={"Stage0"} width={300} height={400}/>*/}
                    {/*<Image src={Stage1} alt={"Stage1"} width={300} height={450}/>*/}
                    {/*<Image src={Stage2} alt={"Stage2"} width={300} height={400}/>*/}
                    {/*<Image src={Stage3} alt={"Stage3"} width={300} height={400}/>*/}
                </MyStack>
            </Stack>
        </Section>
    );
}

export default SectionCards;
