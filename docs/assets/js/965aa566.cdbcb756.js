"use strict";(self.webpackChunkbigtop_site=self.webpackChunkbigtop_site||[]).push([[5426],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>u});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(o),u=n,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return o?a.createElement(d,r(r({ref:t},h),{},{components:o})):a.createElement(d,r({ref:t},h))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2029:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=o(7462),n=(o(7294),o(3905));const i={sidebar_position:1},r="How to contirbute",s={unversionedId:"contributing/how-to-contribute",id:"version-3.0.1/contributing/how-to-contribute",title:"How to contirbute",description:"Where to start.",source:"@site/versioned_docs/version-3.0.1/contributing/how-to-contribute.md",sourceDirName:"contributing",slug:"/contributing/how-to-contribute",permalink:"/bigtop-site-yoda-mon/docs/3.0.1/contributing/how-to-contribute",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/contributing/how-to-contribute.md",tags:[],version:"3.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/bigtop-site-yoda-mon/docs/3.0.1/category/contributing"}},c={},l=[{value:"Where to start.",id:"where-to-start",level:2},{value:"How to generate patches by formatting patch files",id:"how-to-generate-patches-by-formatting-patch-files",level:2},{value:"How to generate patches by creating pull requests",id:"how-to-generate-patches-by-creating-pull-requests",level:2},{value:"REVIEWING PATCHES (reviewer guidelines)",id:"reviewing-patches-reviewer-guidelines",level:2},{value:"For Committers: how to commit patches",id:"for-committers-how-to-commit-patches",level:2},{value:"For Committers: how to commit a patch in both master and release branch",id:"for-committers-how-to-commit-a-patch-in-both-master-and-release-branch",level:2}],h={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-contirbute"},"How to contirbute"),(0,n.kt)("h2",{id:"where-to-start"},"Where to start."),(0,n.kt)("p",null,"You need the source code tree to work with. You can clone the repo either from"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"official Apache Bigtop repo",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://gitbox.apache.org/repos/asf/bigtop.git\n"))),(0,n.kt)("li",{parentName:"ul"},"or from Github mirror (see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/bigtop"},"https://github.com/apache/bigtop"),")")),(0,n.kt)("h2",{id:"how-to-generate-patches-by-formatting-patch-files"},"How to generate patches by formatting patch files"),(0,n.kt)("p",null,"We use git as our version control system. To streamline the process of giving proper credit to the contributors when committing patches, we encourage contributors to submit patches generated using git format-patch. This has many benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Committers can't forget to attribute proper credit to the contributor"),(0,n.kt)("li",{parentName:"ul"},"The contributors name and email address shows up in git log"),(0,n.kt)("li",{parentName:"ul"},"When viewing Bigtop's source code on github.com/apache/bigtop, the commits from the contributor are linked to their github.com account if it's linked to the same email address they used when generating the git format-patch\nLong story short, it makes both the contributors' and committers' lives easier, so please generate your patches using git format-patch.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Here are some instructions on how to generate patches:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ensure that you have all of your change as 1 commit which has the correct commit message - something like BIGTOP-1031: README has outdated/ambiguous information"),(0,n.kt)("li",{parentName:"ol"},"Run mvn apache-rat:check to make sure that newly added files do not have any licensing issues. When in doubt refer to ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/"},"https://www.apache.org/licenses/")),(0,n.kt)("li",{parentName:"ol"},"Then run a command like: git format-patch HEAD^..HEAD --stdout > BIGTOP-1031.patch"),(0,n.kt)("li",{parentName:"ol"},"Upload the BIGTOP-1031.1.patch file to this JIRA")),(0,n.kt)("p",null,"The naming of the patch file is up to you. The preferred way however is to just name the file after the JIRA ticket e.g. BIGTOP-1031.patch. In the latter case, If case you need to upload another version  of the patch, you should keep the file name the same and JIRA will sort them according to date/time if multiple files have the same name. This feature is also useful to traceback the history of a patch and roll-back to an earlier version if needed."),(0,n.kt)("h2",{id:"how-to-generate-patches-by-creating-pull-requests"},"How to generate patches by creating pull requests"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Folk Bigtop from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/bigtop"},"https://github.com/apache/bigtop")),(0,n.kt)("li",{parentName:"ol"},"Develop your patch in your own branch"),(0,n.kt)("li",{parentName:"ol"},"Ensure that you have all of your change as 1 commit which has the correct commit message - something like BIGTOP-1031: README has outdated/ambiguous information"),(0,n.kt)("li",{parentName:"ol"},"Create a Pull Request against Bigtop master branch on Github with the PR title BIGTOP-1031: README has outdated/ambiguous information")),(0,n.kt)("h2",{id:"reviewing-patches-reviewer-guidelines"},"REVIEWING PATCHES (reviewer guidelines)"),(0,n.kt)("p",null,"The steady pace of the contributions relies on how effectively we can review, give feedback, and commit new patches. JIRA provides a nice workflow that allows to indicate which patches are ready for a review. Once you decided that your patch is good for others' comments change the JIRA status to Patch Available. That will be the indication to anyone that a comments and review are requested. For your convenience, here's the filter that shows all JIRAs in PA state"),(0,n.kt)("p",null,"Contributors and Committers:  Go over this checklist for your patches"),(0,n.kt)("p",null,"(Hopefully more of this will be automated by ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/BIGTOP-1249"},"https://issues.apache.org/jira/browse/BIGTOP-1249")," )"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Commit message should be part of the patch, see the recipe above using "git format-patch" for a way to do that.'),(0,n.kt)("li",{parentName:"ul"},"Commit message should be 1 line long.  If you have multiple commits , squash them and rename them as in the next bullet:"),(0,n.kt)("li",{parentName:"ul"},'Commit message should be of the format "JIRA #. JIRA synopsis", for example "BIGTOP-1234. A patch that makes Bigtop awesome".'),(0,n.kt)("li",{parentName:"ul"},"Commits should be +1's by one committer (not the submitter) before committing."),(0,n.kt)("li",{parentName:"ul"},"Commits which modify the way we run Bigtop should modify corresponding README files as well."),(0,n.kt)("li",{parentName:"ul"},"Reviews from non-committers are highly encouraged as it helps you to learn more about the project and helps to catch more issues."),(0,n.kt)("li",{parentName:"ul"},"Follow Apache Hadoop formatting guidelines:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"No trailing whitespace on lines"),(0,n.kt)("li",{parentName:"ul"},"Code must be formatted according to Sun's conventions, with one exception: "),(0,n.kt)("li",{parentName:"ul"},"Indent two spaces per level, not four."))),(0,n.kt)("li",{parentName:"ul"},"CODE vs Docs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'DOCs commits (README files, README.md files, and .txt files) can be commited by simply stating in the JIRA ("DOC")')))),(0,n.kt)("h2",{id:"for-committers-how-to-commit-patches"},"For Committers: how to commit patches"),(0,n.kt)("p",null,"While git am is typically used for applying patches generated using git format-patch, we recommend that committers use the --signoff flag when using git am. This way the commit, even though is attributed to the contributor, it shows the committer's name in the log message as \"Signed-off-by: ",(0,n.kt)("inlineCode",{parentName:"p"},"<Committer name>"),'" which can be useful.\nConsequently, to commit a patch, do the following:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git am --signoff < BIGTOP-1031.patch\n")),(0,n.kt)("p",null,"Once the patch is committed, please update the JIRA ticket:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"make sure that Affects Version/s: and Fix Version/s: are correctly set against the release the issue is found in and is fixed against"),(0,n.kt)("li",{parentName:"ul"},"make sure that Component/s: field has correct values"),(0,n.kt)("li",{parentName:"ul"},"make sure the ticket is assigned to the person who contributed to code. If such person isn't yet marked as a contributor and the ticket can not be assigned to her/him please ping anyone who has JIRA project admin. rights - pretty much any PMC member. Please remember that correct attribution is an important part of the contribution."),(0,n.kt)("li",{parentName:"ul"},"make sure the status of the ticket is set to Resolved")),(0,n.kt)("h2",{id:"for-committers-how-to-commit-a-patch-in-both-master-and-release-branch"},"For Committers: how to commit a patch in both master and release branch"),(0,n.kt)("p",null,"This section is to talk about how Bigtop deal with the situation that a patch needs to be committed in both master and release branch. This often happened when a bug is discovered at the time we already created the release branch. To handle such scenario, Bigtop uses feature branch model. (To know more about git branching model, see ",(0,n.kt)("a",{parentName:"p",href:"http://nvie.com/posts/a-successful-git-branching-model/"},"http://nvie.com/posts/a-successful-git-branching-model/"),")"),(0,n.kt)("p",null,"For instance, if patch BIGTOP-1886.patch is getting in both master and branch-1.0, then we should create a feature branch from branch-1.0 named BIGTOP-1886, and add BIGTOP-1886.patch on top of BIGTOP-1886 branch, then merge BIGTOP-1886 branch into master and branch-1.0, respectively. This will give same commit sha1 of patch BIGTOP-1886 in both branch-1.0 and master."),(0,n.kt)("p",null,"Here's a concrete example for what to do when we'd like to add fix 1 and fix 2 in both branch-1.0 and master. The example was contributed by Olaf Flebbe."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'#inital setup of repo\ngit init\n# Development step on master\necho step1 >file\ngit add file\ngit commit -m step1\n \n# Now we branch the release candidate\ngit checkout -b branch-1.0\n# and doing the release\necho release >changelog\ngit add changelog\ngit commit -m "release-1.0 branch finished"\ngit tag release-1.0.0\n# development on master continues\ngit checkout master\necho development > development\ngit add development\ngit commit -m "development on master"\n \n# Oops two fixes are needed\n# create a working branch for these\ngit checkout branch-1.0\ngit checkout -b fixes-1.0\necho "fix 1 1.0" to  >fix10\necho "fix 2 1.0" to  >fix20\ngit add fix10\ngit commit -m "fix 1 on 1.0.0" fix10\ngit add fix20\ngit commit -m "fix 2 on 1.0.0" fix20\n# merge fix branch in release branch0\ngit checkout branch-1.0\ngit merge -m "merge fixes-1.0" fixes-1.0\n# new release\necho release 1.0.1 >> changelog\ngit add changelog\ngit commit -m "release-1.0.1"\ngit tag release-1.0.1\n# Merge fixes on development, too\ngit checkout master\ngit merge -m "merge fixes-1.0" fixes-1.0\n# continue development\necho devel >>development\ngit commit -a -m "development2"\n')))}m.isMDXComponent=!0}}]);