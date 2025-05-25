import TodoItem from "./TodoItem";
import { globalStore } from "../stores/globalStore";
import { addEvent } from "../utils/eventUtil";
import searchTodoListEventHandler from "../features/searchTodoListEventHandler";
import getDate from "../utils/getDate";
import sortTodosToPath from "../utils/sortTodosToPath";
import pagingButtons from "./pagingButtons";

const TodoList = () => {
  addEvent("keyup", "#searchInput", searchTodoListEventHandler);

  //페이징 처리를 하기 위한 변수들
  const itemsPerPage = 5;
  let currentPage = 1;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const todos = globalStore.getState().posts;
  //globalStore에 저장된 더미데이터 불러옴
  const today = getDate();
  const getFilterData = () => {
    return todos.filter((todo) => todo.deadLine === today);
  };
  const filterTodoData = sortTodosToPath(getFilterData());
  // console.log("FILTERED TODOS:", filterTodoData);
  const paginatedTodos = filterTodoData.slice(startIdx, endIdx);

  return `
  <p class="mt-16 flex justify-center italic text-blue-700 text-4xl font-extrabold">TO DO LIST</p>
    <div class="List h-[60%]">
        <div class="search mt-5 flex justify-center ">
            <input type="text" id="searchInput" class="w-[98%] border-b border-solid border-gray-600 px-2 py-2" placeholder="검색어를 입력하세요"></input>
        </div>
        <div class="lists block h-[100%]">
          <div id="todoList" class="h-[80%]">
            ${paginatedTodos.map((todo) => TodoItem(todo)).join("")}
          </div>
          <div id="paging" class="flex justify-center">
             ${pagingButtons(filterTodoData, itemsPerPage, currentPage)}
        </div>
    </div>
    `;
};

export default TodoList;
