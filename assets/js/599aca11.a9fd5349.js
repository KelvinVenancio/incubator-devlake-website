"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[80077],{35994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(61839);const s={title:"SonarQube",description:"SonarQube Plugin\n"},r=void 0,o={unversionedId:"Plugins/sonarqube",id:"version-v0.20/Plugins/sonarqube",title:"SonarQube",description:"SonarQube Plugin\n",source:"@site/versioned_docs/version-v0.20/Plugins/sonarqube.md",sourceDirName:"Plugins",slug:"/Plugins/sonarqube",permalink:"/docs/v0.20/Plugins/sonarqube",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Plugins/sonarqube.md",tags:[],version:"v0.20",frontMatter:{title:"SonarQube",description:"SonarQube Plugin\n"},sidebar:"docsSidebar",previous:{title:"RefDiff",permalink:"/docs/v0.20/Plugins/refdiff"},next:{title:"Tapd(Beta)",permalink:"/docs/v0.20/Plugins/tapd"}},l={},u=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects SonarQube data through its REST APIs. SonarQube is a tool for static code analysis and code quality management. It can help you discover potential problems and defects in your code, and provide suggestions and solutions."),(0,i.kt)("p",null,"When collecting issues under a certain SonarQube project, divide the issues into smaller groups to collect, so as not to obtain 10,000 issues at once and exceed the result limit of SonarQube APIs themselves. Specific rules include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'First, classify the issues according to "severity", "status", and "type" and collect them separately.'),(0,i.kt)("li",{parentName:"ol"},'Secondly, issues are classified according to the time fields "createdBefore" and "createdAfter" and collected separately.'),(0,i.kt)("li",{parentName:"ol"},'Finally, the issues are classified according to "the file to which the issue belongs" and collected separately.')),(0,i.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,i.kt)("p",null,"Available for SonarQube Server v8.x, v9.x. Check ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,i.kt)("h2",{id:"entities"},"Entities"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.20/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"SonarQube entities")," collected by this plugin."),(0,i.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.20/Overview/SupportedDataSources#sonarqube"},"data refresh policy")," of this plugin."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Most of SonarQube metrics are collected and can be found in DevLake's SonarQube dashboard."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/CQIssueCount"},"Code Quality Issue Count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/CQTest"},"Code Quality Test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/CQMaintainability-Debt"},"Code Quality Maintainability-Debt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/CQDuplicatedBlocks"},"Code Quality Duplicated Blocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/CQDuplicatedLines"},"Code Quality Duplicated Lines"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuring SonarQube via ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/Configuration/SonarQube"},"config-ui"),"."),(0,i.kt)("li",{parentName:"ul"},"Configuring SonarQube via Config UI's ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/Configuration/AdvancedMode#10-sonarqube"},"advanced mode"),".")),(0,i.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,i.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "sonarqube",\n        "options": {\n          "connectionId": 1,\n           "projectKey": "testDevLake"\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.20/DeveloperManuals/DeveloperSetup#references"},"references"))))}d.isMDXComponent=!0}}]);