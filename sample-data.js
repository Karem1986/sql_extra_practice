const TodoItem = require("./models").todoItem;

async function createSampleTodoItems() {
    try {
        const todo1 = await TodoItem.create({
            task: "study sql",
            important: false,
        });
        const todo2 = await TodoItem.create({
            task: "Learn to code",
            important: true,
        });
        const todo3 = await TodoItem.create({
            task: "eat something lekker",
            important: true,
        });

        return [todo1, todo2, todo3].map(item => item.get({ plain: true }));
    } catch (e) {
        console.error(e);
    }
}

createSampleTodoItems().then(todos => console.log(todos));