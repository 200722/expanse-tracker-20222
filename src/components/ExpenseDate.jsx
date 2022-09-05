import React from "react";

const ExpenseDate = (props) => {
  const Month = props.datee.toLocaleString("en-Us", { month: "long" });
  const Day = props.datee.toLocaleString("en-Us", { day: "2-digit" });
  const Year = props.datee.getFullYear();
  return (
    <div>
      <div>{Month}</div>
      <div>{Day}</div>
      <div>{Year}</div>
    </div>
  );
};

export default ExpenseDate;
