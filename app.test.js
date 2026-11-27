const { createTask, markDone, getPendingTasks } = require('./app');

test('create task', () => {
    const task = createTask('Assignment');
    expect(task.name).toBe('Assignment');
    expect(task.completed).toBe(false);
});

test('mark task done', () => {
    const task = createTask('Study');
    markDone(task);
    expect(task.completed).toBe(true);
});

test('get pending tasks', () => {
    const tasks = [createTask('A'), createTask('B')];
    markDone(tasks[0]);
    expect(getPendingTasks(tasks)).toHaveLength(1);
});
