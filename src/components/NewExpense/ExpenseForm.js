//not nesessary to import react as react 17 launched react.createElement not use
import React,{useState} from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    //usestate stores empty string bcz in function event always store everything as string
    //You can use multiple state per component
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]= useState('');
    
    /*const [userInput,setUserInput] =useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
     });*/
    const titleChangeHandler = (event)=>{
        //approach-1:
        setEnteredTitle(event.target.value);
        //approach:2
        //...(spread operator) to copy other elemets as it is otherwise it get lost
        //setUserInput({...userInput,enteredTitle: event.target.value,})
        //approach:3 setarray or setvariable have paramete as function also
        /*setUserInput((prevState)=>{
            return{...prevState,enteredTitle: event.target.value};
        });*/
    };
    const amountChangeHandler =(event)=>{
        //setUserInput({...userInput,enteredAmount: event.target.value,})
        setEnteredAmount(event.target.value);
   };
    const dateChangeHandler=(event)=>{
        //setUserInput({...userInput,enteredDate: event.target.value,})
        setEnteredDate(event.target.value);
    };
    const submitHandler=(event)=>{
      //submit button defaultly load whole page through browser detect it;  to prevent it use preventDefault javascript   
      event.preventDefault();
      //we have to combine it bcz we used approach 1 here
      const expenseData = {
        //we can use newtitle,newdate...names
        title: enteredTitle,
        amount: enteredAmount,
        //built in date constructor which parse date string and convert into date object
        date: new Date(enteredDate)
      };
      //by using onsaveExpenseData and pass expenseData(fetched from user) we are passing expenseData to NewExpense this is called state up the data we are forwarding data to NewExpense 
      props.onsaveExpenseData(expenseData)
      //to clear form when submitted
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate(''); 
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2011-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
            <div className="new-expense__actions">
             <button type="submit">Add Expense</button>
             <button type="button" onClick={props.items}>Cancel</button>
            </div>
        </div>
    </form>
};
export default ExpenseForm;