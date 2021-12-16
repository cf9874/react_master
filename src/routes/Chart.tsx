import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinID: string;
}

function Chart({ coinID }: ChartProps) {
  const { isLoading, data } = useQuery(["presentPrice", coinID], () => fetchCoinHistory(coinID));
  return <h1>Chart {coinID}</h1>;
}

export default Chart;
