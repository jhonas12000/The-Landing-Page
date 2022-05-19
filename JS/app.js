console.log('javaScript connected properly');



// Defining Global Variables
const navbarMenu = document.querySelector('.navbar_menu');
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

//Building the Navbar and link properly to their respective sections
const buildNav = () => {
    sections.forEach(section => { 
        const sectionId = section.id;
        const sectionData = section.dataset.nav 
        //creating list  
        const newElement = document.createElement('li');
        //adding contents to the li list
        newElement.innerHTML = `<li><a class='menu__link' href='#${sectionId}'>${sectionData}</a></li>`;
        //attaching the list elements to the ul 
        navbarList.appendChild(newElement);
        
    })
}
buildNav();


// Add class 'active' to section when near top of viewport
function activeClass (section) {
    return Math.floor(section.getBoundingClientRect().top)
};

//removing the default active class 
function removeActiveClass (section) {
    
    const element = document.getElementsByClassName('your-active-class');
    for(let i = 0; i< element.length; i++)
    //keep the non active class its default color
    {
        element[i].style.backgroundColor = "transparent";
    }
    section.classList.remove('your-active-class');  
}

//adding active class whenever the pointer is in the respective section
function addActiveClass (active, section) {
    if(active) {
        section.classList.add('your-active-class')
    }
    
    const element = document.getElementsByClassName('your-active-class');
    //looping through all the sections
        for(let i = 0; i< element.length; i++)
        //change into the given color of the active class
        {
            element[i].style.backgroundColor = "gray";
        }
}

//impelemen adding and removing function
function implementation () {
    sections.forEach(section => {
        const viewContent = activeClass(section);

        viewSize = () => viewContent <= 300 && viewContent >= -300;

        removeActiveClass(section);
        addActiveClass(viewSize(), section);
        
    })
};
window.addEventListener('scroll', implementation);

