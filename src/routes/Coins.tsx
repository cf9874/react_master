import styled from "styled-components";

function Coins() {
  const Title = styled.div`
    color: ${(prop) => prop.theme.accentColor};
  `;
  return <Title>Coins</Title>;
}

export default Coins;
