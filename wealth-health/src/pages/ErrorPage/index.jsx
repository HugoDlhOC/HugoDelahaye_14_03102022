import { Link } from "react-router-dom";
import { homePage } from "../../routes/routes";

const ErrorPage = () => {
  return (
    <div>
      <p>Erreur 404</p>
      <Link to={homePage}>Back to home page</Link>
    </div>
  );
};

export default ErrorPage;
