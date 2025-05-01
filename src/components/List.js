import TodoItem from "./TodoItem";

const List = () => {
  setTimeout(() => {
    const $search = document.getElementById("search_input").value;
    console.log($search);
  });

  const getFilterData = () => {};
  const filterTodoData = getFilterData();
  return `
    <div class="List">
        <div class="search mt-5 flex justify-center ">
            <input type="text" id="search_input" class="w-[98%] border-b border-solid border-gray-600 px-2 py-2" placeholder="검색어를 입력하세요"></input>
        </div>
        <div class="lists flex justify-center h-screen">
        ${TodoItem()}
        </div>
    </div>
    `;
};

export default List;
