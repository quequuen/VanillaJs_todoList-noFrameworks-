import TodoItem from "./TodoItem";

const List = () => {
  setTimeout(() => {
    const $search = document.querySelector(".search_input").value;
    console.log($search);
  });

  const getFilterData = () => {};
  const filterTodoData = getFilterData();
  return `
    <div class="List">
        <div class="search mt-5 flex justify-center content-center">
            <input type="text" class="search_input w-[98%] border-b border-solid border-black px-2 py-2" placeholder="검색어를 입력하세요"></input>
        </div>
        <div class="lists flex justify-center h-screen">
        ${TodoItem()}
        </div>
    </div>
    `;
};

export default List;
