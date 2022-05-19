import {styled, Button as MuiButton} from "@mui/material";


const Button = styled(MuiButton)`
  background-color: ${props => props.backColor ? props.backColor : 'transparent'};
  text-decoration: none;
  padding: 10px 60px;
  color: whitesmoke;
  width: 100%;
  text-align: center;
  border-radius: 100px;
  border-color: darkslategrey;
  display: inline-block;
  transition-duration: 300ms;

  &:hover {
    color: whitesmoke;
    background-color: darkslategrey;
    border-color: darkslategrey;
  }
`
export default Button
