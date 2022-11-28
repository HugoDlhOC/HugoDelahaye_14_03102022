import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: { employees: [] },

  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export default employeeSlice.reducer;
export const { addEmployee } = employeeSlice.actions;
