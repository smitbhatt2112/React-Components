import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) =>{
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  return <ul className="expenses-list">
    { 
    props.items.map((expense) =>( 
      //key should use to update list in more efficient way for react
    <ExpenseItem 
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
      ))}
  </ul>
 };
  export default ExpenseList ;