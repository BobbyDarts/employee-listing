import * as React from "react";
import UserIcon from "../../media/icons/heroicons/user";
import { getAge, humanReadableDate } from "../../utilities/datetime";
import { sortedByLastNameFirstName } from "../../utilities/sort";

const EmployeeCard = ({ employee }) => (
  <div className="flex flex-row bg-white p-4 shadow rounded-lg mb-1">
    <div className="inline-flex shadow-sm border border-gray-200 rounded-full overflow-hidden h-20 w-20">
      <UserIcon className="h-full w-full text-primary-500" />
    </div>

    <div className="flex flex-col ml-2 leading-4 justify-center">
      <p className="font-bold text-2xl">
        {`${employee.firstName} ${employee.lastName}`}{" "}
        <span className="text-sm">
          {`(${getAge(...employee.birthDate.split(/-/))})`}
        </span>
      </p>
      <p className="mb-2 text-base italic text-primary-500 font-medium">
        {employee.jobTitle}
      </p>
      <p className="text-sm font-light">
        {`Started ${humanReadableDate(...employee.startDate.split(/-/))}`}
      </p>
      {employee.endDate && (
        <p className="text-sm font-light">
          {`Left ${humanReadableDate(...employee.endDate.split(/-/))}`}
        </p>
      )}
    </div>
  </div>
);

const EmployeeCards = ({ employees }) => (
  <section className="font-sans">
    {sortedByLastNameFirstName(employees).map((employee, index) => (
      <EmployeeCard key={index} employee={employee} />
    ))}
  </section>
);

export default EmployeeCards;
