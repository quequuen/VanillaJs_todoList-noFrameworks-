import TodoItem from "../components/TodoItem";
import { globalStore } from "../stores/globalStore";

const searchEventHandler = (e) => {
  // console.log("searchInput 작동");
  const todos = globalStore.getState().posts;
  const search = e.target.value;
  const $list = document.getElementById("todoList");
  let today = new Date().toISOString().split("T")[0];

  if ($list) {
    const filterTodoData = todos.filter(
      (todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase()) &
        (todo.deadLine === today)
    );

    $list.innerHTML = filterTodoData.map((todo) => TodoItem(todo)).join("");
  }
};

export default searchEventHandler;
