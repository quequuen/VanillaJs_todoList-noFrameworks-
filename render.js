import { addEvent } from "./src/utils/eventUtil";

addEvent("click", "[data-link]", (e) => {
  e.preventDefault();
  router.get().push(e.target.href.replace(window.location.origin, ""));
});

function render() {
  const $root = document.getElementById("root");
  try {
    const Page = router.get().getTaget() ?? NotFoundPage;
    // 일치하는 컴포넌트가 없을 시 NotFoundPage 를 Page에 저장
    // ??->Null, None일 때 false
    $root.innerHTML = Page();
    // index.html 안의 root의 내용을 해당 컴포넌트로 바꿔줌
  } catch (error) {
    // 에러 내용 뭐가 있을까...?
  }
}

export default render;
