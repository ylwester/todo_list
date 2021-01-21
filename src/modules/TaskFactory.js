const TaskFactory = (title, description, dueDate, priority, completed) => {
    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const getTitle = () => {
        return title;
    }

    const getDescription = () => {
        return description;
    }

    const setDescription = (newDescription) => {
        description = newDescription;
    }

    const getPriority = () => {
        return priority;
    }

    const setPriority = (newPriority) => {
        priority = newPriority;
    }

    const getCompleted = () => {
        return completed;
    }

    const setCompleted = (newCompleted) => {
        completed = newCompleted;
    }

    const setDueDate = (newDate) => {
        dueDate = newDate;
    }

    const getDueDate = () => {
        return dueDate;
    }


    return {
        title,
        description,
        dueDate,
        priority,
        completed,
        setTitle,
        setPriority,
        setDescription,
        setCompleted,
        getTitle,
        getDescription,
        getPriority,
        getCompleted,
        setDueDate,
        getDueDate,
    }
}

export {
    TaskFactory,
}