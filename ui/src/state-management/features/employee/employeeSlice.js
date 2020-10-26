import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  query: { name: "", startDate: "", endDate: "" },
};

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    setEmployees: (state, action) => ({
      ...state,
      employees: [...action.payload],
    }),
    setQuery: (state, action) => ({
      ...state,
      query: { ...state.query, ...action.payload },
    }),
  },
});

export const { setEmployees, setQuery } = employeeSlice.actions;
export default employeeSlice.reducer;
