import Section from "../section";
import {Box, Button, Container, Stack, styled, Typography as MuiTypography} from "@mui/material";
// import {FaEthereum, FaMagic} from "react-icons/all";
import {FaEthereum, FaMagic} from 'react-icons/fa';

const MySection = styled(Section)`
  background-color: black;
  justify-content: center;
`
const Typography = styled(MuiTypography)`
  color: whitesmoke;
`

const MyButton = styled(Button)`
  color: whitesmoke;
  width: 150px;
  height: 50px;
  border-radius: 100px;
  border-color: whitesmoke;

  &:hover {
    border-color: whitesmoke;
  }
`

const MyContainer = styled(Container)`
  width: 500px;
`

const ConnectButton = styled(MyButton)`
  background-color: #b65500;

  &:hover {
    background-color: #b65500;
  }
`

const MyBox = styled(Box)`
  padding: 1rem;
  background-color: darkslategrey;
  border-radius: 10px;
`

function SectionCalculator() {
    return (
        <MySection>
            <MyContainer>
                <Stack direction={'row'} justifyContent={"space-between"}>
                    <MyButton variant={'outlined'} startIcon={<FaEthereum/>}>buy swap</MyButton>
                    <ConnectButton variant={'contained'} endIcon={<FaMagic/>}>connect</ConnectButton>
                </Stack>
                <MyBox>
                    asd
                </MyBox>
            </MyContainer>

        </MySection>
    );
}

export default SectionCalculator;
