const Task = (id, title, description, dueDate, priority, completed) => {
    // Remember, here we have our variables that we
    //  passed in as parameters.
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
    const getId = () => {
        return id;
    }

    // and here, we *don't* return the properties themselves
    //  as we have defined getters and setters for each.
    return {
        title,
        description,
        priority,
        dueDate,
        completed,
        id,
        getId,
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

/***
 * In order for the TaskFactory to maintain "state", in the
 *  value of id, we need to make this a *closure*, and provide
 *  accessor methods
 ***/
const TaskFactory=(()=>{
    // this is a private variable. When we create new Tasks,
    //  we want to increment this, and pass it into the Task.
    let id=0;

    const task = (title,
                  description,
                  dueDate,
                  priority,
                  completed) =>{
        // first, we use the Task above, passing id as a param
        const myTask = Task(id, title, description, dueDate, priority, completed);
        // That done, increment the id!
        id += 1;

        return myTask;
    }
    // this one just gets the id of the last created Task.
    const getLastId = () => id-1;

    // And we only return those two functions, which are
    // just getters and setters for that id.
    return {
        task,
        getLastId
    };
})();



const myTasks = [
    TaskFactory.task('Learn factories', 'Learn about factories vs modules in javascript', Date.now(), 'high', false),
    TaskFactory.task('Learn about closures', 'When to use them and why', new Date().setDate(22), 'high', false),
    TaskFactory.task('Make dinner', "Got to impress the fiance's folks", new Date().setDate(29), 'high', false),
    TaskFactory.task('Clean up dinner mess', 'Make-a da food, clean-a da mess', new Date().setDate(29), 'medium', false),
];

myTasks.forEach(task => console.log(`Title: ${task.getTitle()}, due ${new Date(task.getDueDate()).toLocaleDateString()}`))


export {
    TaskFactory,
}