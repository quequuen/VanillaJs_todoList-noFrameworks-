import TodoItem from "../components/TodoItem";
import { globalStore } from "../stores/globalStore";
import getDate from "../utils/getDate";

const getFilterTodoDataBySearch = (todos, search) => {
  return todos
    .filter(
      (todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase()) &&
        todo.deadLine === getDate
    )
    .sort((a, b) => a.isDone.localeCompare(b.isDone));
  //localeCompare로 체크된 애가 밑으로 가게 출력(isDone을 기준으로 사전순 출력 "N"->"Y")
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
