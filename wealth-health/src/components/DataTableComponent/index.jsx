import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useEffect, useMemo, useState } from "react";
import ShowEntriesSelect from "../ShowEntriesSelect";
import { useSelector } from "react-redux";

/**
 * This component represents the table where user data is displayed
 * @returns JSX
 */
const DataTableComponent = () => {
  const dateTable = [];
  const users = useSelector((state) => state.employees);

  users.map((item) => {
    dateTable.push({
      firstName: item.firstName,
      lastName: item.lastName,
      startDate: item.startDate,
      department: item.department,
      dateOfBirth: item.dateOfBirth,
      street: item.street,
      city: item.city,
      state: item.stateCountry,
      zipCode: item.zipCode,
    });
  });

  //select
  const options = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
    { value: "150", label: "150" },
  ];

  const [valueSelect, setValueSelect] = useState(parseInt(options[0].value));

  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  //for sort date
  const dateComparator = (date1, date2) => {
    const date1Number = monthToComparableNumber(date1);
    const date2Number = monthToComparableNumber(date2);
    if (date1Number === null && date2Number === null) {
      return 0;
    }
    if (date1Number === null) {
      return -1;
    }
    if (date2Number === null) {
      return 1;
    }
    return date1Number - date2Number;
  };

  const monthToComparableNumber = (date) => {
    if (date === undefined || date === null || date.length !== 10) {
      return null;
    }
    const yearNumber = Number.parseInt(date.substring(6, 10));
    const monthNumber = Number.parseInt(date.substring(3, 5));
    const dayNumber = Number.parseInt(date.substring(0, 2));
    return yearNumber * 10000 + monthNumber * 100 + dayNumber;
  };

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(dateTable);
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { field: "firstName", width: 150 },
    { field: "lastName", width: 150 },
    { field: "startDate", comparator: dateComparator, width: 120 },
    { field: "department", width: 160 },
    { field: "dateOfBirth", comparator: dateComparator, width: 140 },
    { field: "street", width: 190 },
    { field: "city", width: 150 },
    { field: "state", width: 100 },
    { field: "zipCode", width: 110 },
  ]);

  //config by default for datatable (if we don't this, columnDef have sortable and filter item at any line... ---> { field: "make", sortable: true, filter: true })
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.api);
  };

  //for input search handle function
  const onFilterTextChange = (e) => {
    gridApi.setQuickFilter(e.target.value);
  };

  return (
    <section className="data-table">
      <div className="ag-theme-alpine" style={{ height: 450, width: 1300 }}>
        <div className="data-table--header">
          <ShowEntriesSelect
            onChange={(item) => setValueSelect(item)}
            options={options}
            defaultValue={options[0]}
          />
          <input
            type="search"
            placeholder="search something..."
            onChange={onFilterTextChange}
          />
        </div>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          pagination={true}
          paginationPageSize={valueSelect}
        />
      </div>
    </section>
  );
};

export default DataTableComponent;
