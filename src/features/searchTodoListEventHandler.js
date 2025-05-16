import TodoItem from "../components/TodoItem";
import { globalStore } from "../stores/globalStore";
import getDate from "../utils/getDate";
import sortTodosToPath from "../utils/sortTodosToPath";

const getFilterTodoDataBySearch = (todos, search) => {
  todos = todos.filter(
    (todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()) &&
      todo.deadLine === getDate()
  );
  return sortTodosToPath(todos);
};

const renderTodoListBySearch = ($list, filterTodoData) => {
  $list.innerHTML = filterTodoData.map((todo) => TodoItem(todo)).join("");
};

const searchTodoListEventHandler = (e) => {
  const todos = globalStore.getState().posts;
  const search = e.target.value;
  const $list = document.getElementById("todoList");

  if ($list) {
    const filterTodoData = getFilterTodoDataBySearch(todos, search);
    renderTodoListBySearch($list, filterTodoData);
  }
};

export default searchTodoListEventHandler;
