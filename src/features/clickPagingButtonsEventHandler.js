import TodoItem from "../components/TodoItem";
import getAllTodoList from "../utils/getAllTodoList";
import getPath from "../utils/getPath";
import getTodayTodoList from "../utils/getTodayTodoList";

const renderTodoListByPaging = ($list, paginatedTodos) => {
  $list.innerHTML = paginatedTodos.map((todo) => TodoItem(todo)).join("");
};

const activePagingButton = (target) => {
  let $pagingButtons = document.querySelectorAll(".page_btn");
  $pagingButtons.forEach((btn) => {
    btn.classList = "page_btn px-2 mx-1 font-lighter";
  });
  target.classList.add("font-semibold", "text-blue-700");
};

const clickPagingButtonsEventHandler = (e) => {
  //main과 all 일 때 itemsPerPage가 다름

  const $list = document.getElementById("todoList");
  const path = getPath();

  const currentPage = Number(e.target.dataset.page);
  const itemsPerPage = Number(e.target.dataset.itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedTodos = (
    path === "/" ? getTodayTodoList() : getAllTodoList()
  ).slice(startIdx, endIdx);
  if ($list) {
    renderTodoListByPaging($list, paginatedTodos);
    activePagingButton(e.target);
  }
};
export default clickPagingButtonsEventHandler;
