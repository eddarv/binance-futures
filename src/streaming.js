import {makeApiRequest} from './helpers.js';

var aPoolWSConections = []
var data
let socket 


export async function subscribeOnStream(symbolInfo,resolution,onRealtimeCallback,onResetCacheNeededCallback) {
    let symb= symbolInfo.name
    let transform;
    const regex = /^[0-9]*$/;
    if (resolution.slice(-1) === 'M'){transform = resolution}
    else if(regex.test(resolution) == true && (parseInt(resolution,10)/60) < 1){transform = resolution+'m'}
    else if(regex.test(resolution) == true && (parseInt(resolution,10)/60) >= 1){transform = `${(parseInt(resolution,10)/60)}`+'h'}
    else{transform = resolution.toLowerCase()}
    let resolnum= parseInt(transform.slice(0,-1))*(transform.charAt(transform.length-1)== 'm' ? 60000: (transform.charAt(transform.length-1)== 'h'? 3600000: 86400000))



    if(symb.includes("#OpenInterest")){
        let symb2=symb.replace("#OpenInterest","")

        let urlParameters = {
            symbol: symb2,
            period: transform,
            limit: 2,
            }
        
        let query = Object.keys(urlParameters).map(name => `${name}=${encodeURIComponent(urlParameters[name])}`).join('&');

        window.setInterval(async function (){
            data = await makeApiRequest(`futures/data/openInterestHist?${query}`);

            let bar= {
                time: data[1].timestamp-resolnum,
                close: parseFloat(data[1].sumOpenInterest), 
                open:parseFloat(data[0].sumOpenInterest), 
                high:parseFloat(data[0].sumOpenInterest), 
                low: parseFloat(data[1].sumOpenInterest), 
                volume: data[1].sumOpenInterest>data[0].sumOpenInterest ? 1:0,
            }
    
            onRealtimeCallback(bar);},5000)

        
            }
        
    else{
    socket= new WebSocket(`wss://fstream.binance.com/ws/${symb.toLowerCase()}@kline_${transform}`)
    aPoolWSConections.push(socket);
    socket.onmessage = function(event){
        // console.log(event)
        // console.log(aPoolWSConections)
        let barprov=JSON.parse(event.data)
        let bar= {
            time: barprov.k.t,
            close: parseFloat(barprov.k.c), 
            open:parseFloat(barprov.k.o), 
            high: parseFloat(barprov.k.h), 
            low: parseFloat(barprov.k.l), 
            volume: parseFloat(barprov.k.v),}

        onRealtimeCallback(bar)}
        }
    }

export async function unsubscribeFromStream(subscriberUID) {

    if(subscriberUID.includes("#OpenInterest")){
        return 0;
    }
    else{
        await aPoolWSConections[0].close();
        aPoolWSConections.shift();    
    }
}