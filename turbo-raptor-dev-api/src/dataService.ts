import chalk from "chalk";

export function generateFakeStockData(ticker: string, period: string): any[] {
    const now = new Date();
    const fakeData = [];
  
    for (let i = 0; i < 5; i++) {
      const timestamp = new Date(now.getTime() - i * 3600000); // Each hour
  
      const open = 1500 + Math.random() * 100;
      const high = open + Math.random() * 5;
      const low = open - Math.random() * 5;
      const close = low + Math.random() * (high - low);
      const volumeETH = Math.random() * 10000;
      const volumeUSDT = volumeETH * close;
      const tradeCount = Math.floor(Math.random() * 20000);
  
      fakeData.push({
        date: timestamp.toISOString(),
        symbol: ticker,
        open: open.toFixed(2),
        high: high.toFixed(2),
        low: low.toFixed(2),
        close: close.toFixed(2),
        volumeETH: volumeETH.toFixed(4),
        volumeUSDT: volumeUSDT.toFixed(2),
        tradeCount: tradeCount,
      });
    }
  
    console.log(
      chalk.green(`[LOG] Generated ${fakeData.length} records for ${ticker}`)
    );
  
    return fakeData;
  }