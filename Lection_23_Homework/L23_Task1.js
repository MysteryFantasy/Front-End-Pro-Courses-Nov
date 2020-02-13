window.onload = () => {

var TaskManager = {
    el: ".list",
    data: {
        toDoList1: [{task:'Get up'}, {task:'Cook breakfast'}, {task: 'Read a book'}, {task: 'Eat lunch'}, {task:'Go to bed'}],
        toDoList2: [{task: 'Order pizza'}, {task: 'Go for a walk'}, {task:'Listen to music'}, {task: 'Do homework'}, {task: 'Watch TV'}],
    }
}

let myVue = new Vue(TaskManager);

}