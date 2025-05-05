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
const AddTodoItemEventHandler = () => {
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
};
export default AddTodoItemEventHandler;
