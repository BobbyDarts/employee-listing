const getAge = (year, month, day) => {
  const today = new Date();
  const date = new Date(year, month, day); // m{2}/d{2}/yyyy
  let age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  return m < 0 || (m === 0 && today.getDate() < date.getDate()) ? --age : age;
};

const humanReadableDate = (year, month, day) => {
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export { getAge, humanReadableDate };
