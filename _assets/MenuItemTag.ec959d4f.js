import{a as t,au as e,s,o as r,j as n,n as o,m as a}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./Trigger.455696d5.js";import"./index.b4629556.js";import"./types.e649c0d4.js";import"./index.a172b251.js";import"./index.510f2512.js";import"./index.81ea157a.js";import"./useHeaderSetting.38c8c494.js";import{c as i}from"./BasicMenu.0ec06c79.js";var c=t({name:"MenuItemTag",props:i,setup(t){const{prefixCls:r}=e("basic-menu-item-tag"),n=s((()=>{const{item:e,showTitle:s,isHorizontal:r}=t;if(!e||s||r)return!1;const{tag:n}=e;if(!n)return!1;const{dot:o,content:a}=n;return!(!o&&!a)})),o=s((()=>{if(!n.value)return"";const{item:e}=t,{tag:s}=e,{dot:r,content:o}=s;return r?"":o})),a=s((()=>{const{item:e}=t,{tag:s={}}=e||{},{dot:n,type:o="error"}=s;return[r,[`${r}--${o}`],{[`${r}--dot`]:n}]}));return{prefixCls:r,getTagClass:a,getShowTag:n,getContent:o}}});c.render=function(t,e,s,i,c,m){return t.getShowTag?(r(),n("span",{key:0,class:t.getTagClass},o(t.getContent),3)):a("",!0)};export default c;