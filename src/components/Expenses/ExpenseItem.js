import './ExpenseItem.css';
import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
const ExpenseItem=(props)=>{
    //usestate should always write in component function ex.here ExpenceItem; you cant write it in any nested function or outside
    const [title, setTitle]= useState(props.title);
    const clickHandler = ()=>
    {
        setTitle('Updated');
        console.log(title);
    }
    return (
        <li>
      <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>   
            </Card></li>
    );
}
export default ExpenseItem;