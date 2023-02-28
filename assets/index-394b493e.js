(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const r of u.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function c(o){if(o.ep)return;o.ep=!0;const u=e(o);fetch(o.href,u)}})();function p(n,t){let e=[];return e.push(n),e.push(t),e.push(n*t),e.push(n+t-n*t),e.push(n+t-2*n*t),e.push(1-n*t),e.push(n*(1-t)),e.push(t*(1-n)),e=d(e),e}function f(n,t,e){let c=[];return c.push(m(n,t,e)),c.push(h(n,t,e)),c=d(c),c}function h(n,t,e){let c=[];for(;t<=e;)c.push(m(n,t,e)),t+=1;return c.reduce((u,r)=>u+r,0)}function d(n){let t=[];return n.forEach(e=>{e=e*100;const c=e.toFixed(3);t.push(Number(c))}),t}function m(n,t,e){const c=i(e)/(i(t)*i(e-t)),o=Math.pow(n,t)*Math.pow(1-n,e-t);return c*o}function i(n){return n===0||n===1?1:n*i(n-1)}function a(){const n=document.getElementById("chanceForOutput"),t=document.getElementById("InputEventA"),e=document.getElementById("InputEventB"),c=Number(t.value),o=Number(e.value);let u;u=p(c,o),n.innerHTML=`
    A occur: ${u[0]}%<br>
    B occur: ${u[1]}%<br>
    Both A and B occurs: ${u[2]}%<br>
    A, B or both occurs: ${u[3]}%<br>
    A or B occurs, but not both: ${u[4]}%<br>
    Neither occurs: ${u[5]}%<br>
    A occurs, but not B: ${u[6]}%<br>
    B occurs, but not A: ${u[7]}%<br>
    `}function l(){const n=document.getElementById("binomialOutput"),t=document.getElementById("inputChance"),e=document.getElementById("inputGoal"),c=document.getElementById("inputOccurances"),o=Number(t.value),u=Number(e.value),r=Number(c.value);let s;s=f(o,u,r),n.innerHTML=`
    Chance of it occuring exactly ${u} times: ${s[0]}%<br>
    Chance of it occuring ${u} times or more: ${s[1]}%
    `}function v(){const n=document.getElementById("InputEventA"),t=document.getElementById("InputEventB");n.addEventListener("change",a),t.addEventListener("change",a);const e=document.getElementById("inputChance"),c=document.getElementById("inputGoal"),o=document.getElementById("inputOccurances");e.addEventListener("change",l),c.addEventListener("change",l),o.addEventListener("change",l)}v();
