import {storageData} from "../libs/storageData";

function displayProjects() {
    const projectsNamesWrap= document.getElementById('projects-names-wrap');

    const projectsArray = storageData().getProjectsArray();

    clearProjectsList();

    projectsArray.forEach((value) => {
        const uniqueData = value.name.split(' ').join('-').toLowerCase();
        const projNameContainer = document.createElement('div');
        projNameContainer.classList.add('project-name');
        projNameContainer.setAttribute('id', uniqueData);
        const projName= document.createElement('h2');
        projName.textContent = value.name;
        projNameContainer.appendChild(projName);
        projectsNamesWrap.appendChild(projNameContainer);
    })

}

function clearProjectsList() {
    const projectsNamesWrap = document.getElementById('projects-names-wrap');
    while(projectsNamesWrap.hasChildNodes()) {
        projectsNamesWrap.removeChild(projectsNamesWrap.firstChild);
    }
}



export {
    displayProjects,
}