import TodoItem from "./TodoItem";
import { globalStore } from "../stores/globalStore";
import { addEvent } from "../utils/eventUtil";

const List = () => {
  console.log("LIST");

  const todos = globalStore.getState().posts;
  //globalStore에 저장된 더미데이터 불러옴
  // console.log(todos);

  let search = "";
  //검색할 값을 저장하는 변수

  addEvent("keyup", "#searchInput", (e) => {
    // console.log("searchInput 작동");
    search = e.target.value;
    const $list = document.getElementById("todoList");
    if ($list) {
      $list.innerHTML = filterTodoData
        .filter((todo) =>
          todo.content.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => TodoItem(todo))
        //TodoItem은 배열이 아닌 HTML 문자열을 출력하기 때문에 filter가 먼저 일치하는 것을 비교한 후,
        //배열을 출력하고 그 다음 TodoItem에 전달해서 리스트로 출력
        .join("");
    }
  });

  const getFilterData = () => {
    if (search === "") {
      return todos.filter(
        (todo) => todo.deadLine === new Date().toISOString().split("T")[0]
      );
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterTodoData = getFilterData();
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

export default List;
