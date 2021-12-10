import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${(prop) => prop.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${(prop) => prop.theme.textColor};
  `;
  return (
    <div>
      <Container>
        <H1>hi</H1>
      </Container>
    </div>
  );
}

export default App;
