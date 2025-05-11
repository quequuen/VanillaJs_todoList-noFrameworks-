import { globalStore } from "../stores/globalStore";

//수정하기 전에 id를 이용해 해당 객체의 isDone 값을 가져오고 그 값이 Y면 N을, N이면 Y을 저장하는 객체 생성
const getNewIsDoneById = (id) => {
  const todo = globalStore.getState().posts;
  const target = todo.find((el) => el.id === Number(id));

  const newIsDone = target.isDone === "Y" ? "N" : "Y";
  return { ...target, isDone: newIsDone }; //객체 병합
};

//수정
const updateCheckBoxStatus = (updateIsDoneTarget) => {
  globalStore.setState(updateIsDoneTarget);
};

const changeCheckBoxEventHandler = (e) => {
  console.log("changeCheckBox 동작");
  const id = e.target
    .closest(".todo")
    .querySelector('input[type="hidden"]').value;

  const updateIsDoneTarget = getNewIsDoneById(id);
  console.log(updateIsDoneTarget);
  updateCheckBoxStatus(updateIsDoneTarget);
  console.log(globalStore.getState().posts);
};
export default changeCheckBoxEventHandler;
