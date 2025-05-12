import getPath from "../utils/getPath";

const Header = () => {
  console.log("Header");
  const currentPath = getPath();
  const isHome = currentPath === "/";
  const today = new Date().toLocaleDateString("ko-KR");

  return `
      <header class="p-4 flex justify-between items-center">
        <div class="italic text-blue-700 text-4xl font-extrabold">D-3</div>
        <div class="text-2xl font-medium text-gray-500">${today}</div>
        <nav class="w-20 text-right">
          ${
            isHome
              ? `<a href="/all" data-link class="text-xl font-medium">ALL</a>`
              : `<a href="/" data-link class="text-xl font-medium">MAIN</a>`
          }
        </nav>
      </header>
    `;
};

export default Header;
