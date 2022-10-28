import { Link } from "react-router-dom";
import { employeesPage, homePage } from "../../routes/routes";

const Home = ({ itIsHomePage }) => {
  return (
    <header>
      <Link to={homePage}>
        <h1>HRnet</h1>
      </Link>
      {itIsHomePage ? (
        <Link to={employeesPage}>View Current Employees</Link>
      ) : (
        ""
      )}
    </header>
  );
};

export default Home;
