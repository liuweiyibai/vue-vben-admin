import{d as e,bh as n,O as t,H as a,s,f as i,i as d,o as r,j as l,y as o,w as u,k as c,Q as m,S as p,l as y,m as v,aa as f,b7 as g}from"./index.94b82568.js";import"./index.673364b0.js";import"./index.8d91dadc.js";var k=e({name:"BasicDropdown",components:{[n.name]:n,[t.name]:t,[t.Item.name]:t.Item,[t.Divider.name]:t.Divider,Icon:a},props:{trigger:{type:[Array],default:()=>["contextmenu"]},dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}},emits:["menuEvent"],setup(e,{emit:n}){const t=s((()=>e.dropMenuList));return{handleClickMenu:function(e){var a;const{event:s}=e,d=i(t).find((e=>`${e.event}`==`${s}`));n("menuEvent",d),null==(a=e.onClick)||a.call(e)},getMenuList:t}}});const b={class:"ml-1"};k.render=function(e,n,t,a,s,i){const g=d("Icon"),k=d("a-menu-item"),x=d("a-menu-divider"),M=d("a-menu"),$=d("a-dropdown");return r(),l($,o({trigger:e.trigger},e.$attrs),{overlay:u((()=>[c(M,{selectedKeys:e.selectedKeys},{default:u((()=>[(r(!0),l(m,null,p(e.getMenuList,(n=>(r(),l(m,{key:`${n.event}`},[c(k,{onClick:t=>e.handleClickMenu(n),disabled:n.disabled},{default:u((()=>[n.icon?(r(),l(g,{key:0,icon:n.icon},null,8,["icon"])):y("",!0),c("span",b,v(n.text),1)])),_:2},1032,["onClick","disabled"]),n.divider?(r(),l(x,{key:`d-${n.event}`})):y("",!0)],64)))),128))])),_:1},8,["selectedKeys"])])),default:u((()=>[c("span",null,[f(e.$slots,"default")])])),_:3},16,["trigger"])},g(k);export{k as _};