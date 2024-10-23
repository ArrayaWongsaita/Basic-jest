function createTodo (title, description) {
  return {
    title,
    description,
    isCompleted: false,
  };
}

function upDateTodo (todo, newTitle, newDescription) {
  todo.title = newTitle;
  todo.description = newDescription;
}

function deleteTitleTodo (todo) {
  delete todo.title;
}

function checkAllFieldTodo (todo) {
  const requiredFields = ['title', 'description', 'isCompleted'];
  const missingFields = requiredFields.filter(field => !todo.hasOwnProperty(field));
  return missingFields.length === 0;
}

module.exports = {checkAllFieldTodo, createTodo, upDateTodo, deleteTitleTodo };