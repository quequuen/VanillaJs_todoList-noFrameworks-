import DetailTodoItem from "../components/DetailTodoItem";
import { globalStore } from "../stores/globalStore";

const getDetailTodoItem = (todos, id) => {
  return todos.filter((todo) => todo.id === Number(id))[0];
};

const createModalToShowDetailTodoItem = ($body, todo) => {
  //body의 내용에 DetailTodoItem 컴포넌트를 통해 상세 정보 모달 추가
  $body.innerHTML += DetailTodoItem(todo);
};

const showDetailTodoItemEventHandler = (e) => {
  const $body = document.querySelector("body");
  const todos = globalStore.getState().posts;
  const id = e.target
    .closest(".todo")
    .querySelector('input[type="hidden"]').value;
  //상세 정보를 띄울 todoItem 가져오기
  const todo = getDetailTodoItem(todos, id);
  //모달 화면 띄우는 함수 동작
  createModalToShowDetailTodoItem($body, todo);
};
export default showDetailTodoItemEventHandler;
