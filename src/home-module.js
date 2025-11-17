// home.js

import kafeImg from './assets/kafeSerefe.png';

function renderHome(){
    
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const sectionHome = document.createElement('section');
    sectionHome.classList.add("home");

    const homeH1 = document.createElement('h1');
    homeH1.textContent = "Kafe Serefe";
    homeH1.classList.add('home-text');
    sectionHome.appendChild(homeH1);

    const homeDiv = document.createElement('div');
    sectionHome.appendChild(homeDiv);
    
    const homeImg = document.createElement('img');
    homeImg.src = kafeImg; // use imported url
    homeImg.alt="Kafe Serefe Image";
    homeImg.style.width = "580px";
    homeImg.style.height = "400px";
    sectionHome.appendChild(homeImg);
    
    const homeP = document.createElement('p');
    homeP.textContent = "Welcome to Kafe Serefe enjoy our special Turkish cuisine, coffee and delightful desserts in a cozy atmosphere.";
    sectionHome.appendChild(homeP);
    
    content.appendChild(sectionHome);         
}

export {renderHome};