const lastNameFirstNameSort = (a, b) =>
  a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()) ||
  a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());

const sortedByLastNameFirstName = (obj) =>
  !Array.isArray(obj) ? obj : obj.slice().sort(lastNameFirstNameSort);

export { sortedByLastNameFirstName };
