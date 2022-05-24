import AppBar from "./appBar";
import styled from "@emotion/styled";

const MainDiv = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Macondo', cursive !important;
`

function Layout({children}) {
    return (
        <MainDiv>
            <AppBar/>
            <main>{children}</main>
        </MainDiv>
    );
}

export default Layout;
