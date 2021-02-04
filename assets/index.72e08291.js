import{d as e,h as o,o as i,i as t,w as r,j as s,m as d}from"./index.6cf10de3.js";import{A as a}from"./index.995a673b.js";import{b as n}from"./index.7d872a53.js";import p from"./Modal1.772cd647.js";import m from"./Modal2.0a78ab16.js";import l from"./Modal3.ac40286a.js";import j from"./Modal4.fa841698.js";import{_ as f}from"./index.f4b4d933.js";import"./vendor.3b1829c7.js";import"./useTimeout.0ebe11aa.js";import"./useAttrs.095b2c8e.js";import"./useWindowSizeFn.c49b1c44.js";import"./index.7f70dfbd.js";import"./index.de38b9ef.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./RightOutlined.7e972f0b.js";/* empty css              */import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./FullscreenOutlined.f8628908.js";import"./isEqual.b94b8d79.js";import"./index.05452a45.js";import"./index.dd535865.js";import"./index.4028ada7.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.8cda17e4.js";import"./get.2ff9f629.js";import"./_baseProperty.74f89655.js";import"./toInteger.d71d002f.js";import"./index.fea0867a.js";import"./index.80187f01.js";import"./SearchOutlined.4bbe31f8.js";import"./EyeOutlined.586c3500.js";import"./index.a11a5924.js";import"./CheckOutlined.043f2430.js";import"./DownOutlined.07599049.js";import"./index.7d400cac.js";import"./colors.4e45e03a.js";import"./index.1e19659a.js";import"./UpOutlined.74e210f0.js";import"./index.9fcdec8a.js";import"./RedoOutlined.d8e3d4c6.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./Tree.40f1bcaf.js";import"./util.00dc4c3f.js";import"./uuid.d710d91a.js";import"./index.b218b89f.js";import"./DeleteOutlined.44f98072.js";import"./index.2fe313f9.js";import"./index.d64015e1.js";import"./index.083f1805.js";import"./LeftOutlined.7ae18e20.js";import"./download.3b26ae66.js";import"./useForm.ae18592a.js";import"./index.4e278996.js";import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";var c=e({components:{Alert:a,Modal1:p,Modal2:m,Modal3:l,Modal4:j,PageWrapper:f},setup(){const[e,{openModal:o,setModalProps:i}]=n(),[t,{openModal:r}]=n(),[s,{openModal:d}]=n(),[a,{openModal:p}]=n();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:d,register4:a,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=d(" 打开弹窗 默认可以拖动/全屏 "),g=d(" 打开弹窗 "),b=d(" 打开弹窗 "),M=d(" 打开弹窗并传递数据 ");c.render=function(e,d,a,n,p,m){const l=o("Alert"),j=o("a-button"),f=o("Modal1"),c=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(f,{onRegister:e.register1},null,8,["onRegister"]),s(c,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default c;