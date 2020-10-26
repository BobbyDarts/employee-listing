import * as React from "react";
import flatpickr from "flatpickr";
import "./flatpickr_purple.css";
import CalendarIcon from "../../media/icons/heroicons/calendar";
import SearchIcon from "../../media/icons/heroicons/search";
import XCircleIcon from "../../media/icons/heroicons/x-circle";

const FieldLabel = ({ name, label = null }) => (
  <label
    className="block text-primary-500 text-xs font-bold pb-0 uppercase whitespace-no-wrap"
    htmlFor={name}
  >
    {`${label ? label : name}`}
  </label>
);

const LeftIcon = ({ icon, ...rest }) => {
  const Component = icon;
  return (
    <div className="absolute h-10 left-0 flex items-center pl-2 hover:cursor-pointer">
      <Component className="w-5 h-5" {...rest} />
    </div>
  );
};

const RightIcon = ({ icon, onClick, ...rest }) => {
  const Component = icon;
  return (
    <div
      className="absolute h-10 right-0 flex items-center pr-3 hover:cursor-pointer"
      onClick={onClick}
    >
      <Component className="w-5 h-5" {...rest} />
    </div>
  );
};

const DateField = React.forwardRef(
  (
    {
      name,
      label = null,
      className = "",
      errors,
      onClear,
      onChange = () => {},
      minDate = "",
      maxDate = "",
      pickerRef = null,
      ...rest
    },
    ref
  ) => {
    if (pickerRef.current) {
      flatpickr(pickerRef.current, {
        onChange: onChange,
        minDate: minDate,
        maxDate: maxDate,
      });
    }

    return (
      <div
        className={`relative text-primary-300 focus-within:text-primary-500 ${className}`}
      >
        <FieldLabel name={name} label={label} />
        <div className="flex w-full">
          <LeftIcon icon={CalendarIcon} />
          <input
            type="text"
            name={name}
            className="text-lg sm:text-xs md:text-base text-primary-300 focus:text-primary-500 bg-white pl-8 py-2 focus:outline-none focus:font-semibold w-full"
            placeholder="Select Date..."
            autoComplete="off"
            ref={ref}
          />
          <RightIcon
            icon={XCircleIcon}
            title="clear"
            onClick={(event) => onClear(event)}
          />
        </div>
      </div>
    );
  }
);

const SearchField = React.forwardRef(
  (
    {
      name,
      label = null,
      className = "",
      errors,
      onClear,
      onChange = () => {},
      ...rest
    },
    ref
  ) => (
    <div
      className={`relative text-primary-300 focus-within:text-primary-500 ${className}`}
    >
      <FieldLabel name={name} label={label} />

      <div className="flex">
        <LeftIcon icon={SearchIcon} />
        <input
          type="text"
          name={name}
          className="text-lg sm:text-xs md:text-base text-primary-300 focus:text-primary-500 bg-white pl-8 py-2 focus:outline-none focus:font-semibold w-full"
          placeholder="Search..."
          autoComplete="off"
          onChange={onChange}
          ref={ref}
        />
        <RightIcon
          icon={XCircleIcon}
          title="clear"
          onClick={(event) => onClear(event)}
        />
      </div>
    </div>
  )
);

export { DateField, SearchField };
