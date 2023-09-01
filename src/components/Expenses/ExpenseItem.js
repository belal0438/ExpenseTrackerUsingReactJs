import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!!!!"); // we assign new value using setTitle(pass new value over here)
    // console.log(title);
  };

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>chang title</button>
      </Card>
    </>
  );
};

export default ExpenseItem;

// clickHandler we connot write these function as clickHandler() because javascript will excutes the function when all the above code(all jsx code) will parsed , is mean it(clickHandler) does not excute whne click event happen

///

// in above code we can see we just function (ExpenseItem) and call in another file(Expeses.js) that why when we want to chang something the we need to way to tell to the raect taht somting has chang, for these pupose react  usse State
// State --> we need a way of telling raect that somthing chang and that certain component should be re-evaluated and that where react introduces us special concept called State

// why setTitle("Updated!!!!!") instead of title = "Updated!!!!!";
// beacuse clling the value (setTitle("Updated!!!!!")) is not just like the assingning the new value but is a specail variable , it , mange by react somwhere in memory an when we call this (setTitle("Updated!!!!!")) function the special variable will not just reciev new value but the component function (ExpensIten) in which you call the set updateding function and in which you initialise useState will be excuted again that is exactly what we need
