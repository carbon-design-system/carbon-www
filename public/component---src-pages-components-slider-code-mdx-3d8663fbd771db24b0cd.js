(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{838:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return s}),a.d(t,"default",function(){return p});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var r=a(139),n=a(941);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=i("ComponentCode"),b=i("ComponentDocs"),l={_frontmatter:s},d=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(d,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{name:"Slider",component:"slider",variation:"slider",hasReactVersion:!0,hasLightVersion:!0,hasVueVersion:"slider--default",hasAngularVersion:"?path=/story/slider--basic",codepen:"zXqozN",mdxType:"ComponentCode"}),Object(r.b)(c,{name:"Slider disabled",component:"slider",variation:"slider--disabled",hasReactVersion:!0,hasVueVersion:"slider--default&knob-disabled=true",hasAngularVersion:"?path=/story/slider--basic&knob-disabled=true",codepen:"qwZqPV",mdxType:"ComponentCode"}),Object(r.b)(b,{component:"slider",mdxType:"ComponentDocs"}))}p.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var r=a(2),n=a(939),o=a(1),s=a.n(o),i=a(265),c=a(120),b=a.n(c),l=a(100),d=a(161),p=a(3),u=a.n(p),m=a(761),h=function(e){var t,a=e.children,n=e.title,o=e.tabs,s=void 0===o?[]:o,i=e.shouldHideHeader;return Object(r.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=s.length,t[m.pageHeaderShifted]=i,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:m.text},n)))),a)},v=a(940),f=a(762),O=function(e){var t=e.relativePagePath,a=e.repository,n=v.data.site.siteMetadata.repository,o=a||n,s=o.baseUrl,i=s+"/tree/master"+o.subDirectory+"/src/pages"+t;return s?Object(r.b)("div",{className:"bx--row "+f.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:f.link,href:i},"Edit this page on GitHub"))):null},j=a(266),g=a(38),y=a(763);var x=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map(function(e){var t,o=b()(e,{lower:!0}),s=o===n,i=a.replace(n,o);return Object(r.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(r.b)(g.Link,{className:y.link,to:""+i},e))});return Object(r.b)("div",{className:y.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:y.list},o))))))},n}(s.a.Component),w=a(267);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,s=t.frontmatter,c=void 0===s?{}:s,p=t.relativePagePath,u=c.tabs,m=c.title,v=Object(l.c)(),f=!!u&&"down"===v,g=n.data.site.pathPrefix,y=g?o.pathname.replace(g,""):o.pathname,N=u?y.split("/").slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(r.b)(d.a,{shouldHideHeader:f,homepage:!1},Object(r.b)(h,{shouldHideHeader:f,title:m,label:"label",tabs:u},u&&Object(r.b)(x,{slug:y,tabs:u,currentTab:N})),Object(r.b)(w.a,{padded:!0},a,Object(r.b)(O,{relativePagePath:p})),Object(r.b)(j.a,{pageContext:t,location:o,slug:y,tabs:u,currentTab:N}),Object(r.b)(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-slider-code-mdx-3d8663fbd771db24b0cd.js.map