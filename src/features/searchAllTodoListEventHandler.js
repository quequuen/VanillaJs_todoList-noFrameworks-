import pagingButtons from "../components/pagingButtons";
import TodoItem from "../components/TodoItem";
import getAllTodoList from "../utils/getAllTodoList";
import sortTodosToPath from "../utils/sortTodosToPath";

const getFilterTodoDataBySearchAll = (search) => {
  let todos = getAllTodoList().filter((todo) =>
    todo.content.toLowerCase().includes(search.toLowerCase())
  );
  return sortTodosToPath(todos);
};

const renderPageNumberBySearchAll = (
  $paging,
  filterTodoData,
  itemsPerPage,
  currentPage
) => {
  $paging.dataset.todos = JSON.stringify(filterTodoData);
  $paging.innerHTML = pagingButtons(filterTodoData, itemsPerPage, currentPage);
};

const renderTodoListBySearchAll = ($allList, paginatedTodos) => {
  $allList.innerHTML = paginatedTodos.map((todo) => TodoItem(todo)).join("");
};

const searchAllTodoListEventHandler = (e) => {
  const itemsPerPage = 6;
  const selectedBtn = document.querySelector(".page_btn.font-semibold");
  const currentPage = selectedBtn ? Number(selectedBtn.dataset.page) : 1;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const search = e.target.value;
  const $allList = document.getElementById("todoList");
  const $paging = document.getElementById("paging");

  if ($allList && $paging) {
    const filterTodoData = getFilterTodoDataBySearchAll(search);
    const paginatedTodos = filterTodoData.slice(startIdx, endIdx);
    renderPageNumberBySearchAll(
      $paging,
      filterTodoData,
      itemsPerPage,
      currentPage
    );
    renderTodoListBySearchAll($allList, paginatedTodos);
  }
};
export default searchAllTodoListEventHandler;
