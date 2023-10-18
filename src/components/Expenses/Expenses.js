import ExpenseItem from './ExpenseItem';
import React,{useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
const Expenses=(props)=>{
   const [filteredYear,setFilteredYear]= useState('2020');
   const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
   };
   //logic to get elements with fetched year object with built in js methods
   //here we get date object which we convert to string object where getFullYear is built in method to get year from date; and new flteredExpenses array made
   const filterExpenses = props.item.filter(expenses =>{
      return expenses.date.getFullYear().toString() === filteredYear
   });
    return(
        //use ExpenseItem block for multiple times for different item instate of writing code 
        //selected={} pass for default value
        //here we can use ?: js operator but we are using {condition &&(if true)execute this} 
         //filterExpenses.length === 0 && <p>No Expenses Found.</p>}

          //only elements that are in filteredExpenses are be displayed with ExpenseItem
          //filterExpenses.length>0 &&
        <div>
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
         <ExpenseList items={filterExpenses}/>
        </Card>
        </div>
    );
};
export default Expenses;