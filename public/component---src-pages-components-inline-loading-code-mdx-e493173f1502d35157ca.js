(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{798:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return i}),a.d(t,"default",function(){return p});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var n=a(139),o=a(941);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=c("ComponentCode"),l=c("ComponentDocs"),b={_frontmatter:i},d=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(d,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{name:"Inline loading",component:"inline-loading",variation:"inline-loading",hasReactVersion:!0,hasVueVersion:"inlineloading--default",hasAngularVersion:"?path=/story/inline-loading--basic",codepen:"dLMXow",mdxType:"ComponentCode"}),Object(n.b)(l,{component:"inline-loading",mdxType:"ComponentDocs"}))}p.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var n=a(2),o=a(939),r=a(1),i=a.n(r),c=a(265),s=a(120),l=a.n(s),b=a(100),d=a(161),p=a(3),u=a.n(p),m=a(761),g=function(e){var t,a=e.children,o=e.title,r=e.tabs,i=void 0===r?[]:r,c=e.shouldHideHeader;return Object(n.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=i.length,t[m.pageHeaderShifted]=c,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},o)))),a)},v=a(940),f=a(762),O=function(e){var t=e.relativePagePath,a=e.repository,o=v.data.site.siteMetadata.repository,r=a||o,i=r.baseUrl,c=i+"/tree/master"+r.subDirectory+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+f.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},h=a(266),j=a(38),y=a(763);var x=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(function(e){var t,r=l()(e,{lower:!0}),i=r===o,c=a.replace(o,r);return Object(n.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(n.b)(j.Link,{className:y.link,to:""+c},e))});return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},r))))))},o}(i.a.Component),w=a(267);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,u=s.tabs,m=s.title,v=Object(b.c)(),f=!!u&&"down"===v,j=o.data.site.pathPrefix,y=j?r.pathname.replace(j,""):r.pathname,N=u?y.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(n.b)(d.a,{shouldHideHeader:f,homepage:!1},Object(n.b)(g,{shouldHideHeader:f,title:m,label:"label",tabs:u},u&&Object(n.b)(x,{slug:y,tabs:u,currentTab:N})),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:p})),Object(n.b)(h.a,{pageContext:t,location:r,slug:y,tabs:u,currentTab:N}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-inline-loading-code-mdx-e493173f1502d35157ca.js.map