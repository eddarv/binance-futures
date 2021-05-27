export async function makeApiRequest(path) {
    try {
        const response = await fetch(`http://127.0.0.1:9090/fetchAPI?endpoint=https://fapi.binance.com/${path}`)
        return response.json();
    } catch(error) {
        throw new Error(`Binance request error: ${error.status}`);
    }
}

