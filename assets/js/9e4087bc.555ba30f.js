"use strict";(self.webpackChunknutanix_how_to=self.webpackChunknutanix_how_to||[]).push([[2711],{9331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(6540);var r=a(8774),s=a(1312),i=a(1003),n=a(781),c=a(1107),l=a(4848);function h(e){let{year:t,posts:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{as:"h3",id:t,children:t}),(0,l.jsx)("ul",{children:a.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function o(e){let{years:t}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},t)))})})})}function d(e){let{archive:t}=e;const a=(0,s.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const t=e.reduce(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:a,description:r}),(0,l.jsxs)(n.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.A,{as:"h1",className:"hero__title",children:a}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(o,{years:h})})]})]})}}}]);