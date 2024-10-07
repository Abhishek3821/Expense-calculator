import React, { useState } from 'react'
import './App.css'

const Ui = () => {

    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        if (!input || !amount) return;

        const newExpense = {
            id: expenses.length + 1,
            title: input,
            amount: amount
        };
        setExpenses([...expenses, newExpense])
        setInput('')
        setAmount('')
        console.log(newExpense)
    }

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expenses) => expenses.id !== id))
    }


    return (
        <div className='parent'>
            <div className='full-box' >
                <div className='input-box' >
                    <h1>Expense Tracker </h1>
                    <input type="text" placeholder='Expense' onChange={(e) => setInput(e.target.value)} value={input} />
                    <input type="number" placeholder='Amount' onChange={(e) => setAmount(e.target.value)} value={amount} />
                    <button onClick={addExpense} >Add Expense</button>
                </div>
                <ul className='expense-list' >
                    {
                        expenses.map((expense) => (
                            <li key={expense.id}>
                                <span>{expense.title}</span>
                                <span>{expense.amount}</span>
                                <button onClick={() => deleteExpense(expense.id)} >Delete</button>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>



    )
}

export default Ui;
