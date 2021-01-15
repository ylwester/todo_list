import {toDoContainer} from "./toDoContainer";
import {storageData} from "../libs/storageData";

function displayToDoContent() {
    toDoContainer();
    //Get header div
    const header = document.getElementById('project-header-todo');

    //Get header description div
    const headerDescription = document.getElementById('project-description-header');

    const selectAllProjects = document.querySelectorAll('.project-name');
    const projectsArray = storageData().getProjectsArray();



    displayFirstDefaultProject();


    console.log(projectsArray);
    selectAllProjects.forEach((item) => {
        item.addEventListener('click', () => {
            const nameParse = item.id.split('-').join(' ').toLowerCase();
            console.log(nameParse);
            const selectedProject = projectsArray.find(project => project.name.toLowerCase() === nameParse);
            header.textContent = selectedProject.name;
            headerDescription.textContent = selectedProject.description;

        })
    })
}

function displayFirstDefaultProject() {
    const header = document.getElementById('project-header-todo');
    const projectsArray = storageData().getProjectsArray();
    const activeProject = projectsArray[0];

    header.textContent = activeProject.name;
    const headerDescription = document.getElementById('project-description-header');
    headerDescription.textContent = activeProject.description;


}

export {
    displayToDoContent,
}