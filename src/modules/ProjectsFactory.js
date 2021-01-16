function activeProject() {
    let _project = '';

    function setProject(project) {
        _project = project;
    }

    function getProject() {
        return _project;
    }

    return {
        setProject,
        getProject,
    }
}

const currentProject = activeProject();

const ProjectsFactory = (name, description, tasksArray) => {

    return {
        name,
        description,
        tasksArray,
    }
}

export {
    ProjectsFactory,
    activeProject,
    currentProject,
}
