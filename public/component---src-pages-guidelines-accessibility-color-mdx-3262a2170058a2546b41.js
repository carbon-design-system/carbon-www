(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{891:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return r}),a.d(t,"default",function(){return g});a(11),a(6),a(7),a(5),a(8),a(2),a(1);var n=a(139),i=a(941);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=c("AnchorLinks"),l=c("AnchorLink"),b=c("Row"),d=c("Column"),p=c("ResourceCard"),m={_frontmatter:r},u=i.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(u,o({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(l,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(l,{mdxType:"AnchorLink"},"Color contrast"),Object(n.b)(l,{mdxType:"AnchorLink"},"Low vision"),Object(n.b)(l,{mdxType:"AnchorLink"},"Tools")),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)(b,{className:"tile--group",mdxType:"Row"},Object(n.b)(d,{offsetLg:"4",colMd:"4",colLg:"4",noGutterSm:!0,mdxType:"Column"},Object(n.b)(p,{title:"Carbon color contrast tool",href:"https://marijohannessen.github.io/color-contrast-checker/",type:"resource",mdxType:"ResourceCard"}))),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Visual impairments can include low vision, color blindness, and complete blindness. Carbon components have been designed to accommodate the entire spectrum of visual impairment, though designers still need to exercise diligence to ensure that the components are used correctly."),Object(n.b)("h2",{id:"color-contrast"},"Color contrast"),Object(n.b)("p",null,"Carbon meets ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"}),"WCAG AA standards")," across all standard themes in the system, including color contrast ratios."),Object(n.b)("h4",{id:"standard-text"},"Standard text"),Object(n.b)("p",null,"Standard text and images of text must have a contrast ratio of at least ",Object(n.b)("strong",{parentName:"p"},"4.5:1"),"."),Object(n.b)("h4",{id:"large-text"},"Large text"),Object(n.b)("p",null,"Large text (at least 24 px regular and light / 19 px semi-bold) must have a contrast ratio of ",Object(n.b)("strong",{parentName:"p"},"3:1.")),Object(n.b)("h4",{id:"text-against-non-static-backgrounds"},"Text against non-static backgrounds"),Object(n.b)("p",null,"When text is rendered on a gradient background or image, make sure the text color meets contrast standards in all places it appears. This is especially important for parallax applications or animations where text and backgrounds are moving independently of each other."),Object(n.b)("h4",{id:"ui-components"},"UI components"),Object(n.b)("p",null,"Visual information used to indicate states and boundaries of UI components must have a contrast ratio of ",Object(n.b)("strong",{parentName:"p"},"3:1")," against adjacent colors. A UI component is defined as “a part of the content that is perceived by users as a single control for a distinct function.” This includes form elements."),Object(n.b)("p",null,Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/able/guidelines/ci162/contrast.html"}),"IBM Checkpoint 1.4.3 Contrast (Minimum)")),Object(n.b)("p",null,"Please refer to our ",Object(n.b)("a",o({parentName:"p"},{href:"/guidelines/color/usage"}),"usage section on the Colors page")," to learn more about color contrast ratios. You can also use this ",Object(n.b)("a",o({parentName:"p"},{href:"https://marijohannessen.github.io/color-contrast-checker/"}),"color contrast")," tool to ensure your ratios pass WCAG AA standards."),Object(n.b)("h2",{id:"color-blindness"},"Color blindness"),Object(n.b)("p",null,"Color blindness involves difficulty in perceiving or distinguishing between colors, as well as sensitivity to color brightness. It affects approximately one in twelve men and one in two hundred women worldwide."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Color deficiency"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Protanopia")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Red/green")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Tritanopia")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Blue")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Deuteranopia")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Green")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Monochromacy")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"All colors")))),Object(n.b)("h3",{id:"designing-for-color-blindness"},"Designing for color blindness"),Object(n.b)("p",null,"Don’t rely on color alone to convey meaning. This includes conveying information, indicating an action, prompting the user for a response, or distinguishing one visual element from another. When designing with color, it might help to use a color-blind simulator to review visibility of content. If you’re working in Sketch, we recommend the ",Object(n.b)("a",o({parentName:"p"},{href:"http://www.getstark.co/"}),"Stark")," plugin."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"rainbow palette",title:"rainbow palette",src:"/static/5262dffea372f7e4a577ff3ec2a4539e/fb070/color-accessibility-1.png",srcSet:["/static/5262dffea372f7e4a577ff3ec2a4539e/d6747/color-accessibility-1.png 288w","/static/5262dffea372f7e4a577ff3ec2a4539e/09548/color-accessibility-1.png 576w","/static/5262dffea372f7e4a577ff3ec2a4539e/fb070/color-accessibility-1.png 1152w","/static/5262dffea372f7e4a577ff3ec2a4539e/fb104/color-accessibility-1.png 1728w","/static/5262dffea372f7e4a577ff3ec2a4539e/8fefe/color-accessibility-1.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px"})),"\n    "),Object(n.b)("h2",{id:"low-vision"},"Low vision"),Object(n.b)("p",null,"Low vision can include partial sight in one or both eyes and can range from mild to severe. It affects about 4% of the world’s population."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Visual deficiency"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Low acuity")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Also known as “blurred vision.” Can make text difficult to read, since it appears fuzzy.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Low-contrast sensitivity")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Decreased ability to determine fine detail and distinguish one object from another")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Obstructed visual field")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"The user’s view is partially obstructed. Can include central vision and spotty vision.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Retinitis Pigmentosa")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Also known as “tunnel vision.” The user is only able to see central elements.")))),Object(n.b)("h3",{id:"low-vision-disabilities"},"Low-vision disabilities"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.214285714285715%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"blurred vision and tunnel vision example on Google website",title:"blurred vision and tunnel vision example on Google website",src:"/static/cac4d2304193cd2215ca6b53d9579852/fb070/color-accessibility-2.png",srcSet:["/static/cac4d2304193cd2215ca6b53d9579852/d6747/color-accessibility-2.png 288w","/static/cac4d2304193cd2215ca6b53d9579852/09548/color-accessibility-2.png 576w","/static/cac4d2304193cd2215ca6b53d9579852/fb070/color-accessibility-2.png 1152w","/static/cac4d2304193cd2215ca6b53d9579852/89965/color-accessibility-2.png 1680w"],sizes:"(max-width: 1152px) 100vw, 1152px"})),"\n    "),Object(n.b)("h3",{id:"designing-for-low-vision"},"Designing for low vision"),Object(n.b)("p",null,"To get an understanding of the various low-vision disabilities, we recommend using the ",Object(n.b)("a",o({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl"}),"NoCoffee")," Chrome plugin to preview websites. Low-vision users may be using a screen reader to preview your website or experience, so be sure to follow ",Object(n.b)("a",o({parentName:"p"},{href:"/guidelines/accessibility/keyboard"}),"keyboard guidelines")," to ensure the page is read to the user in a logical order."),Object(n.b)("h2",{id:"resources-1"},"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://w3.ibm.com/able/devtest/quick/"}),"IBM Accessibility quick guidance"),"(Internal only)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Web Accessibility Checklist")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/WCAG21/"}),"WCAG 2.1 guidelines")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/low-vision-needs/"}),"W3C low vision requirements"))),Object(n.b)("h2",{id:"tools"},"Tools"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en"}),"High Contrast Chrome plugin")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"http://www.getstark.co/"}),"Stark Sketch plugin")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl"}),"NoCoffee vision simulator"))))}g.isMDXComponent=!0},939:function(e){e.exports={data:{site:{pathPrefix:""}}}},940:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/carbon-design-system/carbon-www",subDirectory:""}}}}}},941:function(e,t,a){"use strict";a(36),a(26);var n=a(2),i=a(939),o=a(1),r=a.n(o),c=a(265),s=a(120),l=a.n(s),b=a(100),d=a(161),p=a(3),m=a.n(p),u=a(761),g=function(e){var t,a=e.children,i=e.title,o=e.tabs,r=void 0===o?[]:o,c=e.shouldHideHeader;return Object(n.b)("div",{className:m()((t={},t[u.pageHeader]=u.pageHeader,t[u.pageHeaderSticky]=r.length,t[u.pageHeaderShifted]=c,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},i)))),a)},h=a(940),j=a(762),f=function(e){var t=e.relativePagePath,a=e.repository,i=h.data.site.siteMetadata.repository,o=a||i,r=o.baseUrl,c=r+"/tree/master"+o.subDirectory+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+j.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},O=a(266),w=a(38),y=a(763);var N=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map(function(e){var t,o=l()(e,{lower:!0}),r=o===i,c=a.replace(i,o);return Object(n.b)("li",{key:e,className:m()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(n.b)(w.Link,{className:y.link,to:""+c},e))});return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},o))))))},i}(r.a.Component),v=a(267);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=t.frontmatter,s=void 0===r?{}:r,p=t.relativePagePath,m=s.tabs,u=s.title,h=Object(b.c)(),j=!!m&&"down"===h,w=i.data.site.pathPrefix,y=w?o.pathname.replace(w,""):o.pathname,x=m?y.split("/").slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(n.b)(d.a,{shouldHideHeader:j,homepage:!1},Object(n.b)(g,{shouldHideHeader:j,title:u,label:"label",tabs:m},m&&Object(n.b)(N,{slug:y,tabs:m,currentTab:x})),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(f,{relativePagePath:p})),Object(n.b)(O.a,{pageContext:t,location:o,slug:y,tabs:m,currentTab:x}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guidelines-accessibility-color-mdx-3262a2170058a2546b41.js.map