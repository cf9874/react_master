const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  const json = await response.json();
  return json;
}

export async function fetchInfoData(coinID: string) {
  const infoData = await fetch(`${BASE_URL}/coins/${coinID}`);
  const infoJson = await infoData.json();
  return infoJson;
}

export async function fetchPriceData(coinID: string) {
  const priceData = await fetch(`${BASE_URL}/tickers/${coinID}`);
  const priceJson = await priceData.json();
  return priceJson;
}

export async function fetchCoinHistory(coinID: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  const chartData = await fetch(`${BASE_URL}/coins/${coinID}/ohlcv/historical?start=${startDate}&end=${endDate}`);
  const chartJson = await chartData.json();
  return chartJson;
}
