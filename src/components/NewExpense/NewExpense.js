import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
//props for app.js file's addExpenseHandler function
const NewExpense = (props)=>
{
     const [isEditing,setIsEditing]=useState(false);
     //enteredExpenseData get from child component <ExpenseForm/>
  const saveExpenseDataHandler=(enteredExpenseData)=>{
     const expenseData={
          ...enteredExpenseData,
          id: Math.random().toString()
     };
     //calling function as value passed onAddExpense
     props.onAddExpense(expenseData);
  };
    const startEditingHandler =()=>{
      setIsEditing(true);
    };
    const stopEditingHandler=()=>{
      setIsEditing(false);
    }
return (
     //onaveExpenseData(on for function pointer) for communicate through child to parent component 
<div className="new-expense">
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
     {isEditing && <ExpenseForm items={stopEditingHandler} onsaveExpenseData={saveExpenseDataHandler}/>}
</div>
);
};
export default NewExpense;