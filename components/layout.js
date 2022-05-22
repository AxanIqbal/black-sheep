import styled from "@emotion/styled";
import AppBar from "./appBar";

const MainDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, #dc6600, #a55000);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
