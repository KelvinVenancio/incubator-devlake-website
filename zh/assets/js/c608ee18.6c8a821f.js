"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[97922],{54439:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=o(87462),a=(o(67294),o(3905));o(61839);const n={title:"API Keys",sidebar_position:11,description:"API Keys\n"},s=void 0,r={unversionedId:"Configuration/APIKeys",id:"version-v0.20/Configuration/APIKeys",title:"API Keys",description:"API Keys\n",source:"@site/versioned_docs/version-v0.20/Configuration/APIKeys.md",sourceDirName:"Configuration",slug:"/Configuration/APIKeys",permalink:"/zh/docs/v0.20/Configuration/APIKeys",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Configuration/APIKeys.md",tags:[],version:"v0.20",sidebarPosition:11,frontMatter:{title:"API Keys",sidebar_position:11,description:"API Keys\n"},sidebar:"docsSidebar",previous:{title:"Team Configuration",permalink:"/zh/docs/v0.20/Configuration/TeamConfiguration"},next:{title:"DORA",permalink:"/zh/docs/v0.20/DORA"}},l={},d=[{value:"What is an &#39;API Key&#39;",id:"what-is-an-api-key",level:2},{value:"How does an API key work?",id:"how-does-an-api-key-work",level:2},{value:"Accessing DevLake Open APIs",id:"accessing-devlake-open-apis",level:3},{value:"Utilizing API Key in Incoming Webhooks",id:"utilizing-api-key-in-incoming-webhooks",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],h={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-an-api-key"},"What is an 'API Key'"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api-key-list",src:o(14574).Z,width:"1718",height:"331"})),(0,a.kt)("p",null,"An API key, also known as an API token, is a string used for authentication when making requests to DevLake's open API or webhook. It serves as a form of identification to ensure authorized access."),(0,a.kt)("p",null,"An API key contains three components:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Name: This is the descriptive name assigned to the key for easy identification."),(0,a.kt)("li",{parentName:"ol"},"Expiration: You have the option to set an expiration period for the API key, such as 7 days, 30 days, 90 days, or choose for it to never expire."),(0,a.kt)("li",{parentName:"ol"},"Allowed Path: The API URL or endpoint that the API key is permitted to access. It defines the specific resources that the key can interact with.")),(0,a.kt)("h2",{id:"how-does-an-api-key-work"},"How does an API key work?"),(0,a.kt)("h3",{id:"accessing-devlake-open-apis"},"Accessing DevLake Open APIs"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/Overview/References"},"API docs"),"."),(0,a.kt)("h3",{id:"utilizing-api-key-in-incoming-webhooks"},"Utilizing API Key in ",(0,a.kt)("a",{parentName:"h3",href:"/zh/docs/v0.20/Configuration/webhook"},"Incoming Webhooks")),(0,a.kt)("p",null,"It is typically not necessary to manually create an API key from the 'API keys' page. Instead, you can follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the 'Data Connection' page."),(0,a.kt)("li",{parentName:"ol"},"Create a new webhook, and an API key will be automatically generated for you."),(0,a.kt)("li",{parentName:"ol"},"You can copy the provided curl commands, which include the API key, and save them in your local environment for future use."),(0,a.kt)("li",{parentName:"ol"},"If you happen to forget to save the API key, do not worry. You can view the webhook details and regenerate a new API key if needed. It is important to note that the API keys automatically generated for webhooks will not be displayed on the 'API keys' page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api-key-list",src:o(42204).Z,width:"1090",height:"691"})),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problems, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v0.20/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0},14574:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/api-key-list-35169cf33ad13b64d7e3fa395d6d285c.png"},42204:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/auto-generated-api-key-bf75b32badf805e667fc510c15ad2d53.png"}}]);