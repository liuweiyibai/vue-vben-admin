import{a as t,u as o,ap as e,s as r,W as s,dg as a,i as n,o as i,j as u,w as l,k as d}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./Trigger.455696d5.js";import{B as m}from"./index.42a9bd2f.js";import"./colors.f2807cc8.js";import{T as c}from"./index.510f2512.js";import{B as p}from"./BugOutlined.184a8e05.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:c,Badge:m},setup(){const{t:t}=o(),{push:n}=e();return{t:t,getCount:r((()=>a.getErrorListCountState)),handleToErrorList:function(){n(s.ERROR_LOG_PAGE).then((()=>{a.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,s,a){const m=n("BugOutlined"),c=n("Badge"),p=n("Tooltip");return i(),u(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[d(c,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[d(m)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;