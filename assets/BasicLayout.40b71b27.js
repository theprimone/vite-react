var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,l=(e,l)=>{for(var c in l||(l={}))a.call(l,c)&&n(e,c,l[c]);if(t)for(var c of t(l))r.call(l,c)&&n(e,c,l[c]);return e};import{r as c,D as o,E as s,u as m,H as i,I as u,q as d,J as p,K as E,x as v,Q as h,N as _,O as f}from"./vendor.82a814d9.js";import{L as g,G as b}from"./index.2407fd18.js";import{h as y,u as N}from"./index.c48877a7.js";var k="_container_8z6xy_1";const x=e=>{var{overlayClassName:n}=e,m=((e,n)=>{var l={};for(var c in e)a.call(e,c)&&n.indexOf(c)<0&&(l[c]=e[c]);if(null!=e&&t)for(var c of t(e))n.indexOf(c)<0&&r.call(e,c)&&(l[c]=e[c]);return l})(e,["overlayClassName"]);return c.createElement(o,l({overlayClassName:s(k,n)},m))};var O={menu:"_menu_1c6t3_1",right:"_right_1c6t3_7",action:"_action_1c6t3_14",search:"_search_1c6t3_31",account:"_account_1c6t3_37",avatar:"_avatar_1c6t3_37",dark:"_dark_1c6t3_43"};const j=({menu:e})=>{const{dispatch:a}=m("login"),{state:t}=m("me"),r=c.createElement(u,{className:O.menu,selectedKeys:[],onClick:e=>{const{key:t}=e;"logout"!==t?y.push(`/account/${t}`):null==a||a("logout")}},e&&c.createElement(u.Item,{key:"center"},c.createElement(d,null),"个人中心"),e&&c.createElement(u.Item,{key:"settings"},c.createElement(p,null),"个人设置"),e&&c.createElement(u.Divider,null),c.createElement(u.Item,{key:"logout"},c.createElement(E,null),"退出登录"));return c.createElement(x,{overlay:r},c.createElement("span",{className:`${O.action} ${O.account}`},c.createElement(i,{size:"small",className:O.avatar,src:t.avatar,alt:"avatar"}),c.createElement("span",{className:`${O.name} anticon`},t.name)))},C=()=>{let e=O.right;return c.createElement(v,{className:e},c.createElement("span",{className:O.action},c.createElement(h,null)),c.createElement(j,{menu:!0}))},I={navTheme:"light",layout:"side",contentWidth:"Fluid",fixedHeader:!0,fixSiderbar:!0,colorWeak:!1,title:"Vite React",iconfontUrl:""};export default e=>{const a=N();return c.createElement(_,l(l(l({logo:"https://github.com/vitjs/vit/raw/master/icons/logo.svg"},e),{onPageChange:()=>{"ok"!==localStorage.getItem("status")&&"/user/login"!==y.location.pathname&&y.push("/user/login")},onMenuHeaderClick:()=>y.push("/"),menuItemRender:(e,t)=>e.isUrl||!e.path||a.pathname===e.path?t:c.createElement(g,{to:e.path},t),rightContentRender:()=>c.createElement(C,null),breadcrumbRender:(e=[])=>[{path:"/",breadcrumbName:c.createElement(f,null)},...e],itemRender:(e,a,t,r)=>0===t.indexOf(e)?c.createElement(g,{to:r.join("/")},e.breadcrumbName):c.createElement("span",null,e.breadcrumbName),footerRender:()=>c.createElement(b,null)}),I))};
