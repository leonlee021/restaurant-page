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

const tabs = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".page");
// const tabContentContainer = document.querySelector('#tabs-content');

tabs.forEach((tab, index) => 
    tab.addEventListener('click',() => {
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("is-active");
      })
        // const target = document.querySelector(tab.datset.tabTarget);
        // tabContents.forEach((tabContent) => {
        //     tabContent.classList.remove("is-active");
        //     tabContent.ariaHidden = "true";
        // });
        tabs.forEach((tab)=> {
            tab.classList.remove("is-active");
            // tab.ariaSelected = "false";
        });
        tabs[index].classList.add("is-active");
        tabContents[index].classList.add("is-active");
        
        // target.ariaHidden = "false";
        // target.classList.add("is-active");
        // tab.ariaSelected = "true";
    }
    )
)