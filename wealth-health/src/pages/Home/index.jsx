import FormEmployee from "../../components/FormEmployee";
import Header from "../../components/Header";
import {Calendar} from "@hugo.delahaye53/react-datepicker";

/**
 * This component represents the home page with the employees creation form.
 * @returns JSX
 */
const Home = () => {
  return (
    <div>
      <Header itIsHomePage={true} />
      <FormEmployee />
        <Calendar languageChoice={"fr"} yearMin={2001} yearMax={2120} returnFormat={"dd/MM/yyyy"} classToggle={"calendar"} defaultDate={new Date()}/>
    </div>
  );
};

export default Home;
