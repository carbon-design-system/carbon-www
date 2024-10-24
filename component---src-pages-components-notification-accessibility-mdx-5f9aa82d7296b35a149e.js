"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[354306],{786546:function(e,t,n){n.r(t);var i=n(28453),l=n(296540),a=n(815929);n(665597);function o(e){const t=Object.assign({h2:"h2",p:"p",code:"code",ol:"ol",li:"li",a:"a",h4:"h4",ul:"ul"},(0,i.R)(),e.components),{AnchorLinks:n,AnchorLink:o}=t;return o||r("AnchorLink",!0),n||r("AnchorLinks",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(o,null,"How it works"),l.createElement(o,null,"Accessibility considerations"),l.createElement(o,null,"Resources"),l.createElement(o,null,"Accessibility testing")),"\n",l.createElement(t.h2,null,"How it works"),"\n",l.createElement(t.p,null,"Notification Carbon components are messages that communicate information to a\nuser. The WAI-ARIA ",l.createElement(t.code,null,'role="status"')," and ",l.createElement(t.code,null,'role="log"')," are equivalent to\n",l.createElement(t.code,null,'aria-live="polite"'),". It is used to display a message to the user in a way that\ndoes not interrupt the user’s current task and queues the notification until\nwhatever task the user is currently working on is complete. If the notification\ncontains an urgent message, a ",l.createElement(t.code,null,'role="alert"')," can be used, it is equivalent to\n",l.createElement(t.code,null,'aria-live="assertive"'),". It is used to display a message to the user that\ninterrupts the user’s current task. These are considerably more disruptive to\nusers than the",l.createElement(t.code,null,'role="status"'),"or",l.createElement(t.code,null,'role="log"'),". In either case, these notifications\nattract the user’s attention without receiving focus to communicate the message."),"\n",l.createElement(t.p,null,"Details pertaining to these roles include specifics around containing\ninteractive elements, focus behavior, close behavior, and semantic contents. The\n",l.createElement(t.code,null,"role")," of ",l.createElement(t.code,null,"status"),", ",l.createElement(t.code,null,"log"),", and ",l.createElement(t.code,null,"alert")," can not contain interactive elements,\nshould not be given focus, and can optionally be closed by pressing the ",l.createElement(t.code,null,"Escape"),"\nkey. The close button is given ",l.createElement(t.code,null,'aria-hidden="true"')," so it is ignored by\nassistive technologies. Generally, plain text is preferred to be used within\nthese notifications. When read by screenreaders, any semantic meaning\nsurrounding the contents is not reflected to the user. For instace - Bold or\nitalic emphasis, and/or semantic elements such as ",l.createElement(t.code,null,"<li>")," etc. are not read to\nthe user. If semantics are included, it should be non-essential to the\nunderstanding or meaning of the contents."),"\n",l.createElement(t.p,null,"Notification components are allowed interactive children (actions) though, and\nwhen an interactive element is provided, a ",l.createElement(t.code,null,'role="alertdialog"')," is used. These\nnotifications should immediately be given focus so the user can navigate through\nthe interactive elements. The close button is given an ARIA label of\n",l.createElement(t.code,null,'aria-label="close"'),", and the icon has ",l.createElement(t.code,null,'aria-hidden="true"')," so it is ignored by\nassistive technologies. The ",l.createElement(t.code,null,"Tab")," key is used to move focus to the action and\nclose button within the notification and the ",l.createElement(t.code,null,"Space")," key or ",l.createElement(t.code,null,"Enter")," key activate\nthe appropriate button within the notification. It can also be optionally closed\nvia pressing the ",l.createElement(t.code,null,"Escape")," key."),"\n",l.createElement(t.h2,null,"Accessibility considerations"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Avoid using a toast notification for critical alerts or long messages because\nthey are timed and will disappear automatically making it difficult for\npeople with various disabilities to get the entire message. An alert that\ndisappears too quickly can lead to failure of the optional\n",l.createElement(t.a,{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html"},"WCAG 2.0 success criterion 2.2.3 (AAA)"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Provide a means to turn off nonessential alerts to enhance usability for\npeople with visual and cognitive disabilities. Additional information is\navailable in\n",l.createElement(t.a,{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html"},"WCAG 2.0 success criterion 2.2.4 (AAA)"),".\nNote: Providing this functionality is optional."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Ensure the use of color and hidden icons are not used as the only means of\nconveying the importance of the notification."),"\n"),"\n"),"\n",l.createElement(t.h2,null,"Resources"),"\n",l.createElement(t.h4,null,"Helpful resources for creating customized accessible implementations"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#alert"},"W3C W3C WAI-ARIA Authoring Practices Alert Design Pattern"),"\ncovers the usage of ARIA names, state and roles."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.w3.org/WAI/tutorials/forms/notifications/"},"W3C W3C Web Accessibility Tutorial - User Notifications"),"\nprovides a tutorial on notification accessibility."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.ibm.com/able/requirements/requirements/#3_3_1"},"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",l.createElement(t.a,{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"},"3.3.1"),")"),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.ibm.com/able/requirements/requirements/#3_3_2"},"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",l.createElement(t.a,{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"},"3.3.2"),")"),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.ibm.com/able/requirements/requirements/#3_3_3"},"3.3.3 Error Suggestion"),"\n(WCAG Success Criteria\n",l.createElement(t.a,{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"},"3.3.3"),")"),"\n"),"\n"),"\n"),"\n",l.createElement(t.h2,null,"Accessibility testing"),"\n",l.createElement(a.A,{layout:"table",components:"Notification"}))}function r(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,i.R)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}}}]);