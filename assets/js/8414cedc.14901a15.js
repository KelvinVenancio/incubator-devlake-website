"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8890],{78849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(61839);const o={title:"How to Organize DevLake Projects",sidebar_position:3,description:"How to Organize DevLake Projects\n"},r=void 0,s={unversionedId:"Configuration/HowToOrganizeDevlakeProjects",id:"version-v0.21/Configuration/HowToOrganizeDevlakeProjects",title:"How to Organize DevLake Projects",description:"How to Organize DevLake Projects\n",source:"@site/versioned_docs/version-v0.21/Configuration/HowToOrganizeDevlakeProjects.md",sourceDirName:"Configuration",slug:"/Configuration/HowToOrganizeDevlakeProjects",permalink:"/docs/v0.21/Configuration/HowToOrganizeDevlakeProjects",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.21/Configuration/HowToOrganizeDevlakeProjects.md",tags:[],version:"v0.21",sidebarPosition:3,frontMatter:{title:"How to Organize DevLake Projects",sidebar_position:3,description:"How to Organize DevLake Projects\n"},sidebar:"docsSidebar",previous:{title:"Tutorial",permalink:"/docs/v0.21/Configuration/Tutorial"},next:{title:"Azure DevOps",permalink:"/docs/v0.21/Configuration/AzureDevOps"}},l={},p=[{value:"1. What is a DevLake project?",id:"1-what-is-a-devlake-project",level:2},{value:"2. Why is it important to organize projects?",id:"2-why-is-it-important-to-organize-projects",level:2},{value:"3. Challenges in project organization",id:"3-challenges-in-project-organization",level:2},{value:"4. General advice",id:"4-general-advice",level:2},{value:"4.1. Determining the number of DevLake projects",id:"41-determining-the-number-of-devlake-projects",level:3},{value:"4.2 Principles of organizing projects",id:"42-principles-of-organizing-projects",level:3},{value:"4.3 Measuring DORA at the team level",id:"43-measuring-dora-at-the-team-level",level:3},{value:"5. Use Cases",id:"5-use-cases",level:2},{value:"5.1. Use Case 1: Apache Projects",id:"51-use-case-1-apache-projects",level:3},{value:"5.1.1. Organizing Projects",id:"511-organizing-projects",level:4},{value:"5.1.2. Creating Connections",id:"512-creating-connections",level:4},{value:"5.1.3. Configuring Connections",id:"513-configuring-connections",level:4},{value:"5.1.4. Using Connections",id:"514-using-connections",level:4},{value:"5.1.5. Resulting Metrics",id:"515-resulting-metrics",level:4},{value:"5.1.6. How can I observe metrics by project?",id:"516-how-can-i-observe-metrics-by-project",level:4},{value:"5.2. Use Case 2: Multiple Teams with Distinct Projects",id:"52-use-case-2-multiple-teams-with-distinct-projects",level:3},{value:"Quick Overview:",id:"quick-overview",level:4},{value:"Step-by-Step Simplification:",id:"step-by-step-simplification",level:4},{value:"5.2.1. Organizing Projects",id:"521-organizing-projects",level:4},{value:"5.2.2. Adding Connections",id:"522-adding-connections",level:4},{value:"5.2.3. Setting Scopes",id:"523-setting-scopes",level:4},{value:"5.2.4. Resulting Metrics",id:"524-resulting-metrics",level:4},{value:"6. About Webhooks",id:"6-about-webhooks",level:2},{value:"7. Troubleshooting",id:"7-troubleshooting",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide provides a step-by-step approach to organizing projects in DevLake, enabling you to measure DORA metrics according to your specific use cases."),(0,i.kt)("h2",{id:"1-what-is-a-devlake-project"},"1. What is a DevLake project?"),(0,i.kt)("p",null,"On a high level, a DevLake project can be viewed as a real-world project or product line. It represents a specific initiative or endeavor within the software development domain."),(0,i.kt)("p",null,"On a lower level, a DevLake project is a way of organizing and grouping data from different domains. DevLake uses various ",(0,i.kt)("a",{parentName:"p",href:"/docs/Overview/KeyConcepts#data-scope"},"data scopes"),", such as repos, boards, cicd_scopes, and cq_projects as the 'container' to associate different types of data to a specific project. See more on this ",(0,i.kt)("a",{parentName:"p",href:"/docs/Overview/KeyConcepts#project"},"doc"),"."),(0,i.kt)("h2",{id:"2-why-is-it-important-to-organize-projects"},"2. Why is it important to organize projects?"),(0,i.kt)("p",null,"This is crucial due to the fact that DevLake measures DORA metrics at the project level. Each project is associated with specific key entities, such as 'pull requests', 'deployments', and 'incidents', which are used to calculate the corresponding DORA metrics. Therefore, proper project organization ensures accurate and meaningful DORA metric calculations for effective analysis and evaluation."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(78167).Z,width:"2594",height:"1810"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"How are four ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.21/DORA"},"DORA")," metrics calculated from 'pull requests', 'deployments', and 'incidents'?"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/DeploymentFrequency"},"Deployment Frequency"),": How often does a project ",(0,i.kt)("inlineCode",{parentName:"li"},"deploys"),"?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/LeadTimeForChanges"},"Lead Time for Changes"),": How fast are the ",(0,i.kt)("inlineCode",{parentName:"li"},"pull requests")," delivered?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/CFR"},"Change Failure Rate"),": How many ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments")," lead to ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents"),"?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/MTTR"},"Median Time to Restore"),": How fast are ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents")," solved?"))),(0,i.kt)("h2",{id:"3-challenges-in-project-organization"},"3. Challenges in project organization"),(0,i.kt)("p",null,"There are several challenges associated with organizing projects in DevLake due to different development practices within teams. Some of these challenges include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Managing multiple Git repos, issue boards, and CI/CD pipelines within a project."),(0,i.kt)("li",{parentName:"ul"},"Having a Git repo, issue board, or CI/CD pipeline associated with multiple projects, such as in the case of mono-repos or boards used to track incidents from user feedback."),(0,i.kt)("li",{parentName:"ul"},"Managing multiple projects within a team and the need to measure DORA metrics at the team level."),(0,i.kt)("li",{parentName:"ul"},"Projects contributed by multiple teams, with each team requiring the ability to measure their own DORA metrics.")),(0,i.kt)("p",null,"This document serves as a guide to address these challenges and provide assistance in effectively dealing with these diverse development practices."),(0,i.kt)("h2",{id:"4-general-advice"},"4. General advice"),(0,i.kt)("h3",{id:"41-determining-the-number-of-devlake-projects"},"4.1. Determining the number of DevLake projects"),(0,i.kt)("p",null,"It is advisable to create DevLake projects that align with the number of real-life projects you have."),(0,i.kt)("p",null,"For example, if you have a team (Team A) responsible for managing multiple projects, it is recommended to create separate DevLake projects for each individual project instead of creating a single project named 'Team A'. This approach allows for better organization and tracking of metrics specific to each project."),(0,i.kt)("h3",{id:"42-principles-of-organizing-projects"},"4.2 Principles of organizing projects"),(0,i.kt)("p",null,"When organizing projects in DevLake, it is important to associate all relevant ",(0,i.kt)("a",{parentName:"p",href:"/docs/Overview/KeyConcepts#data-scope"},"data scopes"),", such as repos, issue boards, and CI/CD scopes, with the corresponding DevLake project based on real-life practices."),(0,i.kt)("p",null,"In situations where a repo or board is shared by multiple projects in real life, it is recommended to include them in all of these projects within DevLake. This is because DevLake cannot differentiate which commits or issues belong to specific projects. Rather than excluding shared resources from DORA measurements, it is advisable to consider them in all relevant projects."),(0,i.kt)("h3",{id:"43-measuring-dora-at-the-team-level"},"4.3 Measuring DORA at the team level"),(0,i.kt)("p",null,"To clarify the concepts, let's define three terms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Overview/KeyConcepts#project"},(0,i.kt)("inlineCode",{parentName:"a"},"Project")),": Refers to a real-world project or product line, such as Apache DevLake or Apache Spark. It focuses on the work to be done."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Team"),": Represents a department, such as the 'product team' or 'engineering team'. It focuses on the people and their roles. Note that people within the same team may not always work on the same projects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Project Team"),": Comprises individuals working on a specific project.")),(0,i.kt)("p",null,"DevLake does support measuring DORA metrics at the project-team level, which is essentially the same as measuring at the project level. However, it is important to note that DevLake does not recommend measuring DORA metrics at the team level. Despite the existence of the 'DORA by team' dashboard contributed by the community. Doing so may introduce inaccuracies and dilute the significance of measuring DORA metrics from the outset."),(0,i.kt)("h2",{id:"5-use-cases"},"5. Use Cases"),(0,i.kt)("p",null,"This section demonstrates real-life practices and how they get reflected in DevLake."),(0,i.kt)("p",null,"Disclaimer: ",(0,i.kt)("em",{parentName:"p"},"To keep this guide shorter, some technical details are only mentioned in\n",(0,i.kt)("a",{parentName:"em",href:"HowToOrganizeDevlakeProjects#41-use-case-1-apache-projects"},"Use Case 1"),",\nso if you read this page for the first time, make sure to go through them in order.")),(0,i.kt)("p",null,"Note: ",(0,i.kt)("em",{parentName:"p"},"If you use webhooks, check the ",(0,i.kt)("a",{parentName:"em",href:"HowToOrganizeDevlakeProjects#5-about-webhooks"},"quick note")," about them below.")),(0,i.kt)("h3",{id:"51-use-case-1-apache-projects"},"5.1. Use Case 1: Apache Projects"),(0,i.kt)("p",null,"Apache Software Foundation (ASF) has and is developing many\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_Apache_Software_Foundation_projects"},"projects"),"."),(0,i.kt)("p",null,"To take an example we will analyze 2 ",(0,i.kt)("inlineCode",{parentName:"p"},"projects"),": DevLake and ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Spark"),".\nBoth are independent of each other. Assume that ASF wants to check the health of the development\nand maintenance of these projects with DORA."),(0,i.kt)("p",null,"DevLake manages 3 ",(0,i.kt)("inlineCode",{parentName:"p"},"repos"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"incubator-devlake"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake-website"},"incubator-devlake-website"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake-helm-chart"},"incubator-devlake-helm-chart"),".\nThere are many repos related to ",(0,i.kt)("em",{parentName:"p"},"Spark")," in one way or another. To keep it simple,\nwe will also pick 3 ",(0,i.kt)("inlineCode",{parentName:"p"},"repos"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/spark"},"spark"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/spark-website"},"spark-website"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-livy"},"incubator-livy"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(50744).Z,width:"808",height:"305"})),(0,i.kt)("p",null,"Both projects use GitHub for storing code (including ",(0,i.kt)("inlineCode",{parentName:"p"},"pull requests"),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"deployments")," on GitHub Actions, and ",(0,i.kt)("inlineCode",{parentName:"p"},"incidents"),"."),(0,i.kt)("p",null,"Note: ",(0,i.kt)("em",{parentName:"p"},"To avoid confusion between DevLake as a ",(0,i.kt)("inlineCode",{parentName:"em"},"project")," in this use case and DevLake as a platform,\nwe will use complete names i.e. ",(0,i.kt)("inlineCode",{parentName:"em"},"project DevLake")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"platform DevLake")," respectively.")),(0,i.kt)("h4",{id:"511-organizing-projects"},"5.1.1. Organizing Projects"),(0,i.kt)("p",null,"First, create two projects on the DevLake platform, one for DevLake and one for Spark.\nThese will represent real-world projects."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(40119).Z,width:"1718",height:"557"}),"\n",(0,i.kt)("img",{src:a(71291).Z,width:"830",height:"357"})),(0,i.kt)("p",null,"Once these are created, the connections created in the following steps will be bound to them."),(0,i.kt)("h4",{id:"512-creating-connections"},"5.1.2. Creating Connections"),(0,i.kt)("p",null,"Since all is on GitHub in this case, we can use just 1 connection with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it includes all the project's ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")),(0,i.kt)("li",{parentName:"ul"},"its scope includes everything we work with (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"pull requests"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents"),")")),(0,i.kt)("p",null,"If you store ",(0,i.kt)("inlineCode",{parentName:"p"},"incidents")," on Jira, for example, you will need to create a separate connection just for them.\nThe same applies to ",(0,i.kt)("inlineCode",{parentName:"p"},"deployments"),", a separate connection is needed in case they are stored in Jenkins (or any other host for ",(0,i.kt)("inlineCode",{parentName:"p"},"deployments"),")."),(0,i.kt)("h4",{id:"513-configuring-connections"},"5.1.3. Configuring Connections"),(0,i.kt)("p",null,"This part is described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.21/Configuration/GitHub"},"GitHub")," connection configuration. Please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.21/Configuration/Tutorial"},"configuration guide")," for configuring other data sources."),(0,i.kt)("h4",{id:"514-using-connections"},"5.1.4. Using Connections"),(0,i.kt)("p",null,"At this point, we have projects and connections created on the platform DevLake.\nIt is time to bind those connections to the projects. To do so, follow the steps described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.21/Configuration/Tutorial"},"Tutorial"),"."),(0,i.kt)("h4",{id:"515-resulting-metrics"},"5.1.5. Resulting Metrics"),(0,i.kt)("p",null,"To know if the data of a project is successfully collected to your DORA Dashboard:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(60211).Z,width:"1720",height:"522"}),"\n",(0,i.kt)("img",{src:a(44592).Z,width:"1915",height:"835"})),(0,i.kt)("p",null,"If everything goes well, you should see all the 4 charts.\nIf something is wrong, and you are puzzled as to why, check out the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.21/Troubleshooting/Dashboard#debugging-dora-issue-metrics"},"Debugging Dora Issue Metrics")," page."),(0,i.kt)("h4",{id:"516-how-can-i-observe-metrics-by-project"},"5.1.6. How can I observe metrics by project?"),(0,i.kt)("p",null,"In the same DORA dashboard check out this menu point:\n",(0,i.kt)("img",{src:a(74318).Z,width:"1902",height:"395"})),(0,i.kt)("p",null,"The metrics should change when you select or deselect projects, representing the projects you selected."),(0,i.kt)("h3",{id:"52-use-case-2-multiple-teams-with-distinct-projects"},"5.2. Use Case 2: Multiple Teams with Distinct Projects"),(0,i.kt)("p",null,"Consider a scenario where a company operates with several teams, each managing one or more projects.\nFor illustration, we will explore two such teams: the Payments team and the Internal Tools team.\nHere's a simplified representation of this scenario:"),(0,i.kt)("h4",{id:"quick-overview"},"Quick Overview:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Payments team works on a single project: \u201cpayments\u201d."),(0,i.kt)("li",{parentName:"ul"},"The Internal Tools team manages two projects: \u201cit-legacy\u201d and \u201cit-new\u201d."),(0,i.kt)("li",{parentName:"ul"},"Both teams use different sets of tools and boards.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(16170).Z,width:"1580",height:"1256"})),(0,i.kt)("h4",{id:"step-by-step-simplification"},"Step-by-Step Simplification:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Define the Teams and Projects:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payments Team"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'One project: "payments". '))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Internal Tools Team"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Two projects: "it-legacy" and "it-new". '))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Understand the Tools"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Assume both teams utilize GitHub for ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")," and Jenkins for CI/CD."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Payments")," team uses Jira boards."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Internal Tools")," team uses webhooks for reporting incidents.")))),(0,i.kt)("h4",{id:"521-organizing-projects"},"5.2.1. Organizing Projects"),(0,i.kt)("p",null,"DORA is effective for observing the impacts of methodology changes within a team.\nFrom DORA\u2019s standpoint, the concept of distinct ",(0,i.kt)("inlineCode",{parentName:"p"},"teams")," is not recognized; only ",(0,i.kt)("inlineCode",{parentName:"p"},"projects")," exist.\nAdding a ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," concept introduces unnecessary complexity without providing any substantial benefit. "),(0,i.kt)("p",null,"In DevLake, we create three ",(0,i.kt)("inlineCode",{parentName:"p"},"projects"),": ",(0,i.kt)("em",{parentName:"p"},"payments"),", ",(0,i.kt)("em",{parentName:"p"},"it-legacy"),", and ",(0,i.kt)("em",{parentName:"p"},"it-new"),"."),(0,i.kt)("p",null,"It is crucial to maintain ",(0,i.kt)("strong",{parentName:"p"},"atomic")," ",(0,i.kt)("inlineCode",{parentName:"p"},"projects"),", representing the smallest, independent units,\nto prevent complexity and ensure precise data representation. ",(0,i.kt)("strong",{parentName:"p"},"Atomic")," ",(0,i.kt)("inlineCode",{parentName:"p"},"projects")," allow for a more flexible\nand accurate data comparison and combination between ",(0,i.kt)("inlineCode",{parentName:"p"},"projects"),"."),(0,i.kt)("h4",{id:"522-adding-connections"},"5.2.2. Adding Connections"),(0,i.kt)("p",null,"Create just one connection and reuse it across projects by adding data scopes.\nThis method optimizes data collection, minimizing redundancy and ensuring more efficient use of resources."),(0,i.kt)("p",null,"It is NOT recommended to create multiple connections, for instance, GitHub repos, as it",(0,i.kt)("br",{parentName:"p"}),"\n","will increase the time to collect the data due to the storage of multiple copies of shared repos in the database."),(0,i.kt)("p",null,"The only exception is the webhooks: ",(0,i.kt)("strong",{parentName:"p"},"we must have 1 connection per project"),",\nas this is the only way DevLake can accurately assign ",(0,i.kt)("inlineCode",{parentName:"p"},"incidents")," to the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"project"),"."),(0,i.kt)("p",null,"So, in total we will have only these connections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 connection for all GitHub ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")," to collect ",(0,i.kt)("inlineCode",{parentName:"li"},"pull requests")),(0,i.kt)("li",{parentName:"ul"},"1 connection to Jenkins to collect all ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments")),(0,i.kt)("li",{parentName:"ul"},"1 connection to Jira to collect ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents")),(0,i.kt)("li",{parentName:"ul"},"2 webhook connections to collect ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents"),": 1 per each ",(0,i.kt)("inlineCode",{parentName:"li"},"project")," that uses webhooks (",(0,i.kt)("em",{parentName:"li"},"it-legacy")," and ",(0,i.kt)("em",{parentName:"li"},"it-new"),")")),(0,i.kt)("p",null,"The step-by-step ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.21/Configuration/Tutorial"},"Configuration Guide")," shows how to both add connections and set scopes as described in the next chapter."),(0,i.kt)("h4",{id:"523-setting-scopes"},"5.2.3. Setting Scopes"),(0,i.kt)("p",null,"Now, add the connections to our projects and set the scope to them:"),(0,i.kt)("p",null,"For payments ",(0,i.kt)("inlineCode",{parentName:"p"},"project"),": "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add 1 scope to GitHub connection for ",(0,i.kt)("em",{parentName:"li"},"p1...p10")," ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")," to collect their ",(0,i.kt)("inlineCode",{parentName:"li"},"pull requests")),(0,i.kt)("li",{parentName:"ul"},"add 1 scope to Jenkins for ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments")," of ",(0,i.kt)("em",{parentName:"li"},"p1...p10")," ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")),(0,i.kt)("li",{parentName:"ul"},"add 1 scope to Jira to collect ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents"))),(0,i.kt)("p",null,"For it-legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"project"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add 1 scope to GitHub for ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")," ",(0,i.kt)("em",{parentName:"li"},"it-legacy-1"),", ",(0,i.kt)("em",{parentName:"li"},"it-legacy-2"),", ",(0,i.kt)("em",{parentName:"li"},"it-core-1")," and ",(0,i.kt)("em",{parentName:"li"},"it-core-2")," to collect their ",(0,i.kt)("inlineCode",{parentName:"li"},"pull requests")),(0,i.kt)("li",{parentName:"ul"},"add 1 scope to Jenkins for ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments")," of ",(0,i.kt)("em",{parentName:"li"},"it-legacy-1"),", ",(0,i.kt)("em",{parentName:"li"},"it-legacy-2"),", ",(0,i.kt)("em",{parentName:"li"},"it-core-1")," and ",(0,i.kt)("em",{parentName:"li"},"it-core-2")," ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")),(0,i.kt)("li",{parentName:"ul"},"include the ",(0,i.kt)("em",{parentName:"li"},"it-legacy")," webhook for collecting ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents"))),(0,i.kt)("p",null,"For it-new ",(0,i.kt)("inlineCode",{parentName:"p"},"project"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add 1 scope to GitHub for ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")," ",(0,i.kt)("em",{parentName:"li"},"it-new-1"),", ",(0,i.kt)("em",{parentName:"li"},"it-new-2"),", ",(0,i.kt)("em",{parentName:"li"},"it-core-1")," and ",(0,i.kt)("em",{parentName:"li"},"it-core-2")," to collect their ",(0,i.kt)("inlineCode",{parentName:"li"},"pull requests")),(0,i.kt)("li",{parentName:"ul"},"add 1 scope to Jenkins for ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments")," of ",(0,i.kt)("em",{parentName:"li"},"it-new-1"),", ",(0,i.kt)("em",{parentName:"li"},"it-new-2"),", ",(0,i.kt)("em",{parentName:"li"},"it-core-1")," and ",(0,i.kt)("em",{parentName:"li"},"it-core-2")," ",(0,i.kt)("inlineCode",{parentName:"li"},"repos")),(0,i.kt)("li",{parentName:"ul"},"include the ",(0,i.kt)("em",{parentName:"li"},"it-new")," webhook for collecting ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents"))),(0,i.kt)("h4",{id:"524-resulting-metrics"},"5.2.4. Resulting Metrics"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"HowToOrganizeDevlakeProjects#515-resulting-metrics"},"5.1.5 Resulting Metrics")),(0,i.kt)("h2",{id:"6-about-webhooks"},"6. About Webhooks"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Assigning a UNIQUE webhook to each project is critical.")," This ensures that the DevLake platform\ncorrectly associates the incoming data with the corresponding project through the webhook."),(0,i.kt)("p",null,"If you use the same webhook across multiple projects, the data sent by it ",(0,i.kt)("strong",{parentName:"p"},"will be replicated per each\nproject that uses that webhook"),". More information available on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Plugins/webhook"},"Webhook")," page"),(0,i.kt)("h2",{id:"7-troubleshooting"},"7. Troubleshooting"),(0,i.kt)("p",null,"Please check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.21/Troubleshooting/Dashboard#debugging-dora-issue-metrics"},"Debugging DORA Issue Metrics")," to debug DORA dashboard."),(0,i.kt)("p",null,"If you still run into any problems, please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},40119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_project_1-6acc9250dc0a4aad6225ebc8c5b2d477.png"},71291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_project_2-a1bab3ab059002352d53f2609ca9410d.png"},60211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/navigate_to_dora_1-cc59f31f0dcb5e45750e6ae972675a8b.png"},44592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/navigate_to_dora_2-047353792d77d9c6e828e6f13b84fbf3.png"},74318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/observe_metrics_by_project_panel-74cecdf33da26d2f38c6d0ea8a8de910.png"},78167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project_pipeline-06b394bb2f3453ffd888f20affbe2d5d.png"},50744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project_use_case_1-9473d6310f48a48761835cb210b50117.png"},16170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project_use_case_2-6ea9c31326d89a9095ff32cad07cdc13.png"}}]);