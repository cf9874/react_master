import { useState } from "react";
import { useParams, useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 48px;
  color: ${(prop) => prop.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface CoinParams {
  coinID: string;
}

interface RouteState {
  state: {
    name: string;
  };
}

function Coin() {
  const { coinID } = useParams() as CoinParams;
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouteState;

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
