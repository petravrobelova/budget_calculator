import React from 'react';
import ExpenseItem from './ExpenseItem';

import {MdDelete} from 'react-icons/md'

const ExpenseList = ({expenses, handleDelete, handleEdit, clearItems}) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expense={expense}
                            handleDelete={handleDelete} handleEdit={handleEdit} />
                })}
            </ul>
            {/* only if the expenses are not empty, the button will be displayed */}
            {expenses.length > 0 && (
            <button className="btn" onClick={clearItems}>
                clear expenses
                <MdDelete className="btn-icon" />
            </button>
            )}
        </>
    )
}

export default ExpenseList;

