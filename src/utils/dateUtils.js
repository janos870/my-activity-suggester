export const getFormattedDate = () => {
  const today = new Date();

  const formattedDate = today.toISOString().split("T")[0];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[today.getDay()];

  return `${formattedDate}, ${dayName}`;
};
