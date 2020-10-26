import * as React from "react";
import TableHead from "./table-head";
import TableRow from "./table-row";
import TableCell from "./table-cell";
import { getAge, humanReadableDate } from "../../utilities/datetime";
import { sortedByLastNameFirstName } from "../../utilities/sort";

const COLUMNS = ["Name", "Title", "Age", "Start Date", "End Date"];

const EmployeeTable = ({ employees, ...rest }) => (
  <table className="table-auto font-sans w-full">
    <TableHead columns={COLUMNS} />
    <tbody>
      {sortedByLastNameFirstName(employees).map((employee, index) => (
        <TableRow key={index}>
          <TableCell>{`${employee.firstName} ${employee.lastName}`}</TableCell>
          <TableCell>{employee.jobTitle}</TableCell>
          <TableCell>{getAge(...employee.birthDate.split(/-/))}</TableCell>
          <TableCell>
            {humanReadableDate(...employee.startDate.split(/-/))}
          </TableCell>
          <TableCell>
            {employee.endDate
              ? humanReadableDate(...employee.endDate.split(/-/))
              : ""}
          </TableCell>
        </TableRow>
      ))}
    </tbody>
  </table>
);

export default EmployeeTable;
