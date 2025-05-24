import TodoItem from "./TodoItem";
import { globalStore } from "../stores/globalStore";
import { addEvent } from "../utils/eventUtil";
import searchTodoListEventHandler from "../features/searchTodoListEventHandler";
import getDate from "../utils/getDate";
import sortTodosToPath from "../utils/sortTodosToPath";

const TodoList = () => {
  addEvent("keyup", "#searchInput", searchTodoListEventHandler);

  const todos = globalStore.getState().posts;
  //globalStore에 저장된 더미데이터 불러옴
  const today = getDate();
  const getFilterData = () => {
    return todos.filter((todo) => todo.deadLine === today);
  };
  const filterTodoData = sortTodosToPath(getFilterData());
  // console.log("FILTERED TODOS:", filterTodoData);
  return `
  <p class="mt-16 flex justify-center italic text-blue-700 text-4xl font-extrabold">TO DO LIST</p>
    <div class="List">
        <div class="search mt-5 flex justify-center ">
            <input type="text" id="searchInput" class="w-[98%] border-b border-solid border-gray-600 px-2 py-2" placeholder="검색어를 입력하세요"></input>
        </div>
        <div id="todoList" class="lists block h-screen ">
        ${filterTodoData.map((todo) => TodoItem(todo)).join("")}
        </div>
    </div>
    `;
};

export default TodoList;
