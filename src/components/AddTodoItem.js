import { globalStore } from "../stores/globalStore";
import { addEvent } from "../utils/eventUtil";

const createNewTodo = () => {
  const todos = globalStore.getState().posts;
  const id = todos.length + 1;

  const $date = document.getElementById("todoDate");
  const $content = document.getElementById("todoContent");

  return {
    id: id,
    creation: new Date().toISOString().split("T")[0],
    deadLine: $date.value,
    isDone: "N",
    content: $content.value,
  };
};

const AddTodoItem = () => {
  console.log("ADD");
  let today = new Date().toISOString().split("T")[0];
  const todos = globalStore.getState().posts;

  addEvent("submit", "#todoForm", (e) => {
    e.preventDefault();
    const $date = document.getElementById("todoDate");
    const $content = document.getElementById("todoContent");
    const newTodo = createNewTodo();

    // console.log("📌 새로운 Todo:", newTodo);
    globalStore.setState({
      posts: [...todos, newTodo],
    });

    const newTodos = globalStore.getState().posts;
    // globalStore의 상태가 변경되어서 다시 newTodos로 추가된 리스트까지 포함된 todos를 가져옴

    // console.log(newTodos);

    $date.value = today;
    $content.value = "";
  });

  return `
    <div class="add">
    <form id="todoForm" class="flex gap-3 mt-10">
      <input type="date" id="todoDate" class="w-40 outline outline-1 outline-gray-600 rounded px-2 py-2" value="${today}"></input>
      <input type="text" id="todoContent" class="min-w-[25rem] outline outline-1 outline-gray-600 rounded px-4 py-2"></input>
      <button id="todoAdd" type="submit" class="w-20 text-white bg-black rounded hover:bg-gray-400 font-medium">추가</button>
    </form>
  </div>
    `;
};

export default AddTodoItem;
