export const formatDate = (date) => {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (isNaN(day) || isNaN(monthIndex) || isNaN(year))
    return "No available date";
  let time = [hour, minutes, seconds].join(":");
  let da = [monthNames[monthIndex], day, year].join(" ");
  return [da, time].join(" ");
};
