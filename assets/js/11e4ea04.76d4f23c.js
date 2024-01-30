"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[88874],{54600:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>r});var o=i(87462),n=(i(67294),i(3905));i(61839);const d={title:"Deleted Lines of Code",description:"Deleted Lines of Code\n",sidebar_position:12},s=void 0,a={unversionedId:"Metrics/DeletedLinesOfCode",id:"version-v0.19/Metrics/DeletedLinesOfCode",title:"Deleted Lines of Code",description:"Deleted Lines of Code\n",source:"@site/versioned_docs/version-v0.19/Metrics/DeletedLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/DeletedLinesOfCode",permalink:"/docs/v0.19/Metrics/DeletedLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.19/Metrics/DeletedLinesOfCode.md",tags:[],version:"v0.19",sidebarPosition:12,frontMatter:{title:"Deleted Lines of Code",description:"Deleted Lines of Code\n",sidebar_position:12},sidebar:"docsSidebar",previous:{title:"Added Lines of Code",permalink:"/docs/v0.19/Metrics/AddedLinesOfCode"},next:{title:"PR Count",permalink:"/docs/v0.19/Metrics/PRCount"}},l={},r=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:r};function m(e){let{components:t,...d}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The accumulated number of deleted lines of code."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"identify potential bottlenecks that may affect the output"),(0,n.kt)("li",{parentName:"ol"},"Encourage the team to implement a development model that matches the business requirements; develop excellent coding habits")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric is calculated by summing the deletions of commits in the given data range."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on ",(0,n.kt)("inlineCode",{parentName:"p"},"commits")," collected from GitHub, GitLab or BitBucket."),(0,n.kt)("b",null,"Data Transformation Required"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("p",null,"The following SQL shows how to find the ",(0,n.kt)("inlineCode",{parentName:"p"},"deleted lines of code")," in specific repositories, eg. 'repo-1' and 'repo-2'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\n  sum(c.deletions) as added_lines_of_code\nFROM \n  commits c\n  LEFT JOIN repo_commits rc ON c.sha = rc.commit_sha\n  LEFT JOIN repos r ON r.id = rc.repo_id\nWHERE\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n  r.id in ('repo-1','repo-2')\n  and message not like '%Merge%'\n  and $__timeFilter(c.authored_date)\n  -- the following condition will remove the month with incomplete data\n  and c.authored_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n")),(0,n.kt)("p",null,"If you want to measure the monthly trend of ",(0,n.kt)("inlineCode",{parentName:"p"},"deleted lines of code")," in the screenshot below, please run the following SQL in Grafana."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(47762).Z,width:"1247",height:"345"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"with _commits as(\n  SELECT\n    DATE_ADD(date(authored_date), INTERVAL -DAY(date(authored_date))+1 DAY) as time,\n    sum(deletions) as deleted_lines_of_code\n  FROM commits\n  WHERE\n    message not like '%Merge%'\n    and $__timeFilter(authored_date)\n    -- the following condition will remove the month with incomplete data\n    and authored_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  group by 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  deleted_lines_of_code\nFROM _commits\nORDER BY time\n")),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project/team dimension, observe the accumulated change in Added lines to assess the team activity and code growth rate"),(0,n.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the active time distribution of code changes, and evaluate the effectiveness of project development model."),(0,n.kt)("li",{parentName:"ol"},"From the member dimension, observe the trend and stability of code output of each member, and identify the key points that affect code output by comparison.")))}m.isMDXComponent=!0},47762:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/deleted-loc-monthly-cbdb2dc7c1a10a62930dedf4667b0517.png"}}]);