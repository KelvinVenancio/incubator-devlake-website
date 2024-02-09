"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[73181],{89539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(61839);const r={title:"SonarQube",description:"SonarQube Plugin\n"},o=void 0,s={unversionedId:"Plugins/sonarqube",id:"version-v0.19/Plugins/sonarqube",title:"SonarQube",description:"SonarQube Plugin\n",source:"@site/versioned_docs/version-v0.19/Plugins/sonarqube.md",sourceDirName:"Plugins",slug:"/Plugins/sonarqube",permalink:"/zh/docs/v0.19/Plugins/sonarqube",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.19/Plugins/sonarqube.md",tags:[],version:"v0.19",frontMatter:{title:"SonarQube",description:"SonarQube Plugin\n"},sidebar:"docsSidebar",previous:{title:"RefDiff",permalink:"/zh/docs/v0.19/Plugins/refdiff"},next:{title:"Tapd(Beta)",permalink:"/zh/docs/v0.19/Plugins/tapd"}},l={},u=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects SonarQube data through its REST APIs. SonarQube is a tool for static code analysis and code quality management. It can help you discover potential problems and defects in your code, and provide suggestions and solutions.\n(Please note that this version of SonarQube cannot collect issues with more than 10k+)"),(0,i.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,i.kt)("p",null,"Available for SonarQube Server v8.x, v9.x. Check ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,i.kt)("h2",{id:"entities"},"Entities"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.19/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"SonarQube entities")," collected by this plugin."),(0,i.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.19/Overview/SupportedDataSources#sonarqube"},"data refresh policy")," of this plugin."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Most of SonarQube metrics are collected and can be found in DevLake's SonarQube dashboard."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/Metrics/CQIssueCount"},"Code Quality Issue Count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/Metrics/CQTest"},"Code Quality Test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/Metrics/CQMaintainability-Debt"},"Code Quality Maintainability-Debt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/Metrics/CQDuplicatedBlocks"},"Code Quality Duplicated Blocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/Metrics/CQDuplicatedLines"},"Code Quality Duplicated Lines"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuring SonarQube via ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/Configuration/SonarQube"},"config-ui"),"."),(0,i.kt)("li",{parentName:"ul"},"Configuring SonarQube via Config UI's ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/Configuration/AdvancedMode#10-sonarqube"},"advanced mode"),".")),(0,i.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,i.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "sonarqube",\n        "options": {\n          "connectionId": 1,\n           "projectKey": "testDevLake"\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/DeveloperManuals/DeveloperSetup#references"},"references"))))}p.isMDXComponent=!0}}]);