function projectsContainer() {
    const container = document.getElementById('page-container');

    const navContainer = document.createElement('div');
    navContainer.setAttribute('id', 'projects-container');


    const projectHeader = document.createElement('div');
    projectHeader.setAttribute('id', 'projects-header')

    const headerText = document.createElement('h1');
    headerText.textContent = "Projects";

    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'add-project-button')
    addButton.textContent = "Add project";

    const DOMProjectsNamesWrap = document.createElement('div');
    DOMProjectsNamesWrap.setAttribute('id', "projects-names-wrap");
    navContainer.appendChild(DOMProjectsNamesWrap);

    projectHeader.appendChild(headerText);
    projectHeader.appendChild(addButton);
    navContainer.appendChild(projectHeader);
    navContainer.appendChild(DOMProjectsNamesWrap);
    container.appendChild(navContainer);

}

export {
    projectsContainer,
};