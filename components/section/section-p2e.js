import {Card, Grid, Stack, styled, Typography} from "@mui/material";
import Section from "../section";
import Button from "../button";


const MyButton = styled(Button)`
  width: 20em;
  margin: 3em auto;
`

const MyCard = styled(Card)`
  background-color: darkslategrey;
  //background-image: linear-gradient(to bottom right, #7731E7, #04BFCD);
  width: 20em;
  border-radius: 10px;


  & > div {
    text-align: center;
  }

  & > div > h5 {
    color: rgba(130, 106, 36, 0.7);
  }

  & > div > p {
    color: whitesmoke;
  }
`

function SectionP2e() {
    return (
        <Section>
            <Stack sx={{width: "100%"}} alignContent={"center"}>
                <Typography variant={"h3"} fontWeight={600} align={"center"} paddingY={8}>P2E</Typography>
                <Grid container paddingX={7} spacing={2}>
                    <Grid item sm={12} md={6}>
                        <Typography variant={"h5"} fontWeight={600} paddingY={2}>METAVERSE</Typography>
                        <Typography variant={"body1"}>
                            The metaverse is a hypothetical iteration of
                            the Internet as a single, universal and
                            immersive virtual world that is facilitated
                            by the use of virtual reality and augmented
                            reality headsets. Our P2E game will be
                            hypothetically merge with mystic concept.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography variant={"h5"} fontWeight={600} paddingY={2}>BLACKSHEEP CLUB</Typography>
                        <Typography variant={"body1"}>
                            The metaverse is a hypothetical iteration of
                            BlackSheep private club is a place to meet
                            and mingle with people of similar interests.
                            The club is private because not just anyone
                            can join or enter. You must be a holder.
                            That means you will probably pay
                            membership fees by holding NFTs.
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Section>
    );
}

export default SectionP2e;
