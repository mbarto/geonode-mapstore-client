(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[887],{59979:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(67294),o=n.n(r),i=n(52595),a=n(30294),c=n(96486),s=n(73935),u=n.n(s);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const v=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(g,t);var n,r,s,l,v=(s=g,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(s);if(l){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function g(){return p(this,g),v.apply(this,arguments)}return n=g,(r=[{key:"render",value:function(){var t=null,n=this.props,r=n.popoverOptions,s=n.keyProp,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(n,["popoverOptions","keyProp"]);return o().createElement("span",{className:"mapstore-info-popover"},o().createElement(e,f({},(0,c.omit)(l,["renderPopover","tooltipId"]),{key:s,ref:function(e){t=e}})),o().createElement(i.Z,{placement:r.placement,shouldUpdatePosition:!0,show:!0,target:function(){return u().findDOMNode(t)}},o().createElement(a.Popover,r.props,r.content)))}}])&&m(n.prototype,r),g}(o().Component)}},6724:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(67294),o=n.n(r),i=n(18093),a=function(e,t,n){var r=n.maskContainerStyle,a=n.maskStyle,c=n.className,s=n.white;return function(n){return(0,i.nest)((function(n){return o().createElement("div",{className:"ms2-mask-container ".concat(c||""," ").concat(e(n)?"":"ms2-mask-empty"),style:r},n.children,e(n)?o().createElement("div",{className:"ms2-mask"+(s?" white-mask":""),style:a},t(n)):null)}),n)}};const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.alwaysWrap,o=void 0===r||r,c=n.white,s=void 0!==c&&c,u=n.maskContainerStyle,l=void 0===u?{}:u,f=n.maskStyle,p=void 0===f?{}:f,m=n.className;return o?a(e,t,{maskContainerStyle:l,maskStyle:p,className:m,white:s}):(0,i.branch)(e,a((function(){return!0}),t,{maskContainerStyle:l,maskStyle:p,white:s}))}},26325:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>C});var r=n(89255),o=n(96486),i=n(30381),a=n.n(i),c=n(89919),s=n(1550),u=n(57676),l=n(57604),f=n(80416),p=n(97395),m=n(75110),d=n(97291),y=n(85148),b=n(55237),v=n(96361);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k="time",T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,d.Li)(e),r=(0,d.uy)(e),o=(0,d.Ry)(e),i=(0,d.F3)(n)(e);return[o,r,"time",j({limit:1},t),i]},I=function(e,t,n){if((0,d.uy)(e))return r.Observable.forkJoin(v.Ci.apply(void 0,h(T(e,{sort:"asc",fromValue:n}))).map((function(e){return e.DomainValues.Domain.split(",")})).map((function(e){return g(e,1)[0]})).catch((function(e){return e&&r.Observable.of(null)})),v.Ci.apply(void 0,h(T(e,{sort:"desc",fromValue:n}))).map((function(e){return e.DomainValues.Domain.split(",")})).map((function(e){return g(e,1)[0]})).catch((function(e){return e&&r.Observable.of(null)}))).map((function(e){return(0,b.Qn)(e.filter((function(e){return!!e})),n)||n}));var o=(0,y.aK)((0,m.CA)(e,t))(e);return r.Observable.of((0,b.Qn)(o,n)||n)},D=function(e){return(0,o.isString)(e)?e:e.toISOString()},E=function(e,t,n){var i=t.domain.split("--"),a=(0,d.YK)(n())||{start:new Date(i[0]),end:new Date(i[1])},c=(0,b.un)(a,20),s=c.range,u=c.resolution,l=(0,m.CA)(n(),e).name,f=S({},k,"".concat(D(s.start),"/").concat(D(s.end)));return(0,v.ot)(t.source.url,l,k,S({},k,"".concat(D(s.start),"/").concat(D(s.end))),u,(0,d.F3)(e)(n())).merge((0,v.i8)(t.source.url,l,f,j(j({},(0,d.F3)(e)(n())),{},{expandLimit:20}))).scan((function(e,t){return j(j({},e),t)}),{}).switchMap((function(e){var t,n=e.Histogram,i=e.Domains,a=(0,o.get)((0,o.head)((0,o.castArray)((0,o.get)(i,"DimensionDomain")||[]).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.Identifier;return t===k}))),"Domain");try{t=n&&n.Values&&n.Values.split(",").map((function(e){return parseInt(e,10)}))||[]}catch(e){t=[]}var c=a&&a.indexOf("--")<0&&a.split(",");return r.Observable.of({range:s,histogram:n&&n.Domain?{values:t,domain:n.Domain}:void 0,domain:a?{values:c}:void 0})}))};const C={setTimelineCurrentTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,o=void 0===n?function(){}:n;return e.ofType(u.qx).throttleTime(100).switchMap((function(e){var t=e.time,n=e.group,i=o();return n?I(i,n,t).switchMap((function(e){var t=(0,d.YK)(i)||{},n=t.start,o=t.end,c=[];if(n&&o&&(a()(e).isBefore(n)||a()(e).isAfter(o))){var s=a()(o).diff(n);c=[(0,u.y3)({start:a()(e).subtract(s/2),end:a()(e).add(s/2)})]}return r.Observable.from([].concat(h(c),[(0,l.yR)(e)]))})).let((0,c.hP)((0,u.aA)(!1,!0),(0,u.aA)(!1,!1))):r.Observable.of((0,l.yR)(t))}))},setupTimelineExistingSettings:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,i=void 0===n?function(){}:n;return e.ofType(f.sb,u.cb).exhaustMap((function(){return(0,d.en)(i())&&(0,o.get)((0,d.rV)(i()),"[0].id")&&!(0,d.Li)(i())?r.Observable.of((0,u.kq)((0,o.get)((0,d.rV)(i()),"[0].id"))).concat(r.Observable.of(1).switchMap((function(){return I(i(),(0,o.get)((0,d.rV)(i()),"[0].id"),(0,y.WT)(i)||(new Date).toISOString()).filter((function(e){return e})).map((function(e){return(0,l.yR)(e)}))}))):r.Observable.empty()}))},settingInitialOffsetValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,o=void 0===n?function(){}:n;return e.ofType(u.JU).switchMap((function(e){var t=o(),n=(0,y.WT)(t),i=(0,d.YK)(t);if(e.enabled){var c=i||{},s=c.start,f=void 0===s?0:s,p=c.end,m=void 0===p?432e6:p,b=(0,y.ns)(t),v=a()(m).diff(f),g=i?a()(f).add(v/2).toISOString():a()(new Date).toISOString(),h=a()(n||g).add(v/5),O=e.enabled&&!n?r.Observable.of((0,l.yR)(g)):r.Observable.empty(),w=e.enabled&&!b||e.enabled&&a()(b).diff(n)<0?r.Observable.of((0,l.pF)(h.toISOString())):r.Observable.empty(),P=i?r.Observable.empty():r.Observable.of((0,u.y3)({start:a()(g).add(-1*v/2),end:a()(g).add(v/2)}));return O.concat(w).concat(P)}return r.Observable.of((0,l.pF)())}))},updateRangeDataOnRangeChange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,o=void 0===n?function(){}:n;return e.ofType(u.Lv).merge(e.ofType(s.pP).filter((function(){return(0,d.cX)(o())})),e.ofType(u.w)).debounceTime(400).merge(e.ofType(l.XV).debounceTime(50)).switchMap((function(){var e,t=(0,y.m$)(o())||{},n=Object.keys(t).filter((function(e){return t[e]&&t[e].domain&&(0,b._q)(t[e].domain)||(0,d.cX)(o())}));return(e=r.Observable).merge.apply(e,h(n.map((function(e){return E(e,t[e],o).map((function(t){var n=t.range,r=t.histogram,o=t.domain;return(0,u.cO)(e,n,r,o)})).startWith((0,u.aA)(e,!0)).catch((function(){return r.Observable.of((0,p.vU)({uid:"error_with_timeline_update",title:"timeline.errors.multidim_error_title",message:"timeline.errors.multidim_error_message"}))})).concat(r.Observable.of((0,u.aA)(e,!1)))}))))}))}}},42850:(e,t,n)=>{"use strict";n.d(t,{Z:()=>se});var r=n(67294),o=n.n(r),i=n(33664),a=n(96486),c=n(85148),s=n(57676),u=n(97291),l=n(57604),f=n(62187),p=n(76843),m=n(22222),d=n(84715),y=n(18093),b=n(6724),v=n(5346),g=n(75480),h=n(30381),O=n.n(h),w=n(55237);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e,t){return O()(t).diff(e)>0};const T=(0,y.withHandlers)({clickHandler:function(e){var t=e.selectedLayer,n=e.offsetEnabled,r=e.status,o=e.setCurrentTime,i=void 0===o?function(){}:o,c=e.selectGroup,s=void 0===c?function(){}:c;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.time,c=e.group,u=e.what,l=e.event;if("PLAY"!==r)switch(u){case"group-label":c&&"PLAY"!==r&&s(c);break;default:var f=l&&l.target&&l.target.closest(".vis-custom-time"),p=f&&f.getAttribute("class"),m=p&&(0,a.trim)(p.replace("vis-custom-time",""));o&&!n&&"startPlaybackTime"!==m&&"endPlaybackTime"!==m&&i(o.toISOString(),t)}}},timechangedHandler:function(e){var t=e.currentTime,n=e.setOffset,r=void 0===n?function(){}:n,o=e.setCurrentTime,i=void 0===o?function(){}:o,a=e.currentTimeRange,c=void 0===a?{}:a,s=e.playbackRange,u=e.setPlaybackRange,l=void 0===u?function(){}:u,f=e.selectedLayer;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.time,o=e.id;if("startPlaybackTime"!==o&&"endPlaybackTime"!==o)"currentTime"===o&&(c.end?k(n,c.end)?i(n.toISOString(),null):(i(c.end),r(n.toISOString())):i(n.toISOString(),f)),"offsetTime"===o&&(k(t,n)?r(n.toISOString()):(i(n.toISOString()),r(t)));else{var a=j(j({},s),{},S({},o,n.toISOString())),u=(0,w.og)(a.startPlaybackTime,a.endPlaybackTime),p=u.start,m=u.end;k(p,m)&&l({startPlaybackTime:p,endPlaybackTime:m})}}}});function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const R=(0,y.compose)((0,y.withPropsOnChange)(["rangeItems","playbackRange","playbackEnabled","selectedLayer"],(function(e){var t=e.rangeItems,n=void 0===t?[]:t,r=e.playbackEnabled,o=e.playbackRange;return{rangeItems:r&&o&&void 0!==o.startPlaybackTime&&void 0!==o.endPlaybackTime?[].concat(C(n),[D(D({id:"playback-range"},(0,w.og)(o.startPlaybackTime,o.endPlaybackTime)),{},{type:"background",className:"ms-playback-range"})]).filter((function(e){return e})):n}})),(0,y.compose)((0,y.withHandlers)({onUpdate:function(e){var t=e.moveCurrentRange,n=void 0===t?function(){}:t;return function(e){var t=e.id,r=e.start;"current-range"===t&&n(r.toISOString())}}}),(0,y.withPropsOnChange)(["options","onUpdate"],(function(e){var t=e.options,n=void 0===t?{}:t,r=e.onUpdate,o=void 0===r?function(){}:r;return{options:D(D({},n),{},{snap:null,editable:{add:!1,updateTime:!1,updateGroup:!1,remove:!1,overrideItems:!1},onMove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;o(e),t(e)}})}})),(0,y.withPropsOnChange)(["rangeItems","currentTime","offsetEnabled","selectedLayer","currentTimeRange","readOnly"],(function(e){var t=e.currentTimeRange,n=e.rangeItems,r=void 0===n?[]:n,o=e.readOnly;return{rangeItems:e.offsetEnabled&&void 0!==t.start&&void 0!==t.end?[].concat(C(r),[D(D({id:"current-range",editable:{updateTime:!o,updateGroup:!1,remove:!1}},(0,w.og)(t.start,t.end)),{},{type:"background",className:"ms-current-range"})]).filter((function(e){return e})):r}}))),(0,y.withPropsOnChange)(["currentTime","playbackRange","playbackEnabled","offsetEnabled","currentTimeRange"],(function(e){var t=e.currentTime,n=e.playbackRange,r=e.playbackEnabled,o=e.offsetEnabled,i=e.currentTimeRange;return{customTimes:[t?{currentTime:t}:{},r&&n&&n.startPlaybackTime&&n.endPlaybackTime?n:{},o&&i?{offsetTime:i.end}:{}].reduce((function(e,t){return t?D(D({},e),t):D({},e)}),{})}})));var _=n(45697),L=n.n(_),$=n(16307),M=n.n($);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(61805),M().timeline.components.items.BackgroundItem.prototype._createDomElement=function(){this.dom||(this.dom={},this.dom.box=document.createElement("div"),this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-item-overflow",this.dom.box.appendChild(this.dom.frame),this.dom.content=document.createElement("div"),this.dom.content.className="vis-item-content",this.dom.frame.appendChild(this.dom.content),this.dom.box["timeline-item"]=this,this.dirty=!0)};var G=function(){},K=["currentTimeTick","click","contextmenu","doubleClick","groupDragged","changed","rangechange","rangechanged","select","drop","timechange","timechanged","mouseOver","mouseMove","mouseleave","itemover","itemout","mouseDown","mouseUp"],Y={},q={};(0,a.each)(K,(function(e){return Y[e]=L().func,q["".concat(e,"Handler")]=G,[Y,q]}));var z={items:L().array,rangeItems:L().array,groups:L().array,options:L().object,selectionOptions:L().object,selection:L().array,customTimes:L().shape({datetime:L().instanceOf(Date),id:L().string}),animate:L().oneOfType([L().bool,L().object]),currentTime:L().oneOfType([L().string,L().instanceOf(Date),L().number])},J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(s,e);var t,n,r,i,c=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(r);if(i){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),F(B(t=c.call(this,e)),"setAllItems",(function(e){t.$el.setItems([].concat(N(e||[]),N(t.props.rangeItems||[])))})),F(B(t),"setItems",(function(e){(e.length||0)+(t.props.rangeItems&&t.props.rangeItems.length||0)>0?t.$el.initialFitDone?t.setAllItems(e):(t.setAllItems(e),t.$el.emit("changed")):t.$el.initialRangeChangeDone&&t.setAllItems(e)})),t.state={customTimes:[]},t}return t=s,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.refs.container;this.$el=new(M().Timeline)(t,void 0,this.props.options),K.forEach((function(t){return e.$el.on(t,e.props["".concat(t,"Handler")])})),this.init()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.items,r=t.groups,o=t.options,i=t.selection,a=t.customTimes,c=t.readOnly,s=t.rangeItems,u=n!==e.items,l=r!==e.groups,f=o!==e.options,p=a!==e.customTimes,m=i!==e.selection,d=c!==e.readOnly,y=s!==e.rangeItems;return u||l||f||p||m||d||y}},{key:"componentDidUpdate",value:function(e){this.init(e)}},{key:"componentWillUnmount",value:function(){this.$el.destroy()}},{key:"render",value:function(){return o().createElement("div",{ref:"container",className:this.props.readOnly?"read-only-timeline":"",onMouseOut:this.props.onMouseOutHandler})}},{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,r=n.items,o=n.rangeItems,i=n.groups,c=n.options,s=n.selection,u=n.selectionOptions,l=void 0===u?{}:u,f=n.customTimes,p=n.animate,m=void 0===p||p,d=n.currentTime,y=c;if(m&&(y=(0,a.omit)(c,"start","end"),c.start&&c.end?this.$el.setWindow(c.start,c.end,{animation:m}):this.$el.setWindow(O()().subtract(1,"month"),O()().add(1,"month"),{animation:m})),this.$el.setOptions(y),i.length>0){var b=new(M().DataSet);b.add(i),this.$el.setGroups(b)}if(r&&r!==t.items)this.setItems(r);else if(o!==t.rangeItems){var v=this.$el&&this.$el.itemsData&&this.$el.itemsData.getDataSet();if(v){var g=(0,a.intersectionBy)(o||[],t.rangeItems||[],"id"),h=(0,a.differenceBy)(o||[],t.rangeItems||[],"id"),w=(0,a.differenceBy)(t.rangeItems||[],o||[],"id");g.map((function(e){return v.update(e)})),h.map((function(e){return v.add(e)})),w.map((function(e){var t=e.id;return v.remove(t)}))}else this.setItems(r)}this.$el.setSelection(s,l),d&&this.$el.setCurrentTime(d);var P=(0,a.keys)(this.state.customTimes),j=(0,a.keys)(f),S=(0,a.difference)(j,P),k=(0,a.difference)(P,j),T=(0,a.intersection)(P,j);(0,a.each)(k,(function(t){return e.$el.removeCustomTime(t)})),(0,a.each)(S,(function(t){var n=f[t];e.$el.addCustomTime(n,t)})),(0,a.each)(T,(function(t){var n=f[t];e.$el.setCustomTime(n,t)})),this.setState({customTimes:f}),(this.props.readOnly!==t.readOnly||this.props.readOnly&&S.length>0)&&(0,a.each)(this.$el.customTimes,(function(n){e.props.readOnly?n.hammer.off("panstart panmove panend"):!0===t.readOnly&&(n.hammer.on("panstart",n._onDragStart.bind(n)),n.hammer.on("panmove",n._onDrag.bind(n)),n.hammer.on("panend",n._onDragEnd.bind(n)))}))}}])&&H(t.prototype,n),s}(o().Component);F(J,"propTypes",(0,a.assign)(z,Y)),F(J,"defaultProps",(0,a.assign)({items:[],groups:[],options:{},selection:[],customTimes:{}},q));const X=J;function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=(0,d.o)((function(e,t){return e===t||!(0,a.isNil)(e)&&!(0,a.isNil)(t)&&e.id===t.id&&e.title===t.title&&e.name===t.name}))(u.rV,(function(e){return e})),re=(0,y.compose)((0,i.connect)((0,m.P1)(u.YK,u.__,ne,u.E2,(function(e,t,n,r){return{viewRange:e,items:t,layers:n,loading:r}}))),(0,y.withPropsOnChange)((function(e,t){var n=e.layers,r=void 0===n?[]:n,o=e.loading,i=e.selectedLayer,c=t.layers,s=t.loading,u=t.selectedLayer,l=e.hideLayersName!==t.hideLayersName;return o!==s||i!==u||l||r&&c&&r.length!==c.length||(0,a.differenceBy)(r,c||[],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.title,r=e.name;return t+n+r})).length>0}),(function(e){var t=e.layers,n=void 0===t?[]:t,r=e.loading,o=void 0===r?{}:r,i=e.selectedLayer;return{groups:n.map((function(e){return{id:e.id,className:(o[e.id]?"loading":"")+(e.id&&e.id===i?" selected":""),content:'<div class="timeline-layer-label-container">'+(o[e.id]?'<div class="timeline-layer-icon"><div class="timeline-spinner"></div></div>':'<div class="timeline-layer-icon">'.concat(e.id&&e.id===i?'<i class="glyphicon glyphicon-time"></i>':"","</div>"))+'<div class="timeline-layer-title">'.concat((0,a.isString)(e.title)?e.title:e.name,"</div>")+"</div>"}}))}}))),oe=(0,y.compose)((0,i.connect)((0,m.P1)(c.WT,u.m_,(function(e,t){return{currentTime:e,currentTimeRange:t}})),{setCurrentTime:s.HM,moveCurrentRange:l.PZ,setOffset:l.pF})),ie=(0,y.compose)((0,i.connect)((0,m.zB)({playbackRange:p.KC,status:p.dS}),{setPlaybackRange:f.VS})),ae=(0,y.compose)((0,i.connect)((0,m.P1)(u.Li,(function(e){return{selectedLayer:e}})),{selectGroup:s.kq})),ce=(0,y.compose)((0,i.connect)((function(){return{}}),{rangechangedHandler:s.y3}));const se=(0,y.compose)(oe,ie,ae,T,ce,re,(0,y.defaultProps)({key:"timeline",options:{maxHeight:"90%",verticalScroll:!0,stack:!1,showMajorLabels:!0,showCurrentTime:!1,zoomMin:10,zoomable:!0,type:"background",margin:{item:0,axis:0},format:{minorLabels:{minute:"h:mma",hour:"ha"}},itemsAlwaysDraggable:!0,moment:function(e){return O()(e).utc()}}}),(0,y.withPropsOnChange)(["viewRange","options"],(function(e){var t=e.viewRange,n=void 0===t?{}:t;return{options:ee(ee({},e.options),n)}})),(0,y.withPropsOnChange)(["status"],(function(e){return{readOnly:"PLAY"===e.status}})),R,(0,b.Z)((function(e){var t=e.loading;return t&&t.timeline}),(function(){return o().createElement("div",{style:{margin:"auto",fontWeight:"bold"}},o().createElement(g.Z,{style:{display:"inline-block",verticalAlign:"middle"}}),o().createElement(v.Z,{msgId:"loading"}))}),{white:!0}))(X)},89168:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(67294),o=n.n(r),i=n(89255),a=n(5346),c=n(30294),s=n(57676),u=n(97291),l=n(18093),f=n(15135),p=n(22222),m=n(33664),d=n(59979),y=n(38560);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=(0,l.compose)((0,l.withProps)({collapseHintPopoverOptions:{placement:"top",props:{title:o().createElement("span",null,o().createElement(c.Glyphicon,{glyph:"time"})," ",o().createElement("strong",null,o().createElement(a.Z,{msgId:"timeline.collapsed.title"})))},content:o().createElement(a.Z,{msgId:"timeline.collapsed.tooltip"})}}),(0,l.mapPropsStream)((function(e){return e.combineLatest(function(e){return e.distinctUntilKeyChanged("collapsed").filter((function(e){return e.collapsed})).take(1).switchMap((function(e){var t=e.collapseHintPopoverOptions;return i.Observable.timer(5e3).startWith({popoverOptions:t}).concat(i.Observable.of({}))})).startWith({})}(e),(function(e,t){return g(g({},e),t)}))})),(0,l.branch)((function(e){return e.popoverOptions}),d.Z,f.Z))(y.Z);const w=(0,l.compose)((0,m.connect)((0,p.P1)(u.zb,u.qJ,(function(e,t){return{collapsed:e,visible:t}})),{setCollapsed:s.w2}),(0,l.branch)((function(e){return!e.visible}),l.renderNothing),(0,l.withHandlers)({onClick:function(e){var t=e.collapsed,n=e.setCollapsed;return function(){return n(!t)}}}),(0,l.withProps)((function(e){var t=e.collapsed;return{bsStyle:t?"primary":"success",tooltipId:t?"timeline.show":"timeline.hide"}})))((function(e){return o().createElement(O,b({},e,{bsSize:"xsmall"}),o().createElement(c.Glyphicon,{glyph:"time"}))}))},55545:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(80416),o=n(82904),i=n(57676),a=n(61868),c=n(96486);const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{settings:{autoSelect:!0,collapsed:!1}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.M5:return(0,a.t8)("settings.collapsed",t.collapsed,e);case i.w:return(0,a.t8)("settings.mapSync",t.mapSync,e);case i.Lv:return(0,a.t8)("range",{start:t.start,end:t.end},e);case i.iv:return(0,a.t8)("rangeData[".concat(t.layerId,"]"),{range:t.range,histogram:t.histogram,domain:t.domain},e);case i.br:return t.layerId?(0,a.t8)("loading[".concat(t.layerId,"]"),t.loading,e):(0,a.t8)("loading.timeline",t.loading,e);case i._V:return(0,a.t8)("selectedLayer",t.layerId,e);case r.sb:var n=e;return(0,c.assign)({},e,{rangeData:(0,c.has)(n.rangeData,t.node)?(0,c.pickBy)(n.rangeData,(function(e,n){return n!==t.node})):n.rangeData,loading:(0,c.has)(n.rangeData,t.node)?(0,c.pickBy)(n.loading,(function(e,n){return n!==t.node})):n.loading,selectedLayer:e.selectedLayer===t.node?void 0:e.selectedLayer});case o.l:return(0,c.assign)({},e,{range:void 0,rangeData:void 0,selectedLayer:void 0,loading:void 0,MouseEvent:void 0});default:return e}}}}]);