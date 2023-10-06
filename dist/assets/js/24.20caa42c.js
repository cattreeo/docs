(window.webpackJsonp=window.webpackJsonp||[]).push([[24,30],{367:function(e,o,t){},386:function(e,o,t){"use strict";t(367)},387:function(e,o,t){},402:function(e,o,t){"use strict";t.r(o);var r={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 6px 0 rgba(0, 0, 0, 0.2)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#2c3e50","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#25272a","--box-shadow":"0 1px 6px 0 rgba(0, 0, 0, .9)","--box-shadow-hover":"0 2px 26px 0 rgba(0, 0, 0, .9)","--text-color":"#aaa","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function a(e){const o=document.querySelector(":root"),t=r[e];for(const e in t)o.style.setProperty(e,t[e])}var c={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){const e=localStorage.getItem("mode");this.currentMode=null===e?"auto":e,"dark"===e?a("dark"):"light"===e&&a("light")},methods:{selectMode(e){e.mode!==this.currentMode&&("dark"===e.mode?a("dark"):"light"===e.mode?a("light"):"auto"===e.mode&&function(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches,t=window.matchMedia("(prefers-color-scheme: no-preference)").matches,r=!e&&!o&&!t;if(window.matchMedia("(prefers-color-scheme: dark)").addListener(e=>e.matches&&a("dark")),window.matchMedia("(prefers-color-scheme: light)").addListener(e=>e.matches&&a("light")),e&&a("dark"),o&&a("light"),t||r){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();(e<4||e>=16)&&a("dark")}}(),localStorage.setItem("mode",e.mode),this.currentMode=e.mode)},getClass(e){return e!==this.currentMode?e:e+" active"}}},n=(t(386),t(1)),i=Object(n.a)(c,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"mode-options"},[o("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),o("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(t,r){return o("li",{key:r,class:e.getClass(t.mode),on:{click:function(o){return e.selectMode(t)}}},[e._v(e._s(t.title))])})),0)])}),[],!1,null,null,null);o.default=i.exports},406:function(e,o){function t(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function r(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,o,a){function c(o){if(a.context){var t=o.path||o.composedPath&&o.composedPath();t&&t.length>0&&t.unshift(o.target),e.contains(o.target)||function(e,o){if(!e||!o)return!1;for(var t=0,r=o.length;t<r;t++)try{if(e.contains(o[t]))return!0;if(o[t].contains(e))return!1}catch(e){return!1}return!1}(a.context.popupItem,t)||e.__vueClickOutside__.callback(o)}}t(o)&&(e.__vueClickOutside__={handler:c,callback:o.value},!r(a)&&document.addEventListener("click",c))},update:function(e,o){t(o)&&(e.__vueClickOutside__.callback=o.value)},unbind:function(e,o,t){!r(t)&&document.removeEventListener("click",e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},407:function(e,o,t){"use strict";t(387)},434:function(e,o,t){"use strict";t.r(o);var r=t(406),a=t.n(r),c=t(402),n={name:"UserSettings",directives:{"click-outside":a.a},components:{ModePicker:c.default},data:()=>({showMenu:!1}),methods:{hideMenu(){this.showMenu=!1}}},i=(t(407),t(1)),l=Object(i.a)(n,(function(){var e=this,o=e._self._c;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[o("a",{staticClass:"color-button",on:{click:function(o){o.preventDefault(),e.showMenu=!e.showMenu}}},[o("i",{staticClass:"iconfont reco-color"})]),e._v(" "),o("transition",{attrs:{name:"menu-transition",mode:"out-in"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[o("ModePicker")],1)])],1)}),[],!1,null,null,null);o.default=l.exports}}]);