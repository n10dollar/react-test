import {useForm} from "react-hook-form";
import {FieldValues} from "react-hook-form";
import { z } from "zod";
import { zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3),
    age: z.number().min(18)
})


type FormData = z.infer<typeof schema>;

const Form = () => {
    // eslint-disable-next-line no-mixed-operators
    const { register, handleSubmit, formState: { errors, isValid } } = useForm( { resolver: zodResolver(schema) });
    console.log(errors);

    function handleSubmitDef(data: FieldValues) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitDef)}>
            <div className="mb-3 col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" { ...register("name") } type="text" className="form-control"/>
                { errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age" { ...register("age", { valueAsNumber: true }) } type="number" className="form-control"/>
                { errors.age ? <p className="text-danger">{errors.age.message}</p> : null}
            </div>
            <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form;