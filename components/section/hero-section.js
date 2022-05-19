import React from 'react';
import Image from "next/image";
import Heroimage from "../../assets/banenr.jpg"
import styled from "@emotion/styled";
import Button from "../button";

const HeroImageStyled = styled(Image)`
  background-size: cover;
`

const Section = styled.section`
  //margin-top: 10px;
  position: relative;
  overflow: clip;
`

const MyButton = styled(Button)`
  position: absolute;
  display: flex;
  bottom: 1%;
  right: 0;
  z-index: 10;
  color: whitesmoke;
  font-size: 1.8rem;
  width: 40%;
  height: 2.4em;
  transition: transform .3s;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background-color: darkslategrey;
  

  & > span > img {
      width: 100%;
      height: 100%;
  }

  @media (max-width: 800px) {
    padding: 0;
    font-size: 1.2rem;

    & > span {
      margin: 0;
      img {
        width: 80%;
        height: 80%;
      }
    }
  }

  &:hover {
    transform: translateY(-0.2rem);
  }
`

function HeroSection(props) {
    return (
        <Section>
            <HeroImageStyled src={Heroimage} alt={"Hero image"}/>
            <MyButton backColor={"#5363FF"}>
                    Join Now
            </MyButton>
        </Section>
    );
}

export default HeroSection;
