const portfolioApp = {};

portfolioApp.tabletMediaQuery = window.matchMedia('(max-width: 768px)');

portfolioApp.init = () => {
    portfolioApp.toggleTabs();
    portfolioApp.landingPageContact();
    portfolioApp.attachNewOffsiteLinks(portfolioApp.tabletMediaQuery);
}

// Credit to the FRONTRU - Web Tutorials video on Youtube "Simple Tabs using HTML, CSS & JavaScript" for the easy to follow logic used in the tab method below. Link: https://youtu.be/3d8AwNea4lM

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

// portfolioApp.attachNewOffsiteLinks = () => {
//     // Define media query
//     portfolioApp.tabletMediaQuery.addEventListener("change", () => {
//         const newGithubDiv = document.createElement('div');
//         const newLinkedInDiv = document.createElement('div');
//         const offsiteLinkAnchors = document.querySelectorAll('.offsite-link');
//         const landingPage = document.querySelector('.landing')
//         console.log(offsiteLinkAnchors);
//         console.log(offsiteLinkAnchors[0]);
//         // offsiteLinkAnchors.forEach((anchor) => {
//         //     console.log(anchor);
//         //     newLinkedInDiv.innerHTML = anchor[0].innerHTML;
//         //     newGithubDiv.innerHTML = anchor[1].innerHTML;
//         //     console.log(newLinkedInDiv, newGithubDiv);
//         //     // landingPage.append(newDiv);
//         // })
//         // newDiv.append(offsiteLinkAnchors);
//     })
// }

portfolioApp.init();