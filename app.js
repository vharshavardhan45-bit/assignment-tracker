function createTask(name) {
    return {
        id: Date.now(),
        name: name,
        completed: false
    };
}

function markDone(task) {
    task.completed = true;
    return task;
}

function getPendingTasks(tasks) {
    return tasks.filter(task => !task.completed);
}

module.exports = { createTask, markDone, getPendingTasks };
