"use strict";(self.webpackChunkbigtop_site=self.webpackChunkbigtop_site||[]).push([[7645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,license:'Licensed to the Apache Software Foundation (ASF) under one or more\ncontributor license agreements.  See the NOTICE file distributed with\nthis work for additional information regarding copyright ownership.\nThe ASF licenses this file to You under the Apache License, Version 2.0\n(the "License"); you may not use this file except in compliance with\nthe License.  You may obtain a copy of the License at\n\n   http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n'},a="BigTop Docker provisioner",s={unversionedId:"integration-test/docker-provisioner",id:"integration-test/docker-provisioner",title:"BigTop Docker provisioner",description:"Overview",source:"@site/docs/integration-test/docker-provisioner.md",sourceDirName:"integration-test",slug:"/integration-test/docker-provisioner",permalink:"/bigtop-site-yoda-mon/docs/next/integration-test/docker-provisioner",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/integration-test/docker-provisioner.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,license:'Licensed to the Apache Software Foundation (ASF) under one or more\ncontributor license agreements.  See the NOTICE file distributed with\nthis work for additional information regarding copyright ownership.\nThe ASF licenses this file to You under the Apache License, Version 2.0\n(the "License"); you may not use this file except in compliance with\nthe License.  You may obtain a copy of the License at\n\n   http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n'},sidebar:"tutorialSidebar",previous:{title:"Integration Test",permalink:"/bigtop-site-yoda-mon/docs/next/category/integration-test"},next:{title:"Deployment",permalink:"/bigtop-site-yoda-mon/docs/next/category/deployment"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"OS X and Windows",id:"os-x-and-windows",level:3},{value:"Linux",id:"linux",level:3},{value:"USAGE",id:"usage",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Configure Apache Hadoop ecosystem components",id:"configure-apache-hadoop-ecosystem-components",level:2},{value:"Experimental",id:"experimental",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bigtop-docker-provisioner"},"BigTop Docker provisioner"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Docker Compose definition and wrapper script that creates Bigtop virtual Hadoop cluster on top of Docker containers for you, by pulling from existing publishing bigtop repositories.\nThis cluster can be used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to test bigtop smoke tests"),(0,r.kt)("li",{parentName:"ul"},"to test bigtop puppet recipes"),(0,r.kt)("li",{parentName:"ul"},"to run integration test with your application")),(0,r.kt)("p",null,"This has been verified on Docker Engine 1.9.1, with api version 1.15, and Docker Compose 1.5.2 on Amazon Linux 2015.09 release."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"os-x-and-windows"},"OS X and Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/docker-toolbox"},"Docker Toolbox")),(0,r.kt)("li",{parentName:"ul"},"Install Ruby")),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/installation/"},"Docker"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Ruby")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the Docker daemon"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"service docker start\n")),(0,r.kt)("h2",{id:"usage"},"USAGE"),(0,r.kt)("p",null,"1) Create a Bigtop Hadoop cluster by given # of node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh --create 3\n")),(0,r.kt)("p",null,"2) Destroy the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh --destroy\n")),(0,r.kt)("p",null,"3) Get into the first container (the master)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh --exec 1 bash\n")),(0,r.kt)("p",null,"4) Execute a command on the second container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh --exec 2 hadoop fs -ls /\n")),(0,r.kt)("p",null,"5) Update your cluster after doing configuration changes on ./config. (re-run puppet apply)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh --provision\n")),(0,r.kt)("p",null,"6) Run Bigtop smoke tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh --smoke-tests\n")),(0,r.kt)("p",null,"7) Chain your operations with-in one command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh --create 5 --smoke-tests --destroy\n")),(0,r.kt)("p",null,"Commands will be executed by following order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create 5 node cluster => run smoke tests => destroy the cluster\n")),(0,r.kt)("p",null,"8) See helper message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker-hadoop.sh -h\nusage: docker-hadoop.sh [-C file ] args\n       -C file                                   Use alternate file for config.yaml\n  commands:\n       -c NUM_INSTANCES, --create NUM_INSTANCES  Create a Docker based Bigtop Hadoop cluster\n       -d, --destroy                             Destroy the cluster\n       -e, --exec INSTANCE_NO|INSTANCE_NAME      Execute command on a specific instance. Instance can be specified by name or number.\n                                                 For example: docker-hadoop.sh --exec 1 bash\n                                                              docker-hadoop.sh --exec docker_bigtop_1 bash\n       -E, --env-check                           Check whether required tools has been installed\n       -l, --list                                List out container status for the cluster\n       -p, --provision                           Deploy configuration changes\n       -s, --smoke-tests                         Run Bigtop smoke tests\n       -h, --help\n")),(0,r.kt)("h2",{id:"configurations"},"Configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are several parameters can be configured in config.yaml:")),(0,r.kt)("p",null,"1) Modify memory limit for Docker containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker:\n        memory_limit: "2g"\n\n')),(0,r.kt)("p",null,"2) Enable local repository"),(0,r.kt)("p",null,"If you've built packages using local cloned bigtop and produced the apt/yum repo, set the following to true to deploy those packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"enable_local_repo = true\n")),(0,r.kt)("h2",{id:"configure-apache-hadoop-ecosystem-components"},"Configure Apache Hadoop ecosystem components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose the ecosystem you want to be deployed by modifying components in config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'components: "hadoop, hbase, yarn,..."\n')),(0,r.kt)("p",null,"By default, Apache Hadoop and YARN will be installed."),(0,r.kt)("h2",{id:"experimental"},"Experimental"),(0,r.kt)("p",null,"With recent OS versions, like Debian 11  Fedora 35, the cgroupsv2 settings are enabled by default. Running Docker compose seems to require different settings. For example, mounting /sys/fs/cgroup:ro to the containers breaks systemd and dbus when they are installed and started (in the container). The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-hadoop.sh")," script offers an option, ",(0,r.kt)("inlineCode",{parentName:"p"},"-F"),", to load a different configuration file for Docker compose (by default, ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is picked up). The configuration file to load is ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose-cgroupsv2.yml"),". More info in BIGTOP-3614, BIGTOP-3665."))}d.isMDXComponent=!0}}]);