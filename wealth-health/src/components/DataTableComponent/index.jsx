import MaterialTable from "material-table";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

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
          { title: "First Name", field: "firstName" },
          { title: "Last Name", field: "lastName" },
          { title: "Start Date", field: "startDate", type: "date" },
          { title: "Department", field: "department" },
          { title: "Date of Birth", field: "dateOfBirth", type: "date" },
          { title: "Street", field: "street" },
          { title: "City", field: "city" },
          { title: "State", field: "state" },
          { title: "Zip Code", field: "zipCode" },
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
