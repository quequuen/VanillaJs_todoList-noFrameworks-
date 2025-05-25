import { globalStore } from "../stores/globalStore";
import sortTodosToPath from "./sortTodosToPath";

const getAllTodoList = () => {
  const todos = globalStore.getState().posts;
  return sortTodosToPath(todos);
};
export default getAllTodoList;
