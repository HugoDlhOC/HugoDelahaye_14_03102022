import { createContext, useReducer } from "react";
import { userDataReducer } from "./userDataReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, dispatch] = useReducer(userDataReducer, []);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
