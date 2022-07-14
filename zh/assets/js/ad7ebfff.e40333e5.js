"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4579],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4584:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Roadmap",description:"The goals and roadmap for DevLake in 2022\n",sidebar_position:3},u=void 0,s={unversionedId:"Overview/Roadmap",id:"version-v0.11.0/Overview/Roadmap",title:"Roadmap",description:"The goals and roadmap for DevLake in 2022\n",source:"@site/versioned_docs/version-v0.11.0/Overview/Roadmap.md",sourceDirName:"Overview",slug:"/Overview/Roadmap",permalink:"/zh/docs/v0.11.0/Overview/Roadmap",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11.0/Overview/Roadmap.md",tags:[],version:"v0.11.0",sidebarPosition:3,frontMatter:{title:"Roadmap",description:"The goals and roadmap for DevLake in 2022\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/zh/docs/v0.11.0/Overview/Architecture"},next:{title:"Local Setup",permalink:"/zh/docs/v0.11.0/QuickStart/LocalSetup"}},d={},c=[{value:"Goals",id:"goals",level:2},{value:"Feature Breakdown",id:"feature-breakdown",level:2},{value:"How to Influence the Roadmap",id:"how-to-influence-the-roadmap",level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("p",null,"DevLake has joined the Apache Incubator and is aiming to become a top-level project. To achieve this goal, the Apache DevLake (Incubating) community will continue to make efforts in helping development teams to analyze and improve their engineering productivity. In the 2022 Roadmap, we have summarized three major goals followed by the feature breakdown to invite the broader community to join us and grow together."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As a dev data analysis application, discover and implement 3 (or even more!) usage scenarios:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A collection of metrics to track the contribution, quality and growth of open-source projects"),(0,o.kt)("li",{parentName:"ul"},"DORA metrics for DevOps engineers"),(0,o.kt)("li",{parentName:"ul"},"To be decided (",(0,o.kt)("a",{parentName:"li",href:"https://join.slack.com/t/devlake-io/shared_invite/zt-17b6vuvps-x98pqseoUagM7EAmKC82xQ"},"let us know")," if you have any suggestions!)"))),(0,o.kt)("li",{parentName:"ol"},"As dev data infrastructure, provide robust data collection modules, customizable data models, and data extensibility."),(0,o.kt)("li",{parentName:"ol"},"Design better user experience for end-users and contributors.")),(0,o.kt)("h2",{id:"feature-breakdown"},"Feature Breakdown"),(0,o.kt)("p",null,"Apache DevLake is currently under rapid development. You are more than welcome to use the following table to explore your intereted features and make contributions. We deeply appreciate the collective effort of our community to make this project possible!"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Features"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"More data sources across different ",(0,o.kt)("a",{parentName:"td",href:"/zh/docs/v0.11.0/DataModels/DevLakeDomainLayerSchema"},"DevOps domains")," (Goal No.1 & 2)"),(0,o.kt)("td",{parentName:"tr",align:null},"Features in ",(0,o.kt)("strong",{parentName:"td"},"bold")," are of higher priority ",(0,o.kt)("br",null),(0,o.kt)("br",null)," Issue/Task Management: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"Jira server")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/886"},"#886 (closed)")),(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"Jira data center")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1687"},"#1687 (closed)")),(0,o.kt)("li",null,"GitLab Issues ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/715"},"#715 (closed)")),(0,o.kt)("li",null,"Trello ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1881"},"#1881 (open)")),(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"TAPD")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/560"},"#560 (closed)")),(0,o.kt)("li",null,"Teambition ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1882"},"#1882 (open)")),(0,o.kt)("li",null,"Ones ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1884"},"#1884 (open)")))," Source Code Management: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"BitBucket"),(0,o.kt)("li",null,"Gitee ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1883"},"#1883 (open)")),(0,o.kt)("li",null,"Coder"))," Code Review: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Gerrit"))," CI/CD: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"GitHub Action"),(0,o.kt)("li",null,"ArgoCI"),(0,o.kt)("li",null,"ArgoCD"),(0,o.kt)("li",null,"TeamCity")),"Quality: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"SonarQube")),(0,o.kt)("li",null,"Coverity"))," QA: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Selenium"),(0,o.kt)("li",null,"Junit"),(0,o.kt)("li",null,"JMeter"),(0,o.kt)("li",null,"Cucumber Test"))," Calendar: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Google Calendar"),(0,o.kt)("li",null,"Zoom Calendar"),(0,o.kt)("li",null,"Lark Calendar"),(0,o.kt)("li",null,"Tencent Calendar"))," OSS Community Metrics: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"GitHub stars, clones, watches")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Improved data collection, ",(0,o.kt)("a",{parentName:"td",href:"/zh/docs/v0.11.0/DataModels/DevLakeDomainLayerSchema"},"data models")," and data extensibility (Goal No.2)"),(0,o.kt)("td",{parentName:"tr",align:null},"Data Collection: ",(0,o.kt)("br",null)," ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Complete the logging system"),(0,o.kt)("li",null,"Implement a good error handling mechanism during data collection"))," Data Models:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Introduce DBT to allow users to create and modify the domain layer schema. ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1479"},"#1479 (closed)")),(0,o.kt)("li",null,"Design the data models for 5 new domains, please refers to the data models of the tools under each domain (see the cell above):",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Quality"),(0,o.kt)("li",null,"Testing"),(0,o.kt)("li",null,"Calendar"),(0,o.kt)("li",null,"Documentation"),(0,o.kt)("li",null,"OSS Community Metrics"))),(0,o.kt)("li",null,"Polish the data models for ",(0,o.kt)("a",{parentName:"td",href:"/zh/docs/v0.11.0/DataModels/DevLakeDomainLayerSchema"},"existing domains"),": Issue/Task Management, Source Code Management, Code Review and CI/CD."))," Data Extensibility: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Enhance the performance of data application under large-scaled usage scenarios"),(0,o.kt)("li",null,"Support OLAP databases for more flexible data storage options")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Better user experience (Goal No.3)"),(0,o.kt)("td",{parentName:"tr",align:null},"For new users: ",(0,o.kt)("ul",null,(0,o.kt)("li",null," Iterate on a clearer step-by-step guide to improve the pre-configuration experience."),(0,o.kt)("li",null,"Provide a new Config UI to reduce frictions for data configuration ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1700"},"#1700 (in-progress)")),(0,o.kt)("li",null," Showcase dashboard live demos to let users explore and learn about the dashboards. ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1784"},"#1784 (open)"))),"For returning users: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Provide detailed guides to help users customize Grafana dashboards."),(0,o.kt)("li",null,"Work on the documentation for advanced features in the Config UI, such as the usage of Advancned Mode and replacements of old auth tokens for data connections.")),"For contributors:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Add more guide to set up DevLake in different operating system."),(0,o.kt)("li",null,"Provide clearer docs for contributors to get on board easier."),(0,o.kt)("li",null,"Add Swagger to document API ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/292"},"#292 closed")),(0,o.kt)("li",null,"More docs about raw/tool/domain data models")))))),(0,o.kt)("h2",{id:"how-to-influence-the-roadmap"},"How to Influence the Roadmap"),(0,o.kt)("p",null,"A roadmap is only useful when it captures real user needs. We are glad to hear from you if you have specific use cases, feedback, or ideas. You can submit an issue to let us know!\nAlso, if you plan to work (or are already working) on a new or existing feature, tell us, so that we can update the roadmap accordingly. We are happy to share knowledge and context to help your feature land successfully."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);