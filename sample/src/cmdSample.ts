import axios from "axios";
import {
    BestSqueezeFinder,
    BinanceExchange,
    invertKlines,
    IProgressListener,
    ISqueezeOptimizationsParameters,
    ISqueezeParameters,
    OptimizationAlgorithm,
    SqueezeBindings,
    SqueezeCalculator
} from "squeeze-utils";

type ExchangeName = 'binance' | 'binance-futures';

var fs = require("fs");

class ProgressBar implements IProgressListener {
    private _startTime: number;
    private _lastUpdateTime: number;
    private _lastPercent: number;

    constructor() {
        this.reset();
    }

    async onProgressUpdated(currentValue: number, total: number) {
        this._lastUpdateTime = Date.now();
        const percent = currentValue / total * 100;
        if (currentValue !== 0 && currentValue !== total && percent - this._lastPercent < 5) {
            return;
        }

        console.log('\t progress: %s%%', percent.toFixed(2));
        this._lastPercent = percent
    }

    getSpentSeconds(): number {
        return (this._lastUpdateTime - this._startTime) / 1000
    }

    reset() {
        this._lastPercent = 0;
        this._startTime = Date.now();
        this._lastUpdateTime = Date.now();
    }
}


async function findBestSqueeze(exchangeName: ExchangeName, symbol: string, from: number, to: number, commissionPercent: number, settings: ISqueezeOptimizationsParameters) {
    const progressBar = new ProgressBar();

    console.log('Starting downloading data...')
    const exchange = new BinanceExchange(exchangeName)
    // let klines = await exchange.downloadKlines(symbol, '1m', from, to, progressBar);
    let klines = await getKlines(exchangeName, symbol);
    // let myKlines = await getKlines();

    // const lastKlineIndex = klines.findIndex((kline) => {
    //     return kline.closeTime > to;
    // })
    // klines = klines.slice(0, lastKlineIndex);
    // klines = klines.map((kline) => ({
    //     ...kline,
    //     buyBaseVolume: 0,
    //     buyQuoteVolume: 0,
    // }))

    // const x = JSON.stringify(klines) === JSON.stringify(myKlines);
    // console.log('x', x);


    // const x2 = compareObjects(klines, myKlines)
    // console.log('x2', x2);

    console.log('symbol', symbol);
    // console.log('klines.length', klines.length);
    // console.log('my klines.length', myKlines.length);
    console.log('klines first', klines[0]);
    // console.log('my klines first', myKlines[0]);
    console.log('klines last', klines[klines.length -1]);
    // console.log('my klines last', myKlines[myKlines.length -1]);

    // const firstKline = JSON.stringify(klines[0]) === JSON.stringify(myKlines[0]);
    // console.log('firstKline', firstKline);

    // const lastKline = JSON.stringify(klines[klines.length -1]) === JSON.stringify(myKlines[myKlines.length -1]);
    // console.log('lastKline', lastKline);

    const symbolsTickers = await exchange.getSymbolsTickers();
    console.log('Downloaded in %s seconds', progressBar.getSpentSeconds().toFixed(3))

    console.log('Total possible variants: %s', BestSqueezeFinder.totalNumberVariants(settings));
    console.log('Starting calculation...')

    progressBar.reset()

    const finder = new BestSqueezeFinder(symbolsTickers[symbol], commissionPercent, klines, '1m', settings, progressBar);
    const bestStat = await finder.findBestSqueeze();
    const all = await finder.getAllAttemptsSqueezes();
    console.log('Finished calculation in %s seconds', progressBar.getSpentSeconds().toFixed(3))

    console.log('Result:\n%s', JSON.stringify({...bestStat, deals:[]}, null, 2));

    console.log('all', all.map(s => s.totalProfitPercent));
}

async function calculateOne(exchangeName: ExchangeName, symbol: string, from: number, to: number, commissionPercent: number, params: ISqueezeParameters) {
    const progressBar = new ProgressBar();

    console.log('Starting downloading data...')
    const exchange = new BinanceExchange(exchangeName)
    // let klines = await exchange.downloadKlines(symbol, '1m', from, to, progressBar);

    let klines = await getKlines(exchangeName, symbol);
    console.log('symbol', symbol);
    console.log('klines', klines[0], klines[1]);

    const symbolsTickers = await exchange.getSymbolsTickers();
    console.log('Downloaded in %s seconds', progressBar.getSpentSeconds().toFixed(3))

    if (params.isShort) {
        klines = invertKlines(klines);
    }
    const squeezeCalculator = new SqueezeCalculator(params, symbolsTickers[symbol], commissionPercent);
    const stat = squeezeCalculator.calculate(klines, '1m');

    console.log('Result:\n%s', JSON.stringify(stat, null, 2));
}
/*
calculateOne('binance', 'BTCUSDT', 1711927910000, 1712014321000, 0.075, {
    isShort: false,
    percentEnter: 0.9,
    percentExit: 1.1,
    binding: SqueezeBindings.CLOSE,
    stopLossTime: 6 * 60 * 1000,
    timeFrame: '1m',
    oncePerCandle: false
});*/

/*
// Example how to get the statistic for special config
calculateOne('binance', 'BTCUSDT', 1714514400000, 1715205600000, 0.075, {
    isShort: false,
    percentEnter: 0.9,
    percentExit: 1.1,
    binding: SqueezeBindings.CLOSE,
    stopLossTime: 6 * 60 * 1000,
    timeFrame: '1m',
    oncePerCandle: false
});
*/

// 01.01.24
// 1704070800000
// findBestSqueeze('BBUSDT', 1712696400000, 1715905619999, 0.02, {
findBestSqueeze('binance','SOLUSDT', 1712696400000, 1719876721000, 0.02, {
    percentEnter: {
        from: 1,
        to: 4
    },
    percentExit: {
        from: 0.5,
        to: 3
    },
    binding: [
        SqueezeBindings.LOW,
    ],
    stopLossTime: {
        from: 5,
        to: 92
    },
    // stopLossPercent: {
    //     from: 1,
    //     to: 10
    // },
    timeFrame: '1m',
    oncePerCandle: true,
    stopOnKlineClosed: false,
    filters: {
        // minNumDeals: 10,
        minCoeff: 1.0,
        minWinRate: 0.5,
        maxSellBuyRatio: 0.5,
    },
    algorithm: OptimizationAlgorithm.GRID,
    iterations: 1000,
    isShort: false,
});

async function getKlines(exchangeName: ExchangeName, symbol) {
    const market = exchangeName === 'binance' ? 'binance/spot' : 'binance/futures';

    const {data} = await axios.get(
        `http://localhost:3001/api/db/${market}/get?symbol=${symbol}&interval=1m`
    );
    // console.log('data.candles', data.candles[0]);
    return data.candles.map(({
                                       ot,
                                       o,
                                       h,
                                       l,
                                       c,
                                       ct,
                                       v,
                                       q,
                                       t,
                                       bv,
                                       qv,
                                   }) => ({
        openTime: ot,
        open: o,
        high: h,
        low: l,
        close: c,
        closeTime: ct,
        baseVolume: v,
        quoteVolume: q,
        trades: t,
        buyBaseVolume: 0,
        buyQuoteVolume: 0,
        closed: true,
    }));
}
