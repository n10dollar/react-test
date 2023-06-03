import {useState} from "react";
import {FieldValues} from "react-hook-form";
import ExpenseInput from "./expense_input";
import CategorySelector from "./category_selector";
import ExpenseDisplay from "./expense_display";

function ExpenseTracker() {

    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [nextID, setNextID] = useState(1);

    function onClick(expense: FieldValues) {
        expense = {...expense, id: nextID}
        setNextID(nextID + 1);

        setExpenses([...expenses, expense]);
        if (!categories.includes(expense.category))
            setCategories([...categories, expense.category]);

        console.log(expenses);
    }

    function deleteItem(id: number) {
        const removedExpense = expenses.filter(expense => expense.id !== id);
        setExpenses(removedExpense);
    }

    return (
        <>
            <ExpenseInput nextID={nextID} onClick={onClick}/>
            <CategorySelector categories={categories} />
            <ExpenseDisplay expenses={expenses} deleteItem={deleteItem} />
        </>
    )
}

export default ExpenseTracker;