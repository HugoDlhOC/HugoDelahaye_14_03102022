import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import DataTableComponent from "../../components/DataTableComponent";
import { Link } from "react-router-dom";
import { homePage } from "../../routes/routes";

const CurrentEmployees = () => {
  return (
    <div>
      <DataTableComponent />
      <Link to={homePage}>Home</Link>
    </div>
  );
};

export default CurrentEmployees;
