import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = props => {
	const [filteredYear, setYear] = useState('2020')

	const filterChangeHandler = filteredYear => {
		setYear(filteredYear)
	}
	const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

	let expensesContent = <p>No expenses found</p>

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(expense => (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
		))
	} 

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
				{expensesContent}
			</Card>
		</div>
	)
}

export default Expenses
