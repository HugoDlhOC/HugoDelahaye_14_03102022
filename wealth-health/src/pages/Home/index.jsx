import FormEmployee from "../../components/FormEmployee";
import Header from "../../components/Header";

/**
 * This component represents the home page with the employees creation form.
 * @returns JSX
 */
const Home = () => {
  return (
    <div>
      <Header itIsHomePage={true} />
      <FormEmployee />
    </div>
  );
};

export default Home;
