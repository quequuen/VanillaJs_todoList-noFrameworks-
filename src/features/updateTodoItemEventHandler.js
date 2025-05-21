import { globalStore } from "../stores/globalStore";
import getDetailTodoItemById from "../utils/getDetailTodoItemById";
import closeModalEventHandler from "./closeModalEventHandler";

const setInputValuesForUpdateTodoItem = () => {
  const $updatedTodoItemContent = document.getElementById(
    "editTodoItemContent"
  );
  const $updatedTodoItemDate = document.getElementById("editTodoItemDeadLine");
  const $updatedTodoItemIsDone = document.getElementById("editTodoItemIsDone");
  const isDoneValue = document.querySelector(
    "input[name='isDone']:checked"
  )?.value;
  return {
    deadLine: $updatedTodoItemDate.value,
    content: $updatedTodoItemContent.value,
    isDone: isDoneValue,
  };
};

const updateTodos = ({ id, deadLine, isDone, content }) => {
  const todos = globalStore.getState().posts;
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        deadLine,
        isDone,
        content,
      };
    }
    return todo;
  });
  return updatedTodos;
};

const setTodoStoreByUpdatedTodoItem = (updatedTodos) => {
  const todos = globalStore.getState().posts;
  globalStore.setState({ posts: updatedTodos });
};

const updateTodoItemEventHandler = async (e) => {
  const todos = globalStore.getState().posts;
  const id = e.target.dataset.todoId;
  if (!id) return;
  //수정 모달의 입력된 각 값을 가져옴
  const { deadLine, content, isDone } = setInputValuesForUpdateTodoItem();
  //가져온 값으로 해당 id의 todo를 업데이트한 todos를 가져옴
  const updatedTodos = updateTodos({
    id,
    deadLine,
    isDone,
    content,
  });
  //업데이트된 todos로 globalStore를 수정
  setTodoStoreByUpdatedTodoItem(updatedTodos);
  //모달 닫음
  closeModalEventHandler();
};
export default updateTodoItemEventHandler;
