// index.js

import { renderHome } from "./home-module.js";
import { renderMenu } from "./menu-module.js";
import { renderAbout } from "./about-module.js";

// Get references to main application elements
// (buttons and content container)
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

// --- Button Event Listeners Logic ---
// Logic to handle button clicks and render appropriate modules

homeBtn.addEventListener('click', () => {
    renderHome();
});

menuBtn.addEventListener('click', () => {
    renderMenu();
});

aboutBtn.addEventListener('click', () => {
    renderAbout();
});

// -----------------------------------------------
// Final step: call the home tab function to set default view
// -----------------------------------------------
renderHome(); // Display home content by default
homeBtn.classList.add('active'); // Set home button to active

/**
 * Explanation: when browser loads
 * 
 * 1. It executes index.js from top to bottom.
 * 2. It imports the render functions from three moduels.
 * 3. Modules are home-module.js, menu-module.js, about-module.js.
 * 4. It sets up event listeners for the buttons.
 * 5. Finally, it calls renderHome() to display the home content by default.
 * 6. The home button is marked as active.
 * 
 */