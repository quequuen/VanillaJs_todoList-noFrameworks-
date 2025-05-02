import { globalStore } from "../stores/globalStore";
import TodoItem from "./TodoItem";

const List = () => {
  console.log("LIST");

  const [todos, setTodos] = globalStore.getState().posts;
  //globalStore에 저장된 더미데이터 불러옴
  let search;
  //검색할 값을 저장할 search 변수
  const $search = document.getElementById("search_input");
  // search_input의 DOM 요소를 저장할 $search
  $search.addEventListener("keyup", (e) => {
    search = e.target.value;
    console.log(search);
  });

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterTodoData = getFilterData();
  return `
    <div class="List">
        <div class="search mt-5 flex justify-center ">
            <input type="text" id="search_input" class="w-[98%] border-b border-solid border-gray-600 px-2 py-2" placeholder="검색어를 입력하세요"></input>
        </div>
        <div class="lists flex justify-center h-screen">
        ${filterTodoData.map((todo) => TodoItem(todo)).join("")}
        </div>
    </div>
    `;
};

export default List;
