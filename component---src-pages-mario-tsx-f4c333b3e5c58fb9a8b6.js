"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[864],{7672:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var i,n=a(7294),c=function(){return n.createElement("div",{className:"absolute bottom-[0] w-full h-[100px] bg-[#000] mario-ground"})},s=a(396);function r(e,t,a){void 0===t&&(t=0),void 0===a&&(a=[]);var i=function(e,t){void 0===t&&(t=0);var a=(0,n.useRef)(!1),i=(0,n.useRef)(),c=(0,n.useRef)(e),s=(0,n.useCallback)((function(){return a.current}),[]),r=(0,n.useCallback)((function(){a.current=!1,i.current&&clearTimeout(i.current),i.current=setTimeout((function(){a.current=!0,c.current()}),t)}),[t]),b=(0,n.useCallback)((function(){a.current=null,i.current&&clearTimeout(i.current)}),[]);return(0,n.useEffect)((function(){c.current=e}),[e]),(0,n.useEffect)((function(){return r(),b}),[t]),[s,b,r]}(e,t),c=i[0],s=i[1],r=i[2];return(0,n.useEffect)(r,a),[c,s]}"undefined"!=typeof Audio&&(i=new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/94617/coin.mp3"));var b=function(e){var t=e.handleMessageBoard,c=(0,n.useState)(!1),b=c[0],o=c[1],l=r((function(){}),800,[b])[0];return n.createElement("div",{className:"absolute bottom-[200px] left-[30%] w-[40px] h-[40px] cursor-pointer",onClick:function(){t(!0),l()&&(o(!0),i.play(),setTimeout((function(){o(!1)}),800))}},n.createElement("div",{className:"w-full absolute z-[1]"},n.createElement(s.S,{className:"w-full",src:"../../images/mario_brick.png",alt:"brick",width:40,height:40,__imageData:a(1747)})),n.createElement("div",{className:"absolute top-0 flex w-full justify-center "+(b?"coin":"")},n.createElement("img",{className:"w-[25px]",src:"https://i.gifer.com/origin/50/509175766f72a32aeb3cde0de5114122_w200.gif",alt:"",id:"coin"})))},o=function(){return n.createElement(n.Fragment,null,n.createElement("img",{id:"cloud1",height:"91",width:"220",src:"https://i.pinimg.com/originals/69/3c/73/693c7325f91ceebf4cd65d7c6eccf606.png",alt:"Large Mario Cloud"}),n.createElement("img",{id:"cloud2",height:"146",width:"228",src:"https://i.pinimg.com/originals/3a/02/91/3a02910047fbe517dc20dfee72a62a6b.png"}),n.createElement("img",{id:"cloud3",height:"91",width:"220",src:"https://i.pinimg.com/originals/69/3c/73/693c7325f91ceebf4cd65d7c6eccf606.png",alt:"Large Mario Cloud"}))},l=function(){return n.createElement("div",{className:"absolute bottom-[100px] right-[15%] w-[100px]"},n.createElement(s.S,{src:"../../images/tile.png",alt:"",id:"coin",__imageData:a(5613)}))},d=function(){return n.createElement("div",{className:"absolute bottom-[100px] right-[25%] w-[350px]"},n.createElement(s.S,{src:"../../images/mountain.png",alt:"",id:"coin",__imageData:a(3767)}))},u=[{link:"https://www.linkedin.com/in/william-lin-5906111a0/",text:"Linkin"},{link:"https://github.com/Ruila",text:"Github"},{link:"https://www.cakeresume.com/mio3996",text:"CakeResume"}],m=function(e){var t=e.show,a=e.handleMessageBoard,i=u.map((function(e){return n.createElement("div",{className:"mb-4 flex items-center",key:e.text},n.createElement("div",{className:"mt-1 hover-effect cursor-pointer",onClick:function(){return window.open(e.link)}},e.text))}));return n.createElement("div",{className:"absolute bg-[#de5a18] message_board font-press-star text-white px-12 py-8 "+(t?"message_board_animate":"")},n.createElement("div",{className:"absolute right-0 top-1 text-[10px] text-[#fffefc8f] cursor-pointer",onClick:function(){return a(!1)}},"[X Close]"),n.createElement("div",{className:"text-base mb-8"},"Profile"),i)},p=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1],i=function(e){a(e)};return n.createElement("div",{className:"bg-[#5e94fb] h-available relative overflow-hidden"},n.createElement(o,null),n.createElement(b,{handleMessageBoard:i}),n.createElement(l,null),n.createElement(d,null),n.createElement(m,{show:t,handleMessageBoard:i}),n.createElement(c,null))},w=function(){return n.createElement(p,null)}},1747:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#983808","images":{"fallback":{"src":"/personal-website/static/0b9b195d42003adad8736a9098275cda/fbc98/mario_brick.png","srcSet":"/personal-website/static/0b9b195d42003adad8736a9098275cda/f8bd3/mario_brick.png 4w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/22867/mario_brick.png 8w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/fbc98/mario_brick.png 16w","sizes":"(min-width: 16px) 16px, 100vw"},"sources":[{"srcSet":"/personal-website/static/0b9b195d42003adad8736a9098275cda/c3fea/mario_brick.webp 4w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/5d252/mario_brick.webp 8w,\\n/personal-website/static/0b9b195d42003adad8736a9098275cda/e789a/mario_brick.webp 16w","type":"image/webp","sizes":"(min-width: 16px) 16px, 100vw"}]},"width":40,"height":40}')},5613:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/31c70/tile.png","srcSet":"/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/166e3/tile.png 148w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/636b0/tile.png 296w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/31c70/tile.png 592w","sizes":"(min-width: 592px) 592px, 100vw"},"sources":[{"srcSet":"/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/4c54c/tile.webp 148w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/b812b/tile.webp 296w,\\n/personal-website/static/3c7d60502ebd55a83840beb0aba5b7c5/b4880/tile.webp 592w","type":"image/webp","sizes":"(min-width: 592px) 592px, 100vw"}]},"width":592,"height":592}')},3767:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#08a808","images":{"fallback":{"src":"/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/7c192/mountain.png","srcSet":"/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/17555/mountain.png 300w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/679a0/mountain.png 601w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/7c192/mountain.png 1201w","sizes":"(min-width: 1201px) 1201px, 100vw"},"sources":[{"srcSet":"/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/f3550/mountain.webp 300w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/5b2a8/mountain.webp 601w,\\n/personal-website/static/b13b2ac2bd72c79d631cb5a3039ab01e/57b7c/mountain.webp 1201w","type":"image/webp","sizes":"(min-width: 1201px) 1201px, 100vw"}]},"width":1201,"height":476}')}}]);
//# sourceMappingURL=component---src-pages-mario-tsx-f4c333b3e5c58fb9a8b6.js.map