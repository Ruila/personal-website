"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[816],{3841:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var o=n(7294);function r(e){var t;if(console.info("event",e),console.info("getOffset",e.nativeEvent.offsetX,"xx",e.touches,"yy",e.target.getBoundingClientRect()),e.nativeEvent.offsetX)return{x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY};var n=(null===(t=e.touches)||void 0===t?void 0:t[0])||{},o=e.target.getBoundingClientRect();return{x:n.clientX-o.x,y:n.clientY-o.y}}var a=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,o.useState)(0),c=a[0],i=a[1],u=(0,o.useState)(0),s=u[0],l=u[1],f=(0,o.useRef)(null),v=function(e){var t=r(e),o=t.x,a=t.y;n(!0),i(o),l(a)},d=function(e){var n=f.current.getContext("2d");if(t){var o=r(e),a=o.x,u=o.y;n.beginPath(),n.moveTo(c,s),n.lineTo(a,u),n.stroke(),i(a),l(u)}},m=function(){n(!1)};return(0,o.useEffect)((function(){var e;(e=f.current.getContext("2d")).strokeStyle="#000",e.lineWidth=3,e.lineJoin="round",e.lineCap="round"}),[]),o.createElement("canvas",{ref:f,width:400,height:400,className:"border-[#000] border-[1px] border-solid",onTouchStart:v,onTouchMove:d,onTouchEnd:m,onTouchCancel:m,onMouseDown:v,onMouseMove:d,onMouseOut:m,onMouseUp:m})},c=function(){return o.createElement("div",{className:"min-h-[600px] flex flex-col items-center justify-center"},o.createElement("div",{className:"flex items-center mb-4"},o.createElement("img",{className:"w-[50px] h-[45px] mr-4",src:"/react-icon.png"}),o.createElement("div",{className:"text-[24px]"},"React Painting Board")),o.createElement(a,null))},i=function(){return o.createElement(c,null)}}}]);
//# sourceMappingURL=component---src-pages-paint-board-tsx-41a5d85d88916dd5d958.js.map