import {
    AppBar as MuiAppBar,
    Box,
    Container,
    Divider,
    IconButton,
    Slide,
    Stack,
    styled,
    SwipeableDrawer,
    Toolbar,
    Typography,
    useScrollTrigger
} from "@mui/material";
import {cloneElement, useState} from "react";
import Button from "./button";
import {Divide as Hamburger} from 'hamburger-react';
import {FaTelegram, FaTwitter} from "react-icons/fa";
import Logo from "../favicon.ico"

const Heading = styled(Typography)`
  font-family: 'Macondo', cursive;
`
const CustomAppBar = styled(MuiAppBar)`
  //background-color: rgba(130, 106, 36, 0.7);
  //background-image: linear-gradient(to right bottom, rgb(220, 124, 39), rgb(182, 85, 0));
  background: linear-gradient(331deg, rgba(47, 79, 79, 0.8) 10%, rgba(54, 21, 14, 0.8) 50%);
  display: flex;
  margin: auto;
  justify-items: center;
`

const MyButton = styled(Button)`
  padding: 10px 10px;
`

const MyToolbar = styled(Toolbar)(({theme}) => ({
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 80,
    },
}));

const MyDrawer = styled(SwipeableDrawer)`


`

function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    const trigger1 = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return <Slide appear={false} direction="down" in={!trigger1}>
        {cloneElement(children, {
            elevation: trigger ? 5 : 0,
        })}
    </Slide>;
}

const DrawerStack = styled(Stack)`
  margin: auto;
  height: 40vh;
  //transform: translateY(-4rem);
  justify-content: space-between;
`

const LogoComp = styled("img")`
  align-self: center;
`

// const MyHamburger = styled(Hamburger)`
//   position: absolute;
//   z-index: 10;
// `

function AppBar(props) {
    const [drawer, setDrawer] = useState(false);
    // const router = useRouter();

    return (
        <ElevationScroll {...props}>
            <CustomAppBar position={"sticky"} color={'primary'}>
                <Container maxWidth={"xl"}>
                    <MyToolbar disableGutters>
                        <Box sx={{
                            display: "flex",
                            flexGrow: 1,
                            alignItems: "center",
                        }}>
                            <img src={Logo} alt={"logo"}/>
                            <Heading variant="h6" alignSelf={"end"}>
                                BLACKSHEEP
                            </Heading>
                        </Box>
                        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                            <Hamburger color={"whitesmoke"} toggled={drawer}
                                       onToggle={() => setDrawer(prevState => !prevState)}/>
                            <MyDrawer anchor={'right'} open={drawer}
                                      onClose={() => setDrawer(false)} PaperProps={{
                                sx: {
                                    // backgroundColor: "rgba(130,106,36,0.9)",
                                    backgroundImage: 'linear-gradient(331deg, #2f4f4f 10%, #36150e 50%)',
                                    // justifyContent: 'center',
                                    width: '80%'
                                }
                            }}
                                      onOpen={() => setDrawer(true)}>
                                <DrawerStack spacing={4}>
                                    <Stack spacing={2}>
                                        <MyButton variant={'outlined'} style={{width: "15em"}} href={"/galleria/"}>NFT
                                            GALLERIA</MyButton>
                                        <MyButton variant={'outlined'} style={{width: "15em"}}
                                                  href={"/game/"}>GAME</MyButton>
                                    </Stack>
                                    <Divider color={'darkslategrey'}/>
                                    <Stack direction={"row"} width={"100"} alignItems={"center"} justifyContent={"center"}>
                                        <IconButton href={'https://twitter.com/catfuntoken'}>
                                            <FaTwitter color={'darkslategrey'}/>
                                        </IconButton>
                                        <IconButton href={'https://t.me/CATFUNOfficial'}>
                                            <FaTelegram color={'darkslategrey'}/>
                                        </IconButton>
                                    </Stack>
                                </DrawerStack>
                            </MyDrawer>
                        </Box>
                        <Stack direction={'row'} spacing={1} sx={{display: {xs: 'none', md: 'flex'}}}>
                            <IconButton href={'https://twitter.com/catfuntoken'}>
                                <FaTwitter color={'darkslategrey'}/>
                            </IconButton>
                            <IconButton href={'https://t.me/CATFUNOfficial'}>
                                <FaTelegram color={'darkslategrey'}/>
                            </IconButton>
                            <MyButton variant={'outlined'} style={{width: "15em"}} href={"/galleria/"}
                            >NFT GALLERIA</MyButton>
                            <MyButton variant={'outlined'} style={{width: "15em"}} href={"/game/"}>GAME</MyButton>
                        </Stack>
                    </MyToolbar>
                </Container>
            </CustomAppBar>
        </ElevationScroll>
    );
}

export default AppBar;
