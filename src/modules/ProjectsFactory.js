function activeProject() {
    let _project = [];

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

const ProjectsFactory = (name, description, tasksArray = {}) => {
    const getName = () => {
        return name;
    }

    const setName = (newName) => {
        name = newName;
    }

    const addTask = (task) => {
        tasksArray.push(task);
    }

    const getDescription = () => {
        return description;
    }

    const setDescription = (newDesc) => {
        description = newDesc;
    }

    const getTasksArray = () => {
        return tasksArray;
    }

    const setTasksArray = (newTasksArray) => {
        tasksArray = newTasksArray;
    }

    return {
        name,
        description,
        tasksArray,
        getName,
        getDescription,
        setDescription,
        getTasksArray,
        setTasksArray,
        addTask,
        setName,
    }
}

export {
    ProjectsFactory,
    activeProject,
    currentProject,
}
