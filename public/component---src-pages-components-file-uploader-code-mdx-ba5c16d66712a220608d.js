(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{792:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return i}),a.d(t,"default",function(){return d});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var o=a(139),r=a(941);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=s("ComponentCode"),l=s("ComponentDocs"),b={_frontmatter:i},p=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(o.b)(p,n({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{name:"File uploader",component:"file-uploader",variation:"file-uploader",hasReactVersion:!0,hasVueVersion:"fileuploader--default",hasAngularVersion:"?path=/story/file-uploader--basic",codepen:"MRyyyw",mdxType:"ComponentCode"}),Object(o.b)(c,{name:"Upload states",component:"file-uploader",variation:"file-uploader--example-upload-states",hasReactVersion:!0,codepen:"xeVVBW",mdxType:"ComponentCode"}),Object(o.b)(l,{component:"file-uploader",mdxType:"ComponentDocs"}))}d.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var o=a(2),r=a(939),n=a(1),i=a.n(n),s=a(265),c=a(120),l=a.n(c),b=a(100),p=a(161),d=a(3),u=a.n(d),m=a(761),f=function(e){var t,a=e.children,r=e.title,n=e.tabs,i=void 0===n?[]:n,s=e.shouldHideHeader;return Object(o.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=i.length,t[m.pageHeaderShifted]=s,t))},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12"},Object(o.b)("h1",{id:"page-title",className:m.text},r)))),a)},v=a(940),O=a(762),h=function(e){var t=e.relativePagePath,a=e.repository,r=v.data.site.siteMetadata.repository,n=a||r,i=n.baseUrl,s=i+"/tree/master"+n.subDirectory+"/src/pages"+t;return i?Object(o.b)("div",{className:"bx--row "+O.row},Object(o.b)("div",{className:"bx--col"},Object(o.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},j=a(266),g=a(38),y=a(763);var x=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map(function(e){var t,n=l()(e,{lower:!0}),i=n===r,s=a.replace(r,n);return Object(o.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(o.b)(g.Link,{className:y.link,to:""+s},e))});return Object(o.b)("div",{className:y.tabsContainer},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(o.b)("nav",null,Object(o.b)("ul",{className:y.list},n))))))},r}(i.a.Component),w=a(267);t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=t.frontmatter,c=void 0===i?{}:i,d=t.relativePagePath,u=c.tabs,m=c.title,v=Object(b.c)(),O=!!u&&"down"===v,g=r.data.site.pathPrefix,y=g?n.pathname.replace(g,""):n.pathname,N=u?y.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(o.b)(p.a,{shouldHideHeader:O,homepage:!1},Object(o.b)(f,{shouldHideHeader:O,title:m,label:"label",tabs:u},u&&Object(o.b)(x,{slug:y,tabs:u,currentTab:N})),Object(o.b)(w.a,{padded:!0},a,Object(o.b)(h,{relativePagePath:d})),Object(o.b)(j.a,{pageContext:t,location:n,slug:y,tabs:u,currentTab:N}),Object(o.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-file-uploader-code-mdx-ba5c16d66712a220608d.js.map