import List from "../components/List";

const HomePage = () => {
  console.log("HOME");
  let today = new Date().toISOString().split("T")[0];
  return `
  <div class="add">
    <form id="todoForm" class="flex gap-3 mt-10">
      <input type="date" id="todoDate" class="w-40 outline outline-1 outline-gray-600 rounded px-2 py-2" value="${today}"></input>
      <input type="text" id="todoContent" class="min-w-[25rem] outline outline-1 outline-gray-600 rounded px-4 py-2"></input>
      <button class="w-20 text-white bg-black rounded hover:bg-gray-400 font-medium">추가</button>
    </form>
  </div>
  <p class="mt-16 flex justify-center italic text-blue-700 text-4xl font-extrabold">TO DO LIST</p>
  ${List()}
  `;
};

export default HomePage;
