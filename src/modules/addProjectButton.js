import {ProjectsFactory} from "./ProjectsFactory";
import {modal} from "./modal";

function addProjectButton() {
    const container = document.getElementById('projects-header');
    const addButton = document.createElement('button');
    addButton.setAttribute('data-modal-target', '#modal');
    addButton.textContent = "Add project";

    console.log(addButton);
    container.appendChild(addButton);

    modal();

}
export {
    addProjectButton,
}