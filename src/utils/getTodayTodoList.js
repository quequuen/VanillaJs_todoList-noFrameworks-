import { globalStore } from "../stores/globalStore";
import getDate from "../utils/getDate";
import sortTodosToPath from "../utils/sortTodosToPath";

const getFilterData = () => {
  const todos = globalStore.getState().posts;
  const today = getDate();
  return todos.filter((todo) => todo.deadLine === today);
};

const getTodayTodoList = () => {
  return sortTodosToPath(getFilterData());
};
export default getTodayTodoList;
