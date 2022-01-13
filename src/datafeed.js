import {makeApiRequest} from './helpers.js';
import {subscribeOnStream, unsubscribeFromStream} from './streaming.js';


const configurationData = {
    supported_resolutions: ['1', '5', '15','30','60','1D', '1W', '1M'],
    exchanges: [],
    symbols_types: [],
    supports_time: true,
};


async function getAllSymbols() {
    const data = await makeApiRequest('fapi/v1/exchangeInfo');
    let allSymbols = [];
    const pairs = data.symbols;

    for (const leftPairPart of Object.keys(pairs)) {
        const symbols = (pairs[leftPairPart].symbol.replace("USDT","/USDT")).replace("BUSD","/BUSD")
        let symbol= {
            symbol: symbols,
            full_name: symbols,
            description: symbols,
            exchange: 'Binance',
            type: 'crypto',
            resolution: pairs[leftPairPart].pricePrecision,
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
        let symbolInfo;
        let symbolNameMod=symbolName.replace("Binance:","")

        if (symbolNameMod.includes("#OpenInterest")) {
            symbolInfo = {
                ticker: symbolNameMod,
                name: symbolNameMod,
                description: symbolNameMod,
                type: 'crypto',
                session: '24x7',
                timezone: 'Etc/UTC',
                exchange: 'Binance',
                minmov: 1,
                pricescale: 10000,
                has_intraday: true,
                has_no_volume: true,
                has_weekly_and_monthly: true,
                supported_resolutions: configurationData.supported_resolutions,
                volume_precision: 3,
                data_status: 'streaming',
            };
        }


        else{
        const symbols = await getAllSymbols();
        const symbolItem = symbols.find(({ full_name }) => full_name === symbolNameMod);

        if (!symbolItem) {
            console.log('[resolveSymbol]: Cannot resolve symbol', symbolNameMod);
            onResolveErrorCallback('cannot resolve symbol');
            return;
        }
            symbolInfo = {
            ticker: symbolItem.full_name,
            name: symbolItem.symbol,
            description: symbolItem.description,
            type: symbolItem.type,
            session: '24x7',
            timezone: 'Etc/UTC',
            exchange: symbolItem.exchange,
            minmov: 1,
            pricescale: Math.pow(10, symbolItem.resolution),
            has_intraday: true,
            has_no_volume: true,
            has_weekly_and_monthly: true,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 4,
            data_status: 'streaming',
         };
        
        }
        
        
        console.log('[resolveSymbol]: Symbol resolved', symbolNameMod);
        onSymbolResolvedCallback(symbolInfo);
    },




    getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        let { from, to, firstDataRequest, countBack } = periodParams;
        let urlParameters;
        console.log('[getBars]: Method call', symbolInfo, resolution, from, to, countBack);

        let transform=resol(resolution);
        let bars = [];
        let data;
        let datalength
        let toglobal=to
        let from2=2
        let resolnum= parseInt(transform.slice(0,-1))*(transform.charAt(transform.length-1)== 'm' ? 60000: (transform.charAt(transform.length-1)== 'h'? 3600000: 86400000))
        

        if(symbolInfo.name.includes("#OpenInterest")){
            do{
                urlParameters = {
                symbol: ((symbolInfo.name.replace("#OpenInterest","")).replace("/USDT","USDT")).replace("/BUSD","BUSD"),
                period: transform,
                limit: 500,
                startTime: from *1000,
                endTime:from*1000 + 499 * resolnum,
                };

                console.log(urlParameters)


                let query = Object.keys(urlParameters).map(name => `${name}=${encodeURIComponent(urlParameters[name])}`).join('&');
                // console.log('querysec',query)
                if(bars.length>0){from2=data[data.length-1].timestamp/1000}
                
                
                
                try {
                    data = await makeApiRequest(`futures/data/openInterestHist?${query}`);
                    datalength=data
                    // console.log("dataaaa",datalength)
                    
                                        
                    for(let iterador of Object.keys(data)){
                        if(iterador==0){
                            urlParameters = {
                                symbol: ((symbolInfo.name.replace("#OpenInterest","")).replace("/USDT","USDT")).replace("/BUSD","BUSD"),
                                period: transform,
                                limit: 2,
                                startTime: data[0].timestamp -  resolnum,
                                endTime:data[0].timestamp -  resolnum,
                                }
                                
                            query = Object.keys(urlParameters).map(name => `${name}=${encodeURIComponent(urlParameters[name])}`).join('&');
                            // console.log('query',query)

                            let prov= await makeApiRequest(`futures/data/openInterestHist?${query}`)
                            // console.log('prov',prov)

                            if(parseFloat(data[iterador].sumOpenInterest)>=parseFloat(prov[0].sumOpenInterest)){

                                bars = [...bars, {
                                    time: parseInt(data[iterador].timestamp)-resolnum,
                                    high: parseFloat(data[iterador].sumOpenInterest),
                                    low: parseFloat(prov[0].sumOpenInterest),
                                    open:parseFloat(data[iterador].sumOpenInterest),
                                    close:parseFloat(prov[0].sumOpenInterest),
                                    volume:1,
                                    }];
                            }
                            else{
                                    
                                bars = [...bars, {
                                time: parseInt(data[iterador].timestamp)-resolnum,
                                high: parseFloat(prov[0].sumOpenInterest),
                                low: parseFloat(data[iterador].sumOpenInterest),
                                open:parseFloat(prov[0].sumOpenInterest),
                                close:parseFloat(data[iterador].sumOpenInterest),
                                volume:0,}];
                            
                            }
                        }

                        else if (data[iterador].timestamp/1000 >= from && data[iterador].timestamp/1000 <= toglobal && parseFloat(data[iterador].sumOpenInterest)>=parseFloat(data[iterador-1].sumOpenInterest)) {
                            if(data[iterador].timestamp != data[iterador-1].timestamp + resolnum){
                                let lacktime=((parseInt(data[iterador].timestamp)-parseInt(data[iterador-1].timestamp))/resolnum)
                                // console.log(lacktime)
                                for(let i=1;i<lacktime;i++){
                                    bars = [...bars, {
                                    time: parseInt(data[iterador-1].timestamp)+ (i * resolnum) - resolnum,
                                    high: parseFloat(data[iterador-1].sumOpenInterest),
                                    low: parseFloat(data[iterador-1].sumOpenInterest),
                                    open:parseFloat(data[iterador-1].sumOpenInterest),
                                    close:parseFloat(data[iterador-1].sumOpenInterest),
                                    volume:1,
                                    }]
                                }
                            }
                            bars = [...bars, {
                                time: parseInt(data[iterador].timestamp) - resolnum,
                                high: parseFloat(data[iterador].sumOpenInterest),
                                low: parseFloat(data[iterador-1].sumOpenInterest),
                                open:parseFloat(data[iterador].sumOpenInterest),
                                close:parseFloat(data[iterador-1].sumOpenInterest),
                                volume:1,
                            }];
                                
                        }
                        else if (data[iterador].timestamp/1000 >= from && data[iterador].timestamp/1000 <= toglobal) {
                            if(data[iterador].timestamp != data[iterador-1].timestamp + resolnum){
                                let lacktime=((parseInt(data[iterador].timestamp)-parseInt(data[iterador-1].timestamp))/resolnum)
                                // console.log(lacktime)
                                for(let i=1;i<lacktime;i++){
                                    bars = [...bars, {
                                    time: parseInt(data[iterador-1].timestamp)+ (i * resolnum) - resolnum,
                                    high: parseFloat(data[iterador-1].sumOpenInterest),
                                    low: parseFloat(data[iterador-1].sumOpenInterest),
                                    open:parseFloat(data[iterador-1].sumOpenInterest),
                                    close:parseFloat(data[iterador-1].sumOpenInterest),
                                    volume:0,
                                    }]
                                }
                            }
                            bars = [...bars, {
                                time: parseInt(data[iterador].timestamp) - resolnum,
                                high: parseFloat(data[iterador-1].sumOpenInterest),
                                low: parseFloat(data[iterador].sumOpenInterest),
                                open:parseFloat(data[iterador-1].sumOpenInterest),
                                close:parseFloat(data[iterador].sumOpenInterest),
                                volume:0,
                            }];
                                
                        }
                    }
                    // console.log('popo',bars)
                    
                         
                }
                catch (error) {
                    console.log('[getBars]: Get error', error);
                    onErrorCallback(error);
                }
                from=data[data.length-1].timestamp/1000
                to=from+499* parseInt(transform.slice(0,-1)) * (transform.charAt(transform.length-1)== 'm' ? 60: (transform.charAt(transform.length-1)== 'h'? 3600 : 86400))
                // console.log(toglobal,'toglobal')
                // console.log(from,'from')

                
            }while(from<toglobal && from2!=from);
        }

        else{
            do{
                urlParameters = {
                symbol: (symbolInfo.name.replace("/USDT","USDT")).replace("/BUSD","BUSD"),
                interval: transform,
                startTime: from *1000,
                limit: 500,
                };

                let query = Object.keys(urlParameters).map(name => `${name}=${encodeURIComponent(urlParameters[name])}`).join('&');
                // console.log('queryyyy',query)

                    
                try {
                    let data;
                    data = await makeApiRequest(`fapi/v1/klines?${query}`);
                    datalength=data.length    

                    if (data.Response && data.Response === 'Error' || data.length === 0) {
                        onHistoryCallback([], { noData: true });
                        return;
                    }     
    
                    for(let iterador of Object.keys(data)){
                        if (data[iterador][0]/1000 >= from && data[iterador][0]/1000 < to) {
                            bars = [...bars, {
                                time: data[iterador][0],
                                low: data[iterador][3],
                                high: data[iterador][2],
                                open: data[iterador][1],
                                close: data[iterador][4],
                                volume: parseFloat(data[iterador][5]),
                                }];
                        }
                    }
                        
                }
                
                catch (error) {
                    console.log('[getBars]: Get error', error);
                    onErrorCallback(error);
                }

                from=bars[bars.length-1].time/1000
                to=from+500* parseInt(transform.slice(0,-1)) * (transform.charAt(transform.length-1)== 'm' ? 60: (transform.charAt(transform.length-1)== 'h'? 3600 : 86400))
                
                }while(datalength>=500);
        }


        
        console.log(`[getBars]: returned ${bars.length} bar(s)`);
        onHistoryCallback(bars, { noData: false });
        
    },


    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
        console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID,symbolInfo);
        let symbolInfoMod=symbolInfo
        
        Object.keys(symbolInfoMod).forEach((key)=>{
            

            if(typeof(symbolInfoMod[`${key}`])=='string'){
                symbolInfoMod[`${key}`]=(symbolInfoMod[`${key}`].replace("/USDT","USDT")).replace("/BUSD","BUSD")
            }

            if(Array.isArray(symbolInfoMod[`${key}`])){

                if(typeof(symbolInfoMod[`${key}`][0])=='string'){
                    symbolInfoMod[`${key}`][0]=(symbolInfoMod[`${key}`][0].replace("/USDT","USDT")).replace("/BUSD","BUSD")
                }
            }
            
        })

        subscribeOnStream(
            symbolInfoMod,
            resolution,
            onRealtimeCallback,
            onResetCacheNeededCallback,
        );

    },


    unsubscribeBars: (subscriberUID) => {
        
        unsubscribeFromStream(subscriberUID);
        console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
    },
};


