import * as React from "react";

const TableHead = ({ columns }) => (
  <thead>
    <tr className="bg-primary-500 uppercase text-sm text-white font-light">
      {columns.map((column, index) => (
        <th
          key={`header-${index}`}
          className="px-4 py-2 text-left whitespace-no-wrap text-xs sm:text-base"
        >
          {column}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHead;
