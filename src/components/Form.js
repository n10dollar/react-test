import {FormEvent, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {FieldValues} from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);

    function handleSubmitDef(data: FieldValues) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitDef)}>
            <div className="mb-3 col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" { ...register("name", { required: true, minLength: 3}) } type="text" className="form-control"/>
                {/*{ errors.name?.type === "required" ? <p>REQUIRED!!</p> : null}*/}
                {/*{ errors.name?.type === "maxLength" ? <p>MAX_LENGTH!!</p> : null}*/}
                { errors.name?.type ? <p className="text-danger">ERROR: {errors.name.type}</p> : null}
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age" { ...register("age", { required: true, min: 18 }) } type="number" className="form-control"/>
                {/*{ errors.age?.type === "required" ? <p>REQUIRED!!</p> : null}*/}
                {/*{ errors.age?.type === "min" ? <p>MIN!!</p> : null}*/}
                { errors.age?.type ? <p className="text-danger">ERROR: {errors.age.type}</p> : null}
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form;