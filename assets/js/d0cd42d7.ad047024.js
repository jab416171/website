"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6008],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),i=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(r),h=n,b=p["".concat(d,".").concat(h)]||p[h]||l[h]||o;return r?a.createElement(b,u(u({ref:t},s),{},{components:r})):a.createElement(b,u({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var i=2;i<o;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},13838:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),u=["components"],c={},d="Changelog",i={unversionedId:"charts/dev/barcodebuddy/CHANGELOG",id:"charts/dev/barcodebuddy/CHANGELOG",title:"Changelog",description:"barcodebuddy-0.0.5 (2022-05-05)",source:"@site/docs/charts/dev/barcodebuddy/CHANGELOG.md",sourceDirName:"charts/dev/barcodebuddy",slug:"/charts/dev/barcodebuddy/CHANGELOG",permalink:"/docs/charts/dev/barcodebuddy/CHANGELOG",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/dev/barcodebuddy/CHANGELOG.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"barcodebuddy",permalink:"/docs/charts/dev/barcodebuddy/"},next:{title:"barotrauma",permalink:"/docs/charts/dev/barotrauma/"}},s={},l=[{value:"Chore",id:"chore",level:4},{value:"Chore",id:"chore-1",level:4},{value:"Chore",id:"chore-2",level:4},{value:"Chore",id:"chore-3",level:4},{value:"Fix",id:"fix",level:4},{value:"Feat",id:"feat",level:4}],p={toc:l};function h(e){var t=e.components,r=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("a",{name:"barcodebuddy-0.0.5"}),"### [barcodebuddy-0.0.5](https://github.com/truecharts/apps/compare/barcodebuddy-0.0.4...barcodebuddy-0.0.5) (2022-05-05)",(0,o.kt)("h4",{id:"chore"},"Chore"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"update helm general non-major helm releases (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/2612"},"#2612"),")")),(0,o.kt)("a",{name:"barcodebuddy-0.0.4"}),"### [barcodebuddy-0.0.4](https://github.com/truecharts/apps/compare/barcodebuddy-0.0.3...barcodebuddy-0.0.4) (2022-04-26)",(0,o.kt)("h4",{id:"chore-1"},"Chore"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"update helm general non-major helm releases (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/2573"},"#2573"),")")),(0,o.kt)("a",{name:"barcodebuddy-0.0.3"}),"### [barcodebuddy-0.0.3](https://github.com/truecharts/apps/compare/barcodebuddy-0.0.2...barcodebuddy-0.0.3) (2022-04-20)",(0,o.kt)("h4",{id:"chore-2"},"Chore"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Auto-update chart README ","[skip ci]"),(0,o.kt)("li",{parentName:"ul"},"add missing quote on description (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/2515"},"#2515"),")"),(0,o.kt)("li",{parentName:"ul"},"update helm general non-major helm releases (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/2524"},"#2524"),")")),(0,o.kt)("a",{name:"barcodebuddy-0.0.2"}),"### [barcodebuddy-0.0.2](https://github.com/truecharts/apps/compare/barcodebuddy-0.0.1...barcodebuddy-0.0.2) (2022-04-12)",(0,o.kt)("h4",{id:"chore-3"},"Chore"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Auto-update chart README ","[skip ci]"),(0,o.kt)("li",{parentName:"ul"},"update helm general non-major helm releases (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/2480"},"#2480"),")")),(0,o.kt)("h4",{id:"fix"},"Fix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ensure ghcr is used when running tests (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/2449"},"#2449"),")")),(0,o.kt)("a",{name:"barcodebuddy-0.0.1"}),"### barcodebuddy-0.0.1 (2022-04-07)",(0,o.kt)("h4",{id:"feat"},"Feat"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unraid Port - B (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/2440"},"#2440"),")")))}h.isMDXComponent=!0}}]);