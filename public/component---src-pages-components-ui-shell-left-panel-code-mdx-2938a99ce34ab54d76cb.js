(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{866:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return n}),a.d(t,"default",function(){return m});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var o=a(139),i=a(941);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var n={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=s("Row"),l=s("Column"),b=s("ComponentDocs"),d={_frontmatter:n},p=i.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(o.b)(p,r({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"fixed-side-nav"},"Fixed side-nav"),Object(o.b)(c,{mdxType:"Row"},Object(o.b)(l,{offsetLg:"4",mdxType:"Column"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/fixed-sidenav-tk9cs?fontsize=14&hidenavigation=1&view=preview",title:"fixed-sidenav",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",style:{width:"100%",height:"500px",borderWidth:"0px",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)("h2",{id:"fixed-side-nav-with-icons"},"Fixed side-nav with icons"),Object(o.b)(c,{mdxType:"Row"},Object(o.b)(l,{offsetLg:"4",mdxType:"Column"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/fixed-sidenav-with-icons-875it?fontsize=14&hidenavigation=1&view=preview",title:"fixed-sidenav-with-icons",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",style:{width:"100%",height:"500px",borderWidth:"0px",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)(b,{component:"ui-shell",mdxType:"ComponentDocs"}))}m.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var o=a(2),i=a(939),r=a(1),n=a.n(r),s=a(265),c=a(120),l=a.n(c),b=a(100),d=a(161),p=a(3),m=a.n(p),u=a(761),h=function(e){var t,a=e.children,i=e.title,r=e.tabs,n=void 0===r?[]:r,s=e.shouldHideHeader;return Object(o.b)("div",{className:m()((t={},t[u.pageHeader]=u.pageHeader,t[u.pageHeaderSticky]=n.length,t[u.pageHeaderShifted]=s,t))},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12"},Object(o.b)("h1",{id:"page-title",className:u.text},i)))),a)},v=a(940),f=a(762),w=function(e){var t=e.relativePagePath,a=e.repository,i=v.data.site.siteMetadata.repository,r=a||i,n=r.baseUrl,s=n+"/tree/master"+r.subDirectory+"/src/pages"+t;return n?Object(o.b)("div",{className:"bx--row "+f.row},Object(o.b)("div",{className:"bx--col"},Object(o.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},g=a(266),x=a(38),O=a(763);var j=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(function(e){var t,r=l()(e,{lower:!0}),n=r===i,s=a.replace(i,r);return Object(o.b)("li",{key:e,className:m()((t={},t[O.selectedItem]=n,t),O.listItem)},Object(o.b)(x.Link,{className:O.link,to:""+s},e))});return Object(o.b)("div",{className:O.tabsContainer},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(o.b)("nav",null,Object(o.b)("ul",{className:O.list},r))))))},i}(n.a.Component),y=a(267);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=t.frontmatter,c=void 0===n?{}:n,p=t.relativePagePath,m=c.tabs,u=c.title,v=Object(b.c)(),f=!!m&&"down"===v,x=i.data.site.pathPrefix,O=x?r.pathname.replace(x,""):r.pathname,N=m?O.split("/").slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(o.b)(d.a,{shouldHideHeader:f,homepage:!1},Object(o.b)(h,{shouldHideHeader:f,title:u,label:"label",tabs:m},m&&Object(o.b)(j,{slug:O,tabs:m,currentTab:N})),Object(o.b)(y.a,{padded:!0},a,Object(o.b)(w,{relativePagePath:p})),Object(o.b)(g.a,{pageContext:t,location:r,slug:O,tabs:m,currentTab:N}),Object(o.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-ui-shell-left-panel-code-mdx-2938a99ce34ab54d76cb.js.map