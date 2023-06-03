
interface Expense {
    id: number,
    description: string,
    amount: number,
    category: string
}
interface Props {
    expenses: Expense[],
    deleteItem: (id: number) => void;
}

function ExpenseDisplay({expenses, deleteItem}: Props) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <th>{expense.description}</th>
                        <th>{expense.amount}</th>
                        <th>{expense.category}</th>
                        <th>
                            <button className="btn btn-outline-danger" onClick={deleteItem(expense.id)}>
                                Delete
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ExpenseDisplay;