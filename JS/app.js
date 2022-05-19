console.log('javaScript connected properly');
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


// Defining Global Variables
const navbarMenu = document.querySelector('.navbar_menu');
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Building the Navbar and link properly to their respective sections

const buildNav = () => {
    sections.forEach(section => {   
        const newElement = document.createElement('li');
        const sectionId = section.id;
        const sectionData = section.dataset.nav
        newElement.innerHTML = `<li><a class='menu__link' href='#${sectionId}'>${sectionData}</a></li>`;
        navbarList.appendChild(newElement);
        
    })
}
buildNav();

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
