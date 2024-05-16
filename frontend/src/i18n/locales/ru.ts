export default {
    header: {
        openPlatform: 'Открыть платформу',
    },
    footer: {
        copyright: '© {year} Lexx Software Co Ltd. Все права защищены',
        text: 'Этот сайт использует Google Analytics для сбора анонимной статистики о посетителях с целью улучшения <br>пользовательского опыта. Продолжая использование сайта, вы соглашаетесь с использованием файлов cookie.',
    },
    validation: {
        inputValue: 'Введите значение',
        lessThanPrev: 'Меньше предыдущего',
        moreThanSqueezeTimeframe: 'Больше чем "Squeeze таймфрейм"'
    },
    main: {
        dataSettings: 'Основные настройки',
        exchange: 'Биржа',
        fee: 'Комиссия',
        direction: 'Направление',
        symbol: 'Символ',
        timeframe: 'Squeeze таймфрейм',
        time: 'Max время',
        from: 'От',
        to: 'До',
        squeezeSearchArea: 'Область поиска squeeze',
        binding: 'Привязка',
        low: 'Low',
        high: 'High',
        open: 'Open',
        close: 'Close',
        midOC: 'Mid OC',
        midHL: 'Mid HL',
        percentEnter: 'Процент входа',
        percentExit: 'Процент выхода',
        stopLossTime: 'Время стоплосса (минуты)',
        stopLossPercent: 'Процент стоплосса (%)',
        stopOnKlineClosed: 'Стоплосс по закрытию 1м. свечи',
        oncePerCandle: 'Одна отработка за свечу',
        filters: 'Фильтры (экспериментально)',
        minNumDeals: 'Мин. кол-во сделок',
        minCoeff: 'Мин. коеф. прибыли/убытка',
        minWinRate: 'Мин. винрейт',
        maxSellBuyRatio: 'Макс. SELL/BUY ratio',
        optimizationSettings: 'Настройки оптимизации',
        algorithm: 'Алгоритм',
        iterations: 'Итерации',
        saveResults: 'Сохранить результатов',
        downloadTimeFrame: 'Таймфрейм скачивания',
        start: 'Старт',
        reset: 'Сброс',
        results: 'Результаты для {exchange}, {symbol}, {timeframe}',
        downloading: 'Загрузка',
        downloadedIn: 'Загружено за {value} секунд',
        calculating: 'Рассчет',
        calculatedIn: 'Рассчитано за {value} секунд',
        max: 'Макс.',
        algorithmTooltip: '● GRID - поиск сеткой<br>● random - поиск случайным образом<br>● OMG - поиск в окрестностях ранее найденного оптимального варианта',
        iterationsTooltip: 'Количество итерация алгоритма поиска. Чем больше итераций <br>тем более оптимальные значения получатся в результате, но тем больше времени <br>требуется для рассчета. Оптимальное значение этого параметра зависит от <br>выбранного времени и мощности вашего компьютера.',
        saveResultsTooltip: 'Количество лучших результатов,  которые будут выведены в результирующей таблице.',
        downloadTimeFrameTooltip: 'Свечи именно этого таймфрэйма будут скачаны с биржи и на их основе <br>будет проведен расчет бэктеста. Чем мельте таймфрэйм, тем более <br>точные результаты, но тем больше времени требуется для рассчета.',
        table: {
            binding: 'Привязка',
            percentEnter: 'Вход %',
            percentExit: 'Выход %',
            stopLossTime: 'Таймаут',
            stopLossPercent: 'СЛ %',
            totalDeals: 'Сделок',
            totalProfitPercent: 'Профит',
            coeff: 'Коэф.',
            winrate: 'Винрейт',
            action: 'Действие',
            create: 'Создать',
            maxDrawdownPercent: 'Макс. просадка',
            maxTimeInDealMins: 'Макс. время',
            time: "Время",
            info: 'Инфо',
            tooltip: {
                maxDrawdownPercent: 'Максимальная просадка позиции за время сделки',
                maxTimeInDealMins: 'Максимальное время в сделке (в минутах)'
            }
        },
        deals: {
            close: 'Закрыть',
            title: 'Сделки',
            timeEnter: 'Время входа',
            timeExit: 'Время выхода',
            priceEnter: 'Цена входа',
            priceExit: 'Цена выхода',
            profitPercent: 'Профит',
            stopLoss: 'Cтоплосс',
            byTime: 'Временной',
            byPercent: 'Процентный'
        }
    },
};
