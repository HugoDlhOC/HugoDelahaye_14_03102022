import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CurrentEmployees from "./pages/CurrentEmployees";
import { homePage, employeesPage, errorPage } from "./routes/routes";
import UserContextProvider from "./context/UserContext";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path={homePage} element={<Home />}></Route>
            <Route path={employeesPage} element={<CurrentEmployees />}></Route>
            <Route path={errorPage} element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
};

export default App;
