(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{808:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return s}),a.d(t,"default",function(){return c});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var r=a(139),n=a(941);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s={},o={_frontmatter:s},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"general-guidance"},"General guidance"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Lists")," consist of related content grouped together and organized vertically."),Object(r.b)("h2",{id:"variations"},"Variations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",i({parentName:"tr"},{align:null}),"List type"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"Purpose"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"Unordered lists"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"To present content of equal status or value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"Ordered lists"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Imply sequence and order, and are commonly used when giving a set of instructions.")))),Object(r.b)("h2",{id:"content"},"Content"),Object(r.b)("h4",{id:"length"},"Length"),Object(r.b)("p",null,"Generally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a ",Object(r.b)("a",i({parentName:"p"},{href:"/components/data-table"}),"data table.")),Object(r.b)("h4",{id:"order"},"Order"),Object(r.b)("p",null,"Arrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts. Alternatively, organize in alphabetical or numeric order."),Object(r.b)("h4",{id:"text"},"Text"),Object(r.b)("p",null,"Use list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command)."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.45652173913044%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a list",title:"Example of a list",src:"/static/84e9507d75621039f90fb2d208e79948/fb070/list-usage-1.png",srcSet:["/static/84e9507d75621039f90fb2d208e79948/d6747/list-usage-1.png 288w","/static/84e9507d75621039f90fb2d208e79948/09548/list-usage-1.png 576w","/static/84e9507d75621039f90fb2d208e79948/fb070/list-usage-1.png 1152w","/static/84e9507d75621039f90fb2d208e79948/c3e47/list-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px"})),"\n    "))}c.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var r=a(2),n=a(939),i=a(1),s=a.n(i),o=a(265),l=a(120),c=a.n(l),b=a(100),p=a(161),d=a(3),u=a.n(d),m=a(761),g=function(e){var t,a=e.children,n=e.title,i=e.tabs,s=void 0===i?[]:i,o=e.shouldHideHeader;return Object(r.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=s.length,t[m.pageHeaderShifted]=o,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:m.text},n)))),a)},O=a(940),f=a(762),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,i=a||n,s=i.baseUrl,o=s+"/tree/master"+i.subDirectory+"/src/pages"+t;return s?Object(r.b)("div",{className:"bx--row "+f.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:f.link,href:o},"Edit this page on GitHub"))):null},j=a(266),v=a(38),y=a(763);var x=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map(function(e){var t,i=c()(e,{lower:!0}),s=i===n,o=a.replace(n,i);return Object(r.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(r.b)(v.Link,{className:y.link,to:""+o},e))});return Object(r.b)("div",{className:y.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:y.list},i))))))},n}(s.a.Component),N=a(267);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=t.frontmatter,l=void 0===s?{}:s,d=t.relativePagePath,u=l.tabs,m=l.title,O=Object(b.c)(),f=!!u&&"down"===O,v=n.data.site.pathPrefix,y=v?i.pathname.replace(v,""):i.pathname,w=u?y.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(r.b)(p.a,{shouldHideHeader:f,homepage:!1},Object(r.b)(g,{shouldHideHeader:f,title:m,label:"label",tabs:u},u&&Object(r.b)(x,{slug:y,tabs:u,currentTab:w})),Object(r.b)(N.a,{padded:!0},a,Object(r.b)(h,{relativePagePath:d})),Object(r.b)(j.a,{pageContext:t,location:i,slug:y,tabs:u,currentTab:w}),Object(r.b)(o.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-list-usage-mdx-0f0be92ff2087b93aff4.js.map