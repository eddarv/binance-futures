
var aPoolWSConections = []

export function subscribeOnStream(symbolInfo,resolution,onRealtimeCallback) {
    let symb= symbolInfo.name.toLowerCase()
    let transform;
    const regex = /^[0-9]*$/;
    if (resolution.slice(-1) === 'M'){transform = resolution}
    else if(regex.test(resolution) == true && (parseInt(resolution,10)/60) < 1){transform = resolution+'m'}
    else if(regex.test(resolution) == true && (parseInt(resolution,10)/60) >= 1){transform = `${(parseInt(resolution,10)/60)}`+'h'}
    else{transform = resolution.toLowerCase()}

    
    const socket= new WebSocket(`wss://fstream.binance.com/ws/${symb}@kline_${transform}`)
    aPoolWSConections.push(socket);
    socket.onmessage = function(event){
        console.log(event)
        console.log(aPoolWSConections)
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

export async function unsubscribeFromStream() {
    await aPoolWSConections[0].close();
    aPoolWSConections.shift();
}