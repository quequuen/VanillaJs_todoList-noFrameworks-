const Add = () => {
  console.log("ADD");
  let today = new Date().toISOString().split("T")[0];

  //   setTimeout(() => {
  //     const $add = document.getElementById("todoAdd");
  //     $add.addEventListener("click", () => {
  //       let $date = document.getElementById("todoDate");
  //       console.log($date);
  //     });
  //   });

  return `
    <div class="add">
    <form id="todoForm" class="flex gap-3 mt-10">
      <input type="date" id="todoDate" class="w-40 outline outline-1 outline-gray-600 rounded px-2 py-2" value="${today}"></input>
      <input type="text" id="todoContent" class="min-w-[25rem] outline outline-1 outline-gray-600 rounded px-4 py-2"></input>
      <button id="todoAdd" type="submit" class="w-20 text-white bg-black rounded hover:bg-gray-400 font-medium">추가</button>
    </form>
  </div>
    `;
};

const addBtnClickEvent = () => {
  const $form = document.getElementById("todoForm");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const $date = document.getElementById("todoDate");
    const $content = document.getElementById("todoContent");

    const newTodo = {
      id: Date.now(), // 또는 UUID 등
      creation: new Date().toISOString().split("T")[0],
      deadLine: $date.value,
      isDone: "N",
      content: $content.value,
    };

    console.log("📌 새로운 Todo:", newTodo);
  });
};
export { addBtnClickEvent };
export default Add;
