import React from "react";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2022, 2, 18);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 2.55;
  //   const Month = props.date.toLocaeString("en-Us", { month: "long" });

  return (
    <>
      <div>
        <ExpenseDate datee={props.date} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <div>{props.amount}</div>
      </div>
    </>
  );
};

export default ExpenseItem;
