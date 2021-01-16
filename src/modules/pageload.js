import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {projectsContainer} from "./projectsContainer";
import {displayToDoContent} from "./displayToDoContent";
import {storageData} from "../libs/storageData";
import {ProjectsFactory} from "./ProjectsFactory";
import {TaskFactory} from "./TaskFactory";
import {toDoContainer} from "./toDoContainer";
import {modal} from "./modal";

function pageLoad () {
    //Creating a modal, popup box
    const pageContainer = document.getElementById('page-container');
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');
    modalContainer.setAttribute('id', 'modal');

    //Content in modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalHeaderText = document.createElement('h3');
    modalHeaderText.setAttribute('id', 'modal-header-text');
    modalHeader.appendChild(modalHeaderText);

    //Close button
    const modalHeaderButton = document.createElement('button');
    modalHeaderButton.setAttribute('data-close-button', '');
    modalHeaderButton.classList.add('modal-close-button');
    const xSignButton = document.createElement('i');
    xSignButton.classList.add("fas");
    xSignButton.classList.add("fa-times");
    modalHeaderButton.appendChild(xSignButton);
    modalHeader.appendChild(modalHeaderButton);

    modalContainer.appendChild(modalHeader);

    //Content in modal body
    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-body')
    modalContainer.appendChild(modalContent)

    //Creating div with background shadow while open modal
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');

    pageContainer.appendChild(modalContainer);
    pageContainer.appendChild(overlay);

    if(storageData().getProjectsArray() === null){
        let projectsData = [];
        let tasksToProject = [];

        tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days",));
        tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days",));

        projectsData.push(ProjectsFactory("Default","Enter your tasks here", tasksToProject));

        storageData().sendToLocalStorage(projectsData);
    }

    projectsContainer();
    toDoContainer();
    addProjectButton();
    displayProjects();
    //To Do content
    displayToDoContent();

    modal();
}

export {
    pageLoad,
}