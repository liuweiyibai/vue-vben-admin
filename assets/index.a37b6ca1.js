import{B as e}from"./index.4b03b6de.js";import{d as s,r as t,g as c,cp as l,cq as n,h as i,o as a,i as r,j as d,bw as o,m as u}from"./index.6cf10de3.js";import{_ as f}from"./index.f4b4d933.js";import{B as p}from"./BugOutlined.95bde9df.js";import{R as m}from"./RightOutlined.7e972f0b.js";import"./vendor.3b1829c7.js";import"./index.4e278996.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";import"./DownOutlined.07599049.js";/* empty css              */import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";var y=s({components:{BasicDragVerify:e,BugOutlined:p,RightOutlined:m,PageWrapper:f},setup(){const{createMessage:e}=c();return{handleSuccess:function(s){const{time:t}=s;e.success(`校验成功,耗时${t}秒`)},el1:t(null),el2:t(null),el3:t(null),el4:t(null),el5:t(null),handleBtnClick:function(e){e&&e.resume()}}}});const g=o("data-v-2fc4780c");l("data-v-2fc4780c");const j={class:"flex justify-center p-4 items-center bg-gray-700"},b=u(" 还原 "),x={class:"flex justify-center p-4 items-center bg-gray-700"},S=u(" 还原 "),h={class:"flex justify-center p-4 items-center bg-gray-700"},k=u(" 还原 "),B={class:"flex justify-center p-4 items-center bg-gray-700"},v=u(" 还原 "),C={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=u(" 成功 "),R={key:1},w=u(" 拖动 "),D=u(" 还原 ");n();const I=g(((e,s,t,c,l,n)=>{const o=i("BasicDragVerify"),u=i("a-button"),f=i("BugOutlined"),p=i("RightOutlined"),m=i("PageWrapper");return a(),r(m,{title:"拖动校验示例"},{default:g((()=>[d("div",j,[d(o,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:g((()=>[b])),_:1})]),d("div",x,[d(o,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:g((()=>[S])),_:1})]),d("div",h,[d(o,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:g((()=>[k])),_:1})]),d("div",B,[d(o,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:g((e=>[e?(a(),r(f,{key:0})):(a(),r(p,{key:1}))])),_:1},8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:g((()=>[v])),_:1})]),d("div",C,[d(o,{ref:"el5",onSuccess:e.handleSuccess},{text:g((e=>[e?(a(),r("div",_,[d(f),O])):(a(),r("div",R,[w,d(p)]))])),_:1},8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:g((()=>[D])),_:1})])])),_:1})}));y.render=I,y.__scopeId="data-v-2fc4780c";export default y;