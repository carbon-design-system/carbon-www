(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{859:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",function(){return i}),o.d(e,"default",function(){return d});o(11),o(6),o(7),o(5),o(8),o(2),o(1);var a=o(139),n=o(941);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}var i={},c=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}},s=c("ComponentCode"),l=c("ComponentDocs"),p={_frontmatter:i},b=n.a;function d(t){var e=t.components,o=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,["components"]);return Object(a.b)(b,r({},p,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)(s,{name:"Tooltip",component:"tooltip",variation:"tooltip",hasReactVersion:!0,hasVueVersion:"tooltip--default-interactive-tootlip",hasAngularVersion:"?path=/story/tooltip--basic",codepen:"OGNWpy",mdxType:"ComponentCode"}),Object(a.b)(s,{name:"Icon tooltip",component:"tooltip",variation:"tooltip--icon",hasReactVersion:!0,hasVueVersion:"tooltip--default-tootlip",codepen:"LvNxWq",mdxType:"ComponentCode"}),Object(a.b)(s,{name:"Definition tooltip",component:"tooltip",variation:"tooltip--definition",hasReactVersion:!0,hasVueVersion:"tooltip--default-definition-tootlip",codepen:"pByRPr",mdxType:"ComponentCode"}),Object(a.b)(l,{component:"tooltip",mdxType:"ComponentDocs"}))}d.isMDXComponent=!0},939:function(t){t.exports={data:{site:{pathPrefix:""}}}},940:function(t){t.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(t,e,o){"use strict";o(36),o(26);var a=o(2),n=o(939),r=o(1),i=o.n(r),c=o(265),s=o(120),l=o.n(s),p=o(100),b=o(161),d=o(3),u=o.n(d),m=o(761),f=function(t){var e,o=t.children,n=t.title,r=t.tabs,i=void 0===r?[]:r,c=t.shouldHideHeader;return Object(a.b)("div",{className:u()((e={},e[m.pageHeader]=m.pageHeader,e[m.pageHeaderSticky]=i.length,e[m.pageHeaderShifted]=c,e))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:m.text},n)))),o)},v=o(940),O=o(762),h=function(t){var e=t.relativePagePath,o=t.repository,n=v.data.site.siteMetadata.repository,r=o||n,i=r.baseUrl,c=i+"/tree/master"+r.subDirectory+"/src/pages"+e;return i?Object(a.b)("div",{className:"bx--row "+O.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},j=o(266),g=o(38),y=o(763);var x=function(t){var e,o;function n(){return t.apply(this,arguments)||this}return o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,n.prototype.render=function(){var t=this.props,e=t.tabs,o=t.slug,n=o.split("/").filter(Boolean).slice(-1)[0],r=e.map(function(t){var e,r=l()(t,{lower:!0}),i=r===n,c=o.replace(n,r);return Object(a.b)("li",{key:t,className:u()((e={},e[y.selectedItem]=i,e),y.listItem)},Object(a.b)(g.Link,{className:y.link,to:""+c},t))});return Object(a.b)("div",{className:y.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:y.list},r))))))},n}(i.a.Component),w=o(267);e.a=function(t){var e=t.pageContext,o=t.children,r=t.location,i=e.frontmatter,s=void 0===i?{}:i,d=e.relativePagePath,u=s.tabs,m=s.title,v=Object(p.c)(),O=!!u&&"down"===v,g=n.data.site.pathPrefix,y=g?r.pathname.replace(g,""):r.pathname,N=u?y.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(a.b)(b.a,{shouldHideHeader:O,homepage:!1},Object(a.b)(f,{shouldHideHeader:O,title:m,label:"label",tabs:u},u&&Object(a.b)(x,{slug:y,tabs:u,currentTab:N})),Object(a.b)(w.a,{padded:!0},o,Object(a.b)(h,{relativePagePath:d})),Object(a.b)(j.a,{pageContext:e,location:r,slug:y,tabs:u,currentTab:N}),Object(a.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-tooltip-code-mdx-1e861fb82c6c59b2c4ea.js.map