import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atom";

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
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: ${(prop) => prop.theme.textColor};
  color: ${(prop) => prop.theme.bgColor};

  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.5s ease-in-out;
    display: flex;
    align-items: center;
    padding: 20px;
    color: inherit;
  }
  &:hover {
    a {
      color: ${(prop) => prop.theme.accentColor};
    }
  }
`;
const Title = styled.div`
  font-size: 48px;
  color: ${(prop) => prop.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((isDarkz) => !isDarkz);
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDarkAtom}>Mode</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 50).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                }}
                state={{ name: coin.name }}
              >
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
