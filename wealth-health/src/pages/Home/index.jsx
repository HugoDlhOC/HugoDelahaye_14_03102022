import { Link } from "react-router-dom";
import { employeesPage, homePage } from "../../routes/routes";
import FormEmployee from "../../components/FormEmployee";

const Home = () => {
  return (
    <div>
      <header>
        <Link to={homePage}>
          <h1>HRnet</h1>
        </Link>
        <Link to={employeesPage}>View Current Employees</Link>
      </header>
      <FormEmployee />
    </div>
  );
};

export default Home;
