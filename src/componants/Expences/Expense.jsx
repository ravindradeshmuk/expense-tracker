import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
//import ExpensesList from "./ExpenseChart"
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const updateFilteredYear = (year) => {
    console.log("inside expenses");
    console.log(year);

    setFilteredYear(year);
  };

  let filteredRecords = expenseData.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear.toString();
  });

  // console.log(filteredRecords);

  return (
    <div className="expenses">
      <ExpensesFilter
        updateFilteredYear={updateFilteredYear}
        filteredYear={filteredYear}
      />
      <ExpenseChart filteredRecords={filteredRecords} />
      <ExpensesList filteredRecords={filteredRecords} />
    </div>
  );
};

export default Expenses;





// import React,{ useState }from "react";
// import "./Expense.css";
// import ExpenseFilter from "./ExpenseFilter";
// //import ExpenseDate from './ExpenseDate'
// import ExpenseItom from "./ExpenseItom";

// //import ExpenseFilter from './ExpenseFilter'

// const Expense = ({ expenseData }) => {
//   // const updateFilterYeare=()=>{
//   //   console.log("hallo");
//   // }
//   const [filterYear,setFilterYear]=useState("2020")
//   const updateFilter=(year)=>{
//     console.log(year)
//     setFilterYear(year)
//   }
//   // let filterRecord=expenseData.filter((exp)=>{
//   //  return exp.date.getfullYear().toString()===filterYear.toString()
//   // })

//   return (
  
//       <div className="container">
        
//        <ExpenseFilter updateFilter={updateFilter} filterYear={filterYear} />
       
//          {expenseData.map((row, index) => {
//           return<ExpenseItom expenseData={row} key={index} />
//         })}
        
//         </div>
      
    
//   );
// };

// export default Expense;
