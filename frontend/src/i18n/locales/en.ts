export default {
    header: {
        openPlatform: 'Open platform',
    },
    footer: {
        copyright: '© {year} Lexx Software Co Ltd. All Rights Reserved',
        text: 'This website uses Google Analytics to collect anonymous statistics about visitors in order to <br>improve the user experience. By continuing to use the site, you agree to the use of cookies.',
    },
    validation: {
        inputValue: 'Input value',
        lessThanPrev: 'Less than previous',
        moreThanSqueezeTimeframe: 'More than "Squeeze timeframe"'
    },
    main: {
        dataSettings: 'Data settings',
        exchange: 'Exchange',
        fee: 'Trading fee',
        direction: 'Direction',
        symbol: 'Symbol',
        timeframe: 'Squeeze timeframe',
        time: 'Time',
        from: 'From',
        to: 'To',
        squeezeSearchArea: 'Squeeze search area',
        binding: 'Binding',
        low: 'Low',
        high: 'High',
        open: 'Open',
        close: 'Close',
        midOC: 'Mid OC',
        midHL: 'Mid HL',
        percentEnter: 'Percent enter',
        percentExit: 'Percent exit',
        stopLossTime: 'Timeout stoploss (minutes)',
        stopLossPercent: 'Price stoploss (%)',
        stopOnKlineClosed: 'Stop on closing one-min candle',
        oncePerCandle: 'Once per Candle',
        filters: 'Filters (experimental)',
        minNumDeals: 'Minimum number of deals',
        minCoeff: 'Minimum profit/loss coeff',
        minWinRate: 'Minimum winrate',
        maxSellBuyRatio: 'Max SELL/BUY ratio',
        optimizationSettings: 'Optimization settings',
        algorithm: 'Algorithm',
        iterations: 'Iterations',
        saveResults: 'Save result',
        downloadTimeFrame: 'Time frame to download',
        start: 'Start',
        reset: 'Reset',
        results: 'Results for {exchange}, {symbol}, {timeframe}',
        downloading: 'Downloading',
        downloadedIn: 'Downloaded in {value} seconds',
        calculating: 'Calculating',
        calculatedIn: 'Calculated in {value} seconds',
        max: 'Max.',
        algorithmTooltip: '● GRID - search by grid<br>● random - search randomly<br>● OMG - search in the vicinity of the previously found optimal solution',
        iterationsTooltip: 'The number of iterations of the search algorithm. The more iterations, <br>the more optimal values will be obtained as a result, but it also requires more time for calculation. <br>The optimal value of this parameter depends on the chosen time and your computer power.',
        saveResultsTooltip: 'The number of best results to be displayed in the resulting table.',
        downloadTimeFrameTooltip: 'Candles of this specific timeframe will be downloaded from the exchange, <br>and the backtest calculation will be based on them. The finer the timeframe, <br>the more accurate the results, but the more time is required for the calculation.',
        table: {
            binding: 'Binding',
            percentEnter: 'Enter %',
            percentExit: 'Exit %',
            stopLossTime: 'Timeout',
            stopLossPercent: 'SL %',
            totalDeals: 'Num Deals',
            totalProfitPercent: 'Profit',
            coeff: 'Coeff',
            winrate: 'Winrate',
            action: 'Action',
            create: 'Create',
            maxDrawdownPercent: 'Max. drawdown',
            maxTimeInDealMins: 'Max. time',
            info: 'Info',
            time: "Time",
            tooltip: {
                maxDrawdownPercent: 'Maximum position drawdown during a trade',
                maxTimeInDealMins: 'Maximum time in a trade (minutes)'
            }
        },
        deals: {
            close: 'Close',
            title: 'Deals',
            timeEnter: 'Enter time',
            timeExit: 'Exit time',
            priceEnter: 'Enter price',
            priceExit: 'Exit price',
            profitPercent: 'Profit',
            stopLoss: 'Stoploss',
            byTime: 'by time',
            byPercent: 'by percent'
        }
    },
};
