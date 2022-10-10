import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const FakeComponant = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <p>{users.length}</p>
    </div>
  );
};

export default FakeComponant;
