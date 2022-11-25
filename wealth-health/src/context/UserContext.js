import {createContext, useEffect, useReducer} from "react";
import { userDataReducer } from "./userDataReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, dispatch] = useReducer(userDataReducer, [], () => {
    //initial value
    const localData = localStorage.getItem('users');
    //if we have users, they are present in local storage, or if it empties, return empty table value.
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
