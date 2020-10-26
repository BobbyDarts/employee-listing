import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmployees,
  setQuery,
} from "../state-management/features/employee/employeeSlice";
import Button from "../components/button";
import Filter from "../components/filter/filter";
import Loading from "../components/loading";
import { DateField, SearchField } from "../components/filter/fields";
import { useBreakpoint } from "../utilities/hooks/breakpoint";
import { getEmployees } from "../api/api";

const EmployeeTable = React.lazy(() =>
  import("../components/tables/employee-table")
);

const EmployeeCards = React.lazy(() =>
  import("../components/cards/employee-cards")
);

const Component = ({ employees, breakpoints, ...rest }) =>
  breakpoints.xs ? (
    <EmployeeCards employees={employees} {...rest} />
  ) : (
    <EmployeeTable employees={employees} {...rest} />
  );

const Employees = (props) => {
  const dispatch = useDispatch();
  const startDateRef = React.useRef();
  const endDateRef = React.useRef();
  const breakpoints = useBreakpoint();

  const updateData = (data = {}) =>
    getEmployees(data)
      .then((response) => dispatch(setEmployees(response.data)))
      .catch((error) => console.log(error));

  React.useEffect(() => {
    getEmployees({})
      .then((response) => dispatch(setEmployees(response.data)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  const employees = useSelector((state) => state.employee.employees);

  const { register, handleSubmit, errors, reset, setValue } = useForm();
  const onSubmit = (data) => updateData(data);

  const onReset = (event) => {
    updateData();
    dispatch(setQuery({ name: "", startDate: "", endDate: "" }));
    reset();
  };

  const onClear = (name, value = "") => (event) => {
    updateData();
    dispatch(setQuery({ [name]: value }));
    setValue(name, value);
  };

  const queryParams = useSelector((state) => state.employee.query);

  return (
    <section className="m-1 md:m-4">
      <Filter
        className="flex flex-col sm:flex-row mb-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row">
          <SearchField
            className="w-full md:w-auto pr-2 mb-2 sm:mb-0"
            name="name"
            label="Name"
            errors={errors}
            ref={register()}
            onClear={onClear("name")}
            onChange={(event) =>
              dispatch(setQuery({ name: event.currentTarget.value }))
            }
          />
        </div>
        <div className="flex flex-row">
          <DateField
            className="w-1/2 md:w-auto mr-2 mb-2 sm:mb-0"
            name="startDate"
            label="Begin Range"
            errors={errors}
            ref={(e) => {
              register(e);
              startDateRef.current = e;
            }}
            onClear={onClear("startDate")}
            onChange={() =>
              dispatch(setQuery({ startDate: startDateRef.current.value }))
            }
            maxDate={queryParams.endDate}
            pickerRef={startDateRef}
          />
          <DateField
            className="w-1/2 md:w-auto sm:pr-2 mb-2 sm:mb-0"
            name="endDate"
            label="End Range"
            errors={errors}
            ref={(e) => {
              register(e);
              endDateRef.current = e;
            }}
            onClear={onClear("endDate")}
            onChange={() =>
              dispatch(setQuery({ endDate: endDateRef.current.value }))
            }
            minDate={queryParams.startDate}
            pickerRef={endDateRef}
          />
        </div>
        <div className="flex flex-row sm:justify-end md:justify-start">
          <Button
            className="w-1/2 md:w-auto shadow-none focus:outline-none mr-1"
            type="submit"
          >
            Search
          </Button>
          <Button
            className="w-1/2 sm:w-auto shadow-none focus:outline-none"
            type="button"
            onClick={onReset}
          >
            Clear
          </Button>
        </div>
      </Filter>
      <React.Suspense fallback={<Loading />}>
        {employees && employees.length ? (
          <Component
            className="mt-2"
            employees={employees}
            breakpoints={breakpoints}
          />
        ) : null}
      </React.Suspense>
    </section>
  );
};

export default Employees;
