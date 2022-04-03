"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[864],{2586:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n,i=a(7294),c=function(){return i.createElement("div",{className:"absolute bottom-[0] w-full h-[100px] bg-[#000] mario-ground"})},s=a(396);function r(e,t,a){void 0===t&&(t=0),void 0===a&&(a=[]);var n=function(e,t){void 0===t&&(t=0);var a=(0,i.useRef)(!1),n=(0,i.useRef)(),c=(0,i.useRef)(e),s=(0,i.useCallback)((function(){return a.current}),[]),r=(0,i.useCallback)((function(){a.current=!1,n.current&&clearTimeout(n.current),n.current=setTimeout((function(){a.current=!0,c.current()}),t)}),[t]),o=(0,i.useCallback)((function(){a.current=null,n.current&&clearTimeout(n.current)}),[]);return(0,i.useEffect)((function(){c.current=e}),[e]),(0,i.useEffect)((function(){return r(),o}),[t]),[s,o,r]}(e,t),c=n[0],s=n[1],r=n[2];return(0,i.useEffect)(r,a),[c,s]}"undefined"!=typeof Audio&&(n=new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/94617/coin.mp3"));var o,b=function(e){var t=e.handleMessageBoard,c=(0,i.useState)(!1),o=c[0],b=c[1],l=r((function(){}),800,[o])[0];return i.createElement("div",{className:"absolute bottom-[200px] left-[30%] w-[40px] h-[40px] cursor-pointer",onClick:function(){t(!0),l()&&(b(!0),n.play(),setTimeout((function(){b(!1)}),800))}},i.createElement("div",{className:"w-full absolute z-[1]"},i.createElement(s.S,{className:"w-full",src:"../../images/mario_brick.png",alt:"brick",width:40,height:40,__imageData:a(1747)})),i.createElement("div",{className:"absolute top-0 flex w-full justify-center "+(o?"coin":"")},i.createElement("img",{className:"w-[25px]",src:"https://i.gifer.com/origin/50/509175766f72a32aeb3cde0de5114122_w200.gif",alt:"",id:"coin"})))},l=function(){return i.createElement(i.Fragment,null,i.createElement("img",{id:"cloud1",height:"91",width:"220",src:"https://i.pinimg.com/originals/69/3c/73/693c7325f91ceebf4cd65d7c6eccf606.png",alt:"Large Mario Cloud"}),i.createElement("img",{id:"cloud2",height:"146",width:"228",src:"https://i.pinimg.com/originals/3a/02/91/3a02910047fbe517dc20dfee72a62a6b.png"}),i.createElement("img",{id:"cloud3",height:"91",width:"220",src:"https://i.pinimg.com/originals/69/3c/73/693c7325f91ceebf4cd65d7c6eccf606.png",alt:"Large Mario Cloud"}))};"undefined"!=typeof window&&window.addEventListener("beforeinstallprompt",(function(e){console.info("beforeinstallprompt"),e.preventDefault(),o=e}));var d=function(){o&&(o.prompt(),o.userChoice.then((function(){console.info("after clicking"),o=null})))},u=function(){return i.createElement("div",{className:"absolute bottom-[100px] right-[15%] w-[100px]",id:"install_button",onClick:d},i.createElement(s.S,{src:"../../images/tile.png",alt:"",id:"coin",__imageData:a(5613)}))},m=function(){return i.createElement("div",{className:"absolute bottom-[100px] right-[25%] w-[350px]"},i.createElement(s.S,{src:"../../images/mountain.png",alt:"",id:"coin",__imageData:a(3767)}))},p=[{link:"https://www.linkedin.com/in/william-lin-5906111a0/",text:"Linkin"},{link:"https://github.com/Ruila",text:"Github"},{link:"https://www.cakeresume.com/mio3996",text:"CakeResume"}],w=function(e){var t=e.show,a=e.handleMessageBoard,n=p.map((function(e){return i.createElement("div",{className:"mb-4 flex items-center",key:e.text},i.createElement("div",{className:"mt-1 hover-effect cursor-pointer",onClick:function(){return window.open(e.link)}},e.text))}));return i.createElement("div",{className:"absolute bg-[#de5a18] message_board font-press-star text-white px-12 py-8 "+(t?"message_board_animate":"")},i.createElement("div",{className:"absolute right-0 top-1 text-[10px] text-[#fffefc8f] cursor-pointer",onClick:function(){return a(!1)}},"[X Close]"),i.createElement("div",{className:"text-base mb-8"},"Choose where you want to go :"),n)},f=function(){var e=(0,i.useState)(!1),t=e[0],a=e[1],n=function(e){a(e)};return i.createElement("div",{className:"bg-[#5e94fb] h-available relative overflow-hidden"},i.createElement(l,null),i.createElement(b,{handleMessageBoard:n}),i.createElement(u,null),i.createElement(m,null),i.createElement(w,{show:t,handleMessageBoard:n}),i.createElement(c,null))},g=function(){return i.createElement(f,null)}},1747:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#983808","images":{"fallback":{"src":"/personal-website/static/0b9b195d42003adad8736a9098275cda/fbc98/mario_brick.png","srcSet":"/personal-website/static/0b9b195d42003adad8736a9098275cda/f8bd3/mario_brick.png 4w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/22867/mario_brick.png 8w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/fbc98/mario_brick.png 16w","sizes":"(min-width: 16px) 16px, 100vw"},"sources":[{"srcSet":"/personal-website/static/0b9b195d42003adad8736a9098275cda/c3fea/mario_brick.webp 4w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/5d252/mario_brick.webp 8w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/e789a/mario_brick.webp 16w","type":"image/webp","sizes":"(min-width: 16px) 16px, 100vw"}]},"width":40,"height":40}')},5613:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/31c70/tile.png","srcSet":"/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/166e3/tile.png 148w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/636b0/tile.png 296w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/31c70/tile.png 592w","sizes":"(min-width: 592px) 592px, 100vw"},"sources":[{"srcSet":"/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/4c54c/tile.webp 148w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/b812b/tile.webp 296w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/b4880/tile.webp 592w","type":"image/webp","sizes":"(min-width: 592px) 592px, 100vw"}]},"width":592,"height":592}')},3767:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#08a808","images":{"fallback":{"src":"/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/7c192/mountain.png","srcSet":"/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/17555/mountain.png 300w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/679a0/mountain.png 601w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/7c192/mountain.png 1201w","sizes":"(min-width: 1201px) 1201px, 100vw"},"sources":[{"srcSet":"/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/f3550/mountain.webp 300w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/5b2a8/mountain.webp 601w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/57b7c/mountain.webp 1201w","type":"image/webp","sizes":"(min-width: 1201px) 1201px, 100vw"}]},"width":1201,"height":476}')}}]);
//# sourceMappingURL=component---src-pages-mario-tsx-c4defc3331abba020fd1.js.map