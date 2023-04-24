import Directory from "../../components/directory/directory.component";
import { categoryItems } from "../../data";

const Home = () => {
  return <Directory categoryItems={categoryItems} />;
};

export default Home;
