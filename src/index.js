// const { default: home } = require("./home");
// const {default: tabs } = require("./tabs");
// const {default: menu } = require("./menu");


import loadTabs from './tabs';
import createHomepageContent from './home';
import createMenuContent from './menu';

// const tabs = document.querySelectorAll("[data-tab-target]");
// const tabContents = document.querySelectorAll("[data-tab-content");

// tabs.forEach((tab) => 
//     tab.addEventListener('click',() => {
//         const target = document.querySelector(tab.dataset.tabTarget);
//         tabContents.forEach((tabContent) => {
//             tabContent.classList.remove("active");
//         });
//         tabs.forEach((tab)=> {
//             tab.classList.remove("is-active");
//         });
//         tab.classList.add("is-active");
//         target.classList.add("active");
//     }
//     )
// )

const burger = document.querySelector(".hamburger");

//Hamburger menu
burger.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("active");
  burger.classList.toggle("toggle");
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
// const tabContentContainer = document.querySelector('#tabs-content');

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    // const target = document.querySelector(tab.dataset.tabTarget);
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    tab.classList.add("is-active");
    // target.classList.add("active");
  })
);