import clickPagingButtonsEventHandler from "../features/clickPagingButtonsEventHandler";
import { addEvent } from "../utils/eventUtil";
import getAllTodoList from "../utils/getAllTodoList";
import getPath from "../utils/getPath";
import getTodayTodoList from "../utils/getTodayTodoList";

const pagingButtons = (paginatedTodos, itemsPerPage, currentPage) => {
  addEvent("click", ".page_btn", clickPagingButtonsEventHandler);

  const path = getPath();

  const totalPages = Math.ceil(
    path === "/"
      ? getTodayTodoList().length / itemsPerPage
      : getAllTodoList().length / itemsPerPage
  );
  let buttons = "";
  for (let i = 1; i <= totalPages; i++) {
    buttons += `<button class="page_btn px-2 mx-1 ${
      i === currentPage ? "font-semibold text-blue-700" : "font-lighter"
    }" data-page="${i}" data-items-per-page="${itemsPerPage}" >${i}</button>`;
  }
  return buttons;
};
export default pagingButtons;
