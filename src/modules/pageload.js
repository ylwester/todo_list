import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {projectsContainer} from "./projectsContainer";
import {displayToDoContent} from "./displayToDoContent";

function pageLoad () {
    // let projectsData = [
    //     {
    //         name: "First Project",
    //         description: "Creating to do app",
    //     },
    //     {
    //         name: "Todo List",
    //         description: "Things to be done",
    //         todo: [{
    //             name: dd
    //              due-date: ss
    //         }]
    //     },
    // ];
    // storageData().sendToLocalStorage(projectsData);

    //Project navigation bar
    projectsContainer();
    addProjectButton();
    displayProjects();

    //To Do content
    displayToDoContent();

}

export {
    pageLoad,
}