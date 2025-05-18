import { globalStore } from "../stores/globalStore";
import { addEvent } from "../utils/eventUtil";
import closeModalEventHandler from "./closeModalEventHandler";

const getDetailTodoItem = (todos, id) => {
  return todos.filter((todo) => todo.id === Number(id))[0];
};

const createModalToShowDetailTodoItem = ($body, todo) => {
  addEvent("click", "#closeModal", closeModalEventHandler);

  $body.innerHTML += `
    <div id="modal" class="w-[100%] h-[100%] bg-black/30 absolute inset-0 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded shadow-xl w-[35%] h-[45%]">
        <div class="flex justify-center items-center w-[100%] h-[15%]">
        <p class="italic text-blue-700 text-4xl font-extrabold">DETAIL</p>
        </div>
        <div class="mt-8 flex justify-center w-[100%] h-[50%]">
          <table class="w-[80%]">
            <tr>
              <td><p class="font-bold">📌내용</p></td>
              <td>${todo.content}</td>
            </tr>
            <tr>
              <td><p class="font-bold">📌생성일</p></td>
              <td>${todo.creation}</td>
            </tr>
            <tr>
              <td><p class="font-bold">📌마감일</p></td>
              <td>${todo.deadLine}</td>
            </tr>
            <tr>
              <td><p class="font-bold">📌check</p></td>
              <td>${todo.isDone === "Y" ? "완료" : "미완료"}</td>
            </tr>
          </table>
        </div>
        <div class="mt-10 flex justify-center items-center gap-[20%]">
          <button id="updateTodoItem" class="px-3 py-1 bg-black text-white rounded hover:bg-gray-500">수정</button>
          <button id="closeModal" class="px-3 py-1 bg-black text-white rounded hover:bg-gray-500">닫기</button>
        </div>
      </div>
    </div>
  `;
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
