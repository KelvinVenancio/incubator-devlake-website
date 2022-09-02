"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"DORA - Mean Time to Restore Service",description:"DORA - Mean Time to Restore Service\n",sidebar_position:20},o=void 0,l={unversionedId:"Metrics/MTTR",id:"Metrics/MTTR",title:"DORA - Mean Time to Restore Service",description:"DORA - Mean Time to Restore Service\n",source:"@site/docs/Metrics/MTTR.md",sourceDirName:"Metrics",slug:"/Metrics/MTTR",permalink:"/zh/docs/Metrics/MTTR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/MTTR.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"DORA - Mean Time to Restore Service",description:"DORA - Mean Time to Restore Service\n",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"DORA - Lead Time for Changes(WIP)",permalink:"/zh/docs/Metrics/LeadTimeForChanges"},next:{title:"DORA - Change Failure Rate(WIP)",permalink:"/zh/docs/Metrics/CFR"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,i.kt)("p",null,"The time to restore service after service incidents, rollbacks, or any type of production failure happened."),(0,i.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,i.kt)("p",null,"This metric is essential to measure the disaster control capability of your team and the robustness of the software."),(0,i.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,i.kt)("p",null,"MTTR = Total ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/Metrics/IncidentAge"},"incident age")," (in hours)/number of incidents."),(0,i.kt)("p",null,"If you have three incidents that happened in the given data range, one lasting 1 hour, one lasting 2 hours and one lasting 3 hours. Your MTTR will be: (1 + 2 + 3) / 3 = 2 hours."),(0,i.kt)("p",null,"Below are the benchmarks for different development teams:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less one day")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one day and one week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"More than six months")))),(0,i.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google"),(0,i.kt)("b",null,"Data Sources Required"),(0,i.kt)("p",null,"This metric relies on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deployments")," collected in one of the following ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,i.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,i.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Incidents")," collected in one of the following ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Issue tracking tools such as Jira, TAPD, GitHub, etc."),(0,i.kt)("li",{parentName:"ul"},"Bug or Service Monitoring tools such as PagerDuty, Sentry, etc."),(0,i.kt)("li",{parentName:"ul"},"CI pipelines that marked the 'failed' deployments.")))),(0,i.kt)("b",null,"Transformation Rules Required"),(0,i.kt)("p",null,"This metric relies on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployments"),"."),(0,i.kt)("li",{parentName:"ul"},"Incident configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,i.kt)("inlineCode",{parentName:"li"},"Incidents"),".")),(0,i.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use automated tools to quickly report failure"),(0,i.kt)("li",{parentName:"ul"},"Prioritize recovery when a failure happens"),(0,i.kt)("li",{parentName:"ul"},"Establish a go-to action plan to respond to failures immediately"),(0,i.kt)("li",{parentName:"ul"},"Reduce the deployment time for failure-fixing")))}p.isMDXComponent=!0}}]);