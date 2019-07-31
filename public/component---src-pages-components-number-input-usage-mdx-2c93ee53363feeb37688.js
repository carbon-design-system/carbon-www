(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{818:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return s}),a.d(t,"default",function(){return o});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var n=a(139),r=a(941);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},b={_frontmatter:s},c=r.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"general-guidance"},"General guidance"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Number inputs")," are similar to text inputs, but contain controls used to increase or decrease an incremental value."),Object(n.b)("h2",{id:"format"},"Format"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Do not use number inputs when large value changes are expected. They work best for making small, incremental changes that only require a few clicks."),Object(n.b)("li",{parentName:"ul"},"Enable the user to also choose to type a number in the field."),Object(n.b)("li",{parentName:"ul"},"Ensure that a default value is shown within the field."),Object(n.b)("li",{parentName:"ul"},"Use a clear and concise label for the number input."),Object(n.b)("li",{parentName:"ul"},"Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) for the label."),Object(n.b)("li",{parentName:"ul"},"See further guidance for using number labels within ",Object(n.b)("a",i({parentName:"li"},{href:"/components/form/usage"}),"forms"),".")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.434782608695656%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"number input example",title:"number input example",src:"/static/ea5658b026eeab43b314d06e198af0d2/fb070/number-input-usage-1.png",srcSet:["/static/ea5658b026eeab43b314d06e198af0d2/d6747/number-input-usage-1.png 288w","/static/ea5658b026eeab43b314d06e198af0d2/09548/number-input-usage-1.png 576w","/static/ea5658b026eeab43b314d06e198af0d2/fb070/number-input-usage-1.png 1152w","/static/ea5658b026eeab43b314d06e198af0d2/c3e47/number-input-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px"})),"\n    "))}o.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var n=a(2),r=a(939),i=a(1),s=a.n(i),b=a(265),c=a(120),o=a.n(c),l=a(100),u=a(161),p=a(3),d=a.n(p),m=a(761),g=function(e){var t,a=e.children,r=e.title,i=e.tabs,s=void 0===i?[]:i,b=e.shouldHideHeader;return Object(n.b)("div",{className:d()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=s.length,t[m.pageHeaderShifted]=b,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},r)))),a)},f=a(940),h=a(762),O=function(e){var t=e.relativePagePath,a=e.repository,r=f.data.site.siteMetadata.repository,i=a||r,s=i.baseUrl,b=s+"/tree/master"+i.subDirectory+"/src/pages"+t;return s?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},j=a(266),v=a(38),y=a(763);var w=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map(function(e){var t,i=o()(e,{lower:!0}),s=i===r,b=a.replace(r,i);return Object(n.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(n.b)(v.Link,{className:y.link,to:""+b},e))});return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},i))))))},r}(s.a.Component),x=a(267);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=t.frontmatter,c=void 0===s?{}:s,p=t.relativePagePath,d=c.tabs,m=c.title,f=Object(l.c)(),h=!!d&&"down"===f,v=r.data.site.pathPrefix,y=v?i.pathname.replace(v,""):i.pathname,N=d?y.split("/").slice(-1)[0]||o()(d[0],{lower:!0}):"";return Object(n.b)(u.a,{shouldHideHeader:h,homepage:!1},Object(n.b)(g,{shouldHideHeader:h,title:m,label:"label",tabs:d},d&&Object(n.b)(w,{slug:y,tabs:d,currentTab:N})),Object(n.b)(x.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:p})),Object(n.b)(j.a,{pageContext:t,location:i,slug:y,tabs:d,currentTab:N}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-number-input-usage-mdx-2c93ee53363feeb37688.js.map