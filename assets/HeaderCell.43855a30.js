import{d as e,a7 as a,a8 as l,a9 as t,q as s,h as r,o as n,i,w as o,l as u,k as p,ab as d,m as c}from"./index.899e68b1.js";var _=e({name:"TableHeaderCell",components:{EditTableHeaderCell:a((()=>l((()=>__import__("./index.7aa6041f.js").then((function(e){return e.E}))),["/assets/index.7aa6041f.js","/assets/index.de6b65c1.css","/assets/index.899e68b1.js","/assets/index.f21ab055.css","/assets/index.d0b91344.js","/assets/index.be284e2b.css","/assets/domUtils.511e170d.js","/assets/_stringToArray.45d16e42.js","/assets/index.73bca1d9.js","/assets/index.55180915.js","/assets/index.1156589c.js","/assets/index.76e45014.css","/assets/RightOutlined.7a52ca15.js","/assets/useTimeout.1aa049d6.js","/assets/index.8a587a60.js","/assets/index.121e7eba.css","/assets/useScrollTo.14ce33f8.js","/assets/animation.ce68d404.js","/assets/index.6e6fb497.js","/assets/index.ca1a8c37.css","/assets/FullscreenOutlined.37abc2dd.js","/assets/useAttrs.65aacca0.js","/assets/useWindowSizeFn.43b90dac.js","/assets/index.01e45a9d.js","/assets/uuid.a6cec785.js","/assets/download.8d0bafa5.js","/assets/CheckOutlined.fc6e0763.js","/assets/SettingOutlined.a20a6645.js","/assets/useForm.77949dc2.js","/assets/clickOutside.508ede81.js","/assets/useSortable.d78f3ef5.js","/assets/useExpose.5450fd15.js"]))),BasicHelp:a((()=>l((()=>__import__("./BasicHelp.073df0a0.js")),["/assets/BasicHelp.073df0a0.js","/assets/index.899e68b1.js","/assets/index.f21ab055.css","/assets/_stringToArray.45d16e42.js","/assets/domUtils.511e170d.js","/assets/index.1156589c.js","/assets/index.76e45014.css","/assets/RightOutlined.7a52ca15.js","/assets/useTimeout.1aa049d6.js","/assets/index.8a587a60.js","/assets/index.121e7eba.css","/assets/useScrollTo.14ce33f8.js","/assets/animation.ce68d404.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:a}=t("basic-table-header-cell");return{prefixCls:a,getIsEdit:s((()=>{var a;return!!(null==(a=e.column)?void 0:a.edit)})),getTitle:s((()=>{var a;return null==(a=e.column)?void 0:a.customTitle})),getHelpMessage:s((()=>{var a;return null==(a=e.column)?void 0:a.helpMessage}))}}});const g={key:1};_.render=function(e,a,l,t,s,_){const m=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(d,null,[e.getIsEdit?(n(),i(m,{key:0},{default:o((()=>[c(u(e.getTitle),1)])),_:1})):(n(),i("span",g,u(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):p("",!0)],64)};export default _;