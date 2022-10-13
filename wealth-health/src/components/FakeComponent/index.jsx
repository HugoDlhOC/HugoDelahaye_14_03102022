import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const FakeComponent = () => {
  const { users } = useContext(UserContext);
  console.log(users[0]);
  return (
    <div>
      <p>{users.length}</p>
      {users.map((user, index) => {
        console.log(user);
        return (
          <div>
            <h2>{index}</h2>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.dateOfBirth}</p>
            <p>{user.startDate}</p>
            <p>{user.street}</p>
            <p>{user.city}</p>
            <p>{user.state}</p>
            <p>{user.zipCode}</p>
            <p>{user.department}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FakeComponent;
