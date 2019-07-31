(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{822:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return i}),a.d(t,"default",function(){return l});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var n=a(139),r=a(941),o=a(342);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},b=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,s({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"building-blocks"},"Building blocks"),Object(n.b)("p",null,"Components are one of the key building blocks of the design system. Each\ncomponent has been designed and coded to solve a specific UI problem, such as\npresenting a list of options, enabling submission of a form, providing feedback\nto the user, and so on. All of the components in Carbon have been designed to\nwork harmoniously together, as parts of a greater whole."),Object(n.b)(o.a,{mdxType:"ComponentOverview"}))}l.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var n=a(2),r=a(939),o=a(1),s=a.n(o),i=a(265),c=a(120),b=a.n(c),l=a(100),d=a(161),p=a(3),u=a.n(p),m=a(761),f=function(e){var t,a=e.children,r=e.title,o=e.tabs,s=void 0===o?[]:o,i=e.shouldHideHeader;return Object(n.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=s.length,t[m.pageHeaderShifted]=i,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},r)))),a)},h=a(940),g=a(762),v=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,o=a||r,s=o.baseUrl,i=s+"/tree/master"+o.subDirectory+"/src/pages"+t;return s?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},O=a(266),j=a(38),y=a(763);var w=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map(function(e){var t,o=b()(e,{lower:!0}),s=o===r,i=a.replace(r,o);return Object(n.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(n.b)(j.Link,{className:y.link,to:""+i},e))});return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},o))))))},r}(s.a.Component),x=a(267);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,s=t.frontmatter,c=void 0===s?{}:s,p=t.relativePagePath,u=c.tabs,m=c.title,h=Object(l.c)(),g=!!u&&"down"===h,j=r.data.site.pathPrefix,y=j?o.pathname.replace(j,""):o.pathname,N=u?y.split("/").slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(n.b)(d.a,{shouldHideHeader:g,homepage:!1},Object(n.b)(f,{shouldHideHeader:g,title:m,label:"label",tabs:u},u&&Object(n.b)(w,{slug:y,tabs:u,currentTab:N})),Object(n.b)(x.a,{padded:!0},a,Object(n.b)(v,{relativePagePath:p})),Object(n.b)(O.a,{pageContext:t,location:o,slug:y,tabs:u,currentTab:N}),Object(n.b)(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-overview-index-mdx-347d089e754d32021d82.js.map