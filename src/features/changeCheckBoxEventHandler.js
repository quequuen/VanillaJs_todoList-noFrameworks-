const changeCheckBoxEventHandler = (e) => {
  console.log("changeCheckBox 동작");
  const id = e.target
    .closest(".todo")
    .querySelector('input[type="hidden"]').value;
  // console.log(id);
};
export default changeCheckBoxEventHandler;
