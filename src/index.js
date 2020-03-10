function addTask(task) {
  let newTask = document.createElement("li");
  newTask.textContent = task;
  document.querySelector("ul").appendChild(newTask);
}

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskToAdd = event.target["new-task-description"].value;
    if (taskToAdd !== "") {
      addTask(taskToAdd);

      // ?
      let newButton = document.createElement("button");
      newButton.textContent = "x";
      newButton.type = "delete";
      document.querySelector("ul").appendChild(newButton);

    }
  });

  // ?
  form.addEventListener("delete", function(event) {
    event.preventDefault();
    const taskToDelete = event.target["new-task-description"].value;
    document.querySelector("ul").removeChild(taskToDelete);
    // .parentNode.removeChild() ;

  });

});