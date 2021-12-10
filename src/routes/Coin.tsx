import { useParams } from "react-router";

interface Params {
  coinID: string;
}

function Coin() {
  const { coinID } = useParams() as Params;
  console.log(coinID);
  return <h1>Coin : {coinID}</h1>;
}

export default Coin;
