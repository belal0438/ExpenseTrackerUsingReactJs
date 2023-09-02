import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const ChartDataPoints = [
    { lebel: "Jan", value: 0 },
    { lebel: "Feb", value: 0 },
    { lebel: "Mar", value: 0 },
    { lebel: "Apr", value: 0 },
    { lebel: "May", value: 0 },
    { lebel: "Jun", value: 0 },
    { lebel: "Jul", value: 0 },
    { lebel: "Aug", value: 0 },
    { lebel: "Sep", value: 0 },
    { lebel: "Oct", value: 0 },
    { lebel: "Nov", value: 0 },
    { lebel: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January =>0
    ChartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={ChartDataPoints} />;
};

export default ExpensesChart;
