(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();window.addEventListener("DOMContentLoaded",l=>{const n=document.querySelector(".head-btn-menu-open");n&&n.addEventListener("click",i,!1);const o=document.querySelector(".head-btn-menu-close");o&&o.addEventListener("click",c,!1),document.querySelectorAll(".head-menu-link").forEach(e=>e.addEventListener("click",t=>{c()}))});function i(){document.getElementById("menu-block").classList.remove("is-close"),document.getElementById("menu-block").classList.add("is-open")}function c(){document.getElementById("menu-block").classList.remove("is-open"),document.getElementById("menu-block").classList.add("is-close")}
