import TodoItem from "../components/TodoItem";
import searchAllTodoListEventHandler from "../features/searchAllTodoListEventHandler";
import { addEvent } from "../utils/eventUtil";
import getAllTodoList from "../utils/getAllTodoList";
import pagingButtons from "./pagingButtons";

const AllTodoList = () => {
  addEvent("keyup", "#searchInputOfAll", searchAllTodoListEventHandler);

  const itemsPerPage = 6;
  const selectedBtn = document.querySelector(".page_btn.font-semibold");
  const currentPage = selectedBtn ? Number(selectedBtn.dataset.page) : 1;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const paginatedTodos = getAllTodoList().slice(startIdx, endIdx);

  return `
      <p class="mt-10 flex justify-center italic text-blue-700 text-4xl font-extrabold">ALL TO DO LIST</p>
      <div class="List h-[80%]">
          <div class="search mt-5 flex justify-center">
              <input type="text" id="searchInputOfAll" class="w-[98%] border-b border-solid border-gray-600 px-2 py-2" placeholder="검색어를 입력하세요"></input>
          </div>
          <div class="lists block h-[90%]">
            <div id="todoList" class="h-[85%]">
              ${paginatedTodos.map((todo) => TodoItem(todo)).join("")}
            </div>
            <div id="paging" class="flex justify-center">
                ${pagingButtons(getAllTodoList(), itemsPerPage, currentPage)}
            </div>
      </div>
    `;
};
export default AllTodoList;
