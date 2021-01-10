function storageData () {
    const projectsData = [
        {
            name: "First Project",
            description: "Creating to do app",
        },
        {
            name: "Todo List",
            description: "Things to be done",
        },
    ]

    const saveProject = (name, description) => {
        projectsData.push({name: name, description: description});
        localStorage.setItem("projectsArray", JSON.stringify("projectsData"));
    }

    const getProjectsArray = () => {
        return projectsData;
    }

    return {
        saveProject,
        getProjectsArray,
    }

}

export {
    storageData
}