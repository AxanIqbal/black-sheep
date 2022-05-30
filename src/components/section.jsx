import styled from "@emotion/styled";

const Section = styled.section`
  display: flex;
  margin: auto;
  padding: 4rem 4em;
  color: whitesmoke;
  border-bottom: 1px solid rgba(245, 245, 245, 0.1);
  border-top: 1px solid rgba(245, 245, 245, 0.1);

  p {
    font-size: large;
  }
  
  @media (max-width: 600px) {
    padding: 1rem 1em;
  }
`

export default Section
