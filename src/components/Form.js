import {FormEvent, useRef, useState} from "react";
import {useForm} from "react-hook-form";

const Form = () => {
    const form = useForm();
    console.log(form);

    const [person, setPerson] = useState({
        name: "",
        age: ""
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(person.name);
        console.log(parseInt(person.age));
        console.log(person);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" value={person.name} onChange={(event) => setPerson({ ...person, name: event.target.value })} type="text" className="form-control"/>
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age" value={person.age} onChange={(event) => setPerson({ ...person, age: parseInt(event.target.value) })} type="number" className="form-control"/>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form;