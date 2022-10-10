import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CurrentEmployees from "./pages/CurrentEmployees";
import { homePage, employeesPage } from "./assets/routes/routes";
import { useState } from "react";
import UserContextProvider from "./context/UserContext";

const App = () => {
  const [value, setValue] = useState("hello, this is a context");
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path={homePage} element={<Home />}></Route>
            <Route path={employeesPage} element={<CurrentEmployees />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
};

export default App;
