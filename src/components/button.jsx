import {styled, Button as MuiButton} from "@mui/material";


const Button = styled(MuiButton)`
  background-image: linear-gradient(to right, #7731E7, #04BFCD);
  //background: linear-gradient(249deg,#04bfcd 20%, #7731e7 60%);
  text-decoration: none;
  padding: 10px 60px;
  color: whitesmoke;
  width: 100%;
  text-align: center;
  border-radius: 100px;
  border-color: darkslategrey;
  display: inline-block;
  transition-duration: 300ms;
  font-family: 'Macondo', cursive;
  
  &:hover {
    background-color: darkslategrey;
    border-color: darkslategrey;
  }
`
export default Button
