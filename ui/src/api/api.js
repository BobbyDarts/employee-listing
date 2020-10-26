import axios from "axios";

// GET...
const getEmployees = ({ name = null, startDate = null, endDate = null }) =>
  axios.get("/api/employees", {
    params: {
      ...(name && { name }),
      ...(startDate && { startDate }),
      ...(endDate && { endDate }),
    },
  });

export { getEmployees };
