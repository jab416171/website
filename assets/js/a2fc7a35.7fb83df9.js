"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75423],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||l;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},39389:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),o=["components"],i={},s="automatic-music-downloader",u={unversionedId:"charts/stable/automatic-music-downloader/index",id:"charts/stable/automatic-music-downloader/index",title:"automatic-music-downloader",description:"Version application AppVersion: latest",source:"@site/docs/charts/stable/automatic-music-downloader/index.md",sourceDirName:"charts/stable/automatic-music-downloader",slug:"/charts/stable/automatic-music-downloader/",permalink:"/docs/charts/stable/automatic-music-downloader/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/automatic-music-downloader/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/authelia/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/automatic-music-downloader/CHANGELOG"}},c={},m=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],p={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"automatic-music-downloader"},"automatic-music-downloader"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Version-2.0.29-informational?style=flat-square",alt:"Version: 2.0.29"})," ",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Type-application-informational?style=flat-square",alt:"Type: application"})," ",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square",alt:"AppVersion: latest"})),(0,l.kt)("p",null,"A Lidarr companion script to automatically download music for Lidarr."),(0,l.kt)("p",null,"TrueCharts can be installed as both ",(0,l.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,l.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/stable/automatic-music-downloader"},"automatic-music-downloader")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,l.kt)("h2",{id:"source-code"},"Source Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/stable/automatic-music-downloader"},"https://github.com/truecharts/charts/tree/master/charts/stable/automatic-music-downloader")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/RandomNinjaAtk/docker-amd"},"https://github.com/RandomNinjaAtk/docker-amd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/randomninjaatk/amd"},"https://hub.docker.com/r/randomninjaatk/amd"))),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Kubernetes: ",(0,l.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Repository"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"10.5.6")))),(0,l.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,l.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,l.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Installing-an-App"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm"},"Helm"),(0,l.kt)("p",null,"To install the chart with the release name ",(0,l.kt)("inlineCode",{parentName:"p"},"automatic-music-downloader")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install automatic-music-downloader TrueCharts/automatic-music-downloader\n")),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,l.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm-1"},"Helm"),(0,l.kt)("p",null,"To uninstall the ",(0,l.kt)("inlineCode",{parentName:"p"},"automatic-music-downloader")," deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall automatic-music-downloader\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"helm-2"},"Helm"),(0,l.kt)("h4",{id:"available-settings"},"Available Settings"),(0,l.kt)("p",null,"Read through the ",(0,l.kt)("a",{parentName:"p",href:"./values.yaml"},"values.yaml")," file. It has several commented out suggested values.\nOther values may be used from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,l.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'helm install automatic-music-downloader \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/automatic-music-downloader\n')),(0,l.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,l.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm install automatic-music-downloader TrueCharts/automatic-music-downloader -f values.yaml\n")),(0,l.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,l.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please check our ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,l.kt)("li",{parentName:"ul"},"Check our ",(0,l.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,l.kt)("li",{parentName:"ul"},"Open a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,l.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/about/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}h.isMDXComponent=!0}}]);