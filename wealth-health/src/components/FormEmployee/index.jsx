import { Form, Formik } from "formik";
import DropDownMenuComponent from "../DropDownMenuComponent";
import states from "../../data/states";
import departments from "../../data/departments";
import ModalComponent from "../ModalComponent";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import FakeComponant from "../FakeComponant";

const FormEmployee = () => {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { dispatch } = useContext(UserContext);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dataOfBirth: "",
          startDate: "",
          street: "",
          city: "",
          state: "",
          zipCode: "",
        }}
        onSubmit={(values) => {
          setModal(true);
          alert(JSON.stringify(values.firstName, null, 2));
          dispatch({ type: "ADD_EMPLOYEE", user: { firstName, lastName } });
        }}
      >
        <Form className={"create-employee"}>
          <div className={"create-employee--container-one"}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={onChangeFirstName} />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={onChangeLastName} />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input id="dateOfBirth" type="text" />

            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" type="text" />
          </div>

          <fieldset className="create-employee--container-two">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <DropDownMenuComponent data={states} />

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number" />
            <label htmlFor="department">Department</label>
            <DropDownMenuComponent data={departments} />
            <button type={"submit"}>Save</button>
          </fieldset>
        </Form>
      </Formik>
      <ModalComponent state={modal} setModal={setModal}></ModalComponent>
      <FakeComponant />
    </div>
  );
};

export default FormEmployee;
