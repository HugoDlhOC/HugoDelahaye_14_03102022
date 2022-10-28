import DataTableComponent from "../../components/DataTableComponent";
import { Link } from "react-router-dom";
import { employeesPage, homePage } from "../../routes/routes";
import Header from "../../components/Header";

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
