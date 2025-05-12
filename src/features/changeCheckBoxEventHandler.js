import { globalStore } from "../stores/globalStore";

//수정하기 전에 id를 이용해 해당 객체의 isDone 값을 가져오고 그 값이 Y면 N을, N이면 Y을 저장하는 객체 생성
const getUpdatedTodoForCheckBoxById = (todos, id) => {
  const target = todos.find((el) => el.id === Number(id));

  const newIsDone = target.isDone === "Y" ? "N" : "Y";
  return { ...target, isDone: newIsDone }; //객체 병합
};

//수정
const updateCheckBoxStatus = (todos, updatedTodo) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  globalStore.setState({ posts: updatedTodos });
};

const changeCheckBoxEventHandler = (e) => {
  console.log("changeCheckBox 동작");
  const todos = globalStore.getState().posts;
  const id = e.target
    .closest(".todo")
    .querySelector('input[type="hidden"]').value;

  const updatedTodo = getUpdatedTodoForCheckBoxById(todos, id);
  // console.log(updatedTodo);
  updateCheckBoxStatus(todos, updatedTodo);
  console.log(globalStore.getState().posts);
};
export default changeCheckBoxEventHandler;
