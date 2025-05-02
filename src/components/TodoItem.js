const TodoItem = (todo) => {
  console.log("TODO");
  console.log(todo);
  return `
    <div class="todos flex gap-6 justify-center items-center border-b border-gray-400 w-[98%] h-[8%]">
      <input type="hidden" value="${todo.id}" />
      <input type="checkbox" class="checkbox" ${
        todo.isDone === "Y" ? "checked" : ""
      } />
      <div class="content w-[50%]">${todo.content}</div>
      <div class="date">${todo.deadLine}</div>
      <button class="update w-10 text-white bg-black rounded hover:bg-gray-400 font-medium text-xs px-2 py-1">수정</button>
      <button class="delete w-10 text-white bg-black rounded hover:bg-gray-400 font-medium text-xs px-2 py-1">삭제</button>
    </div>
  `;
};

export default TodoItem;
