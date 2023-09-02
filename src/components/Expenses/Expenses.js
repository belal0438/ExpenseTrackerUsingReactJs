import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2020");
  const filterChangHnadler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangHnadler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id} // we can use index as well but it's not best prectice
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
