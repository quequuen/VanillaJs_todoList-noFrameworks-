import TodoItem from "../components/TodoItem";
import { globalStore } from "../stores/globalStore";
import getPath from "../utils/getPath";
import sortTodosToPath from "../utils/sortTodosToPath";

const getFilterTodoDataBySearchAll = (todos, search) => {
  todos = todos.filter((todo) =>
    todo.content.toLowerCase().includes(search.toLowerCase())
  );
  return sortTodosToPath(todos);
};

const renderTodoListBySearchAll = ($allList, filterTodoData) => {
  $allList.innerHTML = filterTodoData.map((todo) => TodoItem(todo)).join("");
};

const searchAllTodoListEventHandler = (e) => {
  const todos = globalStore.getState().posts;
  const search = e.target.value;
  const $allList = document.getElementById("todoListAll");

  if ($allList) {
    const filterTodoData = getFilterTodoDataBySearchAll(todos, search);
    renderTodoListBySearchAll($allList, filterTodoData);
  }
};
export default searchAllTodoListEventHandler;
