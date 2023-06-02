import {infer, z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {FieldValues} from "react-hook-form";
import "./expense_tracker.css"

const schema = z.object({
    description: z.string().min(8, "Description too short"),
    amount: z.number().min(0, "Can't have negative amount"),
    category: z.string().min(3, "Category too short")
});

type FormData = z.input<typeof schema>

function ExpenseTracker() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm(
        { resolver: zodResolver(schema) }
    )
    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);

    function handleSubmitHelper(data: FieldValues) {
        setExpenses([...expenses, data]);
        if (!categories.includes(data.category))
            setCategories([...categories, data.category]);

        console.log(expenses);
        console.log(data.category);
        console.log(categories);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSubmitHelper)}>
                <div className="row p-3 g-2">
                    <div className="col-lg-4">
                        <p>Description</p>
                        <input id="description" className="form-control" type="text" {...register("description")} />
                        { errors.description ? <p className="text-danger">{errors.description.message}</p> : null}
                    </div>
                    <div className="col-lg-4">
                        <p>Amount</p>
                        <input id="amount" className="form-control" type="number" {...register("amount", {valueAsNumber: true})} />
                        { errors.amount ? <p className="text-danger">{errors.amount.message}</p> : null}
                    </div>
                    <div className="col-lg-4">
                        <p>Category</p>
                        <input id="category" className="form-control" type="text" {...register("category")} />
                        { errors.category ? <p className="text-danger">{errors.category.message}</p> : null}
                    </div>
                    <button disabled={!isValid} className="btn btn-primary mt-3" type="submit">Submit</button>
                </div>
            </form>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
                    Categories
                </button>
                <ul className="dropdown-menu">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a className="dropdown-item">{category}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ExpenseTracker;