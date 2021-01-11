function storageData () {
    let projectsData = [
        {
            name: "First Project",
            description: "Creating to do app",
        },
        {
            name: "Todo List",
            description: "Things to be done",
        },
    ]

    localStorage.setItem("projectsData", JSON.stringify(projectsData));

    const saveProject = (name, description) => {
        projectsData.push({name: name, description: description});
        localStorage.setItem("projectsData", JSON.stringify(projectsData));
        console.log(localStorage.getItem('projectsData'));
    }

    const getProjectsArray = () => {
        let projects = localStorage.getItem("projectsData");
        projects = JSON.parse(projects);
        return projects;
    }

    return {
        projectsData,
        saveProject,
        getProjectsArray,
    }

}

export {
    storageData
}