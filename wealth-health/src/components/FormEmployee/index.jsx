import { useFormik } from "formik";
import states from "../../data/states";
import departments from "../../data/departments";
import ModalComponent from "../ModalComponent";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Select from "react-select";
import "@hugo.delahaye53/react-datepicker/dist/esm/styles/style.css";
import { Calendar } from "@hugo.delahaye53/react-datepicker";
import { styleSelect, themeSelect } from "../../services/themeStyleSelect";
import * as Yup from "yup";

const FormEmployee = () => {
  const [modal, setModal] = useState(false);
  const { dispatch } = useContext(UserContext);
  const [valueDateOfBirth, setValueDateOfBirth] = useState("");
  const [valueStartDate, setValueStartDate] = useState("");

  const AddUserSchema = Yup.object().shape({
    firstName: Yup.string("String!").required("First name required"),
    lastName: Yup.string().required("Last name required"),
    dateOfBirth: Yup.string(),
    startDate: Yup.string(),
    street: Yup.string().required("Street required"),
    state: Yup.string(),
    city: Yup.string().required("City required"),
    zipCode: Yup.number()
      .min(1, "Too Short! Minimum 1")
      .required("Zip code required"),
    department: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      state: "",
      city: "",
      zipCode: "",
      department: "",
    },
    validationSchema: AddUserSchema,
    onSubmit: (values, { resetForm }) => {
      setModal(true);
      dispatch({
        type: "ADD_EMPLOYEE",
        user: {
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: valueDateOfBirth,
          startDate: valueStartDate,
          street: values.street,
          state: values.state,
          city: values.city,
          zipCode: values.zipCode,
          department: values.department,
        },
      });
      resetForm();
    },
  });

  return (
    <div>
      <form className={"create-employee"} onSubmit={formik.handleSubmit}>
        <h2>Create Employee</h2>
        <fieldset className={"create-employee--container-one"}>
          <legend>Main infos</legend>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={formik.handleChange}
            name={"firstName"}
            value={formik.values.firstName}
            className={"input-form"}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <p className={"error-form"}>{formik.errors.firstName}</p>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={formik.handleChange}
            name="lastName"
            value={formik.values.lastName}
            className={"input-form"}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <p className={"error-form"}>{formik.errors.lastName}</p>
          ) : null}

          <Calendar
            languageChoice={"fr"}
            yearMin={1922}
            yearMax={2022}
            returnFormat={"MM/dd/yyyy"}
            defaultDate={new Date()}
            labelContent={"Date of Birth"}
            classChange={"date-picker"}
            nameInput={"dateOfBirth"}
            handleDateChanged={(value) => setValueDateOfBirth(value)}
          />
          {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
            <p className={"error-form"}>{formik.errors.dateOfBirth}</p>
          ) : null}
          <Calendar
            languageChoice={"fr"}
            yearMin={2000}
            yearMax={2022}
            returnFormat={"MM/dd/yyyy"}
            defaultDate={new Date()}
            labelContent={"Start Date"}
            classChange={"date-picker"}
            nameInput={"startDate"}
            handleDateChanged={(value) => setValueStartDate(value)}
          />
          {formik.errors.startDate && formik.touched.startDate ? (
            <p className={"error-form"}>{formik.errors.startDate}</p>
          ) : null}
        </fieldset>

        <fieldset className="create-employee--container-two">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            onChange={formik.handleChange}
            value={formik.values.street}
            className={"input-form"}
          />
          {formik.errors.street && formik.touched.street ? (
            <p className={"error-form"}>{formik.errors.street}</p>
          ) : null}

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            className={"input-form"}
          />
          {formik.errors.city && formik.touched.city ? (
            <p className={"error-form"}>{formik.errors.city}</p>
          ) : null}

          <label htmlFor="state">State</label>
          <Select
            onChange={(value) => formik.setFieldValue("state", value.value)}
            options={states}
            isSearchable={false}
            isClearable={false}
            className={"create-employee--select"}
            id={"state"}
            aria-label={"state"}
            styles={styleSelect}
            defaultValue={states[0]}
            theme={themeSelect}
          />
          {formik.errors.state && formik.touched.state ? (
            <p className={"error-form"}>{formik.errors.state}</p>
          ) : null}

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            name="zipCode"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
            className={"input-form"}
          />
          {formik.errors.zipCode && formik.touched.zipCode ? (
            <p className={"error-form"}>{formik.errors.zipCode}</p>
          ) : null}
          <label htmlFor="department">Department</label>
          <Select
            onChange={(value) =>
              formik.setFieldValue("department", value.value)
            }
            options={departments}
            isSearchable={false}
            isClearable={false}
            className={"create-employee--select"}
            id={"department"}
            aria-label={"department"}
            styles={styleSelect}
            defaultValue={departments[0]}
            theme={themeSelect}
          />
          {formik.errors.department && formik.touched.department ? (
            <p className={"error-form"}>{formik.errors.department}</p>
          ) : null}
        </fieldset>
        <button className={"create-employee--submit"} type={"submit"}>
          Save
        </button>
      </form>
      <ModalComponent state={modal} setModal={setModal}></ModalComponent>
    </div>
  );
};

export default FormEmployee;
