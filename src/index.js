// index.js

import { renderHome } from "./home-module.js";
import { renderMenu } from "./menu-module.js";
import { renderAbout } from "./about-module.js";
import './style.css';
import kafeImg from './assets/kafeSerefe.png';

const tab_1 = document.querySelector('.tab-1');
const tab_2 = document.querySelector('.tab-2');
const tab_3 = document.querySelector('.tab-3');

tab_1.style.backgroundColor = '#6ed86e';
tab_2.style.backgroundColor = '#ccffcc';
tab_3.style.backgroundColor = '#ccffcc';

tab_1.addEventListener('click', () => {
    console.log('tab-1 clicked');
    tab_1.style.backgroundColor = '#6ed86e';
    tab_2.style.backgroundColor = '#ccffcc';
    tab_3.style.backgroundColor = '#ccffcc';
    renderHome();
});

tab_2.addEventListener('click', () => {
    console.log('tab-2 clicked');
    tab_2.style.backgroundColor = '#6ed86e';
    tab_1.style.backgroundColor = '#ccffcc';
    tab_3.style.backgroundColor = '#ccffcc';
    renderMenu();
});

tab_3.addEventListener('click', () => {
    console.log('tab-3 clicked');
    tab_3.style.backgroundColor = '#6ed86e';
    tab_1.style.backgroundColor = '#ccffcc';
    tab_2.style.backgroundColor = '#ccffcc';
    renderAbout();
});

document.getElementById("defaultOpen").click();

