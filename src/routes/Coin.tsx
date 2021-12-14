import { useParams } from "react-router";

interface CoinParams {
  coinID: string;
}

function Coin() {
  const { coinID } = useParams() as CoinParams;
  console.log(coinID);
  return <h1>Coin : {coinID}</h1>;
}

export default Coin;
