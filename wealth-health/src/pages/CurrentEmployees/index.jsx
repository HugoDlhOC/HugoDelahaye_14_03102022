import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const CurrentEmployees = () => {
  const { users } = useContext(UserContext);
  console.log(users.length);
  return <div></div>;
};

export default CurrentEmployees;
