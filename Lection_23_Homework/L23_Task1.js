window.onload = () => {

var TaskManager = {
    el: ".list",
    data: {
        toDoList1: [{task:'Get up'}, {task:'Cook breakfast'}, {task: 'Read a book'}, {task: 'Eat lunch'}, {task:'Go to bed'}],
        toDoList2: [{task: 'Order pizza'}, {task: 'Go for a walk'}, {task:'Listen to music'}, {task: 'Do homework'}, {task: 'Watch TV'}],
        transferToList2(){
            var last = this.toDoList1.pop();
            let item1 = last.task;
            console.log(item1, 'item1');
            this.toDoList2.unshift({task: item1});
        }
    }
}

let myVue = new Vue(TaskManager);

}