function storageData() {

    const sendToLocalStorage = (data) => {
        localStorage.setItem("projectsData", JSON.stringify(data));
    }

    const getProjectsArray = () => {
        let projects = localStorage.getItem("projectsData");
        projects = JSON.parse(projects);
        return projects;
    }

    return {
        sendToLocalStorage,
        getProjectsArray,
    }
}

export {
    storageData
}