import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {FieldValues} from "react-hook-form";

interface Props {
    onClick: (data: FieldValues) => void;
}

const schema = z.object({
    description: z.string().min(8, "Description too short"),
    amount: z.number().min(0, "Can't have negative amount"),
    category: z.string().min(3, "Category too short")
});
function ExpenseInput({onClick}: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm(
        { resolver: zodResolver(schema) }
    )

    return (
        <form onSubmit={handleSubmit(onClick)}>
            <div className="row p-3 g-2">
                <div className="col-lg-4">
                    <p>Description</p>
                    <input id="description" className="form-control" type="text" {...register("description")} />
                    {errors.description ? <p className="text-danger">{errors.description.message}</p> : null}
                </div>
                <div className="col-lg-4">
                    <p>Amount</p>
                    <input id="amount" className="form-control"
                           type="number" {...register("amount", {valueAsNumber: true})} />
                    {errors.amount ? <p className="text-danger">{errors.amount.message}</p> : null}
                </div>
                <div className="col-lg-4">
                    <p>Category</p>
                    <input id="category" className="form-control" type="text" {...register("category")} />
                    {errors.category ? <p className="text-danger">{errors.category.message}</p> : null}
                </div>
                <button disabled={!isValid} className="btn btn-primary mt-3" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ExpenseInput;