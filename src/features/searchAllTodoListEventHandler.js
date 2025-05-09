import TodoItem from "../components/TodoItem";
import { globalStore } from "../stores/globalStore";

const getFilterTodoDataBySearchAll = (todos, search) => {
  return todos
    .filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
    .sort(
      (a, b) =>
        new Date(a.deadLine) - new Date(b.deadLine) ||
        a.isDone.localeCompare(b.isDone)
    );
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
