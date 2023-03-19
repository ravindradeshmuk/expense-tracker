import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ expenseData }) => {
  // const month = months[expenseData.date.getMonth()];
  const month = expenseData.date.toLocaleString("en-us", { month: "long" });
  const year = expenseData.date.getFullYear();
  const date = expenseData.date.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month"> {month} </div>
      <div className="expense-date__year"> {year} </div>
      <div className="expense-date__day"> {date} </div>
    </div>
  );
};
export default ExpenseDate;
// import React from "react";
// import "./ExpenseDate.css";

// const ExpenseDate = ({ expenseData }) => {
//   // const month = months[expenseData.date.getMonth()];
//   const month = expenseData.date.toLocaleString("en-us", { month: "long" });
//   const year = expenseData.date.getFullYear();
//   const date = expenseData.date.getDate();
//   return (
//     <div className="expense-date">
//       <div className="expense-date__month"> {month} </div>
//       <div className="expense-date__year"> {year} </div>
//       <div className="expense-date__day"> {date} </div>
//     </div>
//   );
// };
// export default ExpenseDate;

// import React from 'react'
// import "./ExpenseDate.css"

// const ExpenseDate = ({expenseData}) => {
//   const month =expenseData.date.toLocaleString("en-us",{month: "long"})
//   const year=expenseData.date.getFullYear()
//   const date=expenseData.date.getDate()
//        return(
//         <>
//         <div className='style'>
        
//         <div>{month}</div>
//          <div>{year}</div>
//       <div>{date}</div>
//    </div>
  


//     </>
//   )
// }

// export default ExpenseDate;



// //  <div className='filter'>
// //     <div className='child'>

    


// //         <label style={{color:"white"}}>FILTER BY YEAR</label>
// //         <select onChange={(e)=>props.updateFilterYeare(e.target.value)} value={props.filteryear}>
// //         <option value="2019">2019 </option>
// //         <option value="2020">2020 </option>
// //         <option value="2021">2021 </option>
// //         <option value="2022">2022 </option>
// //         </select> 