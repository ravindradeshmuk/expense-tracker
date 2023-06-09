import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const getNewExpenseData = (data) => {
    props.readExpenseData(data);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={() => setShowExpenseForm(true)}>
          Add New Expense
        </button>
      )}

      {showExpenseForm && (
        <ExpenseForm
          sendData={getNewExpenseData}
          setShowExpenseForm={setShowExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;



// import React from 'react'
// import ExpenseForm from './ExpenseForm'
// import "./NewExpense.css"

// const NewExpence = ({readExpenseData}) => {
//   const newExpenseData=(data)=>{
//     // console.log("hello from newExpense")
//     readExpenseData(data)
//   }
//   return (
//     <div>
//         <ExpenseForm sendData={newExpenseData}/>
        
//     </div>
//   )
// }

// export default NewExpence