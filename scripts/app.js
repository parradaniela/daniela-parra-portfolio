import { populateCarousel } from "./populateCarousel.js";
const portfolioApp = {};

// With thanks to the FRONTRU - Web Tutorials video on Youtube "Simple Tabs using HTML, CSS & JavaScript" for the easy to follow logic used in the tab method below. Link: https://youtu.be/3d8AwNea4lM

// Method to handle all tab buttons in the header to toggle to the correct content section
portfolioApp.toggleTabs = () => {
    const tabButtons = document.querySelectorAll('.tabs-toggle');
    const tabContents = document.querySelectorAll('.tabs-body-content');
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // remove the is-active class from all tab buttons and content sections
            tabContents.forEach(contentSection => contentSection.classList.remove('is-active'));
            tabButtons.forEach(button => button.classList.remove('is-active'));
            // add the class back to whichever button was clicked and the corresponding content section
            tabContents[index].classList.add('is-active');
            tabButtons[index].classList.add('is-active');
        });
    });
}

// Method that makes the landing page contact buttont to toggle to the contact page
portfolioApp.landingPageContact = () => {
    // Grabs the landing page contact button, the toggle button in the navigation, and the contact section by their IDs
    const homeContactBtn = document.querySelector('#home-contact-btn');
    const contactToggle = document.querySelector('#contact-toggle')
    const contactSection = document.querySelector('#contact');
    homeContactBtn.addEventListener('click', () => {
        // Same as the toggleTabs method, removes the active class from all buttons and sections
        const tabButtons = document.querySelectorAll('.tabs-toggle');
        const tabContents = document.querySelectorAll('.tabs-body-content');
        tabButtons.forEach(button => button.classList.remove('is-active'));
        tabContents.forEach(contentSection => contentSection.classList.remove('is-active'));
        // This time, adds the active class specifically to the contact toggle and section
        contactToggle.classList.add('is-active');
        contactSection.classList.add('is-active');
    });
}

// Thanks to Web Dev Simplified's 'How to Create An Animated Image Carousel with CSS/JavaScript' tutorial for the code below: https://www.youtube.com/watch?v=9HcxHDS2w1s
portfolioApp.handleCarousel = () => {
    // Using data attributes to avoid using classes instead
    // Grabs the two carousel buttons to attach event listeners to them 
    const buttons = document.querySelectorAll('[data-carousel-button]')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Checks for the value assigned to the button and returns 1 or -1 depending on the button clicked
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            // Traverses the DOM up to the button's parent div, to its next sibling (the carousel), then to the UL inside it - setting it this way means that even if I add additional carousels later, everything will continue to work as expected
            const slides = button.parentElement.nextElementSibling.querySelector('[data-slides]')
            // Selects the active slide/li 
            const activeSlide = slides.querySelector('[data-active]')
            // Creates an array of all the children of the slides (the LIs), finds the index of the current active slide and adds the offset to it
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            // Accounting for clicking the previous button when on the first slide/LI
            if (newIndex < 0) {
                newIndex = slides.children.length - 1;
            // Accounting for clicking the next button when on the final slide/LI     
            } else if (newIndex >= slides.children.length) {
                newIndex = 0;
            }
            // Assigns the active data attribute to the new slide/LI
            slides.children[newIndex].dataset.active = true;
            // Removes the active data attribute from the previous slide/LI
            delete activeSlide.dataset.active
        })
    })
}

portfolioApp.clearForm = () => {
    const contactForm = document.querySelector('.form');
    window.onbeforeunload = () => {
        contactForm.reset();
    }
}

portfolioApp.init = () => {
    portfolioApp.toggleTabs();
    portfolioApp.landingPageContact();
    portfolioApp.clearForm();
    portfolioApp.handleCarousel();
    populateCarousel();
}

portfolioApp.init();