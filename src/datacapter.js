async function makeApiRequest(path) {
    try {
        const response = await fetch(`https://fapi.binance.com/${path}`)
        
        return response.json();
    } catch(error) {
        throw new Error(`Binance request error: ${error.status}`);
    }
};

            let arrprov=[]
            let arrnova=[]
            let volumen=0
            let sum=0
            let sum2=0
            let times=1623102000000
            let response2
            console.log(times);


async function getTrades(){
    do{
        response2 = await makeApiRequest(`fapi/v1/aggTrades?symbol=BTCUSDT&startTime=${times}&endTime=1623102300000&limit=1000`)
        console.log(response2);
        response2.forEach(element => {
            arrprov=[...arrprov,element]
        });
        times=arrprov[arrprov.length-1].T
        console.log(times);
    }while(response2.length==1000) 

    console.log(arrprov);
    arrprov.forEach(element => {
        sum=sum+parseFloat(element.p)*parseFloat(element.q)
        sum2=sum2+parseFloat(element.q)
        if(parseFloat(element.q)*parseFloat(element.p)>=1000 && element.q.charAt(element.q.length-1)==0 && element.q.charAt(element.q.length-2)==0){
            arrnova=[...arrnova,{
                precio: parseFloat(element.p),
                short: element.m,
                cantidad:parseFloat(element.q),
                tiempo: element.T,
            }]
            volumen=volumen+parseFloat(element.q)
        }
    });
    console.log(sum,sum2);
    console.log(arrnova);
    console.log(volumen);

}
            

getTrades();
