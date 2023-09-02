import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseData = (enterdexpenseData) => {
    const expenseData = {
      ...enterdexpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  //   const saveExpenseDataHandler = (enteredExpenseData) => {
  //     const expenseData = {
  //       ...enteredExpenseData,
  //       id: Math.random().toString(),
  //     };
  //     props.onAddExpense(expenseData);
  //     setIsEditing(false);
  //   };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  //   const startEditingHandler = () => {
  //     setIsEditing(true);
  //   };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  //   const stopEditingHandler = () => {
  //     setIsEditing(false);
  //   };

  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}

        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={onSaveExpenseData}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </>
  );
};

//   return (
//     <div className='new-expense'>
//       {!isEditing && (
//         <button onClick={startEditingHandler}>Add New Expense</button>
//       )}
//       {isEditing && (
//         <ExpenseForm
//           onSaveExpenseData={saveExpenseDataHandler}
//           onCancel={stopEditingHandler}
//         />
//       )}
//     </div>
//   );
// };

export default NewExpense;

// import React, { useState } from 'react';

// import ExpenseForm from './ExpenseForm';
// import './NewExpense.css';

// const NewExpense = (props) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const saveExpenseDataHandler = (enteredExpenseData) => {
//     const expenseData = {
//       ...enteredExpenseData,
//       id: Math.random().toString(),
//     };
//     props.onAddExpense(expenseData);
//     setIsEditing(false);
//   };

//   const startEditingHandler = () => {
//     setIsEditing(true);
//   };

//   const stopEditingHandler = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div className='new-expense'>
//       {!isEditing && (
//         <button onClick={startEditingHandler}>Add New Expense</button>
//       )}
//       {isEditing && (
//         <ExpenseForm
//           onSaveExpenseData={saveExpenseDataHandler}
//           onCancel={stopEditingHandler}
//         />
//       )}
//     </div>
//   );
// };

// export default NewExpense;
