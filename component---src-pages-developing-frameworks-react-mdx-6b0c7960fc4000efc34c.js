"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[602886],{969982:function(e,n,t){t.r(n);var r=t(28453),l=t(296540);function o(e){const n=Object.assign({p:"p",h2:"h2",img:"img",pre:"pre",code:"code",a:"a",h3:"h3",ol:"ol",li:"li"},(0,r.R)(),e.components),{PageDescription:t,AnchorLinks:o,AnchorLink:c,Row:s,Column:i,ResourceCard:m,MdxIcon:u,Title:p}=n;return c||a("AnchorLink",!0),o||a("AnchorLinks",!0),i||a("Column",!0),u||a("MdxIcon",!0),t||a("PageDescription",!0),m||a("ResourceCard",!0),s||a("Row",!0),p||a("Title",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"The Carbon React library provides front-end developers and engineers a\ncollection of reusable React components to build websites and user interfaces.\nAdopting the library enables developers to use consistent markup, styles, and\nbehavior in prototype and production work.")),"\n",l.createElement(o,null,l.createElement(c,null,"Install"),l.createElement(c,null,"Getting started"),l.createElement(c,null,"Development"),l.createElement(c,null,"Troubleshooting")),"\n",l.createElement(n.h2,null,"Resources"),"\n",l.createElement(s,{className:"resource-card-group"},l.createElement(i,{colLg:4,colMd:4,noGutterSm:!0},l.createElement(m,{subTitle:"Carbon React Storybook",href:"https://react.carbondesignsystem.com"},l.createElement(n.img,{src:"/6bb010137a452235973d3a00782b8150/storybook.svg",alt:"Storybook icon"}))),l.createElement(i,{colMd:4,colLg:4,noGutterSm:!0},l.createElement(m,{subTitle:"Try React components with Stackblitz",href:"https://stackblitz.com/github/carbon-design-system/carbon/tree/main/examples/vite"},l.createElement(u,{name:"stackblitz"}))),l.createElement(i,{colMd:4,colLg:4,noGutterSm:!0},l.createElement(m,{subTitle:"Carbon React tutorial",href:"/developing/react-tutorial/overview/"},l.createElement(u,{name:"react"})))),"\n",l.createElement(n.h2,null,"Install"),"\n",l.createElement(p,null," Using npm: "),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"npm install --save @carbon/react\n")),"\n",l.createElement(p,null,l.createElement(n.p,null,"If you prefer ",l.createElement("a",{href:"https://yarnpkg.com"},"Yarn"),":")),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"yarn add @carbon/react\n")),"\n",l.createElement(n.h2,null,"Getting started"),"\n",l.createElement(n.p,null,"The ",l.createElement(n.code,null,"@carbon/react")," package provides components, styles and icons for the Carbon\nDesign System."),"\n",l.createElement(n.p,null,"Components require the use of a build pipeline in your project. This could be in\nthe form of a bundler, framework, or other build tool. Some examples include\nNext.js, Vite, Parcel, and Webpack. A comprehensive list is available in the\n",l.createElement(n.a,{href:"https://react.dev/learn/start-a-new-react-project"},"react documentation"),"."),"\n",l.createElement(n.p,null,"To use a component, you can import it directly from the package:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"import { Button } from '@carbon/react';\n\nfunction MyComponent() {\n  return <Button>Example usage</Button>;\n}\n")),"\n",l.createElement(n.p,null,"To include the styles for a specific component, you can either import all the\nstyles from the project or include the styles for a specific component:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"// Bring in all the styles for Carbon in your root/global stylesheet\n@use '@carbon/react';\n\n// Or bring in the styles for one component\n@use '@carbon/react/scss/components/button';\n")),"\n",l.createElement(n.h3,null,"Icons"),"\n",l.createElement(n.p,null,"The @carbon/react package also provides icon components that you can include in\nyour project. You can import these icon components from the\n",l.createElement(n.code,null,"@carbon/react/icons")," entrypoint:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"import { Add } from '@carbon/react/icons';\n\nfunction MyComponent() {\n  return <Add />;\n}\n")),"\n",l.createElement(n.p,null,"A full list of available icons is provided in the\n",l.createElement(n.a,{href:"/elements/icons/library/"},"icon library"),"."),"\n",l.createElement(n.p,null,"For a more in depth introduction to using ",l.createElement(n.code,null,"@carbon/react")," in a webpack-based\napp, ",l.createElement(n.a,{href:"/developing/react-tutorial/overview/"},"check out our React tutorial"),"."),"\n",l.createElement(n.h2,null,"Development"),"\n",l.createElement(n.p,null,"Please refer to the\n",l.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon/blob/v10/.github/CONTRIBUTING.md"},"Contribution Guidelines"),"\nbefore starting any work."),"\n",l.createElement(n.h3,null,"Using the server"),"\n",l.createElement(n.p,null,"We use ",l.createElement(n.a,{href:"https://github.com/storybookjs/storybook"},"Storybook")," for developing\ncomponents."),"\n",l.createElement(p,null," Start the server: "),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"yarn storybook\n")),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Open browser to ",l.createElement(n.code,null,"http://localhost:9000/"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Develop components in their respective folders (",l.createElement(n.code,null,"/components")," or\n",l.createElement(n.code,null,"/internal"),")."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Author stories within the ",l.createElement(n.code,null,"*.stories.js*")," files."),"\n"),"\n"),"\n",l.createElement(n.h3,null,"List of available components"),"\n",l.createElement(n.p,null,"View available React Components in\n",l.createElement(n.a,{href:"http://react.carbondesignsystem.com"},"the ",l.createElement(n.code,null,"@carbon/react")," storybook"),". Usage\ninformation is available under the “docs” tab."),"\n",l.createElement(n.h2,null,"Troubleshooting"),"\n",l.createElement(n.p,null,"If you experience any issues while getting set up with Carbon Components React,\nplease head over to the\n",l.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/react"},"GitHub repo"),"\nfor more guidelines and support. Please\n",l.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon/issues"},"create an issue")," if your\nissue does not already exist."))}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,r.R)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)}}}]);