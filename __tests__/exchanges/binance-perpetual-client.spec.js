const { testClient } = require("../test-runner");
const { get } = require("../../src/https");
const BinancePerpetualClient = require("../../src/exchanges/binance-fapi-client");

testClient({
  clientFactory: () => new BinancePerpetualClient(),
  clientName: "BinancePerpetualClient",
  exchangeName: "Binance",
  markets: [
    {
      id: "BTCUSDT",
      base: "BTC",
      quote: "USDT",
    },
  ],

  async fetchAllMarkets() {
    const results = await get("https://fapi.binance.com/fapi/v1/exchangeInfo");
    return results.symbols
      .filter(p => p.status === "TRADING")
      .map(p => ({ id: p.symbol, base: p.baseAsset, quote: p.quoteAsset }));
  },

  unsubWaitMs: 1500,

  testConnectEvents: true,
  testDisconnectEvents: true,
  testReconnectionEvents: true,
  testCloseEvents: true,

  testAllMarketsTrades: true,
  testAllMarketsTradesSuccess: 50,

  hasTickers: true,
  hasTrades: true,
  hasCandles: true,
  hasLevel2Snapshots: true,
  hasLevel2Updates: true,
  hasLevel3Snapshots: false,
  hasLevel3Updates: false,

  ticker: {
    hasTimestamp: true,
    hasLast: true,
    hasOpen: true,
    hasHigh: true,
    hasLow: true,
    hasVolume: true,
    hasQuoteVolume: true,
    hasChange: true,
    hasChangePercent: true,
    hasBid: true,
    hasBidVolume: true,
    hasAsk: true,
    hasAskVolume: true,
  },

  trade: {
    hasTradeId: true,
  },

  candle: {},

  l2snapshot: {
    hasTimestampMs: false,
    hasSequenceId: true,
    hasCount: false,
  },

  l2update: {
    hasSnapshot: true,
    hasTimestampMs: false,
    hasSequenceId: true,
    hasCount: false,
  },
});
