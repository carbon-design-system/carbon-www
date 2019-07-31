(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{849:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return r}),a.d(t,"default",function(){return o});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var s=a(139),i=a(941);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var r={},c={_frontmatter:r},b=i.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(s.b)(b,n({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"general-guidelines"},"General guidelines"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Tags")," are used for items that need to be labeled, categorized, or organized using keywords that describe them."),Object(s.b)("p",null,"Multiple or single tags can be used to categorize items."),Object(s.b)("p",null,"Use tags when content is mapped to multiple categories, and the user needs a way to differentiate between them."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.027173913043484%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of tags in a data table.",title:"Example of tags in a data table.",src:"/static/f1ff3d3c12ed8c317e34962fb51bff9d/fb070/tag-usage-2.png",srcSet:["/static/f1ff3d3c12ed8c317e34962fb51bff9d/d6747/tag-usage-2.png 288w","/static/f1ff3d3c12ed8c317e34962fb51bff9d/09548/tag-usage-2.png 576w","/static/f1ff3d3c12ed8c317e34962fb51bff9d/fb070/tag-usage-2.png 1152w","/static/f1ff3d3c12ed8c317e34962fb51bff9d/c3e47/tag-usage-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px"})),"\n    "),Object(s.b)("p",null,"Tags can also be used as a method of filtering data, to show only items within that particular category."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.74456521739131%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of tags in search.",title:"Example of tags in search.",src:"/static/1b233b204ae19f5ffa2f207f4d112294/fb070/tag-usage-1.png",srcSet:["/static/1b233b204ae19f5ffa2f207f4d112294/d6747/tag-usage-1.png 288w","/static/1b233b204ae19f5ffa2f207f4d112294/09548/tag-usage-1.png 576w","/static/1b233b204ae19f5ffa2f207f4d112294/fb070/tag-usage-1.png 1152w","/static/1b233b204ae19f5ffa2f207f4d112294/c3e47/tag-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px"})),"\n    "))}o.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var s=a(2),i=a(939),n=a(1),r=a.n(n),c=a(265),b=a(120),o=a.n(b),l=a(100),p=a(161),d=a(3),g=a.n(d),f=a(761),u=function(e){var t,a=e.children,i=e.title,n=e.tabs,r=void 0===n?[]:n,c=e.shouldHideHeader;return Object(s.b)("div",{className:g()((t={},t[f.pageHeader]=f.pageHeader,t[f.pageHeaderSticky]=r.length,t[f.pageHeaderShifted]=c,t))},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:f.text},i)))),a)},m=a(940),h=a(762),O=function(e){var t=e.relativePagePath,a=e.repository,i=m.data.site.siteMetadata.repository,n=a||i,r=n.baseUrl,c=r+"/tree/master"+n.subDirectory+"/src/pages"+t;return r?Object(s.b)("div",{className:"bx--row "+h.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},j=a(266),v=a(38),w=a(763);var y=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map(function(e){var t,n=o()(e,{lower:!0}),r=n===i,c=a.replace(i,n);return Object(s.b)("li",{key:e,className:g()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(s.b)(v.Link,{className:w.link,to:""+c},e))});return Object(s.b)("div",{className:w.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:w.list},n))))))},i}(r.a.Component),x=a(267);t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,g=b.tabs,f=b.title,m=Object(l.c)(),h=!!g&&"down"===m,v=i.data.site.pathPrefix,w=v?n.pathname.replace(v,""):n.pathname,N=g?w.split("/").slice(-1)[0]||o()(g[0],{lower:!0}):"";return Object(s.b)(p.a,{shouldHideHeader:h,homepage:!1},Object(s.b)(u,{shouldHideHeader:h,title:f,label:"label",tabs:g},g&&Object(s.b)(y,{slug:w,tabs:g,currentTab:N})),Object(s.b)(x.a,{padded:!0},a,Object(s.b)(O,{relativePagePath:d})),Object(s.b)(j.a,{pageContext:t,location:n,slug:w,tabs:g,currentTab:N}),Object(s.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-tag-usage-mdx-c6eb4dfa80a16c1f869a.js.map