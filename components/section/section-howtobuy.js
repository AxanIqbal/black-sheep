import {Stack, styled as styledMui} from "@mui/material";
import Section from "../section";
import styled from "@emotion/styled";

const MyVideo = styled.video`
  border-radius: 20px;
`


// const MyTypo = styledMui(Typography)`
//   color: whitesmoke;
// `

const MyStack = styled(Stack)`
  text-align: center;
`

function SectionHowToBuy() {
    return (
        <Section>
            <MyStack justifyItems="center" sx={{width: '100%'}}>
                {/*<MyTypo my={2} variant={'h3'}>How to buy</MyTypo>*/}
                <MyVideo preload="metadata" controls poster={'/THUMBNAIL.jpg'}>
                    <source src={'/Comp_1.mp4'} type='video/mp4'/>
                </MyVideo>
            </MyStack>
        </Section>
    );
}

// interface BuyStepsProps {
//     step: number
//     heading: string
//     body: string
//     footer?: string
//     img: string | StaticImageData
// }
//
// function BuySteps(props: BuyStepsProps) {
//     const {step, body, heading, footer, img} = props
//
//     const MyStack = styled(Stack)`
//       text-align: center;
//       width: 15em;
//       align-items: center;
//     `
//
//     return (
//         <MyStack spacing={1}>
//             <Image src={img} alt={heading} width={100} height={70}/>
//             <Typography variant={"h6"} color={"#A15200FF"}>step {step}</Typography>
//             <Typography fontWeight={'bold'} color={"#d06b00"}>{heading}</Typography>
//             <MyTypo>{body}</MyTypo>
//             {footer && <Typography color={"#9e5309"}>{footer}</Typography>}
//         </MyStack>
//     );
// }

export default SectionHowToBuy;
