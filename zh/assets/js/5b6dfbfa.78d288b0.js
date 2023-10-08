"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[35048],{78853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));a(61839);const n={title:"Upgrade",sidebar_position:3,description:"How to upgrade your Apache DevLake to a newer version"},i=void 0,s={unversionedId:"GettingStarted/Upgrade",id:"version-v0.19/GettingStarted/Upgrade",title:"Upgrade",description:"How to upgrade your Apache DevLake to a newer version",source:"@site/versioned_docs/version-v0.19/GettingStarted/Upgrade.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Upgrade",permalink:"/zh/docs/v0.19/GettingStarted/Upgrade",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.19/GettingStarted/Upgrade.md",tags:[],version:"v0.19",sidebarPosition:3,frontMatter:{title:"Upgrade",sidebar_position:3,description:"How to upgrade your Apache DevLake to a newer version"},sidebar:"docsSidebar",previous:{title:"Install via Helm",permalink:"/zh/docs/v0.19/GettingStarted/HelmSetup"},next:{title:"Security and Authentication",permalink:"/zh/docs/v0.19/GettingStarted/Authentication"}},d={},p=[{value:"Upgrade Notes",id:"upgrade-notes",level:2}],l={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"upgrade-notes"},"Upgrade Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ENCRYPTION_SECRET: It is important to keep the ENCRYPTION_SECRET safe as it is used to encrypt sensitive information in the database, such as personal access tokens and passwords. Losing the ENCRYPTION_SECRET may result in the inability to decrypt this sensitive information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},".env file: The .env file is now optional. You can choose to store your variables in the environment instead. Remember to consider important variables such as ENCRYPTION_SECRET and DB_URL. If both the environment variables and the .env file exist, the values in the environment variables will take precedence. However, make sure that these variables are defined in either one of them to avoid any issues with DevLake.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Back up your Grafana dashboards before upgrade if you have modified/customized any dashboards. You can re-import these dashboards to Grafana after the upgrade.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upgrade to v0.18.0+: When upgrading from a previous version of DevLake, you need to find the ENCODE_KEY value in the .env file of devlake container, and assign the value to ENCRYPTION_SECRET according to the upgrade steps, see ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/next/GettingStarted/HelmSetup"},"helm setup")," or ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/next/GettingStarted/DockerComposeSetup"},"docker compose setup"),". This will ensure that the encryption process continues to work as expected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upgrade to v0.18.0+: When upgrading from a previous version of DevLake, You may encounter the below error when upgrading because the built-in grafana has been replaced by the official grafana dependency. So you may need to delete the grafana deployment first, please also take care of Note 3 before deleting."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Error: UPGRADE FAILED: cannot patch "devlake-grafana" with kind Deployment: Deployment.apps "devlake-grafana" is invalid: spec.selector: Invalid value: v1.LabelSelector{MatchLabels:map',"[string]",'string{"app.kubernetes.io/instance":"devlake", "app.kubernetes.io/name":"grafana"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"When upgrading via docker-compose.yml, please download the new docker-compose.yml and env.example from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases"},"release assets")," to do the upgrade, please refer to ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.19/GettingStarted/DockerComposeSetup"},"docker compose upgrade notes"))),(0,r.kt)("p",null,"These notes provide guidance on upgrading your Apache DevLake to a newer version. Ensure you follow them carefully to avoid any issues during the upgrade process."))}c.isMDXComponent=!0}}]);