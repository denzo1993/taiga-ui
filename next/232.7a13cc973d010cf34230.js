(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{zXxu:function(e,t,n){"use strict";n.r(t),n.d(t,"Placeholder",(function(){return Xe})),n.d(t,"default",(function(){return Xe}));var o=n("jgtz"),i=n("Dsue"),r=n("geR4"),s=n("7bKp");const l="undefined"!=typeof navigator?navigator:null,c="undefined"!=typeof document?document:null,a=l&&l.userAgent||"",d=/Edge\/(\d+)/.exec(a),f=/MSIE \d/.exec(a),u=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(a),h=!!(f||u||d),p=f?document.documentMode:u?+u[1]:d?+d[1]:0,m=!h&&/gecko\/(\d+)/i.test(a);m&&/Firefox\/(\d+)/.exec(a);const g=!h&&/Chrome\/(\d+)/.exec(a),b=!!g,y=g?+g[1]:0,v=!h&&!!l&&/Apple Computer/.test(l.vendor),w=v&&(/Mobile\/\w+/.test(a)||!!l&&l.maxTouchPoints>2),C=w||!!l&&/Mac/.test(l.platform),S=/Android \d/.test(a),D=!!c&&"webkitFontSmoothing"in c.documentElement.style,x=D?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,E=function(e){for(var t=0;;t++)if(!(e=e.previousSibling))return t},N=/^(img|br|input|textarea|hr)$/i;function O(e,t,n,o,i){for(;;){if(e==n&&t==o)return!0;if(t==(i<0?0:k(e))){let n=e.parentNode;if(!n||1!=n.nodeType||T(e)||N.test(e.nodeName)||"false"==e.contentEditable)return!1;t=E(e)+(i<0?0:1),e=n}else{if(1!=e.nodeType)return!1;if("false"==(e=e.childNodes[t+(i<0?-1:0)]).contentEditable)return!1;t=i<0?k(e):0}}}function k(e){return 3==e.nodeType?e.nodeValue.length:e.childNodes.length}function T(e){let t;for(let n=e;n&&!(t=n.pmViewDesc);n=n.parentNode);return t&&t.node&&t.node.isBlock&&(t.dom==e||t.contentDOM==e)}const A=function(e){let t=e.isCollapsed;return t&&b&&e.rangeCount&&!e.getRangeAt(0).collapsed&&(t=!1),t};function M(e,t){let n=document.createEvent("Event");return n.initEvent("keydown",!0,!0),n.keyCode=e,n.key=n.code=t,n}const P=function(e){e&&(this.nodeName=e)};function I(e){return e.editable?e.hasFocus():function(e){let t=e.domSelection();if(!t.anchorNode)return!1;try{return e.dom.contains(3==t.anchorNode.nodeType?t.anchorNode.parentNode:t.anchorNode)&&(e.editable||e.dom.contains(3==t.focusNode.nodeType?t.focusNode.parentNode:t.focusNode))}catch(n){return!1}}(e)&&document.activeElement&&document.activeElement.contains(e.dom)}function K(e,t=!1){let n=e.state.selection;if(function(e,t){if(t instanceof i.c){let n=e.docView.descAt(t.from);n!=e.lastSelectedViewDesc&&(L(e),n&&n.selectNode(),e.lastSelectedViewDesc=n)}else L(e)}(e,n),I(e)){if(!t&&e.input.mouseDown&&e.input.mouseDown.allowDefault&&b){let t=e.domSelection(),n=e.domObserver.currentSelection;if(t.anchorNode&&n.anchorNode&&(o=t.anchorNode,r=t.anchorOffset,l=n.anchorOffset,(s=n.anchorNode)&&(O(o,r,s,l,-1)||O(o,r,s,l,1))))return e.input.mouseDown.delayedSelectionSync=!0,void e.domObserver.setCurSelection()}if(e.domObserver.disconnectSelection(),e.cursorWrapper)!function(e){let t=e.domSelection(),n=document.createRange(),o=e.cursorWrapper.dom,i="IMG"==o.nodeName;i?n.setEnd(o.parentNode,E(o)+1):n.setEnd(o,0),n.collapse(!1),t.removeAllRanges(),t.addRange(n),!i&&!e.state.selection.visible&&h&&p<=11&&(o.disabled=!0,o.disabled=!1)}(e);else{let o,r,{anchor:s,head:l}=n;!V||n instanceof i.h||(n.$from.parent.inlineContent||(o=$(e,n.from)),n.empty||n.$from.parent.inlineContent||(r=$(e,n.to))),e.docView.setSelection(s,l,e.root,t),V&&(o&&R(o),r&&R(r)),n.visible?e.dom.classList.remove("ProseMirror-hideselection"):(e.dom.classList.add("ProseMirror-hideselection"),"onselectionchange"in document&&function(e){let t=e.dom.ownerDocument;t.removeEventListener("selectionchange",e.input.hideSelectionGuard);let n=e.domSelection(),o=n.anchorNode,i=n.anchorOffset;t.addEventListener("selectionchange",e.input.hideSelectionGuard=()=>{n.anchorNode==o&&n.anchorOffset==i||(t.removeEventListener("selectionchange",e.input.hideSelectionGuard),setTimeout(()=>{I(e)&&!e.state.selection.visible||e.dom.classList.remove("ProseMirror-hideselection")},20))})}(e))}e.domObserver.setCurSelection(),e.domObserver.connectSelection()}var o,r,s,l}P.prototype=Object.create(null),new P;const V=v||b&&y<63;function $(e,t){let{node:n,offset:o}=e.docView.domFromPos(t,0),i=o<n.childNodes.length?n.childNodes[o]:null,r=o?n.childNodes[o-1]:null;if(v&&i&&"false"==i.contentEditable)return z(i);if(!(i&&"false"!=i.contentEditable||r&&"false"!=r.contentEditable)){if(i)return z(i);if(r)return z(r)}}function z(e){return e.contentEditable="true",v&&e.draggable&&(e.draggable=!1,e.wasDraggable=!0),e}function R(e){e.contentEditable="false",e.wasDraggable&&(e.draggable=!0,e.wasDraggable=null)}function L(e){e.lastSelectedViewDesc&&(e.lastSelectedViewDesc.parent&&e.lastSelectedViewDesc.deselectNode(),e.lastSelectedViewDesc=void 0)}function q(e,t,n,o){return e.someProp("createSelectionBetween",o=>o(e,t,n))||i.h.between(t,n,o)}function B(e,t){let{$anchor:n,$head:o}=e.selection,r=t>0?n.max(o):n.min(o),s=r.parent.inlineContent?r.depth?e.doc.resolve(t>0?r.after():r.before()):null:r;return s&&i.f.findFrom(s,t)}function j(e,t){return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()),!0}function F(e,t,n){let o=e.state.selection;if(!(o instanceof i.h)){if(o instanceof i.c&&o.node.isInline)return j(e,new i.h(t>0?o.$to:o.$from));{let n=B(e.state,t);return!!n&&j(e,n)}}if(!o.empty||n.indexOf("s")>-1)return!1;if(e.endOfTextblock(t>0?"right":"left")){let n=B(e.state,t);return!!(n&&n instanceof i.c)&&j(e,n)}if(!(C&&n.indexOf("m")>-1)){let n,r=o.$head,s=r.textOffset?null:t<0?r.nodeBefore:r.nodeAfter;if(!s||s.isText)return!1;let l=t<0?r.pos-s.nodeSize:r.pos;return!!(s.isAtom||(n=e.docView.descAt(l))&&!n.contentDOM)&&(i.c.isSelectable(s)?j(e,new i.c(t<0?e.state.doc.resolve(r.pos-s.nodeSize):r)):!!D&&j(e,new i.h(e.state.doc.resolve(t<0?l:l+s.nodeSize))))}}function W(e){return 3==e.nodeType?e.nodeValue.length:e.childNodes.length}function H(e){let t=e.pmViewDesc;return t&&0==t.size&&(e.nextSibling||"BR"!=e.nodeName)}function X(e){let t=e.domSelection(),n=t.focusNode,o=t.focusOffset;if(!n)return;let i,r,s=!1;for(m&&1==n.nodeType&&o<W(n)&&H(n.childNodes[o])&&(s=!0);;)if(o>0){if(1!=n.nodeType)break;{let e=n.childNodes[o-1];if(H(e))i=n,r=--o;else{if(3!=e.nodeType)break;n=e,o=n.nodeValue.length}}}else{if(J(n))break;{let t=n.previousSibling;for(;t&&H(t);)i=n.parentNode,r=E(t),t=t.previousSibling;if(t)n=t,o=W(n);else{if(n=n.parentNode,n==e.dom)break;o=0}}}s?U(e,t,n,o):i&&U(e,t,i,r)}function G(e){let t=e.domSelection(),n=t.focusNode,o=t.focusOffset;if(!n)return;let i,r,s=W(n);for(;;)if(o<s){if(1!=n.nodeType)break;if(!H(n.childNodes[o]))break;i=n,r=++o}else{if(J(n))break;{let t=n.nextSibling;for(;t&&H(t);)i=t.parentNode,r=E(t)+1,t=t.nextSibling;if(t)n=t,o=0,s=W(n);else{if(n=n.parentNode,n==e.dom)break;o=s=0}}}i&&U(e,t,i,r)}function J(e){let t=e.pmViewDesc;return t&&t.node&&t.node.isBlock}function U(e,t,n,o){if(A(t)){let e=document.createRange();e.setEnd(n,o),e.setStart(n,o),t.removeAllRanges(),t.addRange(e)}else t.extend&&t.extend(n,o);e.domObserver.setCurSelection();let{state:i}=e;setTimeout(()=>{e.state==i&&K(e)},50)}function Y(e,t,n){let o=e.state.selection;if(o instanceof i.h&&!o.empty||n.indexOf("s")>-1)return!1;if(C&&n.indexOf("m")>-1)return!1;let{$from:r,$to:s}=o;if(!r.parent.inlineContent||e.endOfTextblock(t<0?"up":"down")){let n=B(e.state,t);if(n&&n instanceof i.c)return j(e,n)}if(!r.parent.inlineContent){let n=t<0?r:s,l=o instanceof i.a?i.f.near(n,t):i.f.findFrom(n,t);return!!l&&j(e,l)}return!1}function Q(e,t){if(!(e.state.selection instanceof i.h))return!0;let{$head:n,$anchor:o,empty:r}=e.state.selection;if(!n.sameParent(o))return!0;if(!r)return!1;if(e.endOfTextblock(t>0?"forward":"backward"))return!0;let s=!n.textOffset&&(t<0?n.nodeBefore:n.nodeAfter);if(s&&!s.isText){let o=e.state.tr;return t<0?o.delete(n.pos-s.nodeSize,n.pos):o.delete(n.pos,n.pos+s.nodeSize),e.dispatch(o),!0}return!1}function Z(e,t,n){e.domObserver.stop(),t.contentEditable=n,e.domObserver.start()}function _(e,t){let n=[],{content:o,openStart:i,openEnd:s}=t;for(;i>1&&s>1&&1==o.childCount&&1==o.firstChild.childCount;){i--,s--;let e=o.firstChild;n.push(e.type.name,e.attrs!=e.type.defaultAttrs?e.attrs:null),o=e.content}let l=e.someProp("clipboardSerializer")||r.b.fromSchema(e.state.schema),c=ae(),a=c.createElement("div");a.appendChild(l.serializeFragment(o,{document:c}));let d,f=a.firstChild,u=0;for(;f&&1==f.nodeType&&(d=le[f.nodeName.toLowerCase()]);){for(let e=d.length-1;e>=0;e--){let t=c.createElement(d[e]);for(;a.firstChild;)t.appendChild(a.firstChild);a.appendChild(t),u++}f=a.firstChild}return f&&1==f.nodeType&&f.setAttribute("data-pm-slice",`${i} ${s}${u?" -"+u:""} ${JSON.stringify(n)}`),{dom:a,text:e.someProp("clipboardTextSerializer",e=>e(t))||t.content.textBetween(0,t.content.size,"\n\n")}}function ee(e,t,n,o,i){let s,l,c=i.parent.type.spec.code;if(!n&&!t)return null;let a=t&&(o||c||!n);if(a){if(e.someProp("transformPastedText",e=>{t=e(t,c||o)}),c)return t?new r.j(r.c.from(e.state.schema.text(t.replace(/\r\n?/g,"\n"))),0,0):r.j.empty;let n=e.someProp("clipboardTextParser",e=>e(t,i,o));if(n)l=n;else{let n=i.marks(),{schema:o}=e.state,l=r.b.fromSchema(o);s=document.createElement("div"),t.split(/(?:\r\n?|\n)+/).forEach(e=>{let t=s.appendChild(document.createElement("p"));e&&t.appendChild(l.serializeNode(o.text(e,n)))})}}else e.someProp("transformPastedHTML",e=>{n=e(n)}),s=function(e){let t=/^(\s*<meta [^>]*>)*/.exec(e);t&&(e=e.slice(t[0].length));let n,o=ae().createElement("div"),i=/<([a-z][^>\s]+)/i.exec(e);if((n=i&&le[i[1].toLowerCase()])&&(e=n.map(e=>"<"+e+">").join("")+e+n.map(e=>"</"+e+">").reverse().join("")),o.innerHTML=e,n)for(let r=0;r<n.length;r++)o=o.querySelector(n[r])||o;return o}(n),D&&function(e){let t=e.querySelectorAll(b?"span:not([class]):not([style])":"span.Apple-converted-space");for(let n=0;n<t.length;n++){let o=t[n];1==o.childNodes.length&&"\xa0"==o.textContent&&o.parentNode&&o.parentNode.replaceChild(e.ownerDocument.createTextNode(" "),o)}}(s);let d=s&&s.querySelector("[data-pm-slice]"),f=d&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(d.getAttribute("data-pm-slice")||"");if(f&&f[3])for(let r=+f[3];r>0&&s.firstChild;r--)s=s.firstChild;if(!l){let t=e.someProp("clipboardParser")||e.someProp("domParser")||r.a.fromSchema(e.state.schema);l=t.parseSlice(s,{preserveWhitespace:!(!a&&!f),context:i,ruleFromNode:e=>"BR"!=e.nodeName||e.nextSibling||!e.parentNode||te.test(e.parentNode.nodeName)?null:{ignore:!0}})}if(f)l=function(e,t){if(!e.size)return e;let n,o=e.content.firstChild.type.schema;try{n=JSON.parse(t)}catch(c){return e}let{content:i,openStart:s,openEnd:l}=e;for(let a=n.length-2;a>=0;a-=2){let e=o.nodes[n[a]];if(!e||e.hasRequiredAttrs())break;i=r.c.from(e.create(n[a+1],i)),s++,l++}return new r.j(i,s,l)}(se(l,+f[1],+f[2]),f[4]);else if(l=r.j.maxOpen(function(e,t){if(e.childCount<2)return e;for(let n=t.depth;n>=0;n--){let o,i=t.node(n).contentMatchAt(t.index(n)),s=[];if(e.forEach(e=>{if(!s)return;let t,n=i.findWrapping(e.type);if(!n)return s=null;if(t=s.length&&o.length&&oe(n,o,e,s[s.length-1],0))s[s.length-1]=t;else{s.length&&(s[s.length-1]=ie(s[s.length-1],o.length));let t=ne(e,n);s.push(t),i=i.matchType(t.type),o=n}}),s)return r.c.from(s)}return e}(l.content,i),!0),l.openStart||l.openEnd){let e=0,t=0;for(let n=l.content.firstChild;e<l.openStart&&!n.type.spec.isolating;e++,n=n.firstChild);for(let n=l.content.lastChild;t<l.openEnd&&!n.type.spec.isolating;t++,n=n.lastChild);l=se(l,e,t)}return e.someProp("transformPasted",e=>{l=e(l)}),l}const te=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;function ne(e,t,n=0){for(let o=t.length-1;o>=n;o--)e=t[o].create(null,r.c.from(e));return e}function oe(e,t,n,o,i){if(i<e.length&&i<t.length&&e[i]==t[i]){let s=oe(e,t,n,o.lastChild,i+1);if(s)return o.copy(o.content.replaceChild(o.childCount-1,s));if(o.contentMatchAt(o.childCount).matchType(i==e.length-1?n.type:e[i+1]))return o.copy(o.content.append(r.c.from(ne(n,e,i+1))))}}function ie(e,t){if(0==t)return e;let n=e.content.replaceChild(e.childCount-1,ie(e.lastChild,t-1)),o=e.contentMatchAt(e.childCount).fillBefore(r.c.empty,!0);return e.copy(n.append(o))}function re(e,t,n,o,i,s){let l=t<0?e.firstChild:e.lastChild,c=l.content;return i<o-1&&(c=re(c,t,n,o,i+1,s)),i>=n&&(c=t<0?l.contentMatchAt(0).fillBefore(c,e.childCount>1||s<=i).append(c):c.append(l.contentMatchAt(l.childCount).fillBefore(r.c.empty,!0))),e.replaceChild(t<0?0:e.childCount-1,l.copy(c))}function se(e,t,n){return t<e.openStart&&(e=new r.j(re(e.content,-1,t,e.openStart,0,e.openEnd),t,e.openEnd)),n<e.openEnd&&(e=new r.j(re(e.content,1,n,e.openEnd,0,0),e.openStart,n)),e}const le={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]};let ce=null;function ae(){return ce||(ce=document.implementation.createHTMLDocument("title"))}const de={};let fe={};function ue(e,t){e.input.lastSelectionOrigin=t,e.input.lastSelectionTime=Date.now()}function he(e){return{left:e.clientX,top:e.clientY}}function pe(e,t,n,o,i){if(-1==o)return!1;let r=e.state.doc.resolve(o);for(let s=r.depth+1;s>0;s--)if(e.someProp(t,t=>s>r.depth?t(e,n,r.nodeAfter,r.before(s),i,!0):t(e,n,r.node(s),r.before(s),i,!1)))return!0;return!1}function me(e,t,n){e.focused||e.focus();let o=e.state.tr.setSelection(t);"pointer"==n&&o.setMeta("pointer",!0),e.dispatch(o)}function ge(e,t,n,o){return pe(e,"handleDoubleClickOn",t,n,o)||e.someProp("handleDoubleClick",n=>n(e,t,o))}function be(e,t,n,o){return pe(e,"handleTripleClickOn",t,n,o)||e.someProp("handleTripleClick",n=>n(e,t,o))||function(e,t,n){if(0!=n.button)return!1;let o=e.state.doc;if(-1==t)return!!o.inlineContent&&(me(e,i.h.create(o,0,o.content.size),"pointer"),!0);let r=o.resolve(t);for(let s=r.depth+1;s>0;s--){let t=s>r.depth?r.nodeAfter:r.node(s),n=r.before(s);if(t.inlineContent)me(e,i.h.create(o,n+1,n+1+t.content.size),"pointer");else{if(!i.c.isSelectable(t))continue;me(e,i.c.create(o,n),"pointer")}return!0}}(e,n,o)}function ye(e){return xe(e)}fe.keydown=(e,t)=>{let n=t;if(e.input.shiftKey=16==n.keyCode||n.shiftKey,!Ce(e,n)&&(e.input.lastKeyCode=n.keyCode,e.input.lastKeyCodeTime=Date.now(),!S||!b||13!=n.keyCode))if(229!=n.keyCode&&e.domObserver.forceFlush(),!w||13!=n.keyCode||n.ctrlKey||n.altKey||n.metaKey)e.someProp("handleKeyDown",t=>t(e,n))||function(e,t){let n=t.keyCode,o=function(e){let t="";return e.ctrlKey&&(t+="c"),e.metaKey&&(t+="m"),e.altKey&&(t+="a"),e.shiftKey&&(t+="s"),t}(t);return 8==n||C&&72==n&&"c"==o?Q(e,-1)||X(e):46==n||C&&68==n&&"c"==o?Q(e,1)||G(e):13==n||27==n||(37==n||C&&66==n&&"c"==o?F(e,-1,o)||X(e):39==n||C&&70==n&&"c"==o?F(e,1,o)||G(e):38==n||C&&80==n&&"c"==o?Y(e,-1,o)||X(e):40==n||C&&78==n&&"c"==o?function(e){if(!v||e.state.selection.$head.parentOffset>0)return!1;let{focusNode:t,focusOffset:n}=e.domSelection();if(t&&1==t.nodeType&&0==n&&t.firstChild&&"false"==t.firstChild.contentEditable){let n=t.firstChild;Z(e,n,"true"),setTimeout(()=>Z(e,n,"false"),20)}return!1}(e)||Y(e,1,o)||G(e):o==(C?"m":"c")&&(66==n||73==n||89==n||90==n))}(e,n)?n.preventDefault():ue(e,"key");else{let t=Date.now();e.input.lastIOSEnter=t,e.input.lastIOSEnterFallbackTimeout=setTimeout(()=>{e.input.lastIOSEnter==t&&(e.someProp("handleKeyDown",t=>t(e,M(13,"Enter"))),e.input.lastIOSEnter=0)},200)}},fe.keyup=(e,t)=>{16==t.keyCode&&(e.input.shiftKey=!1)},fe.keypress=(e,t)=>{let n=t;if(Ce(e,n)||!n.charCode||n.ctrlKey&&!n.altKey||C&&n.metaKey)return;if(e.someProp("handleKeyPress",t=>t(e,n)))return void n.preventDefault();let o=e.state.selection;if(!(o instanceof i.h&&o.$from.sameParent(o.$to))){let t=String.fromCharCode(n.charCode);e.someProp("handleTextInput",n=>n(e,o.$from.pos,o.$to.pos,t))||e.dispatch(e.state.tr.insertText(t).scrollIntoView()),n.preventDefault()}};const ve=C?"metaKey":"ctrlKey";de.mousedown=(e,t)=>{let n=t;e.input.shiftKey=n.shiftKey;let o=ye(e),i=Date.now(),r="singleClick";i-e.input.lastClick.time<500&&function(e,t){let n=t.x-e.clientX,o=t.y-e.clientY;return n*n+o*o<100}(n,e.input.lastClick)&&!n[ve]&&("singleClick"==e.input.lastClick.type?r="doubleClick":"doubleClick"==e.input.lastClick.type&&(r="tripleClick")),e.input.lastClick={time:i,x:n.clientX,y:n.clientY,type:r};let s=e.posAtCoords(he(n));s&&("singleClick"==r?(e.input.mouseDown&&e.input.mouseDown.done(),e.input.mouseDown=new we(e,s,n,!!o)):("doubleClick"==r?ge:be)(e,s.pos,s.inside,n)?n.preventDefault():ue(e,"pointer"))};class we{constructor(e,t,n,o){let r,s;if(this.view=e,this.pos=t,this.event=n,this.flushed=o,this.delayedSelectionSync=!1,this.mightDrag=null,this.startDoc=e.state.doc,this.selectNode=!!n[ve],this.allowDefault=n.shiftKey,t.inside>-1)r=e.state.doc.nodeAt(t.inside),s=t.inside;else{let n=e.state.doc.resolve(t.pos);r=n.parent,s=n.depth?n.before():0}const l=o?null:n.target,c=l?e.docView.nearestDesc(l,!0):null;this.target=c?c.dom:null;let{selection:a}=e.state;(0==n.button&&r.type.spec.draggable&&!1!==r.type.spec.selectable||a instanceof i.c&&a.from<=s&&a.to>s)&&(this.mightDrag={node:r,pos:s,addAttr:!(!this.target||this.target.draggable),setUneditable:!(!this.target||!m||this.target.hasAttribute("contentEditable"))}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout(()=>{this.view.input.mouseDown==this&&this.target.setAttribute("contentEditable","false")},20),this.view.domObserver.start()),e.root.addEventListener("mouseup",this.up=this.up.bind(this)),e.root.addEventListener("mousemove",this.move=this.move.bind(this)),ue(e,"pointer")}done(){this.view.root.removeEventListener("mouseup",this.up),this.view.root.removeEventListener("mousemove",this.move),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute("draggable"),this.mightDrag.setUneditable&&this.target.removeAttribute("contentEditable"),this.view.domObserver.start()),this.delayedSelectionSync&&setTimeout(()=>K(this.view)),this.view.input.mouseDown=null}up(e){if(this.done(),!this.view.dom.contains(e.target))return;let t=this.pos;this.view.state.doc!=this.startDoc&&(t=this.view.posAtCoords(he(e))),this.allowDefault||!t?ue(this.view,"pointer"):function(e,t,n,o,r){return pe(e,"handleClickOn",t,n,o)||e.someProp("handleClick",n=>n(e,t,o))||(r?function(e,t){if(-1==t)return!1;let n,o,r=e.state.selection;r instanceof i.c&&(n=r.node);let s=e.state.doc.resolve(t);for(let l=s.depth+1;l>0;l--){let e=l>s.depth?s.nodeAfter:s.node(l);if(i.c.isSelectable(e)){o=n&&r.$from.depth>0&&l>=r.$from.depth&&s.before(r.$from.depth+1)==r.$from.pos?s.before(r.$from.depth):s.before(l);break}}return null!=o&&(me(e,i.c.create(e.state.doc,o),"pointer"),!0)}(e,n):function(e,t){if(-1==t)return!1;let n=e.state.doc.resolve(t),o=n.nodeAfter;return!!(o&&o.isAtom&&i.c.isSelectable(o))&&(me(e,new i.c(n),"pointer"),!0)}(e,n))}(this.view,t.pos,t.inside,e,this.selectNode)?e.preventDefault():0==e.button&&(this.flushed||v&&this.mightDrag&&!this.mightDrag.node.isAtom||b&&!(this.view.state.selection instanceof i.h)&&Math.min(Math.abs(t.pos-this.view.state.selection.from),Math.abs(t.pos-this.view.state.selection.to))<=2)?(me(this.view,i.f.near(this.view.state.doc.resolve(t.pos)),"pointer"),e.preventDefault()):ue(this.view,"pointer")}move(e){!this.allowDefault&&(Math.abs(this.event.x-e.clientX)>4||Math.abs(this.event.y-e.clientY)>4)&&(this.allowDefault=!0),ue(this.view,"pointer"),0==e.buttons&&this.done()}}function Ce(e,t){return!!e.composing||!!(v&&Math.abs(t.timeStamp-e.input.compositionEndedAt)<500)&&(e.input.compositionEndedAt=-2e8,!0)}de.touchdown=e=>{ye(e),ue(e,"pointer")},de.contextmenu=e=>ye(e);const Se=S?5e3:-1;function De(e,t){clearTimeout(e.input.composingTimeout),t>-1&&(e.input.composingTimeout=setTimeout(()=>xe(e),t))}function xe(e,t=!1){if(!(S&&e.domObserver.flushingSoon>=0)){if(e.domObserver.forceFlush(),function(e){for(e.composing&&(e.input.composing=!1,e.input.compositionEndedAt=function(){let e=document.createEvent("Event");return e.initEvent("event",!0,!0),e.timeStamp}());e.input.compositionNodes.length>0;)e.input.compositionNodes.pop().markParentsDirty()}(e),t||e.docView&&e.docView.dirty){let t=function(e,t=null){let n=e.domSelection(),o=e.state.doc;if(!n.focusNode)return null;let r=e.docView.nearestDesc(n.focusNode),s=r&&0==r.size,l=e.docView.posFromDOM(n.focusNode,n.focusOffset,1);if(l<0)return null;let c,a,d=o.resolve(l);if(A(n)){for(c=d;r&&!r.node;)r=r.parent;let e=r.node;if(r&&e.isAtom&&i.c.isSelectable(e)&&r.parent&&(!e.isInline||!function(e,t,n){for(let o=0==t,i=t==k(e);o||i;){if(e==n)return!0;let t=E(e);if(!(e=e.parentNode))return!1;o=o&&0==t,i=i&&t==k(e)}}(n.focusNode,n.focusOffset,r.dom))){let e=r.posBefore;a=new i.c(l==e?d:o.resolve(e))}}else{let t=e.docView.posFromDOM(n.anchorNode,n.anchorOffset,1);if(t<0)return null;c=o.resolve(t)}return a||(a=q(e,c,d,"pointer"==t||e.state.selection.head<d.pos&&!s?1:-1)),a}(e);return t&&!t.eq(e.state.selection)?e.dispatch(e.state.tr.setSelection(t)):e.updateState(e.state),!0}return!1}}fe.compositionstart=fe.compositionupdate=e=>{if(!e.composing){e.domObserver.flush();let{state:t}=e,n=t.selection.$from;if(t.selection.empty&&(t.storedMarks||!n.textOffset&&n.parentOffset&&n.nodeBefore.marks.some(e=>!1===e.type.spec.inclusive)))e.markCursor=e.state.storedMarks||n.marks(),xe(e,!0),e.markCursor=null;else if(xe(e),m&&t.selection.empty&&n.parentOffset&&!n.textOffset&&n.nodeBefore.marks.length){let t=e.domSelection();for(let e=t.focusNode,n=t.focusOffset;e&&1==e.nodeType&&0!=n;){let o=n<0?e.lastChild:e.childNodes[n-1];if(!o)break;if(3==o.nodeType){t.collapse(o,o.nodeValue.length);break}e=o,n=-1}}e.input.composing=!0}De(e,Se)},fe.compositionend=(e,t)=>{e.composing&&(e.input.composing=!1,e.input.compositionEndedAt=t.timeStamp,De(e,20))};const Ee=h&&p<15||w&&x<604;function Ne(e,t,n,o){let i=ee(e,t,n,e.input.shiftKey,e.state.selection.$from);if(e.someProp("handlePaste",t=>t(e,o,i||r.j.empty)))return!0;if(!i)return!1;let s=function(e){return 0==e.openStart&&0==e.openEnd&&1==e.content.childCount?e.content.firstChild:null}(i),l=s?e.state.tr.replaceSelectionWith(s,e.input.shiftKey):e.state.tr.replaceSelection(i);return e.dispatch(l.scrollIntoView().setMeta("paste",!0).setMeta("uiEvent","paste")),!0}de.copy=fe.cut=(e,t)=>{let n=t,o=e.state.selection,i="cut"==n.type;if(o.empty)return;let r=Ee?null:n.clipboardData,s=o.content(),{dom:l,text:c}=_(e,s);r?(n.preventDefault(),r.clearData(),r.setData("text/html",l.innerHTML),r.setData("text/plain",c)):function(e,t){if(!e.dom.parentNode)return;let n=e.dom.parentNode.appendChild(document.createElement("div"));n.appendChild(t),n.style.cssText="position: fixed; left: -10000px; top: 10px";let o=getSelection(),i=document.createRange();i.selectNodeContents(t),e.dom.blur(),o.removeAllRanges(),o.addRange(i),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),e.focus()},50)}(e,l),i&&e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"))},fe.paste=(e,t)=>{let n=t;if(e.composing&&!S)return;let o=Ee?null:n.clipboardData;o&&Ne(e,o.getData("text/plain"),o.getData("text/html"),n)?n.preventDefault():function(e,t){if(!e.dom.parentNode)return;let n=e.input.shiftKey||e.state.selection.$from.parent.type.spec.code,o=e.dom.parentNode.appendChild(document.createElement(n?"textarea":"div"));n||(o.contentEditable="true"),o.style.cssText="position: fixed; left: -10000px; top: 10px",o.focus(),setTimeout(()=>{e.focus(),o.parentNode&&o.parentNode.removeChild(o),n?Ne(e,o.value,null,t):Ne(e,o.textContent,o.innerHTML,t)},50)}(e,n)};class Oe{constructor(e,t){this.slice=e,this.move=t}}const ke=C?"altKey":"ctrlKey";de.dragstart=(e,t)=>{let n=t,o=e.input.mouseDown;if(o&&o.done(),!n.dataTransfer)return;let r=e.state.selection,s=r.empty?null:e.posAtCoords(he(n));if(s&&s.pos>=r.from&&s.pos<=(r instanceof i.c?r.to-1:r.to));else if(o&&o.mightDrag)e.dispatch(e.state.tr.setSelection(i.c.create(e.state.doc,o.mightDrag.pos)));else if(n.target&&1==n.target.nodeType){let t=e.docView.nearestDesc(n.target,!0);t&&t.node.type.spec.draggable&&t!=e.docView&&e.dispatch(e.state.tr.setSelection(i.c.create(e.state.doc,t.posBefore)))}let l=e.state.selection.content(),{dom:c,text:a}=_(e,l);n.dataTransfer.clearData(),n.dataTransfer.setData(Ee?"Text":"text/html",c.innerHTML),n.dataTransfer.effectAllowed="copyMove",Ee||n.dataTransfer.setData("text/plain",a),e.dragging=new Oe(l,!n[ke])},de.dragend=e=>{let t=e.dragging;window.setTimeout(()=>{e.dragging==t&&(e.dragging=null)},50)},fe.dragover=fe.dragenter=(e,t)=>t.preventDefault(),fe.drop=(e,t)=>{let n=t,o=e.dragging;if(e.dragging=null,!n.dataTransfer)return;let l=e.posAtCoords(he(n));if(!l)return;let c=e.state.doc.resolve(l.pos);if(!c)return;let a=o&&o.slice;a?e.someProp("transformPasted",e=>{a=e(a)}):a=ee(e,n.dataTransfer.getData(Ee?"Text":"text/plain"),Ee?null:n.dataTransfer.getData("text/html"),!1,c);let d=!(!o||n[ke]);if(e.someProp("handleDrop",t=>t(e,n,a||r.j.empty,d)))return void n.preventDefault();if(!a)return;n.preventDefault();let f=a?Object(s.g)(e.state.doc,c.pos,a):c.pos;null==f&&(f=c.pos);let u=e.state.tr;d&&u.deleteSelection();let h=u.mapping.map(f),p=0==a.openStart&&0==a.openEnd&&1==a.content.childCount,m=u.doc;if(p?u.replaceRangeWith(h,h,a.content.firstChild):u.replaceRange(h,h,a),u.doc.eq(m))return;let g=u.doc.resolve(h);if(p&&i.c.isSelectable(a.content.firstChild)&&g.nodeAfter&&g.nodeAfter.sameMarkup(a.content.firstChild))u.setSelection(new i.c(g));else{let t=u.mapping.map(f);u.mapping.maps[u.mapping.maps.length-1].forEach((e,n,o,i)=>t=i),u.setSelection(q(e,g,u.doc.resolve(t)))}e.focus(),e.dispatch(u.setMeta("uiEvent","drop"))},de.focus=e=>{e.focused||(e.domObserver.stop(),e.dom.classList.add("ProseMirror-focused"),e.domObserver.start(),e.focused=!0,setTimeout(()=>{e.docView&&e.hasFocus()&&!e.domObserver.currentSelection.eq(e.domSelection())&&K(e)},20))},de.blur=(e,t)=>{let n=t;e.focused&&(e.domObserver.stop(),e.dom.classList.remove("ProseMirror-focused"),e.domObserver.start(),n.relatedTarget&&e.dom.contains(n.relatedTarget)&&e.domObserver.currentSelection.clear(),e.focused=!1)},de.beforeinput=(e,t)=>{if(b&&S&&"deleteContentBackward"==t.inputType){e.domObserver.flushSoon();let{domChangeCount:t}=e.input;setTimeout(()=>{if(e.input.domChangeCount!=t)return;if(e.dom.blur(),e.focus(),e.someProp("handleKeyDown",t=>t(e,M(8,"Backspace"))))return;let{$cursor:n}=e.state.selection;n&&n.pos>0&&e.dispatch(e.state.tr.delete(n.pos-1,n.pos).scrollIntoView())},50)}};for(let Ge in fe)de[Ge]=fe[Ge];function Te(e,t){if(e==t)return!0;for(let n in e)if(e[n]!==t[n])return!1;for(let n in t)if(!(n in e))return!1;return!0}class Ae{constructor(e,t){this.toDOM=e,this.spec=t||Ve,this.side=this.spec.side||0}map(e,t,n,o){let{pos:i,deleted:r}=e.mapResult(t.from+o,this.side<0?-1:1);return r?null:new Ie(i-n,i-n,this)}valid(){return!0}eq(e){return this==e||e instanceof Ae&&(this.spec.key&&this.spec.key==e.spec.key||this.toDOM==e.toDOM&&Te(this.spec,e.spec))}destroy(e){this.spec.destroy&&this.spec.destroy(e)}}class Me{constructor(e,t){this.attrs=e,this.spec=t||Ve}map(e,t,n,o){let i=e.map(t.from+o,this.spec.inclusiveStart?-1:1)-n,r=e.map(t.to+o,this.spec.inclusiveEnd?1:-1)-n;return i>=r?null:new Ie(i,r,this)}valid(e,t){return t.from<t.to}eq(e){return this==e||e instanceof Me&&Te(this.attrs,e.attrs)&&Te(this.spec,e.spec)}static is(e){return e.type instanceof Me}destroy(){}}class Pe{constructor(e,t){this.attrs=e,this.spec=t||Ve}map(e,t,n,o){let i=e.mapResult(t.from+o,1);if(i.deleted)return null;let r=e.mapResult(t.to+o,-1);return r.deleted||r.pos<=i.pos?null:new Ie(i.pos-n,r.pos-n,this)}valid(e,t){let n,{index:o,offset:i}=e.content.findIndex(t.from);return i==t.from&&!(n=e.child(o)).isText&&i+n.nodeSize==t.to}eq(e){return this==e||e instanceof Pe&&Te(this.attrs,e.attrs)&&Te(this.spec,e.spec)}destroy(){}}class Ie{constructor(e,t,n){this.from=e,this.to=t,this.type=n}copy(e,t){return new Ie(e,t,this.type)}eq(e,t=0){return this.type.eq(e.type)&&this.from+t==e.from&&this.to+t==e.to}map(e,t,n){return this.type.map(e,this,t,n)}static widget(e,t,n){return new Ie(e,e,new Ae(t,n))}static inline(e,t,n,o){return new Ie(e,t,new Me(n,o))}static node(e,t,n,o){return new Ie(e,t,new Pe(n,o))}get spec(){return this.type.spec}get inline(){return this.type instanceof Me}}const Ke=[],Ve={};class $e{constructor(e,t){this.local=e.length?e:Ke,this.children=t.length?t:Ke}static create(e,t){return t.length?je(t,e,0,Ve):ze}find(e,t,n){let o=[];return this.findInner(null==e?0:e,null==t?1e9:t,o,0,n),o}findInner(e,t,n,o,i){for(let r=0;r<this.local.length;r++){let s=this.local[r];s.from<=t&&s.to>=e&&(!i||i(s.spec))&&n.push(s.copy(s.from+o,s.to+o))}for(let r=0;r<this.children.length;r+=3)if(this.children[r]<t&&this.children[r+1]>e){let s=this.children[r]+1;this.children[r+2].findInner(e-s,t-s,n,o+s,i)}}map(e,t,n){return this==ze||0==e.maps.length?this:this.mapInner(e,t,0,0,n||Ve)}mapInner(e,t,n,o,i){let r;for(let s=0;s<this.local.length;s++){let l=this.local[s].map(e,n,o);l&&l.type.valid(t,l)?(r||(r=[])).push(l):i.onRemove&&i.onRemove(this.local[s].spec)}return this.children.length?function(e,t,n,o,i,r,s){let l=e.slice(),c=(e,t,n,o)=>{for(let s=0;s<l.length;s+=3){let c,a=l[s+1];if(a<0||e>a+r)continue;let d=l[s]+r;t>=d?l[s+1]=e<=d?-2:-1:n>=i&&(c=o-n-(t-e))&&(l[s]+=c,l[s+1]+=c)}};for(let d=0;d<n.maps.length;d++)n.maps[d].forEach(c);let a=!1;for(let d=0;d<l.length;d+=3)if(l[d+1]<0){if(-2==l[d+1]){a=!0,l[d+1]=-1;continue}let t=n.map(e[d]+r),c=t-i;if(c<0||c>=o.content.size){a=!0;continue}let f=n.map(e[d+1]+r,-1)-i,{index:u,offset:h}=o.content.findIndex(c),p=o.maybeChild(u);if(p&&h==c&&h+p.nodeSize==f){let o=l[d+2].mapInner(n,p,t+1,e[d]+r+1,s);o!=ze?(l[d]=c,l[d+1]=f,l[d+2]=o):(l[d+1]=-2,a=!0)}else a=!0}if(a){let c=je(function(e,t,n,o,i,r,s){function l(e,t){for(let r=0;r<e.local.length;r++){let l=e.local[r].map(o,i,t);l?n.push(l):s.onRemove&&s.onRemove(e.local[r].spec)}for(let n=0;n<e.children.length;n+=3)l(e.children[n+2],e.children[n]+t+1)}for(let c=0;c<e.length;c+=3)-1==e[c+1]&&l(e[c+2],t[c]+r+1);return n}(l,e,t,n,i,r,s),o,0,s);t=c.local;for(let e=0;e<l.length;e+=3)l[e+1]<0&&(l.splice(e,3),e-=3);for(let e=0,t=0;e<c.children.length;e+=3){let n=c.children[e];for(;t<l.length&&l[t]<n;)t+=3;l.splice(t,0,c.children[e],c.children[e+1],c.children[e+2])}}return new $e(t.sort(Fe),l)}(this.children,r||[],e,t,n,o,i):r?new $e(r.sort(Fe),Ke):ze}add(e,t){return t.length?this==ze?$e.create(e,t):this.addInner(e,t,0):this}addInner(e,t,n){let o,i=0;e.forEach((e,r)=>{let s,l=r+n;if(s=qe(t,e,l)){for(o||(o=this.children.slice());i<o.length&&o[i]<r;)i+=3;o[i]==r?o[i+2]=o[i+2].addInner(e,s,l+1):o.splice(i,0,r,r+e.nodeSize,je(s,e,l+1,Ve)),i+=3}});let r=Le(i?Be(t):t,-n);for(let s=0;s<r.length;s++)r[s].type.valid(e,r[s])||r.splice(s--,1);return new $e(r.length?this.local.concat(r).sort(Fe):this.local,o||this.children)}remove(e){return 0==e.length||this==ze?this:this.removeInner(e,0)}removeInner(e,t){let n=this.children,o=this.local;for(let i=0;i<n.length;i+=3){let o,r=n[i]+t,s=n[i+1]+t;for(let t,n=0;n<e.length;n++)(t=e[n])&&t.from>r&&t.to<s&&(e[n]=null,(o||(o=[])).push(t));if(!o)continue;n==this.children&&(n=this.children.slice());let l=n[i+2].removeInner(o,r+1);l!=ze?n[i+2]=l:(n.splice(i,3),i-=3)}if(o.length)for(let i,r=0;r<e.length;r++)if(i=e[r])for(let e=0;e<o.length;e++)o[e].eq(i,t)&&(o==this.local&&(o=this.local.slice()),o.splice(e--,1));return n==this.children&&o==this.local?this:o.length||n.length?new $e(o,n):ze}forChild(e,t){if(this==ze)return this;if(t.isLeaf)return $e.empty;let n,o;for(let s=0;s<this.children.length;s+=3)if(this.children[s]>=e){this.children[s]==e&&(n=this.children[s+2]);break}let i=e+1,r=i+t.content.size;for(let s=0;s<this.local.length;s++){let e=this.local[s];if(e.from<r&&e.to>i&&e.type instanceof Me){let t=Math.max(i,e.from)-i,n=Math.min(r,e.to)-i;t<n&&(o||(o=[])).push(e.copy(t,n))}}if(o){let e=new $e(o.sort(Fe),Ke);return n?new Re([e,n]):e}return n||ze}eq(e){if(this==e)return!0;if(!(e instanceof $e)||this.local.length!=e.local.length||this.children.length!=e.children.length)return!1;for(let t=0;t<this.local.length;t++)if(!this.local[t].eq(e.local[t]))return!1;for(let t=0;t<this.children.length;t+=3)if(this.children[t]!=e.children[t]||this.children[t+1]!=e.children[t+1]||!this.children[t+2].eq(e.children[t+2]))return!1;return!0}locals(e){return We(this.localsInner(e))}localsInner(e){if(this==ze)return Ke;if(e.inlineContent||!this.local.some(Me.is))return this.local;let t=[];for(let n=0;n<this.local.length;n++)this.local[n].type instanceof Me||t.push(this.local[n]);return t}}$e.empty=new $e([],[]),$e.removeOverlap=We;const ze=$e.empty;class Re{constructor(e){this.members=e}map(e,t){const n=this.members.map(n=>n.map(e,t,Ve));return Re.from(n)}forChild(e,t){if(t.isLeaf)return $e.empty;let n=[];for(let o=0;o<this.members.length;o++){let i=this.members[o].forChild(e,t);i!=ze&&(i instanceof Re?n=n.concat(i.members):n.push(i))}return Re.from(n)}eq(e){if(!(e instanceof Re)||e.members.length!=this.members.length)return!1;for(let t=0;t<this.members.length;t++)if(!this.members[t].eq(e.members[t]))return!1;return!0}locals(e){let t,n=!0;for(let o=0;o<this.members.length;o++){let i=this.members[o].localsInner(e);if(i.length)if(t){n&&(t=t.slice(),n=!1);for(let e=0;e<i.length;e++)t.push(i[e])}else t=i}return t?We(n?t:t.sort(Fe)):Ke}static from(e){switch(e.length){case 0:return ze;case 1:return e[0];default:return new Re(e)}}}function Le(e,t){if(!t||!e.length)return e;let n=[];for(let o=0;o<e.length;o++){let i=e[o];n.push(new Ie(i.from+t,i.to+t,i.type))}return n}function qe(e,t,n){if(t.isLeaf)return null;let o=n+t.nodeSize,i=null;for(let r,s=0;s<e.length;s++)(r=e[s])&&r.from>n&&r.to<o&&((i||(i=[])).push(r),e[s]=null);return i}function Be(e){let t=[];for(let n=0;n<e.length;n++)null!=e[n]&&t.push(e[n]);return t}function je(e,t,n,o){let i=[],r=!1;t.forEach((t,s)=>{let l=qe(e,t,s+n);if(l){r=!0;let e=je(l,t,n+s+1,o);e!=ze&&i.push(s,s+t.nodeSize,e)}});let s=Le(r?Be(e):e,-n).sort(Fe);for(let l=0;l<s.length;l++)s[l].type.valid(t,s[l])||(o.onRemove&&o.onRemove(s[l].spec),s.splice(l--,1));return s.length||i.length?new $e(s,i):ze}function Fe(e,t){return e.from-t.from||e.to-t.to}function We(e){let t=e;for(let n=0;n<t.length-1;n++){let o=t[n];if(o.from!=o.to)for(let i=n+1;i<t.length;i++){let r=t[i];if(r.from!=o.from){r.from<o.to&&(t==e&&(t=e.slice()),t[n]=o.copy(o.from,r.from),He(t,i,o.copy(r.from,o.to)));break}r.to!=o.to&&(t==e&&(t=e.slice()),t[i]=r.copy(r.from,o.to),He(t,i+1,r.copy(o.to,r.to)))}}return t}function He(e,t,n){for(;t<e.length&&Fe(n,e[t])>0;)t++;e.splice(t,0,n)}const Xe=o.Extension.create({name:"placeholder",addOptions:()=>({emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",placeholder:"Write something \u2026",showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!1}),addProseMirrorPlugins(){return[new i.d({props:{decorations:({doc:e,selection:t})=>{const n=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:o}=t,i=[];return n?(e.descendants((e,t)=>{const n=o>=t&&o<=t+e.nodeSize;if((n||!this.options.showOnlyCurrent)&&!e.isLeaf&&!e.childCount){const o=[this.options.emptyNodeClass];this.editor.isEmpty&&o.push(this.options.emptyEditorClass);const r=Ie.node(t,t+e.nodeSize,{class:o.join(" "),"data-placeholder":"function"==typeof this.options.placeholder?this.options.placeholder({editor:this.editor,node:e,pos:t,hasAnchor:n}):this.options.placeholder});i.push(r)}return this.options.includeChildren}),$e.create(e,i)):null}}})]}})}}]);