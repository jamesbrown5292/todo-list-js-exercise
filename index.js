
// Create a new task object with title, description and complete
function newTask(title, description) {
  const task = {
    'title': title,
    'description': description,
    'complete': false,
    completeTask: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

  };
  return task;
};



//Test code:
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
console.log(tasks);
// DRIVER CODE BELOW
task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed
console.log(tasks);
