import changeCheckBoxEventHandler from "../features/changeCheckBoxEventHandler";
import { addEvent } from "../utils/eventUtil.js";

addEvent("change", "#checkBox", changeCheckBoxEventHandler);

const TodoItem = (todo) => {
  return `
    <div class="todo ml-[1%] flex gap-6 justify-center items-center border-b border-gray-400 w-[98%] h-[8%]">
      <input type="hidden" value="${todo.id}" />
      <input id="checkBox" type="checkbox" class="checkbox" ${
        todo.isDone === "Y" ? "checked" : ""
      } />
      <div class="content w-[50%] ${
        todo.isDone === "Y" ? "line-through" : ""
      }" >${todo.content}</div>
      <div class="date">${todo.deadLine}</div>
      <button class="update w-10 text-white bg-black rounded hover:bg-gray-400 font-medium text-xs px-2 py-1">수정</button>
      <button class="delete w-10 text-white bg-black rounded hover:bg-gray-400 font-medium text-xs px-2 py-1">삭제</button>
    </div>
  `;
};

export default TodoItem;
