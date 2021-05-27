import {makeApiRequest} from './helpers.js';
import {subscribeOnStream, unsubscribeFromStream} from './streaming.js';

const configurationData = {
    supported_resolutions: ['1', '5', '15','30','60','1D', '1W', '1M'],
    exchanges: [],
    symbols_types: [],
    supports_time: true,
};

const lastBarsCache = new Map();

async function getAllSymbols() {
    const data = await makeApiRequest('fapi/v1/exchangeInfo');
    let allSymbols = [];
    const pairs = data.symbols;
    for (const leftPairPart of Object.keys(pairs)) {
        const symbols = pairs[leftPairPart].symbol
        let symbol= {
            symbol: symbols,
            full_name: symbols,
            description: symbols,
            exchange: 'Binance',
            type: 'crypto',
            };
        allSymbols = [...allSymbols, symbol];
    };
    return allSymbols;
};

let resol= function(resolution){
    let transform;
        const regex = /^[0-9]*$/;
        if (resolution.slice(-1) === 'M'){transform = resolution}
        else if(regex.test(resolution) == true && (parseInt(resolution,10)/60) < 1){transform = resolution+'m'}
        else if(regex.test(resolution) == true && (parseInt(resolution,10)/60) >= 1){transform = `${(parseInt(resolution,10)/60)}`+'h'}
        else{transform = resolution.toLowerCase()}
        return transform;
}



export default {
    onReady: (callback) => {
        console.log('[onReady]: Method call');
        setTimeout(() => callback(configurationData));
    },


    searchSymbols: async (userInput, exchange, symbolType, onResultReadyCallback) => {
        console.log('[searchSymbols]: Method call');
        const symbols = await getAllSymbols();
        const newSymbols = symbols.filter(symbol => {
            const isExchangeValid = exchange === '' || symbol.exchange === exchange;
            const isFullSymbolContainsInput = symbol.full_name
                .toLowerCase()
                .indexOf(userInput.toLowerCase()) !== -1;
            return isExchangeValid && isFullSymbolContainsInput;
        });
        onResultReadyCallback(newSymbols);
    },


    resolveSymbol: async(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        console.log('[resolveSymbol]: Method call', symbolName);
        const symbols = await getAllSymbols();
        const symbolItem = symbols.find(({ full_name }) => full_name === symbolName);
        if (!symbolItem) {
            console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
            onResolveErrorCallback('cannot resolve symbol');
            return;
        }
        const symbolInfo = {
            ticker: symbolItem.full_name,
            name: symbolItem.symbol,
            description: symbolItem.description,
            type: symbolItem.type,
            session: '24x7',
            timezone: 'Etc/UTC',
            exchange: symbolItem.exchange,
            minmov: 1,
            pricescale: 10000,
            has_intraday: true,
            has_no_volume: true,
            has_weekly_and_monthly: true,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: 'streaming',
        };
        
        console.log('[resolveSymbol]: Symbol resolved', symbolName);
        onSymbolResolvedCallback(symbolInfo);
    },

    getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        const { from, to, firstDataRequest, countBack } = periodParams;
        console.log('[getBars]: Method call', symbolInfo, resolution, from, to, countBack);

        let transform=resol(resolution);

        const urlParameters = {
            symbol: symbolInfo.name,
            interval: transform,
            startTime: from *1000,
            limit: 1500,
        };

        const query = Object.keys(urlParameters).map(name => `${name}=${encodeURIComponent(urlParameters[name])}`).join('&');
        try {
            const data = await makeApiRequest(`fapi/v1/klines?${query}`);
            console.log('datalog::', data);
            if (data.Response && data.Response === 'Error' || data.length === 0) {
                // "noData" should be set if there is no data in the requested period.
                onHistoryCallback([], { noData: true });
                return;
            }
            let bars = [];
            for(let iterador of Object.keys(data)){
                    if (data[iterador][0]/1000 >= from && data[iterador][0]/1000 < to) {
                        bars = [...bars, {
                            time: data[iterador][0],
                            low: data[iterador][3],
                            high: data[iterador][2],
                            open: data[iterador][1],
                            close: data[iterador][4],
                            volume: data[iterador][5],
                        }];
                    }

            }
            console.log(`[getBars]: returned ${bars.length} bar(s)`);
            onHistoryCallback(bars, { noData: false });
            
        }
        catch (error) {
                console.log('[getBars]: Get error', error);
                onErrorCallback(error);
            }


        console.log('link::', query);
        
        

    },
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
        console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);
        subscribeOnStream(
            symbolInfo,
            resolution,
            onRealtimeCallback,
        );

    },


    unsubscribeBars: (subscriberUID) => {
        console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
        unsubscribeFromStream();
    },
};


