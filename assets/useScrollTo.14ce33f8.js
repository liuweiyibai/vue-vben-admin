import{r as o,bs as t,e as a,ak as r}from"./index.899e68b1.js";import{r as s}from"./animation.ce68d404.js";function n({el:n,to:e,duration:c=500,callback:l}){const i=o(!1),u=(o=>o.scrollTop)(n),p=e-u;let f=0;c=t(c)?500:c;const m=function(){if(!a(i))return;f+=20;const o=(t=f,e=u,b=p,(t/=c/2)<1?b/2*t*t+e:-b/2*(--t*(t-2)-1)+e);var t,e,b;((o,t)=>{o.scrollTop=t})(n,o),f<c&&a(i)?s(m):l&&r(l)&&l()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};