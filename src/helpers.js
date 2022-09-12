export async function makeApiRequest(path) {
    try {

        const response = await fetch(`https://fapi.binance.com/${path}`,{
            method:"GET",
            mode:"cors"
        })
        
        return response.json();
    } catch(error) {
        throw new Error(`Binance request error: ${error.status}`);
    }
}

