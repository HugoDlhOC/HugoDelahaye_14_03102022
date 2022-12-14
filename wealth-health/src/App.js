import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CurrentEmployees from "./pages/CurrentEmployees";
import { homePage, employeesPage, errorPage } from "./routes/routes";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={homePage} element={<Home />}></Route>
          <Route path={employeesPage} element={<CurrentEmployees />}></Route>
          <Route path={errorPage} element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
