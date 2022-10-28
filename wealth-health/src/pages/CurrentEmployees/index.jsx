import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import DataTableComponent from "../../components/DataTableComponent";
import { Link } from "react-router-dom";
import { employeesPage, homePage } from "../../routes/routes";

const CurrentEmployees = () => {
  return (
    <div>
      <header>
        <Link to={homePage}>
          <h1>HRnet</h1>
        </Link>
      </header>
      <DataTableComponent />
      <Link className={"link-to-home"} to={homePage}>
        Home
      </Link>
    </div>
  );
};

export default CurrentEmployees;
