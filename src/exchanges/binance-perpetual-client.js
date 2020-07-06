const { BinanceBase } = require("./binance-base");

class BinancePerpetualClient extends BinanceBase {
  constructor({
    useAggTrades = true,
    requestSnapshot = true,
    socketBatchSize = 200,
    socketThrottleMs = 1000,
    restThrottleMs = 1000,
  } = {}) {
    super({
      name: "BinancePerpetual",
      wssPath: "wss://fstream.binance.com/stream",
      restL2SnapshotPath: "https://fapi.binance.com/fapi/v1/depth",
      useAggTrades,
      requestSnapshot,
      socketBatchSize,
      socketThrottleMs,
      restThrottleMs,
    });
  }

  _constructLevel2Snapshot(msg, market) {
    return this._constructLevel2Update(msg, market);
  }
}

module.exports = BinancePerpetualClient;
