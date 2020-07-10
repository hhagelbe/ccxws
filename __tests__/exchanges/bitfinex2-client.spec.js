const { testClient } = require("../test-runner");
const Bitfinex2Client = require("../../src/exchanges/bitfinex2-client");

testClient({
  clientFactory: () => new Bitfinex2Client(),
  clientName: "Bitfinex2Client",
  exchangeName: "Bitfinex",
  markets: [
    {
      id: "tBTCUST",
      base: "BTC",
      quote: "USDT",
    },
  ],

  testConnectEvents: true,
  testDisconnectEvents: true,
  testReconnectionEvents: true,
  testCloseEvents: true,

  hasTickers: true,
  hasTrades: true,
  hasCandles: false,
  hasLevel2Snapshots: false,
  hasLevel2Updates: true,
  hasLevel3Snapshots: false,
  hasLevel3Updates: true,

  ticker: {
    hasTimestamp: true,
    hasLast: true,
    hasOpen: true,
    hasHigh: true,
    hasLow: true,
    hasVolume: true,
    hasQuoteVolume: false,
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

  l2snapshot: {
    hasTimestampMs: false,
    hasSequenceId: false,
    hasCount: true,
  },

  l2update: {
    hasSnapshot: true,
    hasTimestampMs: false,
    hasSequenceId: false,
    hasCount: true,
  },

  l3snapshot: {
    hasTimestampMs: false,
    hasSequenceId: false,
  },

  l3update: {
    hasSnapshot: true,
    hasTimestampMs: false,
    hasSequenceId: false,
    hasCount: true,
  },
});
