import{b_ as e,r as t,cE as i,e as n,d as s,a0 as r,o,i as a,b0 as d,bX as c,h as l,j as u,l as p,bw as m}from"./index.6cf10de3.js";import{_ as f}from"./index.f4b4d933.js";import"./vendor.3b1829c7.js";import"./index.4e278996.js";import"./index.16d57d04.js";import"./RightOutlined.7e972f0b.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";import"./DownOutlined.07599049.js";/* empty css              */import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";var j=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(s,{emit:o}){const a=t(null);return function(s,r,o="click"){if(e)return;const a=t(!1);function d(e){if("touchend"===e.type&&(a.value=!0),"click"===e.type&&n(a))return;const t=s.value;t&&e.target&&!t.contains(e.target)&&r(e)}i({el:document,name:"touchend",listener:d,options:!0}),i({el:document,name:o,listener:d,options:!0})}(a,(()=>{o("clickOutside")})),r((()=>{o("mounted")})),{wrap:a}}});const k={ref:"wrap"};j.render=function(e,t,i,n,s,r){return o(),a("div",k,[d(e.$slots,"default")],512)},c(j);var C=s({components:{ClickOutSide:j,PageWrapper:f},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const b=m("data-v-7a637453"),O=b(((e,t,i,n,s,r)=>{const d=l("ClickOutSide"),c=l("PageWrapper");return o(),a(c,{title:"点内外部触发事件"},{default:b((()=>[u(d,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:b((()=>[u("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},p(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));C.render=O,C.__scopeId="data-v-7a637453";export default C;