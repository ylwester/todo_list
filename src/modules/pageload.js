import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {projectsContainer} from "./projectsContainer";
import {displayToDoContent} from "./displayToDoContent";
import {storageData} from "../libs/storageData";
import {ProjectsFactory} from "./ProjectsFactory";

function pageLoad () {
    if(storageData().getProjectsArray() === null){
        let projectsData = [];

        projectsData.push(ProjectsFactory("sylwo","moje imie", [{
            name: "Take out the trash",
            priority: "2 days",
        }]));

        projectsData.push(ProjectsFactory("natka","kocham dziewczyne", [{
            name: "Take out the trash",
            priority: "2 days",
        }]));
        storageData().sendToLocalStorage(projectsData);
    }


    projectsContainer();
    addProjectButton();
    displayProjects();

    //To Do content
    displayToDoContent();

}

export {
    pageLoad,
}