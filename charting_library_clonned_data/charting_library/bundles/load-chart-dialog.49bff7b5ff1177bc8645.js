(window.webpackJsonp=window.webpackJsonp||[]).push([["load-chart-dialog"],{"0lTl":function(e,t,n){e.exports={wrap:"wrap-ghxWUnOu","wrap--horizontal":"wrap--horizontal-1sVOJLqZ",bar:"bar-2ZGFe1r-",barInner:"barInner-2f6z58Ci","barInner--horizontal":"barInner--horizontal-35zIxXob","bar--horizontal":"bar--horizontal-2ofOPj8L"}},"8d0Q":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var o=n("q1tI");function r(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return[t,{onMouseOver:function(e){i(e)&&n(!0)},onMouseOut:function(e){i(e)&&n(!1)}}]}function i(e){return!e.currentTarget.contains(e.relatedTarget)}},"8h+f":function(e,t,n){e.exports={container:"container-3zkaVfyb",list:"list-2s_2firj",overlayScrollWrap:"overlayScrollWrap-2wJ_ktRm",scroll:"scroll-2iY-wzg_"}},"9dlw":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n("mrSG"),r=n("q1tI"),i=n.n(r),a=n("i8i4"),l=n.n(a),c=(n("EsMY"),n("AiMB")),s=n("DTHj"),u=n("X0gx"),d=n("8Rai");function f(e){var t=e.controller,n=e.children,a=e.isOpened,f=e.closeOnClickOutside,m=void 0===f||f,h=e.doNotCloseOn,v=e.onClickOutside,b=e.onClose,p=Object(o.e)(e,["controller","children","isOpened","closeOnClickOutside","doNotCloseOn","onClickOutside","onClose"]),g=Object(r.useContext)(u.a),O=Object(d.a)({handler:function(e){v&&v(e);if(!m)return;if(h&&e.target instanceof Node){var t=l.a.findDOMNode(h);if(t instanceof Node&&t.contains(e.target))return}b()},mouseDown:!0,touchStart:!0});return a?i.a.createElement(c.a,{top:"0",left:"0",right:"0",bottom:"0",pointerEvents:"none"},i.a.createElement("span",{ref:O,style:{pointerEvents:"auto"}},i.a.createElement(s.a,Object(o.a)({},p,{isOpened:a,onClose:b,onScroll:function(t){var n=e.onScroll;n&&n(t);t.stopPropagation()},customCloseDelegate:g,ref:t}),n))):null}},EgWQ:function(e,t,n){"use strict";n.r(t);var o=n("mrSG"),r=n("q1tI"),i=n.n(r),a=n("i8i4"),l=n("Eyy1"),c=n("YFKU"),s=n("Vdly"),u=n("qFKp"),d=n("g89m"),f=n("TSYQ"),m=n.n(f),h=n("9dlw"),v=n("Iksw"),b=n("Iivm"),p=n("e5nO"),g=n("UjII"),O=n("HjiN");function S(e){var t=e.sortDirection,n=e.children,a=Object(o.e)(e,["sortDirection","children"]),l=Object(r.useRef)(null),c=Object(r.useState)(!1),s=c[0],u=c[1];return i.a.createElement("div",Object(o.a)({},a,{ref:l,className:f(O.sortButton,"apply-common-tooltip","common-tooltip-vertical"),onClick:function(){u(!s)}}),i.a.createElement(b.a,{className:O.icon,icon:0===t?p:g}),i.a.createElement(h.a,{doNotCloseOn:l.current,isOpened:s,onClose:function(){u(!1)},position:Object(v.c)(l.current,{verticalMargin:-35,verticalAttachEdge:0})},n))}var j=n("N5tr"),w=n("H2qI");function C(e){var t=e.label,n=e.listSortField,i=e.itemSortField,a=e.listSortDirection,l=e.itemSortDirection,c=e.onClick,s=e.className,u=Object(o.e)(e,["label","listSortField","itemSortField","listSortDirection","itemSortDirection","onClick","className"]),d=i===n&&l===a;return r.createElement(j.b,Object(o.a)({},u,{className:f(w.container,s),label:r.createElement("div",{className:w.labelWrap},r.createElement(b.a,{className:w.icon,icon:0===l?p:g
}),r.createElement("span",{className:w.text},t)),isActive:d,onClick:function(){c(i,l)},"data-active":d.toString(),"data-sort-field":i,"data-sort-direction":0===l?"asc":"desc"}))}var E=n("QHWU"),y=n("IePd");function I(e){var t=e.children,n=e.className;return i.a.createElement("div",{className:m()(y.container,n)},t)}function N(e){var t=e.title;return i.a.createElement("div",{className:y.title},t)}var k=n("ivNn");var x=n("wx14"),T=n("s4An");function D(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Object(T.a)(e,t)}var R=n("JX7q"),M=function(e,t){return e===t};var z=function(e,t){var n;void 0===t&&(t=M);var o,r=[],i=!1,a=function(e,n){return t(e,r[n])};return function(){for(var t=arguments.length,l=new Array(t),c=0;c<t;c++)l[c]=arguments[c];return i&&n===this&&l.length===r.length&&l.every(a)||(o=e.apply(this,l),i=!0,n=this,r=l),o}},F=(n("zLVn"),"object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()});function _(e){cancelAnimationFrame(e.id)}function L(e,t){var n=F();var o={id:requestAnimationFrame((function r(){F()-n>=t?e.call(null):o.id=requestAnimationFrame(r)}))};return o}var P=null;function W(e){if(void 0===e&&(e=!1),null===P||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var o=document.createElement("div"),r=o.style;return r.width="100px",r.height="100px",t.appendChild(o),document.body.appendChild(t),t.scrollLeft>0?P="positive-descending":(t.scrollLeft=1,P=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),P}return P}var A=function(e,t){return e};function B(e){var t,n,o=e.getItemOffset,i=e.getEstimatedTotalSize,a=e.getItemSize,l=e.getOffsetForIndexAndAlignment,c=e.getStartIndexForOffset,s=e.getStopIndexForStartIndex,u=e.initInstanceProps,d=e.shouldResetStyleCacheOnItemSizeChange,f=e.validateProps;return n=t=function(e){function t(t){var n;return(n=e.call(this,t)||this)._instanceProps=u(n.props,Object(R.a)(Object(R.a)(n))),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:Object(R.a)(Object(R.a)(n)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=z((function(e,t,o,r){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:o,visibleStopIndex:r})})),n._callOnScroll=void 0,n._callOnScroll=z((function(e,t,o){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:o})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,r=n.props,i=r.direction,l=r.itemSize,c=r.layout,s=n._getItemStyleCache(d&&l,d&&c,d&&i);if(s.hasOwnProperty(e))t=s[e];else{var u,f=o(n.props,e,n._instanceProps),m=a(n.props,e,n._instanceProps),h="horizontal"===i||"horizontal"===c;s[e]=((u={position:"absolute"})["rtl"===i?"right":"left"]=h?f:0,u.top=h?0:f,u.height=h?"100%":m,u.width=h?m:"100%",t=u)}return t},
n._getItemStyleCache=void 0,n._getItemStyleCache=z((function(e,t,n){return{}})),n._onScrollHorizontal=function(e){var t=e.currentTarget,o=t.clientWidth,r=t.scrollLeft,i=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===r)return null;var t=n.props.direction,a=r;if("rtl"===t)switch(W()){case"negative":a=-r;break;case"positive-descending":a=i-o-r}return a=Math.max(0,Math.min(a,i-o)),{isScrolling:!0,scrollDirection:e.scrollOffset<r?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,o=t.clientHeight,r=t.scrollHeight,i=t.scrollTop;n.setState((function(e){if(e.scrollOffset===i)return null;var t=Math.max(0,Math.min(i,r-o));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&_(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=L(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}D(t,e),t.getDerivedStateFromProps=function(e,t){return H(e,t),f(e),null};var n=t.prototype;return n.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},n.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,o=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(l(this.props,e,t,o,this._instanceProps))},n.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,o=e.layout;if("number"==typeof n&&null!=this._outerRef){var r=this._outerRef;"horizontal"===t||"horizontal"===o?r.scrollLeft=n:r.scrollTop=n}this._callPropsCallbacks()},n.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,o=this.state,r=o.scrollOffset;if(o.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(W()){case"negative":i.scrollLeft=-r;break;case"positive-ascending":i.scrollLeft=r;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-r}else i.scrollLeft=r;else i.scrollTop=r}this._callPropsCallbacks()},n.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&_(this._resetIsScrollingTimeoutId)},n.render=function(){
var e=this.props,t=e.children,n=e.className,o=e.direction,a=e.height,l=e.innerRef,c=e.innerElementType,s=e.innerTagName,u=e.itemCount,d=e.itemData,f=e.itemKey,m=void 0===f?A:f,h=e.layout,v=e.outerElementType,b=e.outerTagName,p=e.style,g=e.useIsScrolling,O=e.width,S=this.state.isScrolling,j="horizontal"===o||"horizontal"===h,w=j?this._onScrollHorizontal:this._onScrollVertical,C=this._getRangeToRender(),E=C[0],y=C[1],I=[];if(u>0)for(var N=E;N<=y;N++)I.push(Object(r.createElement)(t,{data:d,key:m(N,d),index:N,isScrolling:g?S:void 0,style:this._getItemStyle(N)}));var k=i(this.props,this._instanceProps);return Object(r.createElement)(v||b||"div",{className:n,onScroll:w,ref:this._outerRefSetter,style:Object(x.a)({position:"relative",height:a,width:O,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},p)},Object(r.createElement)(c||s||"div",{children:I,ref:l,style:{height:j?"100%":k,pointerEvents:S?"none":void 0,width:j?k:"100%"}}))},n._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],o=e[2],r=e[3];this._callOnItemsRendered(t,n,o,r)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,c=i.scrollUpdateWasRequested;this._callOnScroll(a,l,c)}},n._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,o=this.state,r=o.isScrolling,i=o.scrollDirection,a=o.scrollOffset;if(0===t)return[0,0,0,0];var l=c(this.props,a,this._instanceProps),u=s(this.props,l,a,this._instanceProps),d=r&&"backward"!==i?1:Math.max(1,n),f=r&&"forward"!==i?1:Math.max(1,n);return[Math.max(0,l-d),Math.max(0,Math.min(t-1,u+f)),l,u]},t}(r.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var H=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},q=B({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,o){var r=e.direction,i=e.height,a=e.itemCount,l=e.itemSize,c=e.layout,s=e.width,u="horizontal"===r||"horizontal"===c?s:i,d=Math.max(0,a*l-u),f=Math.min(d,t*l),m=Math.max(0,t*l-u+l);switch("smart"===n&&(n=o>=m-u&&o<=f+u?"auto":"center"),n){case"start":return f;case"end":return m;case"center":var h=Math.round(m+(f-m)/2);return h<Math.ceil(u/2)?0:h>d+Math.floor(u/2)?d:h;case"auto":default:return o>=m&&o<=f?o:o<m?m:f}},getStartIndexForOffset:function(e,t){var n=e.itemCount,o=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/o)))},getStopIndexForStartIndex:function(e,t,n){var o=e.direction,r=e.height,i=e.itemCount,a=e.itemSize,l=e.layout,c=e.width,s=t*a,u="horizontal"===o||"horizontal"===l?c:r,d=Math.ceil((u+n-s)/a);return Math.max(0,Math.min(i-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}})
;var U=n("cvc5"),Q=n.n(U),Y=n("Ialn");var V=n("8d0Q"),J={onMouseOver:function(){},onMouseOut:function(){}};var X=n("Hr11"),G=n("0lTl");function K(e){var t,n,o=e.size,a=e.scrollSize,c=e.clientSize,s=e.scrollProgress,u=e.onScrollProgressChange,d=e.horizontal,f=e.theme,h=void 0===f?G:f,v=e.onDragStart,b=e.onDragEnd,p=e.minBarSize,g=void 0===p?40:p,O=Object(r.useRef)(null),S=Object(r.useRef)(null),j=Object(r.useState)(!1),w=j[0],C=j[1],E=Object(r.useRef)(0);Object(r.useEffect)((function(){if(w){v&&v();var e=Object(l.ensureNotNull)(O.current).ownerDocument;e&&(e.addEventListener("mousemove",T),e.addEventListener("mouseup",D))}else b&&b();return function(){var e=Object(l.ensureNotNull)(O.current).ownerDocument;e&&(e.removeEventListener("mousemove",T),e.removeEventListener("mouseup",D))}}),[w]);var y=o/a||0,I=c*y||0,N=Math.max(I,g),k=(o-N)/(o-I),x=function(e){if(Object(Y.isRtl)()&&d)return e-a+c;return e}(Object(X.clamp)(s,0,a-o));return i.a.createElement("div",{ref:O,className:m()(h.wrap,d&&h["wrap--horizontal"]),style:(t={},t[d?"width":"height"]=o,t),onMouseDown:function(e){if(e.isDefaultPrevented())return;e.preventDefault();var t=Object(l.ensureNotNull)(S.current).getBoundingClientRect();E.current=(d?t.width:t.height)/2;var n=a-o,r=R(e.nativeEvent,Object(l.ensureNotNull)(O.current))-E.current;r<0?(r=0,E.current=R(e.nativeEvent,Object(l.ensureNotNull)(O.current))):r>n*y*k&&(r=n*y*k,E.current=R(e.nativeEvent,Object(l.ensureNotNull)(O.current))-r);u(r/y/k),C(!0)}},i.a.createElement("div",{ref:S,className:m()(h.bar,d&&h["bar--horizontal"]),style:(n={},n[d?"minWidth":"minHeight"]=g,n[d?"width":"height"]=N,n.transform="translate"+(d?"X":"Y")+"("+(x*y*k||0)+"px)",n),onMouseDown:function(e){e.preventDefault(),E.current=R(e.nativeEvent,Object(l.ensureNotNull)(S.current)),C(!0)}},i.a.createElement("div",{className:m()(h.barInner,d&&h["barInner--horizontal"])})));function T(e){var t=R(e,Object(l.ensureNotNull)(O.current))-E.current;u(t/y/k)}function D(e){C(!1)}function R(e,t){var n=t.getBoundingClientRect();return d?e.clientX-n.left:e.clientY-n.top}}var Z=n("ya27");function $(e){var t=e.reference,n=e.className,a=e.containerHeight,l=void 0===a?0:a,c=e.containerWidth,s=void 0===c?0:c,u=e.contentHeight,d=void 0===u?0:u,m=e.contentWidth,h=void 0===m?0:m,v=e.scrollPosTop,b=void 0===v?0:v,p=e.scrollPosLeft,g=void 0===p?0:p,O=e.onVerticalChange,S=e.onHorizontalChange,j=e.visible,w=Object(V.b)(),C=w[0],E=w[1],y=Object(r.useState)(!1),I=y[0],N=y[1],k=l<d,x=s<h,T=k&&x?8:0;return i.a.createElement("div",Object(o.a)({},E,{ref:t,className:f(n,Z.scrollWrap),style:{visibility:j||C||I?"visible":"hidden"}}),k&&i.a.createElement(K,{size:l-T,scrollSize:d-T,clientSize:l-T,scrollProgress:b,onScrollProgressChange:function(e){O&&O(e)},onDragStart:D,onDragEnd:R}),x&&i.a.createElement(K,{size:s-T,scrollSize:h-T,clientSize:s-T,scrollProgress:g,onScrollProgressChange:function(e){S&&S(e)},onDragStart:D,onDragEnd:R,horizontal:!0}));function D(){N(!0)}function R(){N(!1)}}var ee=n("8h+f");function te(e){
var t=e.className,n=e.onScroll,a=e.onTouchStart,c=e.reference,s=e.children,d=e.scrollbar,f=Object(o.e)(e,["className","onScroll","onTouchStart","reference","children","scrollbar"]),h=function(){var e=Object(r.useState)(null),t=e[0],n=e[1];return[Object(r.useCallback)((function(e){e.width===(null==t?void 0:t.width)&&e.height===t.height||n(e)}),[t]),t]}(),v=h[0],b=h[1],p=function(e){var t=Object(r.useRef)(null),n=e||Object(r.useRef)(null),i=Object(V.b)(),a=i[0],c=i[1],s=Object(r.useState)({reference:t,containerHeight:0,containerWidth:0,contentHeight:0,contentWidth:0,scrollPosTop:0,scrollPosLeft:0,onVerticalChange:function(e){f((function(t){return Object(o.a)(Object(o.a)({},t),{scrollPosTop:e})})),Object(l.ensureNotNull)(n.current).scrollTop=e},onHorizontalChange:function(e){f((function(t){return Object(o.a)(Object(o.a)({},t),{scrollPosLeft:e})})),Object(l.ensureNotNull)(n.current).scrollLeft=e},visible:a}),d=s[0],f=s[1],m=Object(r.useCallback)((function(){if(n.current){var e=n.current,r=e.clientHeight,i=e.scrollHeight,a=e.scrollTop,l=e.clientWidth,c=e.scrollWidth,s=e.scrollLeft,u=t.current?t.current.offsetTop:0;f((function(e){return Object(o.a)(Object(o.a)({},e),{containerHeight:r-u,contentHeight:i-u,scrollPosTop:a,containerWidth:l,contentWidth:c,scrollPosLeft:s})}))}}),[]);function h(){f((function(e){return Object(o.a)(Object(o.a)({},e),{scrollPosTop:Object(l.ensureNotNull)(n.current).scrollTop,scrollPosLeft:Object(l.ensureNotNull)(n.current).scrollLeft})}))}return Object(r.useEffect)((function(){a&&m(),f((function(e){return Object(o.a)(Object(o.a)({},e),{visible:a})}))}),[a]),Object(r.useEffect)((function(){return n.current&&n.current.addEventListener("scroll",h),function(){n.current&&n.current.removeEventListener("scroll",h)}}),[n]),[d,u.CheckMobile.any()?J:c,n,m]}(),g=p[0],O=p[1],S=p[2],j=p[3];return Object(r.useEffect)((function(){var e=function(){};return u.isFF?(document.addEventListener("wheel",(function(){return e})),function(){document.removeEventListener("wheel",e)}):e}),[]),i.a.createElement(Q.a,{onMeasure:v},i.a.createElement("div",Object(o.a)({},"overlay"===d&&O,{className:m()(ee.container,t),onTouchStart:a,onScroll:n}),"overlay"===d&&i.a.createElement($,Object(o.a)({},g,{className:ee.overlayScrollWrap})),i.a.createElement(q,Object(o.a)({ref:c,className:m()("native"===d?ee.scroll:ee.list),outerRef:"overlay"===d?S:void 0,onItemsRendered:j,layout:"vertical",width:"100%",height:(null==b?void 0:b.height)||0,children:s,direction:Object(Y.isRtl)()?"rtl":"ltr"},f))))}var ne=n("ldgD"),oe=n.n(ne),re=n("mNbo");var ie=n("dTSQ"),ae=n("pr86"),le=n("i/MG"),ce=n("xp8i");function se(e){var t=e.searchString,n=e.text,o=e.isActive;if(!t)return i.a.createElement(i.a.Fragment,null,n);var a=Object(r.useMemo)((function(){return n.split(new RegExp("("+Object(ie.regExpEscape)(t)+")","i"))}),[t]);return i.a.createElement(i.a.Fragment,null,a.map((function(e,t){return t%2?i.a.createElement("span",{key:t,className:m()(ce.highlight,o&&ce.active)},e):i.a.createElement(i.a.Fragment,{key:t},e)})))}function ue(e){
var t=e.url,n=e.title,r=e.renderTitle,a=e.subtitle,l=e.removeBtnLabel,c=e.onClick,s=e.onClickFavorite,d=e.onClickRemove,f=e.isActive,h=e.isSelected,v=e.isFavorite,b=e.isMobile,p=void 0!==b&&b,g=e.showFavorite,O=void 0===g||g,S=Object(o.e)(e,["url","title","renderTitle","subtitle","removeBtnLabel","onClick","onClickFavorite","onClickRemove","isActive","isSelected","isFavorite","isMobile","showFavorite"]);return i.a.createElement("a",Object(o.a)({},S,{className:m()(ce.itemRow,f&&!h&&ce.active,p&&ce.mobile,h&&ce.selected),onClick:de.bind(null,c),href:t,"data-role":"list-item","data-active":f}),O&&s&&i.a.createElement(ae.a,{className:m()(ce.favoriteButton,v&&ce.favorite,u.CheckMobile.any()&&ce.mobile),isActive:f&&!h,isFilled:v,onClick:de.bind(null,s),"data-name":"list-item-favorite-button","data-favorite":v}),i.a.createElement("div",{className:m()(ce.itemInfo,!O&&ce.itemInfoWithPadding)},i.a.createElement("div",{className:m()(ce.title,f&&!h&&ce.active,p&&ce.mobile),"data-name":"list-item-title"},r||n),i.a.createElement("div",{className:m()(ce.details,f&&!h&&ce.active,p&&ce.mobile)},a)),i.a.createElement(le.a,{className:ce.removeButton,isActive:f&&!h,onClick:de.bind(null,d),"data-name":"list-item-remove-button",title:l}))}function de(e,t){t.defaultPrevented||(t.preventDefault(),e(t))}var fe=n("pPtI"),me=n("+EG+"),he=n("fZEr");var ve=Object(c.t)("Do you really want to delete Chart Layout '{0}' ?");function be(e){var t;try{t=Object(fe.getTranslatedResolution)(e)}catch(n){t=e}return t}function pe(e){var t=e.chart,n=e.chartWidgetCollection,a=(e.trackEvent,e.localFavorites),l=(e.onClose,e.searchString),c=e.onClickRemove,s=e.onRemoveCanceled,u=e.isSelected,d=Object(r.useState)((function(){return t.active()})),f=d[0],m=d[1],h=function(e){var t=e.chartId?"/chart/"+e.chartId+"/":"/chart/",n=new URL(t,location.href);return e.symbol&&n.searchParams.append("symbol",e.symbol),e.interval&&n.searchParams.append("interval",e.interval),e.style&&n.searchParams.append("style",e.style),Object(re.b)(n.href)}({chartId:t.url}),v=Object(r.useContext)(me.b);return Object(r.useEffect)((function(){return n&&n.metaInfo.id.subscribe(p),function(){n&&n.metaInfo.id.unsubscribe(p)}}),[]),i.a.createElement(ue,{url:h,title:i.a.createElement(se,{searchString:l,isActive:f,text:t.title}),subtitle:i.a.createElement(i.a.Fragment,null,i.a.createElement(se,{searchString:l,isActive:f,text:t.symbol}),", ",i.a.createElement(se,{searchString:l,isActive:f,text:be(t.interval)})," ","(",oe.a.unix(t.modified).format("DD.MM.YYYY HH:mm"),")"),onClick:function(e){0;t.openAction(),!1},onClickFavorite:function(){0;var e=Object(o.a)({},a);e[t.id]?delete e[t.id]:e[t.id]=!0;t.favoriteAction(e)},onClickRemove:function(){!function(e,t,n,o){Object(he.a)({text:e,onConfirm:function(e){var n=e.dialogClose;t(),n()},onClose:function(){n()}},o)}(ve.format(t.title),b,s,v)},isFavorite:Boolean(a[t.id]),isActive:f,isSelected:u,"data-name":"load-chart-dialog-item"});function b(){t.deleteAction().then((function(){return c(t.id)}))}function p(e){m(t.id===e)}}var ge=n("tWVy"),Oe=n("/3z9")
;var Se,je,we,Ce,Ee,ye=n("YCUu"),Ie={sortField:"modified",sortDirection:1},Ne=(je=(Se={paddingBottom:6}).paddingTop,we=void 0===je?0:je,Ce=Se.paddingBottom,Ee=void 0===Ce?0:Ce,Object(r.forwardRef)((function(e,t){var n=e.style,r=Object(o.e)(e,["style"]),a=n.height,l=void 0===a?0:a;return i.a.createElement("div",Object(o.a)({ref:t,style:Object(o.a)(Object(o.a)({},n),{height:(Object(k.isNumber)(l)?l:parseFloat(l))+we+Ee+"px"})},r))})));function ke(e){var t=e.charts,n=e.onClose,a=e.favoriteChartsService,c=e.chartWidgetCollection,f=Object(r.useState)(""),m=f[0],h=f[1],v=Object(r.useState)(m),b=v[0],p=v[1],g=Object(r.useState)([]),O=g[0],j=g[1],w=Object(r.useRef)(null),y=Object(r.useState)((function(){return a.get()})),k=y[0],x=y[1],T=Object(r.useState)((function(){return s.getJSON("loadChartDialog.viewState",Ie)})),D=T[0],R=T[1],M=Object(r.useRef)(null),z=Object(r.useRef)(null);Object(r.useEffect)((function(){u.CheckMobile.any()||Object(l.ensureNotNull)(M.current).focus()}),[]);var F=Object(r.useRef)();Object(r.useEffect)((function(){return F.current=setTimeout((function(){h(b)}),300),function(){clearTimeout(F.current)}}),[b]),Object(r.useEffect)((function(){return a.getOnChange().subscribe(null,Y),function(){a.getOnChange().unsubscribe(null,Y)}}),[]);var _=Object(r.useCallback)((function(){return!0}),[]),L=Object(r.useMemo)((function(){return Object(o.f)(t).sort((e=D.sortDirection,function(t,n){if(k[t.id]&&!k[n.id])return-1;if(!k[t.id]&&k[n.id])return 1;var o=0===e?1:-1;return"modified"===D.sortField?o*(t.modified-n.modified):o*t.title.localeCompare(n.title)})).filter((function(e){return!O.includes(e.id)&&(J(e.title)||J(e.symbol)||J(be(e.interval)))}));var e}),[m,D,O,k]),P=function(e,t,n){var o=Object(r.useState)(-1),i=o[0],a=o[1];return Object(r.useEffect)((function(){var e;-1!==i&&(null===(e=n.current)||void 0===e||e.scrollToItem(i))}),[i]),{selectedItemIndex:i,setSelectedItemIndex:a,handleKeyboardSelection:function(n){switch(Object(Oe.hashFromEvent)(n)){case 40:if(i===e-1)return;a(i+1);break;case 38:if(0===i)return;if(-1===i)return void a(i+1);a(i-1);break;case 13:t(n)}}}}(L.length,(function(e){var t=L[W];if(-1===W||!t)return;0;t.openAction(),!1}),z),W=P.selectedItemIndex,A=P.setSelectedItemIndex,B=P.handleKeyboardSelection;return i.a.createElement(d.a,{ref:w,onClose:n,onClickOutside:n,onKeyDown:B,isOpened:!0,className:ye.dialog,title:window.t("Load layout"),dataName:"load-layout-dialog",render:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{reference:M,onChange:q,placeholder:window.t("Search")}),i.a.createElement(I,null,i.a.createElement(N,{title:window.t("Layout name")}),i.a.createElement(S,{sortDirection:D.sortDirection,title:window.t("Sort by layout name, date changed"),"data-name":"load-chart-dialog-sort-button"},i.a.createElement(C,{label:window.t("Layout name (A to Z)"),listSortField:D.sortField,itemSortField:"title",listSortDirection:D.sortDirection,itemSortDirection:0,onClick:X,"data-name":"load-chart-dialog-sort-menu-item"}),i.a.createElement(C,{
label:window.t("Layout name (Z to A)"),listSortField:D.sortField,itemSortField:"title",listSortDirection:D.sortDirection,itemSortDirection:1,onClick:X,"data-name":"load-chart-dialog-sort-menu-item"}),i.a.createElement(C,{label:window.t("Date modified (oldest first)"),listSortField:D.sortField,itemSortField:"modified",listSortDirection:D.sortDirection,itemSortDirection:0,onClick:X,"data-name":"load-chart-dialog-sort-menu-item"}),i.a.createElement(C,{label:window.t("Date modified (newest first)"),listSortField:D.sortField,itemSortField:"modified",listSortDirection:D.sortDirection,itemSortDirection:1,onClick:X,"data-name":"load-chart-dialog-sort-menu-item"}))),i.a.createElement(te,{scrollbar:"native",reference:z,itemCount:L.length,itemSize:52,className:ye.contentList,onScroll:H,innerElementType:Ne,itemKey:function(e){return(k[L[e].id]?"f_":"")+L[e].id},children:function(e){var t=e.style,o=e.index;return i.a.createElement("div",{style:t},i.a.createElement(pe,{chart:L[o],onClose:n,chartWidgetCollection:c,trackEvent:U,onRemoveCanceled:V,localFavorites:k,searchString:m,onClickRemove:Q,isSelected:o===W}))}}))},forceCloseOnEsc:_});function H(){ge.a.fire()}function q(e){var t=e.currentTarget.value;p(t),A(-1)}function U(e){0}function Q(e){j(Object(o.f)([e],O))}function Y(e){x(e)}function V(){Object(l.ensureNotNull)(w.current).focus()}function J(e){return e.toLowerCase().includes(m.toLowerCase())}function X(e,t){var n={sortField:e,sortDirection:t};R(n),s.setValue("loadChartDialog.viewState",JSON.stringify(n),{forceFlush:!0}),U()}}var xe=n("sQaR");n.d(t,"LoadChartDialogRenderer",(function(){return Te}));var Te=function(e){function t(t){var n=e.call(this)||this;return n._options=t,n}return Object(o.c)(t,e),t.prototype.show=function(){var e=this;a.render(r.createElement(ke,Object(o.a)({},this._options,{onClose:function(){return e.hide()}})),this._container),this._setVisibility(!0)},t.prototype.hide=function(){a.unmountComponentAtNode(this._container),this._setVisibility(!1)},t}(xe.a)},H2qI:function(e,t,n){e.exports={container:"container-3Qk84Vpk",labelWrap:"labelWrap-1kffAsJL",icon:"icon-3s9Fy0WO",text:"text-1ie73mtL"}},HjiN:function(e,t,n){e.exports={sortButton:"sortButton-16hjqEoU",icon:"icon-2nbSQjFT"}},IePd:function(e,t,n){e.exports={container:"container-1oGzHiUj",title:"title-2FsC4R5h"}},Iksw:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var o,r,i,a,l=n("Eyy1");!function(e){e[e.Top=0]="Top",e[e.Bottom=1]="Bottom"}(o||(o={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.FromTopToBottom=0]="FromTopToBottom",e[e.FromBottomToTop=1]="FromBottomToTop"}(i||(i={})),function(e){e[e.FromLeftToRight=0]="FromLeftToRight",e[e.FromRightToLeft=1]="FromRightToLeft"}(a||(a={}));var c={verticalAttachEdge:o.Bottom,horizontalAttachEdge:r.Left,verticalDropDirection:i.FromTopToBottom,horizontalDropDirection:a.FromLeftToRight,verticalMargin:0,horizontalMargin:0};function s(e,t){return function(n,s){
var u=Object(l.ensureNotNull)(e).getBoundingClientRect(),d=t.verticalAttachEdge,f=void 0===d?c.verticalAttachEdge:d,m=t.verticalDropDirection,h=void 0===m?c.verticalDropDirection:m,v=t.horizontalAttachEdge,b=void 0===v?c.horizontalAttachEdge:v,p=t.horizontalDropDirection,g=void 0===p?c.horizontalDropDirection:p,O=t.horizontalMargin,S=void 0===O?c.horizontalMargin:O,j=t.verticalMargin,w=void 0===j?c.verticalMargin:j,C=f===o.Top?-1*w:w,E=b===r.Right?u.right:u.left,y=f===o.Top?u.top:u.bottom;return{x:E-(g===a.FromRightToLeft?n:0)+S,y:y-(h===i.FromBottomToTop?s:0)+C}}}},N5tr:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n("mrSG"),r=n("q1tI"),i=n.n(r),a=n("TSYQ"),l=n("tWVy"),c=n("JWMC"),s=n("QpNh"),u=n("v1bN"),d=u;function f(e){var t=e.reference,n=Object(o.e)(e,["reference"]),r=Object(o.a)(Object(o.a)({},n),{ref:t});return i.a.createElement(e.href?"a":"div",r)}function m(e){e.stopPropagation()}function h(e){var t,n,d,h=e.className,v=e.title,b=e.labelRowClassName,p=e.shortcut,g=e.forceShowShortcuts,O=e.icon,S=e.isActive,j=e.isDisabled,w=e.isHovered,C=e.appearAsDisabled,E=e.label,y=e.link,I=e.showToolboxOnHover,N=e.target,k=e.toolbox,x=e.reference,T=e.onMouseOut,D=e.onMouseOver,R=e.theme,M=void 0===R?u:R,z=Object(s.a)(e),F=Object(r.useRef)(null);return i.a.createElement(f,Object(o.a)({},z,{className:a(h,M.item,O&&M.withIcon,(t={},t[M.isActive]=S,t[M.isDisabled]=j||C,t[M.hovered]=w,t)),title:v,href:y,target:N,reference:function(e){F.current=e,x&&x(e)},onClick:function(t){var n=e.dontClosePopup,o=e.onClick,r=e.onClickArg,i=e.trackEventObject;if(j)return;i&&Object(c.trackEvent)(i.category,i.event,i.label);o&&o(r,t);n||Object(l.b)()},onContextMenu:function(t){var n=e.trackEventObject,o=e.trackRightClick;n&&o&&Object(c.trackEvent)(n.category,n.event,n.label+"_rightClick")},onMouseUp:function(t){var n=e.trackEventObject,o=e.trackMouseWheelClick;if(1===t.button&&y&&n){var r=n.label;o&&(r+="_mouseWheelClick"),Object(c.trackEvent)(n.category,n.event,r)}},onMouseOver:D,onMouseOut:T}),void 0!==O&&i.a.createElement("div",{className:M.icon,dangerouslySetInnerHTML:{__html:O}}),i.a.createElement("div",{className:a(M.labelRow,b)},i.a.createElement("div",{className:M.label},E)),(void 0!==p||g)&&i.a.createElement("div",{className:M.shortcut},(d=p)&&d.split("+").join(" + ")),void 0!==k&&i.a.createElement("div",{onClick:m,className:a(M.toolbox,(n={},n[M.showOnHover]=I,n))},k))}},To8B:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'},UjII:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>'},YCUu:function(e,t,n){e.exports={dialog:"dialog-1M68axew",
contentList:"contentList-VpXJB1aY"}},e5nO:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>'},"i/MG":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("mrSG"),r=(n("YFKU"),n("q1tI")),i=n("TSYQ"),a=n("Iivm"),l=n("To8B"),c=n("kXJy"),s={remove:window.t("Remove")};function u(e){var t=e.className,n=e.isActive,u=e.onClick,d=e.title,f=e.hidden,m=e["data-name"],h=void 0===m?"remove-button":m,v=Object(o.e)(e,["className","isActive","onClick","title","hidden","data-name"]);return r.createElement(a.a,Object(o.a)({},v,{"data-name":h,className:i(c.button,"apply-common-tooltip",n&&c.active,f&&c.hidden,t),icon:l,onClick:u,title:d||s.remove}))}},kXJy:function(e,t,n){e.exports={button:"button-1scLo53s",disabled:"disabled-2eJ5fvUz",active:"active-2T0ofIIp",hidden:"hidden-2GRQzIQ1"}},v1bN:function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 419px)",item:"item-2xPVYue0",hovered:"hovered-1uf45E05",isDisabled:"isDisabled-1wLqKupj",isActive:"isActive-2j-GhQs_",shortcut:"shortcut-30pveiCO",toolbox:"toolbox-3ulPxfe-",withIcon:"withIcon-1xBjf-oB",icon:"icon-2Qm7YIcz",labelRow:"labelRow-3Q0rdE8-",label:"label-3Xqxy756",showOnHover:"showOnHover-1q6ySzZc"}},xp8i:function(e,t,n){e.exports={itemRow:"itemRow-3JQtg1cT",favoriteButton:"favoriteButton-1yjXmqy0",active:"active-2Ne8Zyok",selected:"selected-gF909i3a",mobile:"mobile-3cRbBpAw",itemInfo:"itemInfo-3NQvH05Z",title:"title-utNMTX_N",details:"details-1rOd8IMz",highlight:"highlight-3BtgMHlt",itemInfoWithPadding:"itemInfoWithPadding-2CZUseHM",favorite:"favorite-3iQ0dczX",removeButton:"removeButton-1FahXcg8"}},ya27:function(e,t,n){e.exports={scrollWrap:"scrollWrap-2ycJ5xsk"}}}]);