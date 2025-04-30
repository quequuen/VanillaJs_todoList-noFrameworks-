const TodoItem = () => {
  return `
    <div class="todos flex gap-5 justify-center border-b border-gray-400 w-[98%] h-[8%]">
        <input type="checkbox" class="checkbox"></input>
        <div class="content">content</div>
        <div class="date">DATE</div>
        <button class="update">수정</button>
        <button class="delete">삭제</button>
    </div>
    `;
};
export default TodoItem;
