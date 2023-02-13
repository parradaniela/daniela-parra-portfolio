import { projectsArray } from "./projectsArray.js";

//Creates and populates div/anchor HTML elements
const createProjectLinks = (project, listElement) => {
    const projectLinksDiv = document.createElement('div');
    const liveURL = document.createElement('a');
    const repoURL = document.createElement('a');
    const linksArray = [];
    projectLinksDiv.classList.add("project-links");
    linksArray.push(liveURL, repoURL);
    linksArray.forEach((anchor, index) => {
        anchor.classList.add("btn");
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer")
        if (index === 0) {
            anchor.setAttribute("href", `${project.liveURL}`);
            anchor.textContent = "Live";
        } else if (index === 1) {
            anchor.setAttribute("href", `${project.repoURL}`);
            anchor.textContent = "Code"
        }
        projectLinksDiv.append(anchor)
    })
    createProjectDetails(project, projectLinksDiv, listElement);
}

const createProjectDetails = (project, projectLinksDiv, listElement) => {
    const projectDetailsDiv = document.createElement('div');
    const heading = document.createElement('h3');
    const technology = document.createElement('p');
    const description = document.createElement('p');
    projectDetailsDiv.classList.add("project-details");
    technology.classList.add("light");
    heading.textContent = `${project.heading}`;
    technology.textContent = `${project.tech}`;
    //Using innerHTML below to account for some project descriptions that include links to other websites
    description.innerHTML = `${project.desc}`;
    projectDetailsDiv.append(heading, technology, projectLinksDiv, description)
    listElement.append(projectDetailsDiv);
}

const createProjectDisplay = (project, listElement) => {
    const projectDisplayDiv = document.createElement('div');
    const image = document.createElement('img');
    projectDisplayDiv.classList.add('project-display');
    image.setAttribute("src", `${project.image}`);
    image.setAttribute("alt", `Thumbnail of ${project.heading} live site`)
    projectDisplayDiv.append(image);
        if (project.inProgress) {
            const inProgressSticker = document.createElement('span');
            inProgressSticker.textContent = "Work in Progress!";
            projectDisplayDiv.append(inProgressSticker);
        }
    listElement.append(projectDisplayDiv);
}

export function populateCarousel() {
    const projectsUL = document.querySelector('.projects-list');
    projectsArray.forEach((project, index) => {
        const listElement = document.createElement('li');
        listElement.classList.add('projects-list-item');
        if (index === 0) {
            listElement.setAttribute("data-active", true);
        }
        createProjectDisplay(project, listElement);
        createProjectLinks(project, listElement);
        projectsUL.append(listElement);
    })
}