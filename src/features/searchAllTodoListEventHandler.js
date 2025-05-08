import TodoItem from "../components/TodoItem";
import { globalStore } from "../stores/globalStore";

const searchAllTodoListEventHandler = (e) => {
  console.log("searchAllInput 작동");

  const todos = globalStore.getState().posts;
  const search = e.target.value;
  const $allList = document.getElementById("todoListAll");

  if ($allList) {
    const filterTodoData = todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(filterTodoData);

    $allList.innerHTML = filterTodoData.map((todo) => TodoItem(todo)).join("");
  }
};
export default searchAllTodoListEventHandler;
