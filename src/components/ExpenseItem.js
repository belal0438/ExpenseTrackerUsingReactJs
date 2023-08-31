import React from "react";
import "./ExpenseItem.css";

//props we name name anything instaed of props, it work on key value pair
//Ex:-
//  title={expenses[1].title}
//  amount={expenses[1].amount}
//  date={expenses[1].date}

// where tilte, amount, date are key of respective value
// props are just like a object
// props allows you to make your component reusable
// props allows you to passed data from another component to these component

const ExpenseItem = (props) => {
  return (
    <>
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
