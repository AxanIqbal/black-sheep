import React from 'react';
import {
    Card as MuiCard,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    styled,
    Typography
} from '@mui/material'
import {FiCheckCircle} from "react-icons/fi";


const MyCard = styled(MuiCard)`
  //background-color: rgba(130, 106, 36, 0.7);
  //background-image: linear-gradient(to bottom right, rgba(130, 106, 36, 0.7), rgb(0, 0, 0));
  background: linear-gradient(331deg, rgba(47, 79, 79, 0.8) 10%, rgba(54, 21, 14, 0.8) 50%);
  width: 350px;
  height: 500px;
  margin-bottom: 1em;
  transition: transform .3s;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1.5rem) scale(1.05);
    box-shadow: 10px 10px 17px 0px rgba(0,0,0,0.75);
  }
`
const MyTypo = styled(Typography)`
  color: whitesmoke;
`
const MyHeader = styled(CardHeader)`
  color: whitesmoke;

  & > div > span > p {
    font-size: 1.6rem;
    //  font-weight: bolder;
    text-align: center;
  }
`

function Card(props) {
    const {features, title} = props
    return (
    <MyCard>
        <MyHeader title={title}/>
        <CardContent>
            <List>

                {features.map((value, index) => {
                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemIcon>
                                <FiCheckCircle size={20} color={value.color || 'whitesmoke'}/>
                            </ListItemIcon>
                            <ListItemText primary={<MyTypo>{value.title}</MyTypo>}/>
                        </ListItem>
                    );
                })}
            </List>
        </CardContent>
    </MyCard>
)
    ;
}

export default Card;
