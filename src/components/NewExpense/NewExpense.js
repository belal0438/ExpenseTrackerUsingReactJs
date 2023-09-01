import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseData = (enterdexpenseData) => {
    const expenseData = {
      ...enterdexpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
      </div>
    </>
  );
};

export default NewExpense;
