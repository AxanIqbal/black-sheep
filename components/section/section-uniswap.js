import {Card, CardContent, Stack, styled, Typography} from "@mui/material";
import Section from "../section";
import Button from "../button";

const MySection = styled(Section)`
  background: linear-gradient(141deg, rgba(47, 79, 79, 0.8) 10%, rgba(54, 21, 14, 0.8) 50%);
`

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

function SectionUniswap() {
    return (
        <MySection>
            <Stack sx={{width: "100%"}}>
                <MyButton style={{width: "22em"}}>BUY ON PANCAKESWAP</MyButton>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-evenly"
                       alignItems="center" sx={{width: "100%"}} spacing={1}>
                    <MyCard elevation={5}>
                        <CardContent>
                            <Typography variant={"h5"}>Anti-Whale</Typography>
                            <Typography>Wallets are limited to 1% of the total available supply and still encourage buying as we attain larger market caps</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard elevation={5}>
                        <CardContent>
                            <Typography variant={"h5"}>Auto-Deflationary</Typography>
                            <Typography>$CATFUN is an auto-deflationary token that reduces the supply with every buy and sell transaction. This increases value by decreasing supply over time.</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard elevation={5}>
                        <CardContent>
                            <Typography variant={"h5"}>Anti-Botting</Typography>
                            <Typography>Bots are certain to get REKT. Do not buy any contracts prior to official announcements in Telegram</Typography>
                        </CardContent>
                    </MyCard>
                </Stack>
                <MyButton style={{width: "22em"}}>BUY ON PANCAKESWAP</MyButton>
            </Stack>
        </MySection>
    );
}

export default SectionUniswap;
