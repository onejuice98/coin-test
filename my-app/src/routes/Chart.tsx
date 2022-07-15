import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
interface ICandleChartItem {
  x: Date;
  y: number[];
}
function Chart({ coinId }: ChartProps) {
  const { isLoading : ohlcvLoading , data : ohlcvData } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)/* , {
      refetchInterval : 10000,
    } */
    
  );
  return (
    <div>
      {ohlcvLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: ohlcvData?.map((props) => {
                return {
                  x: new Date(props.time_open * 1000),
                  y: [
                    parseFloat(props.open),
                    parseFloat(props.high),
                    parseFloat(props.low),
                    parseFloat(props.close),
                  ],
                };
              }) as ICandleChartItem[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type:"candlestick",
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type : "datetime",
              
            },
 
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;