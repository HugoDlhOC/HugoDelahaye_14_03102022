import { Form, Formik, useFormik } from "formik";
import DropDownMenuComponent from "../DropDownMenuComponent";
import states from "../../data/states";
import departments from "../../data/departments";
import ModalComponent from "../ModalComponent";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import FakeComponent from "../FakeComponent";
import Select from "react-select";

const FormEmployee = () => {
  const [modal, setModal] = useState(false);
  const { dispatch } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dataOfBirth: "",
      startDate: "",
      street: "",
      state: "",
      city: "",
      zipCode: "",
      department: "",
    },
    onSubmit: (values) => {
      setModal(true);
      dispatch({
        type: "ADD_EMPLOYEE",
        user: {
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: values.dateOfBirth,
          startDate: values.startDate,
          street: values.street,
          state: values.state,
          city: values.city,
          zipCode: values.zipCode,
          department: values.department,
        },
      });
    },
  });

  return (
    <div>
      <form className={"create-employee"} onSubmit={formik.handleSubmit}>
        <div className={"create-employee--container-one"}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={formik.handleChange}
            name={"firstName"}
            value={formik.values.firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={formik.handleChange}
            name="lastName"
            value={formik.values.lastName}
          />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            name="dateOfBirth"
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
          />
        </div>

        <fieldset className="create-employee--container-two">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            onChange={formik.handleChange}
            value={formik.values.street}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />

          <label htmlFor="state">State</label>
          {/*DropMenu*/}
          <Select
            onChange={(value) => formik.setFieldValue("state", value.value)}
            options={states}
            isSearchable={false}
            isClearable={false}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            name="zipCode"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
          />
          <label htmlFor="department">Department</label>
          {/*DropMenu*/}
          <Select
            onChange={(value) =>
              formik.setFieldValue("department", value.value)
            }
            options={departments}
            isSearchable={false}
            isClearable={false}
          />
          <button type={"submit"}>Save</button>
        </fieldset>
      </form>
      <ModalComponent state={modal} setModal={setModal}></ModalComponent>
      <FakeComponent />
    </div>
  );
};

export default FormEmployee;
