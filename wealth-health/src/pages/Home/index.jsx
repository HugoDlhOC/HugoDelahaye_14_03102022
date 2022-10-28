import { Link } from "react-router-dom";
import { employeesPage, homePage } from "../../routes/routes";
import FormEmployee from "../../components/FormEmployee";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header itIsHomePage={true} />
      <FormEmployee />
    </div>
  );
};

export default Home;
