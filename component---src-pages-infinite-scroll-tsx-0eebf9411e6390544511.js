"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[180],{5714:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(7294),u=r(2982),a=function(){var e=(0,n.useState)("test"),t=e[0],r=e[1],a=(0,n.useState)(1),o=a[0],c=a[1],s=function(e,t){var r=(0,n.useState)(!0),a=r[0],o=r[1],c=(0,n.useState)(!1),s=c[0],l=c[1],i=(0,n.useState)([]),d=i[0],f=i[1],p=(0,n.useState)(!1),m=p[0],b=p[1],g=new Array(60).fill("hello");return(0,n.useEffect)((function(){f([])}),[e]),(0,n.useEffect)((function(){o(!0),l(!1);var e=setTimeout((function(){f((function(e){return[].concat((0,u.Z)(e),(0,u.Z)(g))})),b(!0),o(!1)}),3e3);return function(){clearTimeout(e)}}),[e,t]),{loading:a,error:s,data:d,hasMore:m}}(t,o),l=s.data,i=s.hasMore,d=s.loading,f=s.error,p=(0,n.useRef)(),m=(0,n.useCallback)((function(e){d||(p.current&&p.current.disconnect(),p.current=new IntersectionObserver((function(e){e[0].isIntersecting&&i&&c((function(e){return e+1}))})),e&&p.current.observe(e))}),[d,i]);return n.createElement("div",{className:"flex flex-col justify-center items-center pt-4"},n.createElement("input",{className:"w-[250px] shadow-lg border-[#000] border-[1px] p-4 border-solid rounded-[5px]",type:"text",value:t,placeholder:"Input something",onChange:function(e){r(e.target.value),c(1)}}),l.map((function(e,t){return l.length-1===t?n.createElement("div",{className:"my-2 w-[250px] shadow-lg border-[#000] border-[1px] border-solid rounded-[5px] p-2",ref:m,key:t},"Last Node"):n.createElement("div",{className:"my-2 w-[250px] shadow-lg border-[#000] border-[1px] rounded-[5px] border-solid p-2",key:t},e)})),n.createElement("div",null,d&&"Loading..."),n.createElement("div",null,f&&"Error"))},o=function(){return n.createElement(a,null)}}}]);
//# sourceMappingURL=component---src-pages-infinite-scroll-tsx-0eebf9411e6390544511.js.map