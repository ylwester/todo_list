function displayToDoContent() {
    const selectAllProjects = document.querySelectorAll('.project-name');

    selectAllProjects.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item.id);
        })
    })
}

export {
    displayToDoContent,
}