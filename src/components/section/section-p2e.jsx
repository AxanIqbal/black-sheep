import {Card, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import Section from "../section";

const Typography = styled(MuiTypography)`
  font-family: 'Macondo', cursive;
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

                    </Grid>
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
                </Grid>
            </Stack>
        </Section>
    );
}

export default SectionP2e;
