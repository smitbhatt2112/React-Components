import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES=[
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      }
  ];
  const App=()=>{
   const [expensesarray,setExpensesarray]= useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) =>{
    //here prevExpenses==DUMMY_EXPENSES(array)
    setExpensesarray( (prevExpenses) =>{
      return[expense, ...prevExpenses];
    });
  };
  //React.createElement(any tag, its attributes,contant between that tag) 
  //Note that this  also clear concept why we need to create parent tag in react bcz we cant return more than one element without parent element here we can clearly see that 
  //return React.createElement('div',{},React.createElement('h2',{},"Let's start"),React.createElement(Expenses,{item:expencesarray}));
  return (
    //onAdExpense is passing function pointer
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses item={expensesarray}/>
     </div>
  );
}

export default App;
