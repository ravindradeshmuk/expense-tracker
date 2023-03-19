import React from 'react'
import "./ExpensesFilter.css"
const ExpenseFilter = (props) => {

  return (
    <div className='expensefilter'>
      <div className='expensecontroler'>
      <label>fiter by year</label>
      <select onChange={(e)=>props.updateFilter(e.target.value)} value={props.filterYear }>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      </div>
    </div>
  )
}

export default ExpenseFilter