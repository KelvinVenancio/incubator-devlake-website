"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[62989],{93880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=t(87462),o=(t(67294),t(3905));t(61839);const a={title:"Trello(WIP)",description:"Trello Plugin\n"},r=void 0,i={unversionedId:"Plugins/trello",id:"version-v0.20/Plugins/trello",title:"Trello(WIP)",description:"Trello Plugin\n",source:"@site/versioned_docs/version-v0.20/Plugins/trello.md",sourceDirName:"Plugins",slug:"/Plugins/trello",permalink:"/zh/docs/v0.20/Plugins/trello",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Plugins/trello.md",tags:[],version:"v0.20",frontMatter:{title:"Trello(WIP)",description:"Trello Plugin\n"},sidebar:"docsSidebar",previous:{title:"Teambition(Beta)",permalink:"/zh/docs/v0.20/Plugins/teambition"},next:{title:"Webhook",permalink:"/zh/docs/v0.20/Plugins/webhook"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect data from Trello",id:"collect-data-from-trello",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects ",(0,o.kt)("inlineCode",{parentName:"p"},"Trello")," data through ",(0,o.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/"},"Trello's rest api"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to fully use this plugin, you will need to get ",(0,o.kt)("inlineCode",{parentName:"p"},"apikey")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," on the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/"},"Trello website"),"."),(0,o.kt)("p",null,"A connection should be created before you can collect any data. Currently, this plugin supports creating connection by requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"connections")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/plugins/trello/connections\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "trello",\n    "endpoint": "https://api.trello.com/",\n    "rateLimitPerHour": 20000,\n    "appId": "<YOUR_APIKEY>",\n    "secretKey": "<YOUR_TOKEN>"\n}\n\'\n')),(0,o.kt)("h2",{id:"collect-data-from-trello"},"Collect data from Trello"),(0,o.kt)("p",null,"You can make the following request to get all the boards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl 'http://localhost:8080/plugins/trello/connections/<CONNECTION_ID>/proxy/rest/1/members/me/boards?fields=name,id'\n")),(0,o.kt)("p",null,"In order to collect data, you have to compose a JSON looks like following one, and send it by selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure-UI Mode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "trello",\n      "options": {\n        "connectionId": <CONNECTION_ID>,\n        "boardId": "<BOARD_ID>"\n      }\n    }\n  ]\n]\n')),(0,o.kt)("p",null,"and if you want to perform certain subtasks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "trello",\n      "subtasks": ["collectXXX", "extractXXX", "convertXXX"],\n      "options": {\n        "connectionId": <CONNECTION_ID>,\n        "boardId": "<BOARD_ID>"\n      }\n    }\n  ]\n]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Curl Mode:")),(0,o.kt)("p",null,"In order to collect data, you have to make a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name":"MY PIPELINE",\n    "plan":[\n        [\n            {\n                "plugin":"trello",\n                "options":{\n                    "connectionId":<CONNECTION_ID>,\n                    "boardId":"<BOARD_ID>"\n                }\n            }\n        ]\n    ]\n}\n\'\n')),(0,o.kt)("p",null,"You can make the following request to get all the boards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl 'http://localhost:8080/plugins/trello/connections/<CONNECTION_ID>/proxy/rest/1/members/me/boards?fields=name,id'\n")))}c.isMDXComponent=!0}}]);