import React from 'react';
import {styled} from "@mui/material";
import Section from "../section";
import Thumbnail from "../../assets/Comp 1 thumbnail.jpg"

const MyVideo = styled("video")`
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  width: 90%;
  margin: auto;
  
  @media (max-width: 650px) {
    width: 100%;
  }
`

function SectionVideo() {
    return (
        <Section>
            <MyVideo preload="metadata" controls poster={Thumbnail}>
                <source src={'/Comp 1.mp4'} type='video/mp4'/>
            </MyVideo>
        </Section>
    );
}

export default SectionVideo;
