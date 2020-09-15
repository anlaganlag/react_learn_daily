import React from "react";

const DateToday = () => {
  var date = new Date();
  var month = date.getMonth();
  var monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = date.getDate();
  var finalDate = `${monthArr[month]},${date}`;

  return <>{finalDate}</>;
};

export default DateToday;
