import { globalStore } from "../stores/globalStore";
import getDate from "../utils/getDate";

//유효성 검사

const setInputValues = () => {
  const $date = document.getElementById("todoDate");
  const $content = document.getElementById("todoContent");
  return {
    date: $date.value,
    content: $content.value,
    $date,
    $content,
  };
};

const createTodoItem = (id, deadLine, content) => ({
  id,
  creation: getDate,
  deadLine,
  isDone: "N",
  content,
});

const setTodoStore = (newTodo) => {
  const todos = globalStore.getState().posts;
  globalStore.setState({ posts: [...todos, newTodo] });
};

const resetTodoForm = ($date, $content) => {
  $date.value = getDate;
  $content.value = "";
};

const addTodoItemEventHandler = (e) => {
  e.preventDefault();
  const todos = globalStore.getState().posts;
  //setInputValues() 호출로 DOM 요소의 값과 그 자체를 각각 변수에 할당 후 리턴(구조 분해 할당 사용)
  const { date, content, $date, $content } = setInputValues();

  // 구조 분해 할당으로 가져온 date와 content를 createTodoItem의 인수로 주고 객체를 생성한 후 newTodo에 할당
  const newTodo = createTodoItem(todos.length + 1, date, content);

  // newTodo 데이터 저장
  setTodoStore(newTodo);

  // 입력 초기화
  resetTodoForm($date, $content);
};

export default addTodoItemEventHandler;
