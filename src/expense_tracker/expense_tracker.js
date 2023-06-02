import {infer, z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {FieldValues} from "react-hook-form";

const schema = z.object({
    description: z.string(),
    amount: z.number(),
    category: z.string()
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
    const [expenses, setExpenses] = useState();

    function handleSubmitHelper(data: FieldValues) {
        setExpenses({...expenses, data})
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(handleSubmitHelper)}>
            <div className="">
                <p>Description</p>
                <input id="description" className="form-control" {...register("description")} />
            </div>
            <div className="">
                <p>Amount</p>
                <input id="amount" className="form-control" {...register("amount", {valueAsNumber: true})} />
            </div>
            <div className="">
                <p>Category</p>
                <input id="category" className="form-control" {...register("category")} />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default ExpenseTracker;