const portfolioApp = {};

portfolioApp.init = () => {
    portfolioApp.toggleTabs();
    // portfolioApp.toggleSrOnly();
}

// Credit to the FRONTRU - Web Tutorials video on Youtube "Simple Tabs using HTML, CSS & JavaScript" for the easy to follow logic used in the tab method below. Link: https://youtu.be/3d8AwNea4lM 

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

// portfolioApp.toggleSrOnly = () => {
//     const offsiteLinks = document.querySelectorAll('.offsite-link');
//     // console.log(offsiteLinks);
//     offsiteLinks.forEach((link) => {
//         link.addEventListener('mouseenter', (event) => {
//             const srOnlyParagraph = event.target.firstElementChild.children[1];
//             srOnlyParagraph.classList.remove('sr-only');
//         })
//         link.addEventListener('mouseout', (event) => {
//             const srOnlyParagraph = event.originalTarget.children[1];
//             srOnlyParagraph.classList.add('sr-only');
//         })
//     })
// }

//TODO: I suspect that in order to get the landing page button to connect to the contact me tab, it will need its own function
    // attach event listener to the button
    // on click, removes is-active class from all tab content and buttons
    // then applies the class specifically to the contact me button and content - maybe use ID for this after all

portfolioApp.init();