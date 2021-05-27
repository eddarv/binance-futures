import Datafeed from './datafeed.js';


window.tvWidget = new TradingView.widget({
    symbol: 'BTCUSDT', // default symbol
    interval: '5', // default interval
    fullscreen: true, // displays the chart in the fullscreen mode
    container_id: 'tv_chart_container',
    datafeed: Datafeed,
    library_path: '../charting_library_clonned_data/charting_library/',
    timezone: "America/Caracas",
    toolbar_bg: '#000000',
    theme: "Dark",
    loading_screen: { backgroundColor: "#000000" },
});



