import {storageData} from "../libs/storageData";

function displayProjects() {
    const projectsArray = storageData().getProjectsArray();

    const navContainer = document.createElement('div');
    navContainer.setAttribute('id', 'projects-container');

    const projectHeader = document.createElement('div');
    projectHeader.setAttribute('id', 'projects-header')
    const headerText = document.createElement('h1');
    headerText.textContent = "Projects";

    projectHeader.appendChild(headerText);
    navContainer.appendChild(projectHeader);

    projectsArray.forEach((value) => {
        const projNameContainer = document.createElement('div');
        projNameContainer.classList.add('project-name');
        const projName= document.createElement('h2');
        projName.textContent = value.name;
        projNameContainer.appendChild(projName);
        navContainer.appendChild(projNameContainer);
    })

    return navContainer;

}


export {
    displayProjects,
}