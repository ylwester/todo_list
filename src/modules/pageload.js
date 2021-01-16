import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {projectsContainer} from "./projectsContainer";
import {displayToDoContent} from "./displayToDoContent";
import {storageData} from "../libs/storageData";
import {activeProject, ProjectsFactory} from "./ProjectsFactory";
import {TaskFactory} from "./TaskFactory";
import {toDoContainer} from "./toDoContainer";
import {createModal, modalHandler} from "./modalHandler";
import {addTaskButton} from "./addTaskButton";

const currentProject = activeProject();

function pageLoad () {

    if(storageData().getProjectsArray() === null){
        let projectsData = [];
        let tasksToProject = [];

        tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days",));
        tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days",));

        projectsData.push(ProjectsFactory("Default","Enter your tasks here", tasksToProject));

        storageData().sendToLocalStorage(projectsData);
    }

    createModal();
    projectsContainer();
    toDoContainer();
    addProjectButton();
    displayProjects();
    //To Do content
    displayToDoContent();
    addTaskButton();
    modalHandler();
}

export {
    pageLoad,
}