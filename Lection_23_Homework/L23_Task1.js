window.onload = () => {

var TaskManager = {
    el: ".list",
    data: {
        toDoList1: [{task:'Get up'}, {task:'Cook breakfast'}, {task: 'Read a book'}, {task: 'Eat lunch'}, {task:'Go to bed'}],
        toDoList2: [{task: 'Order pizza'}, {task: 'Go for a walk'}, {task:'Listen to music'}, {task: 'Do homework'}, {task: 'Watch TV'}],
        transferToList2(){
            if(this.toDoList1.length !== 0){
                var last1 = this.toDoList1.pop();
                let item1 = last1.task;
                console.log(item1, 'item1');
                this.toDoList2.unshift({task: item1});
            } else {
                console.log('No tasks to do');
            }
        },
        transferToList1(){
            if(this.toDoList2.length !== 0){
                var last2 = this.toDoList2.pop();
                let item2 = last2.task;
                console.log(item2, 'item2');
                this.toDoList1.unshift({task: item2});
            } else {
                console.log('No tasks to do');
            }
        }
    }
};

let myVue = new Vue(TaskManager);

}