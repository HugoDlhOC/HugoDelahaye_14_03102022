import { Link } from "react-router-dom";
import { employeesPage, homePage } from "../../routes/routes";
import PropTypes from "prop-types";

/**
 * This component represents the header of the page, a props named itIsHomePage is expected to determine if it is the home page or not, as the display of the latter will be different.
 * @param itIsHomePage
 * @returns JSX
 */
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

Home.propTypes = {
  itIsHomePage: PropTypes.bool,
};
