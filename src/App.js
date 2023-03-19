
import { useState } from "react";
import "./App.css";
import Expenses from "./componants/Expences/Expense";
import NewExpense from "./NewExpense/NewExpense";
//import NewExpense from "./NewExpense/NewExpense";
//import Expenses from "./Component/Expenses/Expenses";
//import NewExpense from "./Component/NewExpense/NewExpense";

const dummyData = [
  {
    id: "exp1",
    date: new Date(2021, 4, 23),
    item: "New TV",
    price: 599.25,
  },
  {
    id: "exp2",
    date: new Date(2021, 3, 16),
    item: "Car Insuranse",
    price: 295.62,
  },
  {
    id: "exp3",
    date: new Date(2022, 2, 18),
    item: "New Desk (Wooden)",
    price: 450.38,
  },
  {
    id: "exp4",
    date: new Date(2022, 5, 18),
    item: "New Laptop",
    price: 50.38,
  },
  {
    id: "exp4",
    date: new Date(2020, 9, 18),
    item: "New Car",
    price: 950.38,
  },
];

function App() {
  const [expenseData, setExpenseData] = useState(dummyData);

  const getNewExpenseRecord = (data) => {
    console.log("printed from app.js");
    console.log(data);

    setExpenseData((prev) => [data, ...prev]);
  };

  return (
    <div>
      <NewExpense readExpenseData={getNewExpenseRecord} />
      <Expenses expenseData={expenseData} />
    </div>
  );
}

export default App;
// import React, { useState } from "react";
// import "./App.css";
// import Expense from "./componants/Expences/Expense";

// import NewExpence from "./NewExpense/NewExpence";

// const dummyData = [
//   {
//     id: "rte123",
//     date: new Date(2021, 4, 18),
//     item: "New desk women",
//     price: "450.25",
//   },
//   {
//     id: "ravie123",
//     date: new Date(2021, 6, 16),
//     item: "New desk ",
//     price: "670.25",
//   },
//   {
//     id: "ravie123",
//     date: new Date(2021, 8, 1),
//     item: "New desk ",
//     price: "120.25",
//   },
 
 
// ];

// const App = () => {
//   //const [filteryear,setFiterYear]=useState()
// const [expenseData,setExpenseData]=useState(dummyData)
 
//   const readExpenseData = (data) => {
    
//     //  expenseData.push(Data)
//     //console.log(data)
//     setExpenseData([data,...expenseData])
//   };

//   //setFiterYear()

//   return (
//     <>
//       <NewExpence readExpenseData={readExpenseData} />
//       <div className="secondcon">
//         <Expense expenseData={expenseData} />
//       </div>
//       {/* <div>
//     <CompA  Data={Data[1]}/>
//     </div>
//   <div>
//     <CompA  Data={Data[2]}/>
//     </div> */}
//     </>
//   );
// };

// export default App;
