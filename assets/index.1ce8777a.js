import{_ as e,c as t,r,R as n,a as i,b as o,d as a,e as u,i as c,f,m as l,I as s,C as p,g as y}from"./index.84584f67.js";import{L as d,H as h,F as v,C as m,S as g}from"./Sider.1d29203f.js";import"./index.cea0b4bd.js";r.Component,r.Component;var b=function(e,t){return"function"==typeof e?e(t):e},w=function(e,t){return"string"==typeof e?f(e,null,null,t):e},O=function(e){return e},E=r.forwardRef;void 0===E&&(E=O);var A=E((function(e,t){var n=e.innerRef,i=e.navigate,u=e.onClick,c=o(e,["innerRef","navigate","onClick"]),f=c.target,l=a({},c,{onClick:function(e){try{u&&u(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||f&&"_self"!==f||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),i())}});return l.ref=O!==E&&t||n,r.createElement("a",l)})),x=E((function(e,t){var n=e.component,i=void 0===n?A:n,f=e.replace,l=e.to,s=e.innerRef,p=o(e,["component","replace","to","innerRef"]);return r.createElement(u.Consumer,null,(function(e){e||c(!1);var n=e.history,o=w(b(l,e.location),e.location),u=o?n.createHref(o):"",y=a({},p,{href:u,navigate:function(){var t=b(l,e.location);(f?n.replace:n.push)(t)}});return O!==E?y.ref=t||s:y.innerRef=s,r.createElement(i,y)}))})),j=function(e){return e},S=r.forwardRef;void 0===S&&(S=j),S((function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,f=e.activeClassName,s=void 0===f?"active":f,p=e.activeStyle,y=e.className,d=e.exact,h=e.isActive,v=e.location,m=e.sensitive,g=e.strict,O=e.style,E=e.to,A=e.innerRef,C=o(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.createElement(u.Consumer,null,(function(e){e||c(!1);var n=v||e.location,o=w(b(E,n),n),u=o.pathname,f=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=f?l(n.pathname,{path:f,exact:d,sensitive:m,strict:g}):null,P=!!(h?h(R,n):R),k=P?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(y,s):y,M=P?a({},O,{},p):O,T=a({"aria-current":P&&i||null,className:k,style:M,to:o},C);return j!==S?T.ref=t||A:T.innerRef=A,r.createElement(x,T)}))}));var C=d;C.Header=h,C.Footer=v,C.Content=m,C.Sider=g;var R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright",theme:"outlined"},P=function(e,t){return r.createElement(s,Object.assign({},e,{ref:t,icon:R}))};P.displayName="CopyrightOutlined";var k=r.forwardRef(P),M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},T=function(e,t){return r.createElement(s,Object.assign({},e,{ref:t,icon:M}))};T.displayName="GithubOutlined";var D=r.forwardRef(T),N=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,i,o;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(i of t.entries())if(!r.has(i[0]))return!1;for(i of t.entries())if(!e(i[1],r.get(i[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(i of t.entries())if(!r.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(t[i]!==r[i])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;0!=i--;){var a=o[i];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r};function I(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function _(e,t){var r;void 0===t&&(t=I);var n,i=[],o=!1;return function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return o&&r===this&&t(a,i)||(n=e.apply(this,a),o=!0,r=this,i=a),n}}function $(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var i=1,o="";if("?"===e[u=r+1])throw new TypeError('Pattern cannot start with "?" at '+u);for(;u<e.length;)if("\\"!==e[u]){if(")"===e[u]){if(0==--i){u++;break}}else if("("===e[u]&&(i++,"?"!==e[u+1]))throw new TypeError("Capturing groups are not allowed at "+u);o+=e[u++]}else o+=e[u++]+e[u++];if(i)throw new TypeError("Unbalanced pattern at "+r);if(!o)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:o}),r=u}else{for(var a="",u=r+1;u<e.length;){var c=e.charCodeAt(u);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;a+=e[u++]}if(!a)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:a}),r=u}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,o="[^"+F(t.delimiter||"/#?")+"]+?",a=[],u=0,c=0,f="",l=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},s=function(e){var t=l(e);if(void 0!==t)return t;var n=r[c],i=n.type,o=n.index;throw new TypeError("Unexpected "+i+" at "+o+", expected "+e)},p=function(){for(var e,t="";e=l("CHAR")||l("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var y=l("CHAR"),d=l("NAME"),h=l("PATTERN");if(d||h){var v=y||"";-1===i.indexOf(v)&&(f+=v,v=""),f&&(a.push(f),f=""),a.push({name:d||u++,prefix:v,suffix:"",pattern:h||o,modifier:l("MODIFIER")||""})}else{var m=y||l("ESCAPED_CHAR");if(m)f+=m;else if(f&&(a.push(f),f=""),l("OPEN")){v=p();var g=l("NAME")||"",b=l("PATTERN")||"",w=p();s("CLOSE"),a.push({name:g||(b?u++:""),pattern:g&&!b?o:b,prefix:v,suffix:w,modifier:l("MODIFIER")||""})}else s("END")}}return a}function F(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function H(e){return e&&e.sensitive?"":"i"}function z(e,t,r){return function(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,o=r.start,a=void 0===o||o,u=r.end,c=void 0===u||u,f=r.encode,l=void 0===f?function(e){return e}:f,s="["+F(r.endsWith||"")+"]|$",p="["+F(r.delimiter||"/#?")+"]",y=a?"^":"",d=0,h=e;d<h.length;d++){var v=h[d];if("string"==typeof v)y+=F(l(v));else{var m=F(l(v.prefix)),g=F(l(v.suffix));if(v.pattern)if(t&&t.push(v),m||g)if("+"===v.modifier||"*"===v.modifier){var b="*"===v.modifier?"?":"";y+="(?:"+m+"((?:"+v.pattern+")(?:"+g+m+"(?:"+v.pattern+"))*)"+g+")"+b}else y+="(?:"+m+"("+v.pattern+")"+g+")"+v.modifier;else y+="("+v.pattern+")"+v.modifier;else y+="(?:"+m+g+")"+v.modifier}}if(c)i||(y+=p+"?"),y+=r.endsWith?"(?="+s+")":"$";else{var w=e[e.length-1],O="string"==typeof w?p.indexOf(w[w.length-1])>-1:void 0===w;i||(y+="(?:"+p+"(?="+s+"))?"),O||(y+="(?="+p+"|"+s+")")}return new RegExp(y,H(r))}($(e,r),t,r)}function K(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?function(e,t,r){var n=e.map((function(e){return K(e,t,r).source}));return new RegExp("(?:"+n.join("|")+")",H(r))}(e,t,r):z(e,t,r)}function U(e,t){return t>>>e|t<<32-e}function L(e,t,r){return e&t^~e&r}function W(e,t,r){return e&t^e&r^t&r}function B(e){return U(2,e)^U(13,e)^U(22,e)}function G(e,t){return e[15&t]+=(U(17,r=e[t+14&15])^U(19,r)^r>>>10)+e[t+9&15]+function(e){return U(7,e)^U(18,e)^e>>>3}(e[t+1&15]);var r}var V,J,Y,q=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Q(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function X(){var e,t,r,n,i,o,a,u,c,f,l,s=new Array(16);e=V[0],t=V[1],r=V[2],n=V[3],i=V[4],o=V[5],a=V[6],u=V[7];for(var p=0;p<16;p++)s[p]=Y[3+(p<<2)]|Y[2+(p<<2)]<<8|Y[1+(p<<2)]<<16|Y[p<<2]<<24;for(var y=0;y<64;y++)c=u+(U(6,l=i)^U(11,l)^U(25,l))+L(i,o,a)+q[y],c+=y<16?s[y]:G(s,y),f=B(e)+W(e,t,r),u=a,a=o,o=i,i=Q(n,c),n=r,r=t,t=e,e=Q(c,f);V[0]+=e,V[1]+=t,V[2]+=r,V[3]+=n,V[4]+=i,V[5]+=o,V[6]+=a,V[7]+=u}function Z(e){return V=new Array(8),J=new Array(2),Y=new Array(64),J[0]=J[1]=0,V[0]=1779033703,V[1]=3144134277,V[2]=1013904242,V[3]=2773480762,V[4]=1359893119,V[5]=2600822924,V[6]=528734635,V[7]=1541459225,function(e,t){var r,n,i=0;n=J[0]>>3&63;var o=63&t;for((J[0]+=t<<3)<t<<3&&J[1]++,J[1]+=t>>29,r=0;r+63<t;r+=64){for(var a=n;a<64;a++)Y[a]=e.charCodeAt(i++);X(),n=0}for(var u=0;u<o;u++)Y[u]=e.charCodeAt(i++)}(e,e.length),function(){var e=J[0]>>3&63;if(Y[e++]=128,e<=56)for(var t=e;t<56;t++)Y[t]=0;else{for(var r=e;r<64;r++)Y[r]=0;X();for(var n=0;n<56;n++)Y[n]=0}Y[56]=J[1]>>>24&255,Y[57]=J[1]>>>16&255,Y[58]=J[1]>>>8&255,Y[59]=255&J[1],Y[60]=J[0]>>>24&255,Y[61]=J[0]>>>16&255,Y[62]=J[0]>>>8&255,Y[63]=255&J[0],X()}(),function(){for(var e=new String,t=0;t<8;t++)for(var r=28;r>=0;r-=4)e+="0123456789abcdef".charAt(V[t]>>>r&15);return e}()}function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||se(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ie(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){var t="function"==typeof Map?new Map:void 0;return(oe=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return ae(e,arguments,fe(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ce(n,e)})(e)}function ae(e,t,r){return(ae=ue()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&ce(i,r.prototype),i}).apply(null,arguments)}function ue(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e){return function(e){if(Array.isArray(e))return pe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){if(e){if("string"==typeof e)return pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?pe(e,t):void 0}}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ye(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){ve(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function me(e){return e.split("?")[0].split("#")[0]}var ge=function(e){if(!e.startsWith("http"))return!1;try{return!!new URL(e)}catch(t){return!1}},be=function(e){var t=e.path;if(!t||"/"===t)try{return"/".concat(Z(JSON.stringify(e)))}catch(r){}return t?me(t):t},we=function(e,t){var r=e.name,n=e.locale;return!("locale"in e&&!1===n||!r)&&(e.locale||"".concat(t,".").concat(r))},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";return(e||t).startsWith("/")||ge(e)?e:"/".concat(t,"/").concat(e).replace(/\/\//g,"/").replace(/\/\//g,"/")},Ee=function(e,t){var r=e.menu,n=void 0===r?{}:r,i=e.indexRoute,o=e.path,a=void 0===o?"":o,u=e.children,c=n.name,f=void 0===c?e.name:c,l=n.icon,s=void 0===l?e.icon:l,p=n.hideChildren,y=void 0===p?e.hideChildren:p,d=n.flatMenu,h=void 0===d?e.flatMenu:d,v=i&&"redirect"!==Object.keys(i).join(",")?[he({path:a,menu:n},i)].concat(u||[]):u,m=he({},e);if(f&&(m.name=f),s&&(m.icon=s),v&&v.length){if(y)return delete m.children,m;var g=Ae(he(he({},t),{},{data:v}),e);if(h)return g;m.children=g}return m};function Ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"},r=e.data,n=e.formatMessage,i=e.parentName,o=e.locale;return r&&Array.isArray(r)?r.filter((function(e){return!!e&&(!(!e.routes&&!e.children)||(!!e.path||(!!e.layout||(e.redirect,!1))))})).filter((function(e){var t,r;return e.unaccessible&&delete e.name,!!((null==e||null===(t=e.menu)||void 0===t?void 0:t.name)||(null==e?void 0:e.flatMenu)||(null==e||null===(r=e.menu)||void 0===r?void 0:r.flatMenu))||!1!==e.menu})).map((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:"/"},a=Oe(r.path,t?t.path:"/"),u=r.name,c=we(r,i||"menu"),f=!1!==c&&!1!==o&&n&&c?n({id:c,defaultMessage:u}):u,l=t.pro_layout_parentKeys,s=void 0===l?[]:l;t.children,t.icon,t.flatMenu,t.indexRoute;var p=ye(t,["pro_layout_parentKeys","children","icon","flatMenu","indexRoute"]),y=he(he(he({},p),{},{menu:void 0},r),{},{path:a,locale:c,key:r.key||be(he(he({},r),{},{path:a})),routes:null,pro_layout_parentKeys:Array.from(new Set([].concat(le(r.parentKeys||[]),le(s),["/".concat(t.key||"").replace(/\/\//g,"/").replace(/\/\//g,"/")]))).filter((function(e){return e&&"/"!==e}))});if(f?y.name=f:delete y.name,void 0===y.menu&&delete y.menu,r.routes||r.children){var d=Ae(he(he({},e),{},{data:r.routes||r.children,parentName:c||""}),y);y.children=d&&d.length>0?d:void 0,y.children||delete y.children}return Ee(y,e)})).flat(1):[]}var xe=_(Ae,N),je=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter((function(e){return e&&(e.name||e.children)&&!e.hideInMenu&&!e.redirect})).map((function(t){if(t.children&&Array.isArray(t.children)&&!t.hideChildrenInMenu&&t.children.some((function(e){return e&&!!e.name}))){var r=e(t.children);if(r.length)return he(he({},t),{},{children:r})}return he(he({},t),{},{children:void 0})})).filter((function(e){return e}))},Se=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(u,oe(Map));var t,r,n,i,o,a=(t=u,r=ue(),function(){var e,n=fe(t);if(r){var i=fe(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return ie(this,e)});function u(){return re(this,u),a.apply(this,arguments)}return n=u,(i=[{key:"get",value:function(e){var t;try{var r,n=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=se(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}(this.entries());try{for(n.s();!(r=n.n()).done;){var i=te(r.value,2),o=i[0],a=i[1],u=me(o);if(!ge(o)&&K(u,[]).test(e)){t=a;break}}}catch(c){n.e(c)}finally{n.f()}}catch(f){t=void 0}return t}}])&&ne(n.prototype,i),o&&ne(n,o),u}(),Ce=_((function(e){var t=new Se;return function e(r,n){r.forEach((function(r){r&&r.children&&e(r.children,r);var i=Oe(r.path,n?n.path:"/");t.set(me(i),r)}))}(e),t}),N),Re=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){if(t.children&&Array.isArray(t.children)&&t.children.length>0){var r=e(t.children);if(r.length)return he(he({},t),{},{children:r})}var n=he({},t);return delete n.children,n})).filter((function(e){return e}))},Pe=function(e,t,r,n){var i=xe({data:e,formatMessage:r,locale:t}),o=n?Re(i):je(i);return{breadcrumb:Ce(i),menuData:o}},ke=Ue,Me=_e,Te=function(e,t){return $e(_e(e,t))},De=$e,Ne=Ke,Ie=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function _e(e,t){for(var r,n=[],i=0,o=0,a="",u=t&&t.delimiter||"/",c=t&&t.delimiters||"./",f=!1;null!==(r=Ie.exec(e));){var l=r[0],s=r[1],p=r.index;if(a+=e.slice(o,p),o=p+l.length,s)a+=s[1],f=!0;else{var y="",d=e[o],h=r[2],v=r[3],m=r[4],g=r[5];if(!f&&a.length){var b=a.length-1;c.indexOf(a[b])>-1&&(y=a[b],a=a.slice(0,b))}a&&(n.push(a),a="",f=!1);var w=""!==y&&void 0!==d&&d!==y,O="+"===g||"*"===g,E="?"===g||"*"===g,A=y||u,x=v||m;n.push({name:h||i++,prefix:y,delimiter:A,optional:E,repeat:O,partial:w,pattern:x?He(x):"[^"+Fe(A)+"]+?"})}}return(a||o<e.length)&&n.push(a+e.substr(o)),n}function $e(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var i="",o=n&&n.encode||encodeURIComponent,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var c,f=r?r[u.name]:void 0;if(Array.isArray(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===f.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<f.length;l++){if(c=o(f[l],u),!t[a].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');i+=(0===l?u.prefix:u.delimiter)+c}}else if("string"!=typeof f&&"number"!=typeof f&&"boolean"!=typeof f){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(i+=u.prefix)}else{if(c=o(String(f),u),!t[a].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+c+'"');i+=u.prefix+c}}else i+=u}return i}}function Fe(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function He(e){return e.replace(/([=!:$/()])/g,"\\$1")}function ze(e){return e&&e.sensitive?"":"i"}function Ke(e,t,r){for(var n=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,a=Fe(r.delimiter||"/"),u=r.delimiters||"./",c=[].concat(r.endsWith||[]).map(Fe).concat("$").join("|"),f=i?"^":"",l=0===e.length,s=0;s<e.length;s++){var p=e[s];if("string"==typeof p)f+=Fe(p),l=s===e.length-1&&u.indexOf(p[p.length-1])>-1;else{var y=p.repeat?"(?:"+p.pattern+")(?:"+Fe(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?f+=Fe(p.prefix)+"("+y+")?":f+="(?:"+Fe(p.prefix)+"("+y+"))?":f+=Fe(p.prefix)+"("+y+")"}}return o?(n||(f+="(?:"+a+")?"),f+="$"===c?"$":"(?="+c+")"):(n||(f+="(?:"+a+"(?="+c+"))?"),l||(f+="(?="+a+"|"+c+")")),new RegExp(f,ze(r))}function Ue(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,r){for(var n=[],i=0;i<e.length;i++)n.push(Ue(e[i],t,r).source);return new RegExp("(?:"+n.join("|")+")",ze(r))}(e,t,r):function(e,t,r){return Ke(_e(e,r),t,r)}(e,t,r)}function Le(e){return function(e){if(Array.isArray(e))return We(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return We(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return We(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function We(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}ke.parse=Me,ke.compile=Te,ke.tokensToFunction=De,ke.tokensToRegExp=Ne;var Be=function(e,t){var r=e.pathname,n=void 0===r?"/":r,i=e.breadcrumb,o=e.breadcrumbMap,a=e.formatMessage,u=e.title,c=void 0===u?"Ant Design Pro":u,f=e.menu,l=void 0===f?{locale:!1}:f,s=t?"":c||"",p=function(e,t,r){if(r){var n=Le(r.keys()).find((function(t){return ke(t).test(e)}));if(n)return r.get(n)}if(t){var i=Object.keys(t).find((function(t){return ke(t).test(e)}));if(i)return t[i]}return{path:""}}(n,i,o);if(!p)return{title:s,id:"",pageName:s};var y=p.name;return!1!==l.locale&&p.locale&&a&&(y=a({id:p.locale||"",defaultMessage:p.name})),y?t||!c?{title:y,id:p.locale||"",pageName:y}:{title:"".concat(y," - ").concat(c),id:p.locale||"",pageName:y}:{title:s,id:p.locale||"",pageName:s}},Ge=function(e,t){return Be(e,t).title},Ve=function(e){var t=e.className,n=e.prefixCls,i=e.links,o=e.copyright,a=e.style,u=r.useContext(p.ConfigContext).getPrefixCls(n||"pro-global-footer");if((null==i||!1===i||Array.isArray(i)&&0===i.length)&&(null==o||!1===o))return null;var c=y(u,t);return r.createElement("div",{className:c,style:a},i&&r.createElement("div",{className:"".concat(u,"-links")},i.map((function(e){return r.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)}))),o&&r.createElement("div",{className:"".concat(u,"-copyright")},o))};function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(r),!0).forEach((function(t){qe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Qe=C.Footer,Xe=[{key:"Ant Design Pro",title:"Ant Design Pro",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:r.createElement(D,null),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}],Ze=function(e){var t=e.links,n=e.copyright,i=e.style,o=e.className,a=e.prefixCls;return r.createElement(Qe,{className:o,style:Ye({padding:0},i)},r.createElement(Ve,{links:void 0!==t?t:Xe,prefixCls:a,copyright:!1===n?null:r.createElement(r.Fragment,null,r.createElement(k,null)," ",n||"2019 蚂蚁金服体验技术部出品")}))};function et(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||rt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tt(e){return function(e){if(Array.isArray(e))return nt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||rt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(e,t){if(e){if("string"==typeof e)return nt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?nt(e,t):void 0}}function nt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function it(e){return tt(e).reduce((function(e,t){var r=et(t,2),n=r[0],i=r[1];return e[n]=i,e}),{})}var ot=function(e,t,r,n){var i=Pe(e,(null==t?void 0:t.locale)||!1,r,!0),o=i.menuData,a=i.breadcrumb;if(!n)return{breadcrumb:it(a),breadcrumbMap:a,menuData:o};var u=Pe(n(o),(null==t?void 0:t.locale)||!1,r,!0);return{breadcrumb:it(u.breadcrumb),breadcrumbMap:u.breadcrumb,menuData:u.menuData}};function at(){return r.createElement(Ze,{copyright:`${(new Date).getFullYear()} theprimone 出品`,links:[{key:"github",title:r.createElement(D,null),href:"https://github.com/theprimone/vite-react",blankTarget:!0}]})}export{Ze as F,at as G,x as L,Ge as a,C as b,ke as c,Be as d,ot as g,ge as i,K as p,me as s};