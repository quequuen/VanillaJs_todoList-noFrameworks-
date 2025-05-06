import { globalStore } from "../stores/globalStore";

const AddTodoItemEventHandler = (e) => {
  e.preventDefault();
  const todos = globalStore.getState().posts;

  const $date = document.getElementById("todoDate");
  const $content = document.getElementById("todoContent");
  const today = new Date().toISOString().split("T")[0];

  const newTodo = {
    id: todos.length + 1,
    creation: today,
    deadLine: $date.value,
    isDone: "N",
    content: $content.value,
  };

  globalStore.setState({
    posts: [...todos, newTodo],
  });

  // 입력 초기화
  $date.value = today;
  $content.value = "";
};

export default AddTodoItemEventHandler;
