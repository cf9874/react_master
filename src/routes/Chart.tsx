import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinID: string;
}

function Chart({ coinID }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["presentPrice", coinID], () => fetchCoinHistory(coinID), {
    refetchInterval: 10000,
  });
  return (
    <div>
      {isLoading ? (
        "Chart Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "close price",
              data: data?.map((price) => price.close),
            },
            {
              name: "corn",
              data: [11, 18, 20, 14, 35, 26],
            },
          ]}
          options={{
            xaxis: { labels: { show: false } },
            theme: {
              mode: "dark",
            },
            grid: { show: false },
            chart: {
              background: "transparent",
              toolbar: {
                show: false,
              },
              id: "aaaaa",
              height: 500,
              width: 500,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
