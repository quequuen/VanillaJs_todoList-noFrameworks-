const TodoItem = () => {
  return `
    <div class="todos flex gap-6 justify-center items-center border-b border-gray-400 w-[98%] h-[8%]">
        <input type="checkbox" class="checkbox"></input>
        <div class="content w-[50%]">todoList입니다</div>
        <div class="date w-[15%]">2025. 4. 30</div>
        <button class="update w-10 text-white bg-black rounded hover:bg-gray-400 font-medium text-xs px-2 py-1">수정</button>
        <button class="delete w-10 text-white bg-black rounded hover:bg-gray-400 font-medium text-xs px-2 py-1">삭제</button>
    </div>
    `;
};
export default TodoItem;
