import {FormEvent, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {FieldValues} from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm();

    function handleSubmitDef(data: FieldValues) {
        console.log(data);
    }

    const [person, setPerson] = useState({
        name: "",
        age: ""
    });

    return (
        <form onSubmit={handleSubmit(handleSubmitDef)}>
            <div className="mb-3 col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" { ...register("name", { required: true, maxLength: 3}) } type="text" className="form-control"/>
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age" { ...register("age", { required: true, min: 18 }) } type="number" className="form-control"/>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form;