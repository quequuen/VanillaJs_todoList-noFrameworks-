import Add from "../components/Add";
import List from "../components/List";

const HomePage = () => {
  console.log("HOME");

  return `
  ${Add()}
  ${List()}
  `;
};

export default HomePage;
