import{u as e}from"./useContextMenu.45e8b7f2.js";import{a as t}from"./index.7f70dfbd.js";import{d as i,g as n,h as o,o as s,i as l,w as r,j as a,m as d}from"./index.6cf10de3.js";import{_ as p}from"./index.f4b4d933.js";import"./index.16d57d04.js";import"./RightOutlined.7e972f0b.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";/* empty css              */import"./index.2fe313f9.js";import"./index.de38b9ef.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./useTimeout.0ebe11aa.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./vendor.3b1829c7.js";import"./index.4e278996.js";import"./DownOutlined.07599049.js";import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";var m=i({components:{CollapseContainer:t,PageWrapper:p},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const u=d(" Right Click on me "),c=d(" Right Click on me ");m.render=function(e,t,i,n,d,p){const m=o("a-button"),f=o("CollapseContainer"),b=o("PageWrapper");return s(),l(b,{title:"右键菜单示例"},{default:r((()=>[a(f,{title:"Simple"},{default:r((()=>[a(m,{type:"primary",onContextmenu:e.handleContext},{default:r((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),a(f,{title:"Multiple",class:"mt-4"},{default:r((()=>[a(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:r((()=>[c])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;