import DataTableComponent from "../../components/DataTableComponent";
import { Link } from "react-router-dom";
import { homePage } from "../../routes/routes";
import Header from "../../components/Header";

/**
 * This component represents the page of the created employees.
 * @returns JSX
 */
const CurrentEmployees = () => {
  return (
    <div>
      <Header itIsHomePage={false} />
      <DataTableComponent />
      <Link className={"link-to-home"} to={homePage}>
        Home
      </Link>
    </div>
  );
};

export default CurrentEmployees;
