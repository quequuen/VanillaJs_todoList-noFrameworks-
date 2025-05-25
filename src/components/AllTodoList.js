import TodoItem from "../components/TodoItem";
import searchAllTodoListEventHandler from "../features/searchAllTodoListEventHandler";
import { globalStore } from "../stores/globalStore";
import { addEvent } from "../utils/eventUtil";
import sortTodosToPath from "../utils/sortTodosToPath";

const AllTodoList = () => {
  const todos = globalStore.getState().posts;
  const sortedTodos = sortTodosToPath(todos);

  addEvent("keyup", "#searchInputOfAll", searchAllTodoListEventHandler);

  return `
      <p class="mt-10 flex justify-center italic text-blue-700 text-4xl font-extrabold">ALL TO DO LIST</p>
      <div class="List h-[80%]">
          <div class="search mt-5 flex justify-center">
              <input type="text" id="searchInputOfAll" class="w-[98%] border-b border-solid border-gray-600 px-2 py-2" placeholder="검색어를 입력하세요"></input>
          </div>
          <div class="lists block h-[90%]">
            <div id="todoListAll" class="h-[85%]">
              ${sortedTodos.map((todo) => TodoItem(todo)).join("")}
            <div>
  
      </div>
    `;
};
export default AllTodoList;
