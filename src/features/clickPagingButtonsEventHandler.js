const clickPagingButtonsEventHandler = (e) => {
  const currentPage = Number(e.target.dataset.page);
  console.log(currentPage);
  console.log(e.target.dataset.itemsPerPage);
  console.log(e.target.dataset.todos);
};
export default clickPagingButtonsEventHandler;
