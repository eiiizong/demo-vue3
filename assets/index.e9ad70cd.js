import{d as u,r as d,c as f,o as m,a as _,E as p,b as v,e as g,f as y,g as h,i as $}from"./vendor.451427f4.js";const x=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};x();var l=(e,o)=>{for(const[s,n]of o)e[s]=n;return e};const b=u({});function L(e,o,s,n,t,r){const c=d("router-view");return m(),f(c)}var H=l(b,[["render",L]]);const P="https://api.github.com",i=_.create({baseURL:P,timeout:2e4});i.interceptors.request.use(e=>e,e=>Promise.reject(e));i.interceptors.response.use(e=>e,e=>{if(e.response&&e.response.data){const o=e.response.status,s=e.response.data.message;p.error(`Code: ${o}, Message: ${s}`)}else p.error(`${e}`);return Promise.reject(e)});const w=u({name:"yHome",setup(){i.get("/users/XPoet").then(e=>{console.warn("res: ",e)}).catch(e=>{console.error("err: ",e)})}});function A(e,o,s,n,t,r){return"home"}var O=l(w,[["render",A]]);const j=[{path:"/",component:O}],k=v({history:g(),routes:j}),C={count:0};var E=y({state(){return C},mutations:{increment(e){e.count+=1}},actions:{increment(e){e.commit("increment")}},getters:{double(e){return 2*e.count}}});const a=h(H);a.use(k);a.use(E);a.use($);a.mount("#app");