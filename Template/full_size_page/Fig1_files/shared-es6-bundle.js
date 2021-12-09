!function(){"use strict";const n=t=>{const e=[];return t&&Array.prototype.forEach.call(t,function(t){e.push(t)}),e},i={TARGET_HIDE_CLASS:"u-js-hide",TRIGGER_OPEN_CLASS:"is-open",TRIGGER_OPEN_LABEL:void 0,CLOSE_ON_FOCUS_OUT:!0,AUTOFOCUS:null,OPEN_EVENT:!1},s=class{constructor(t,e,n={}){this._options=Object.assign({},i,n),this._autoFocusElement=t,this._triggerEl=t,this._targetEl=e,this._originalTriggerText=t.textContent,this._isOpen=!1,this._handleButtonClick=this._handleButtonClick.bind(this),this._handleButtonKeydown=this._handleButtonKeydown.bind(this),this._handleDocumentClick=this._handleDocumentClick.bind(this),this._handleDocumentKeydown=this._handleDocumentKeydown.bind(this)}_handleButtonClick(t){t.preventDefault(),this._isOpen?this.close():this.open()}_handleButtonKeydown(t){"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||(t.preventDefault(),this._isOpen?this.close():this.open())}_handleDocumentKeydown(t){"Escape"===t.key&&(this.close(),this._triggerEl.focus()),this._options.CLOSE_ON_FOCUS_OUT&&("Tab"===t.key&&!0===t.shiftKey&&(t.target!==this._targetTabbableItems[0]&&t.target!==this._triggerEl&&t.target!==this._targetEl||(t.preventDefault(),window.requestAnimationFrame(()=>{this.close(),this._triggerEl.focus()}))),"Tab"===t.key&&!1===t.shiftKey&&t.target===this._targetTabbableItems[this._targetTabbableItems.length-1]&&(t.preventDefault(),window.requestAnimationFrame(()=>{this.close(),this._triggerEl.focus()})))}_handleDocumentClick(t){t=t.target;t===this._targetEl||t===this._triggerEl||this._targetEl.contains(t)||this._triggerEl.contains(t)||this.close()}_setupTemporaryEventListeners(){document.addEventListener("keydown",this._handleDocumentKeydown),this._options.CLOSE_ON_FOCUS_OUT&&document.addEventListener("click",this._handleDocumentClick)}_removeTemporaryEventListeners(){document.removeEventListener("keydown",this._handleDocumentKeydown),this._options.CLOSE_ON_FOCUS_OUT&&document.removeEventListener("click",this._handleDocumentClick)}_updateAttributes(){this._triggerEl.setAttribute("aria-expanded",this._isOpen.toString()),this._isOpen?this._targetEl.removeAttribute("hidden"):this._targetEl.setAttribute("hidden","")}_updateClassAttributes(){this._isOpen?(this._triggerEl.classList.add(this._options.TRIGGER_OPEN_CLASS),this._targetEl.classList.remove(this._options.TARGET_HIDE_CLASS)):(this._triggerEl.classList.remove(this._options.TRIGGER_OPEN_CLASS),this._targetEl.classList.add(this._options.TARGET_HIDE_CLASS))}_updateTriggerLabel(){this._options.TRIGGER_OPEN_LABEL&&(this._triggerEl.textContent=this._isOpen?this._options.TRIGGER_OPEN_LABEL:this._originalTriggerText)}_updateTabbableItems(){this._targetTabbableItems=n(this._targetEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(t=>"hidden"!==window.getComputedStyle(t).getPropertyValue("visibility"))}_handleAutoFocus(){"target"===this._options.AUTOFOCUS&&(this._autoFocusElement=this._targetEl,this._targetEl.setAttribute("tabindex","-1")),"firstTabbable"===this._options.AUTOFOCUS&&(this._autoFocusElement=0<this._targetTabbableItems.length&&this._targetTabbableItems[0],this._autoFocusElement.setSelectionRange&&this._autoFocusElement.setSelectionRange(0,this._autoFocusElement.value.length)),this._autoFocusElement.focus()}open(){var t;!this._isOpen&&(this._isOpen=!0,this._updateTriggerLabel(),this._updateAttributes(),this._updateClassAttributes(),this._updateTabbableItems(),this._setupTemporaryEventListeners(),this._handleAutoFocus(),this._options.OPEN_EVENT)&&(t=((t,e,n)=>{if(void 0===e)throw new Error("Missing namespace in `createEvent` function");return"function"==typeof window.CustomEvent?new CustomEvent(`${e}:${t}`,n):((t,e)=>{e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n})(`${e}:${t}`,n)})("open","globalExpander",{bubbles:!1}),this._triggerEl.dispatchEvent(t))}close(){this._isOpen&&(this._isOpen=!1,this._updateTriggerLabel(),this._updateAttributes(),this._updateClassAttributes(),this._removeTemporaryEventListeners())}init(){"A"===this._triggerEl.tagName&&"#"===this._triggerEl.getAttribute("href").charAt(0)&&this._triggerEl.setAttribute("href","javascript:;"),this._updateTriggerLabel(),this._updateAttributes(),this._updateClassAttributes(),this._triggerEl.addEventListener("click",this._handleButtonClick),this._triggerEl.addEventListener("keydown",this._handleButtonKeydown)}},o={DATA_COMPONENT:"[data-facet-expander]",FACET:"[data-facet]"},r="c-facet__selected",a=t=>{const e=document.createElement("div");e.classList.add("c-facet-expander__button-container"),t.prepend(e),(t=>{const e=document.createElement("button");e.classList.add("c-facet__submit"),e.textContent+="Apply filters",t.appendChild(e)})(e),((e,t)=>{const n=document.createElement("button");n.classList.add("c-facet-expander__clear-selection"),n.textContent+="Clear selection",n.addEventListener("click",t=>{t.preventDefault(),e.querySelectorAll("input[type=checkbox]:checked, input[type=radio]:checked").forEach(function(t){t.checked=!1}),n.closest("form").submit()}),t.appendChild(n)})(t,e)},e=()=>{var t=document.querySelectorAll(o.DATA_COMPONENT),e=document.querySelector(o.FACET);0!==t.length&&e&&n(t).forEach(t=>{const e=t.hasAttribute("data-facet-target")&&t.getAttribute("data-facet-target"),n=document.querySelector(e);n&&(Boolean(n.querySelector("input[type=checkbox], input[type=radio]"))&&(((t,e)=>{const n=e.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked').length,i=document.createElement("span");i.classList.add("c-facet__ellipsis"),1===n?(i.textContent+=e.querySelector("input:checked + label").textContent.trim(),t.classList.add(r)):1<n?(i.textContent+=`${n} selected`,i.classList.add(r)):i.textContent+="All",t.prepend(i)})(t,n),a(n)),new s(t,n).init())})},l={get(e){const t=document.cookie.split("; ").map(t=>t.split("=")).filter(t=>t[0]===e);return t.length?t.pop()[1]:null},set(t,e,n,i="/"){document.cookie=t+"="+e+";expires="+n.toUTCString()+";path="+i}},c=t=>t+"_dismissed",u=t=>t.getAttribute("data-component-id"),d=()=>{var t,e,n;t=h,e=u(h),n=(t=>{t=parseInt(t.getAttribute("data-component-expirydays")||"30",10);return t&&!isNaN(t)?t:30})(h),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t)},1),((t,e)=>{const n=new Date(Date.now());n.setTime(n.getTime()+24*e*60*60*1e3),l.set(c(t),"true",n)})(e,n)};let h=null,p=25;const _=()=>{let t=(()=>{var t=(()=>{try{if(window.localStorage)return window.localStorage.getItem("_pdfps")}catch(t){}return null})();if(t&&t.length){const e=JSON.parse(t);if(-1!==e.indexOf("41066")&&-1===e.indexOf("46137"))return!0}return!1})();const n=(()=>{let e=Date.now();return()=>{var t=Date.now();e+250-t<0&&((()=>{const t=document.documentElement.scrollHeight,e=Math.round(p/100*t);if(window.pageYOffset>e){if(window.removeEventListener("scroll",n,!1),window.removeEventListener("resize",n,!1),(()=>{const t=document.querySelector(".c-cookie-banner"),e=document.querySelector("#onetrust-banner-sdk");if(t)return!0;if(e)if("block"===window.getComputedStyle(e).display)return!0;return!1})())return;h.classList.add("c-site-messages--is-visible")}})(),e=t)}})();if(h=(()=>{var e=document.querySelectorAll(".c-site-messages");for(let t=0;e[t];++t){var n=u(e[t]);if(!Boolean(l.get(c(n))))return e[t]}return null})(),h){if("nnano-banner"===h.getAttribute("data-component-id")&&(t=!1),t)return!0;p=h.getAttribute("data-component-trigger-scroll-percentage"),h.classList.remove("hide","u-hide"),e=h.querySelectorAll(".c-site-messages__close"),Array.prototype.slice.call(e,0).forEach(t=>{t.addEventListener("click",d,!1)}),(t=>{const e=t.querySelector("form");if(e){const t=e.querySelector('[type="submit"]');e.addEventListener("submit",()=>{t.setAttribute("disabled","disabled"),window.setTimeout(()=>{t.removeAttribute("disabled")},1e3)})}})(h),window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1)}var e};var g={isFeatureFlagEnabled:function(e){var t=!1,n=null;return t=window.dataLayer&&e&&(n=window.dataLayer[0].page.attributes.featureFlags)?n.find(function(t){return t.name===e&&t.active}):t},extendObject:function(t,e){var n=t||{};return e&&Object.keys(e).forEach(function(t){n[t]=e[t]}),n},getJournalPCode:function(){if(window.dataLayer){var t=window.dataLayer[0];return t.content&&Object.prototype.hasOwnProperty.call(t.content,"journal")&&Object.prototype.hasOwnProperty.call(t.content.journal,"pcode")?t.content.journal.pcode:void 0}},getArticleDOI:function(){if(window.dataLayer){var t=window.dataLayer[0];return t.content&&Object.prototype.hasOwnProperty.call(t.content,"article")&&Object.prototype.hasOwnProperty.call(t.content.article,"doi")?t.content.article.doi:void 0}},hasAccess:function(){return"Yes"===((t=document.querySelector("meta[name=access]"))?t.getAttribute("content"):"");var t},debounce:function(i,s,o){var r;return function(){var t=this,e=arguments,n=o&&!r;clearTimeout(r),r=setTimeout(function(){r=null,o||i.apply(t,e)},s),n&&i.apply(t,e)}}};function m(){return{strategies:{ENTITLED:"entitled",UNENTITLED:"unentitled",UNKNOWN:"unknown"},persistenceServiceWrapperSource:window.ra21Host?window.ra21Host+"/seamless-access.js":null,idpVerifyURL:window.idpVerifyPrefix+"/verify/nature.min.js"}}const b=function(){return{init:function(t,e){t&&e&&function(t,e){var n=m().persistenceServiceWrapperSource,i=document.createElement("script");if(!n)throw new Error("persistance wrapper url is not set correctly");i.src=n,i.addEventListener("load",function(){seamlessAccess&&t()}),i.addEventListener("error",function(){e(this.error)}),document.body.appendChild(i)}(t,e)}}};function y(){return!!window.eligibleForRa21&&"true"===window.eligibleForRa21}function v(){return!window.dataLayer||!dataLayer[0].content.authorization.status}function E(t){return Object.prototype.hasOwnProperty.call(t,"name")&&Object.prototype.hasOwnProperty.call(t,"entityId")}window.isEligibleForRa21=y;const w=function(){return{init:function(t,e){var n,i,s,e=e||function(){};i=t||function(){},s=e,window.idp={institutionalLogin:function(t){i(t)},hasNatureUserProof:function(t){var e;t||(e=document.querySelector("#login-button"),t=document.querySelector("#my-account"),e&&t&&(t.style.display="none",e.setAttribute("style","")))},ajaxError:function(t){s(t)}},n=e,t=m().idpVerifyURL,(e=document.createElement("script")).src=t,e.addEventListener("load",function(){}),e.addEventListener("error",function(){n(this.src)}),document.body.appendChild(e)}}};function f(t){var s=null,e=function(){s&&(this.options.text&&i(),this.options.active&&n(this.options,function(){var t=new CustomEvent("entitlement-box:created");document.dispatchEvent(t)}))}.bind(this),n=function(e,t){var n,i;s&&(e.accessButton&&(o(".js-access-button"),e.accessButtonEventHandler)&&(i=s.querySelector(".js-access-button"),n=null,i&&(n=i.querySelector("a"))&&i.addEventListener("click",function(t){t.preventDefault(),e.accessButtonEventHandler.call(null,t,n)})),i=s.getAttribute("data-force-hide-buy-button"),e.buyButton&&!i&&o(".js-buy-button"),e.changeInstitutionButton&&o(".js-change-institution-button"),e.text&&o(".js-text"),"true"===s.getAttribute("aria-hidden")?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden","true"),s.classList.toggle("u-display-none"),t&&t())}.bind(this),i=function(){var t=s.querySelector(".js-text");t&&(t.innerHTML=this.options.text)}.bind(this),o=function(t){var e;s&&(e=null,(t=s.querySelector(t))&&("true"===(e=t.querySelector("a")||t).getAttribute("aria-hidden")?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden","true"),t.classList.toggle("u-display-none")))}.bind(this);return this.options=g.extendObject({selector:"#entitlement-box-mobile",active:!0},t),this.handleVisibility=n,s=document.querySelector(this.options.selector),e(),this}function L(t,e){var n=null,i=e||{},e=m().strategies;switch(t){case e.ENTITLED:n=new f(g.extendObject({type:"entitled",downloadButton:!0},i));break;case e.UNENTITLED:n=new f(g.extendObject({type:"unentitled",changeInstitutionButton:!0,buyButton:!0},i));break;case e.UNKNOWN:n=new f(g.extendObject({type:"unknown",accessButton:!0,buyButton:!0},i));break;default:n=new f({type:"default"})}return n}function A(){this._entitlementBoxList=[]}A.prototype.updateCurrentActive=function(t){var e=this.getActiveEntitlementBox();return e&&(e.options.active=!1),t&&(this.getEntitlementBoxBySelector(t).options.active=!0),this.getActiveEntitlementBox()},A.prototype.create=function(t,e){e=new L(t,e);return this._entitlementBoxList.push(e),e},A.prototype.getActiveEntitlementBox=function(){return this._entitlementBoxList.find(function(t){return t.options.active})},A.prototype.getEntitlementBoxBySelector=function(e){return this._entitlementBoxList.find(function(t){return t.options.selector===e})},A.prototype.getAllEntitlementBox=function(){return this._entitlementBoxList};var t,S=Object.freeze({__proto__:null,Popup:class{constructor(t,e,n={}){this._trigger=t,this._id=e,this._options=n,this._content=document.querySelector("#"+this._id),this._className="c-popup",this._isOpen=!1,this._arrowClass=this._className+"__arrow",this._closeClass=this._className+"__close",this._closeTextClass=this._className+"__close-text",this._closeButton=`<button class="${this._closeClass}"><span class="${this._closeTextClass}">Close</span></button>`,this._arrow=`<div class="${this._arrowClass}"></div>`,this._closeHandler=()=>{this._close()},this._build(),this._expander=new s(this._trigger,this._content,{OPEN_EVENT:!0}),this._bindEvents()}open(){this._expander.open()}_build(){this._content.insertAdjacentHTML("beforeend",this._closeButton+this._arrow),document.body.appendChild(this._content)}_getCloseButton(){return this._content.querySelector("."+this._closeClass)}_positionPopup(){this._isOpen=!0,this._options.MAX_WIDTH&&(this._content.style.maxWidth=this._options.MAX_WIDTH),this._options.MIN_WIDTH&&(this._content.style.minWidth=this._options.MIN_WIDTH);var t=this._calcPositioning();this._content.style.top=this._px(t.top),this._content.style.left=this._px(t.left),this._content.style.right=this._px(t.right)}_close(){this._expander.close(),this._isOpen=!1,window.removeEventListener("resize",this._closeHandler)}_px(t){return t+"px"}_bindEvents(){this._expander.init(),this._trigger.addEventListener("globalExpander:open",t=>{t.preventDefault(),this._isOpen||(requestAnimationFrame(()=>{this._positionPopup(),this._content.focus()}),window.addEventListener("resize",this._closeHandler))}),this._getCloseButton().addEventListener("click",t=>{t.preventDefault(),this._close()}),this._getCloseButton().addEventListener("keydown",t=>{"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||(t.preventDefault(),this._close(),this._trigger.focus())}),this._content.addEventListener("keydown",t=>{"Escape"===t.key&&(t.preventDefault(),this._close(),this._trigger.focus())})}_calcPositioning(){const t=document.documentElement.scrollTop,e=this._trigger.getClientRects(),n=0<e.length?e[0]:{top:0,left:0},i={top:n.top+t,left:n.left,right:5},s=i.left,o=this._content.querySelector("."+this._arrowClass),r=document.documentElement.clientWidth,a=this._options.PAGE_PADDING||32,l=i.top-this._content.offsetHeight-12,c=i.top-this._content.offsetHeight-12,u=i.top+n.height+12,d=i.left+this._content.offsetWidth-r+a;0<d&&(d>i.left?i.left=5:i.left-=d);let h,p=!1;if(1<n.length&&(p=!0,1024<r&&(i.left=n.left-this._content.offsetWidth/2+20)),l<t?(h=u,o.classList.remove(this._arrowClass+"--above"),o.classList.add(this._arrowClass+"--below")):(h=c,o.classList.remove(this._arrowClass+"--below"),o.classList.add(this._arrowClass+"--above")),r<768)o.style.left=this._px(s+5);else if(p){const t=Math.round(i.left+this._content.offsetWidth-n.left-20);o.style.left=this._px(Math.round(this._content.offsetWidth-t))}else o.style.left=this._px(Math.max(Math.round(n.width/2-10)+(0<d?d:0),5));return{left:r<768?5:i.left,top:h,right:5}}}}),x=(function(t){const{Popup:c}=S;t.exports=function(){return{create:function(u,t){var d,h;(t=t||{}).etal&&function(t,e){var n=u.querySelectorAll("li"),i=n.length,s=function(t){return i>t&&!(i===t+1&&n[t].classList.contains("c-article-author-institutional-author__author-name"))},o=function(){var t=u.closest("div"),e=t?t.querySelector("h3[itemprop]"):null;return e?e.textContent:"this article"},r=function(t,e,n){var i=document.createElement("li");i.className=t;var s=document.createElement("a");return s.className="js-etal",s.setAttribute("href","javascript:;"),s.setAttribute("aria-label",e),s.setAttribute("title",e),s.innerHTML=n,i.appendChild(s),i};d=s(e);var a="";(h=s(t))&&!d&&(a="u-js-hide js-small-screen-show-inline");var l=r("c-article-author-list__show-less u-js-hide","Show fewer authors for "+o(),"-Show fewer authors"),c=r("c-article-author-list__show-more "+a,"Show all "+i+" authors for "+o(),"[&hellip;]");(d||h)&&(u.classList.add("js-etal-collapsed"),n[i-2].parentNode.insertBefore(c,n[i-2]),u.appendChild(l),Array.prototype.slice.call(n,2,i-1).forEach(function(t){d&&t.classList.add("js-author-etal"),h&&t.classList.add("js-smaller-author-etal")}))}(t.etalSmallscreen||t.etal,t.etal),u.classList.add("js-no-scroll"),Array.prototype.slice.call(u.querySelectorAll("sup > a"),0).forEach(function(t){t.setAttribute("tabIndex","-1")});var o={};u.addEventListener("click",function(t){var e,n,i=t.target.closest("a");if(i&&i.classList.contains("js-etal"))e=u.querySelectorAll("li"),n=e.length,u.classList.contains("js-etal-collapsed")?(u.classList.add("js-authors-expanded"),u.classList.remove("js-etal-collapsed"),d?(e[n-4].classList.add("u-js-hide"),e[n-1].classList.remove("u-js-hide")):h&&(e[n-4].classList.remove("js-small-screen-show-inline"),e[n-1].classList.add("js-small-screen-show-inline")),e[2].querySelector("a").focus()):(u.classList.add("js-etal-collapsed"),u.classList.remove("js-authors-expanded"),d?e[n-4].classList.remove("u-js-hide"):h&&(e[n-4].classList.add("js-small-screen-show-inline"),e[n-1].classList.remove("js-small-screen-show-inline")),e[n-1].classList.add("u-js-hide"),u.querySelector(".c-article-author-list__show-more > a").focus());else if(i){var s=i.getAttribute("data-author-popup");s&&!o[s]&&(o[s]=1,function(t){var e,n,i=function(t){var e=t.querySelector("a.js-orcid"),n="";return e&&(n='<a class="c-article-orcid" href="'+e.getAttribute("href")+'" target="_blank" rel="noopener"><span class="c-article-orcid__text">View ORCID ID profile</span></a>'),n},s=t.getAttribute("data-author-popup"),o=t.closest("li"),r=t.cloneNode(!0);(n=(e=r)&&e.querySelector("svg"))&&e.removeChild(n);var a='<div tabindex="0" id="popup-'+s+'" class="c-popup c-author-popup u-font-family-serif u-js-hide"><section>';a+=function(t,e){var n=t.innerHTML;return'<h3 id="author-'+s+'" class="c-author-popup__subheading">'+n+"</h3>"+i(e)}(r,o),s.match(/^group/)?a+=function(t){var e=document.querySelector("#"+t);if(e){var n=e.cloneNode(!0),i=n.querySelector("h3"),s=n.querySelector("ul");return s&&s.classList.add("c-article-author-institutional-author__author-list--popup"),i&&i.parentNode.removeChild(i),n.innerHTML.replace(/[\r\n]/g,"")}return""}(s):(a+=function(t,e){var n=t.getAttribute("data-corresp-id"),i=n?document.querySelector("#corresp-"+n):null,s=[],o=[],r=[],a=function(t){return t.replace(/<(div|p)[^>]*>/g,"<span>").replace(/<\/(div|p)>/g,"</span>")};return Array.prototype.slice.call(e.querySelectorAll("sup > a"),0).forEach(function(t){var e;(e=t.nextElementSibling)&&"true"===e.getAttribute("data-present-affiliation")||s.push(t.hash)}),s.forEach(function(t){var e=document.querySelector(t);if(e){var n=e.querySelector(".c-article-author-affiliation__address"),i=e.getAttribute("id");if(null!==n&&r.push(a(n.innerHTML)),null!==i&&i.indexOf("n")>-1){var s=e.querySelector(".js-present-address");s?o.push(a(s.innerHTML)):o.push(a(e.innerHTML))}}}),r=o.concat(r),i&&r.push('<a href="'+i.getAttribute("href")+'" class="c-author-popup__link" rel="nofollow">Contact '+t.innerHTML+"</a>"),r.length>0?'<ul class="c-author-popup__author-list"><li>'+r.join("</li><li>")+"</li></ul>":""}(r,o),a+=function(t){var e=document.querySelector("#"+t);if(e){var n=e.cloneNode(!0),i=n.querySelector(".js-search-name");return i&&i.parentNode.removeChild(i),n.innerHTML}return""}(s)),a+="</section></div>";var l=document.createElement("div");l.innerHTML=a,document.body.appendChild(l.firstChild),new c(t,"popup-"+s,{MAX_WIDTH:"650px",MIN_WIDTH:"300px"}).open()}(i))}})}}}}(t={exports:{}}),t.exports);window.loader.register(()=>{var t;_(),function({selector:t="[data-component-authors-activator]",options:s={etal:3,etalSmall:null}}={}){t=document.querySelectorAll(t);if(0!==t.length){const o=new x;Array.prototype.slice.call(t,0).forEach(t=>{const e=parseInt(t.getAttribute("data-etal"),10)||s.etal,n=parseInt(t.getAttribute("data-etal-small"),10)||s.etalSmall,i={etal:e};n&&(i.etalSmallscreen=n),o.create(t,i)})}}(),e(),window.eligibleForRa21&&window.idpVerifyPrefix&&window.ra21Host&&function({desktop:t=["#entitlement-box-desktop"],mobile:e="#entitlement-box-mobile",mediaQuery:n="1023px"}){var o=t,r=e,i=function(){seamlessAccess&&Object.prototype.hasOwnProperty.call(seamlessAccess,"lastUsedInstitution")&&seamlessAccess.lastUsedInstitution(u)}.bind(this),s=new A,a=null,l={isEligibleForRa21:y,isAccessDenied:v,isLastUsedInstitutionValid:E},c=window.matchMedia(`(max-width: ${n})`);function u(n){var i;a=n&&l.isLastUsedInstitutionValid(n)?{strategy:"unknown",options:{text:"Access this article via <strong>"+n.name+"</strong>",buyButton:!1,changeInstitutionButton:!0,accessButtonEventHandler:function(t,e){e&&(i=e.getAttribute("href").match("[?&]redirect_uri=([^&#]*)")[1],seamlessAccess&&Object.prototype.hasOwnProperty.call(seamlessAccess,"loginWithLastSelected")&&seamlessAccess.loginWithLastSelected(n.entityId,i))}}}:{strategy:"unknown"},f(),h(a)}function d(t){var e=t.strategy,t=t.options||null;return s.create(e,t)}function h(i){var t=i.options||{},s=i.options||{};d({strategy:i.strategy,options:g.extendObject(t,{active:c.matches,selector:r})}),o.forEach(t=>{const e=document.querySelector(t);var n;e&&(n=e.getAttribute("data-unsubscribe-media-query-change"),d({strategy:i.strategy,options:g.extendObject(s,{active:"true"===n||!c.matches,selector:t})}))})}function p(t){l.isAccessDenied()||(a={strategy:"entitled"},f(),h(a))}function _(t,e){t.handleVisibility(t.options),(e=s.updateCurrentActive(e)).handleVisibility(e.options)}function m(){var n=s.getActiveEntitlementBox();n&&(c.matches&&n.options.selector!==r&&_(n,r),o.forEach(t=>{if(!c.matches&&n.options.selector!==t){const e=document.querySelector(t);e&&("true"===e.getAttribute("data-unsubscribe-media-query-change")||_(n,t))}}))}function f(){c.addListener(m)}w().init(function(t){l.isEligibleForRa21()&&(0<t.length?(a={strategy:l.isAccessDenied()?"unentitled":"entitled",options:{text:l.isAccessDenied()?"Access to this article via <strong>"+t[0]+"</strong>  is not available.":"You have full access to this article via <strong>"+t[0]+"</strong>"}},f(),h(a)):b().init(i,p))},p)}({desktop:"magazine mosaic"===(t=0<(t=dataLayer||[]).length&&t[0].page&&t[0].page.attributes?t[0].page.attributes.template:null)||"mosaic"===t&&!1===dataLayer[0].backHalfContent?["#entitlement-box-right-column","#entitlement-box-main-column-unentitled"]:["#entitlement-box-right-column"],mobile:"#entitlement-box-entitled-mobile"})})}();