(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{807:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return i}),a.d(t,"default",function(){return p});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var o=a(139),n=a(941);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=s("ComponentCode"),l=s("ComponentDocs"),b={_frontmatter:i},d=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(d,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{name:"Loading",component:"loading",variation:"loading",hasReactVersion:!0,hasVueVersion:"loading--default",hasAngularVersion:"?path=/story/loading--basic&knob-With overlay=true&knob-Size of the loading circle=normal",codepen:"eoZzvV",mdxType:"ComponentCode"}),Object(o.b)(c,{name:"Loading without overlay",component:"loading",variation:"loading--without-overlay",hasReactVersion:!0,hasVueVersion:"loading--default&knob-overlay=false",hasAngularVersion:"?path=/story/loading--basic",codepen:"ROaRgb",mdxType:"ComponentCode"}),Object(o.b)(c,{name:"Loading small",component:"loading",variation:"loading--small",hasReactVersion:!0,hasVueVersion:"loading--default&knob-small=true",hasAngularVersion:"?path=/story/loading--basic&knob-With overlay=&knob-Size of the loading circle=sm",codepen:"dLMXRE",mdxType:"ComponentCode"}),Object(o.b)(l,{component:"loading",mdxType:"ComponentDocs"}))}p.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var o=a(2),n=a(939),r=a(1),i=a.n(r),s=a(265),c=a(120),l=a.n(c),b=a(100),d=a(161),p=a(3),u=a.n(p),m=a(761),g=function(e){var t,a=e.children,n=e.title,r=e.tabs,i=void 0===r?[]:r,s=e.shouldHideHeader;return Object(o.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=i.length,t[m.pageHeaderShifted]=s,t))},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12"},Object(o.b)("h1",{id:"page-title",className:m.text},n)))),a)},h=a(940),v=a(762),f=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=i+"/tree/master"+r.subDirectory+"/src/pages"+t;return i?Object(o.b)("div",{className:"bx--row "+v.row},Object(o.b)("div",{className:"bx--col"},Object(o.b)("a",{className:v.link,href:s},"Edit this page on GitHub"))):null},O=a(266),j=a(38),y=a(763);var x=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(function(e){var t,r=l()(e,{lower:!0}),i=r===n,s=a.replace(n,r);return Object(o.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(o.b)(j.Link,{className:y.link,to:""+s},e))});return Object(o.b)("div",{className:y.tabsContainer},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(o.b)("nav",null,Object(o.b)("ul",{className:y.list},r))))))},n}(i.a.Component),w=a(267);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=t.frontmatter,c=void 0===i?{}:i,p=t.relativePagePath,u=c.tabs,m=c.title,h=Object(b.c)(),v=!!u&&"down"===h,j=n.data.site.pathPrefix,y=j?r.pathname.replace(j,""):r.pathname,C=u?y.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(o.b)(d.a,{shouldHideHeader:v,homepage:!1},Object(o.b)(g,{shouldHideHeader:v,title:m,label:"label",tabs:u},u&&Object(o.b)(x,{slug:y,tabs:u,currentTab:C})),Object(o.b)(w.a,{padded:!0},a,Object(o.b)(f,{relativePagePath:p})),Object(o.b)(O.a,{pageContext:t,location:r,slug:y,tabs:u,currentTab:C}),Object(o.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-loading-code-mdx-08dfd1cd4084b4429298.js.map