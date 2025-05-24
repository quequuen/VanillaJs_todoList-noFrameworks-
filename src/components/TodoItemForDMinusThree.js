const TodoItemForDMinusThree = (todo) => {
  return `
      <div class="todo ml-[1%] flex gap-2 justify-center items-center border-b border-gray-400 w-[98%] h-[6%] text-xs">
        <input type="hidden" value="${todo.id}" />
        <input id="checkBox" type="checkbox" class="checkbox" ${
          todo.isDone === "Y" ? "checked" : ""
        } />
        <a id="showDetailTodoItem" class="content w-[50%] ${
          todo.isDone === "Y" ? "line-through text-gray-400" : ""
        } hover:underline cursor-pointer" >${todo.content}</a>
        <div class="date">${todo.deadLine}</div>
      </div>
    `;
};
export default TodoItemForDMinusThree;
