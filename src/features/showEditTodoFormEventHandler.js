import EditTodoItem from "../components/EditTodoItem";
import { globalStore } from "../stores/globalStore";
import getDetailTodoItemById from "../utils/getDetailTodoItemById";

const changeModalToShowEditTodoForm = (todo) => {
  const $modalBody = document.getElementById("modalBody");
  $modalBody.innerHTML = EditTodoItem(todo);
};

const showEditTodoFormEventHandler = async (e) => {
  //js는 기본적으로 동기식으로(한줄씩 차례로)실행, 하지만 API 요청, 파일 읽기, 타이머, 애니메이션 등은 시간이 오래 걸리기 때문에 비동기적으로 처리해야 함.
  //이때 async를 사용하면, 그 함수 안에서 await을 쓸 수 있음
  const todos = globalStore.getState().posts;
  const id = e.target.dataset.todoId;
  if (!id) return;
  const todo = await getDetailTodoItemById(todos, id);
  changeModalToShowEditTodoForm(todo);
};
export default showEditTodoFormEventHandler;
