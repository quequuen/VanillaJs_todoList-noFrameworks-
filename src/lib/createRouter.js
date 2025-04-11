import { createObserver } from "./createObserver";

export const createRouter = (routes) => {
  const { subscribe, notify } = createObserver();
  //createObserver 가져와서 구조분해할당 해준건가
  const getPath = () => window.location.pathname;
  const getTarget = () => routes[getPath()];
  const push = (path) => {
    window.history.pushState(null, null, path);
    // 왜 null, null이 붙는걸까
    notify();
  };
  window.addEventListener("popstate", () => notify());

  return {
    get path() {
      return getPath();
    },
    push,
    subscribe,
    getTarget,
  };
};
