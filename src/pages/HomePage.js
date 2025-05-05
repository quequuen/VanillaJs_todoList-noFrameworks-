import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";

const HomePage = () => {
  console.log("HOME");

  return `
  ${AddTodoItem()}
  ${TodoList()}
  `;
};

export default HomePage;
