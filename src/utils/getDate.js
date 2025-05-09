const getDate = () => {
  return new Date().toISOString().split("T")[0];
};
export default getDate;
