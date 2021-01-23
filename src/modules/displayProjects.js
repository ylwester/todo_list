import {storageData} from "../libs/storageData";
import {projectsRestored} from "./pageload";

function displayProjects() {
    const projectsNamesWrap= document.getElementById('projects-names-wrap');

    const projectsArray = projectsRestored;

    clearProjectsList();

    projectsArray.forEach((value) => {
        console.log(value.getName());
        const uniqueData = value.getName().split(' ').join('-').toLowerCase();
        const projNameContainer = document.createElement('div');
        projNameContainer.classList.add('project-name');
        projNameContainer.setAttribute('id', uniqueData);
        const projName= document.createElement('h2');
        projName.textContent = value.getName();
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