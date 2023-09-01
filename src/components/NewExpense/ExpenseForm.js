import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enterdTitle, setEnterTitle] = useState("");
  // const [enterdAmount, setEnterAmount] = useState("");
  // const [enterdDate, setEnterDate] = useState("");

  const [userInput, setUserInput] = {
    enterdTitle: "",
    enterdAmount: "",
    enterdDate: "",
  };

  const titleChangeHandler = (event) => {
    // setEnterTitle({
    //   ...userInput,
    //   enterdTitle: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enterdTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount({
      ...userInput,
      enterdAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setEnterDate({
      ...userInput,
      enterdDate: event.target.value,
    });
  };

  return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
