(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{853:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return i}),a.d(t,"default",function(){return d});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var n=a(139),o=a(941);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=c("ComponentCode"),l=c("ComponentDocs"),b={_frontmatter:i},p=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(p,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{name:"Tile",component:"tile",variation:"tile",hasReactVersion:!0,hasVueVersion:"tile--default",hasAngularVersion:"?path=/story/tiles--basic",codepen:"qwZRWy",mdxType:"ComponentCode"}),Object(n.b)(s,{name:"Clickable tile",component:"tile",variation:"tile--clickable",hasReactVersion:!0,hasVueVersion:"tile--clickable",hasAngularVersion:"?path=/story/tiles--clickable",codepen:"yrOgyM",mdxType:"ComponentCode"}),Object(n.b)(s,{name:"Selectable tile",component:"tile",variation:"tile--selectable",hasReactVersion:!0,hasVueVersion:"tile--selectable",codepen:"wZGgKK",mdxType:"ComponentCode"}),Object(n.b)(s,{name:"Expandable tile",component:"tile",variation:"tile--expandable",hasReactVersion:!0,hasVueVersion:"tile--expandable",codepen:"QPNdNG",mdxType:"ComponentCode"}),Object(n.b)(s,{name:"Grid tile",component:"tile",variation:"tile--grid",hasReactVersion:!0,mdxType:"ComponentCode"}),Object(n.b)(l,{component:"tile",mdxType:"ComponentDocs"}))}d.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var n=a(2),o=a(939),r=a(1),i=a.n(r),c=a(265),s=a(120),l=a.n(s),b=a(100),p=a(161),d=a(3),u=a.n(d),m=a(761),h=function(e){var t,a=e.children,o=e.title,r=e.tabs,i=void 0===r?[]:r,c=e.shouldHideHeader;return Object(n.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=i.length,t[m.pageHeaderShifted]=c,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},o)))),a)},v=a(940),O=a(762),j=function(e){var t=e.relativePagePath,a=e.repository,o=v.data.site.siteMetadata.repository,r=a||o,i=r.baseUrl,c=i+"/tree/master"+r.subDirectory+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},f=a(266),g=a(38),y=a(763);var x=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(function(e){var t,r=l()(e,{lower:!0}),i=r===o,c=a.replace(o,r);return Object(n.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(n.b)(g.Link,{className:y.link,to:""+c},e))});return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},r))))))},o}(i.a.Component),w=a(267);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=s.tabs,m=s.title,v=Object(b.c)(),O=!!u&&"down"===v,g=o.data.site.pathPrefix,y=g?r.pathname.replace(g,""):r.pathname,C=u?y.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(n.b)(p.a,{shouldHideHeader:O,homepage:!1},Object(n.b)(h,{shouldHideHeader:O,title:m,label:"label",tabs:u},u&&Object(n.b)(x,{slug:y,tabs:u,currentTab:C})),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:d})),Object(n.b)(f.a,{pageContext:t,location:r,slug:y,tabs:u,currentTab:C}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-tile-code-mdx-09b5d0cf04c37fe36ecd.js.map