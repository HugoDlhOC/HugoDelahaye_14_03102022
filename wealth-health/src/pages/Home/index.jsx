import { Link } from "react-router-dom";
import { employeesPage } from "../../assets/routes/routes";
import FormEmployee from "../../components/FormEmployee";

const Home = () => {
  return (
    <div>
      <div className={"main-infos"}>
        <h1>HRnet</h1>
        <Link to={employeesPage}>View Current Employees</Link>
        <h2>Create Employee</h2>
      </div>
      <FormEmployee />
    </div>
  );
};

export default Home;
