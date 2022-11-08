import MaterialTable from "material-table";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

/**
 * This component represents the table where user data is displayed
 * @returns JSX
 */
const DataTableComponent = () => {
  const { users } = useContext(UserContext);
  const dataMaterialTable = [];
  users.map((item) => {
    dataMaterialTable.push({
      firstName: item.firstName,
      lastName: item.lastName,
      startDate: item.startDate,
      department: item.department,
      dateOfBirth: item.dateOfBirth,
      street: item.street,
      city: item.city,
      state: item.state,
      zipCode: item.zipCode,
    });
  });

  return (
    <div className="App">
      <MaterialTable
        title="Current Employees"
        columns={[
          { title: "First Name", field: "firstName", type: "string" },
          { title: "Last Name", field: "lastName", type: "string" },
          { title: "Start Date", field: "startDate", type: "date" },
          { title: "Department", field: "department", type: "string" },
          { title: "Date of Birth", field: "dateOfBirth", type: "date" },
          { title: "Street", field: "street", type: "string" },
          { title: "City", field: "city", type: "string" },
          { title: "State", field: "state", type: "string" },
          { title: "Zip Code", field: "zipCode", type: "numeric" },
        ]}
        data={dataMaterialTable}
        options={{
          sorting: true,
        }}
      />
    </div>
  );
};

export default DataTableComponent;
