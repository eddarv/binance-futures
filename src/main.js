import Datafeed from './datafeed.js';
import {makeApiRequest} from './helpers.js';

window.tvWidget = new TradingView.widget({
    symbol: 'BTC/USDT', // default symbol
    interval: '5', // default interval
    fullscreen: true, // displays the chart in the fullscreen mode
    container_id: 'tv_chart_container',
    datafeed: Datafeed,
    library_path: '../charting_library_clonned_data/charting_library/',
    timezone: "America/Caracas",
    toolbar_bg: '#000000',
    theme: "Dark",
    loading_screen: { backgroundColor: "#000000" },
    custom_indicators_getter: function(PineJS) {
        return Promise.resolve([
            {
                name: "OpenInterest",
                metainfo: {
                    _metainfoVersion: 40,
                    id: "OpenInterest@tv-basicstudies-1",
                    scriptIdPart: "",
                    name: "OpenInterest",
                    description: "OpenInterest",
                    shortDescription: "OpenInterest",
            
                    is_hidden_study: true,
                    is_price_study: false,
                    isCustomIndicator: true,
            
                    plots: [{
                        id: 'plot_0',
                        type: 'ohlc_open',
                        target: 'plotcandle_0',
                    },
                    {
                        id: 'plot_1',
                        type: 'ohlc_high',
                        target: 'plotcandle_0',
                    },
                    {
                        id: 'plot_2',
                        type: 'ohlc_low',
                        target: 'plotcandle_0',
                    },
                    {
                        id: 'plot_3',
                        type: 'ohlc_close',
                        target: 'plotcandle_0',
                    },
                    {
                        id: "plot_4",
                        type: "ohlc_colorer",
                        palette: "palette_0",
                        target: 'plotcandle_0',
                    }  
                    ],

                    palettes: {
                        palette_0: {
                            colors: [
                                { name: "Up Color" },
                                { name: "Down Color" }
                            ],
                
                            valToIndex: {
                                '1': 0,
                                '-1': 1,
                            }
                        }
                    },

                    ohlcPlots: {
                        plotcandle_0: {
                            title: 'OpenInterest',
                        },
                    },
                    
                    defaults: {
                        ohlcPlots: {
                            plotcandle_0: {
                                borderColor: '#000000',
                                color: '#000000',
                                drawBorder: false,
                                drawWick: false,
                                plottype: 'ohlc_candles', // might be 'ohlc_bars' for bars
                                visible: true,
                                wickColor: '#737375',
                            },
                        },

                        palettes: {
                            palette_0: {
                                colors: [
                                    { color: "#008888" },
                                    { color: "#d75442" }
                                ]
                            }
                        },
                        precision: 4,
                        inputs: {},
                    },

                    styles: {},
                    inputs: [],
                },
            
                constructor: function() {

                    this.init = function(context, inputCallback) {
                        this._context = context;
                        this._input = inputCallback;
                        
            
                        // Define the symbol to be plotted.
                        // Symbol should be a string.
                        // You can use PineJS.Std.ticker(this._context) to get the selected symbol's ticker.
                        // For example,
                        //    var symbol = "AAPL";
                        //    var symbol = "#EQUITY";
                        //    var symbol = PineJS.Std.ticker(this._context) + "#TEST";
                        var symbol = PineJS.Std.ticker(this._context) + "#OpenInterest";
                        this._context.new_sym(symbol, PineJS.Std.period(this._context));
                    };
            
                    this.main = function(context, inputCallback) {
                        this._context = context;
                        this._input = inputCallback;

            
                        this._context.select_sym(1);
                        var valueForColor0 = -1;
                        var valueForColor1 = 1;
                        var result = PineJS.Std.volume(this._context)==0 ?valueForColor0:valueForColor1
            
                        // You can use following built-in functions in PineJS.Std object:
                        //    open, high, low, close
                        //    hl2, hlc3, ohlc4

                        // var v = PineJS.Std.volume(this._context);

                        let open = PineJS.Std.open(this._context);
                        let high = PineJS.Std.high(this._context);     
			            let low = PineJS.Std.low(this._context);
                        let close = PineJS.Std.close(this._context);
                        
    

                        return [{value:open}, {value:high}, {value:low}, {value:close}, {value:result}];

                    }
                }
            }
        ]);
    }
});



let clickOI=false

tvWidget.onChartReady(function() {
    tvWidget.headerReady().then(function() {

        var button4 = tvWidget.createButton();
        button4.setAttribute('title', 'Open Interest');
        let buttonOI=document.getElementById("tv_chart_container").childNodes[0].contentDocument.querySelector('.layout__area--top').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[6].childNodes[0]
        let OpenInterestID
        button4.addEventListener('click', async function() { 
            clickOI=!clickOI
            if(clickOI==true){
                buttonOI.style.backgroundColor="blue";
                OpenInterestID= await tvWidget.chart().createStudy('OpenInterest', false, false);

            }
            else{
                buttonOI.style.backgroundColor="#131722";
                tvWidget.activeChart().removeEntity(OpenInterestID);
            }
        });
        button4.textContent = 'Open Interest';
        
    });

    console.log(TradingView.version())
    
});

