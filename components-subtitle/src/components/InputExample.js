import React from "react";
import { useState } from "react";

const InputExample = () => {
    // const [name, setName] = useState("Mustafa");
    // const [surname, setSurname] = useState("Zorlu");

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // };
    // const onChangeSurname = (e) => {
    //     setSurname(e.target.value);
    // };

    const [form, setForm] = useState({
        name: "",
        surname: "",
    });

    const onChangeInput = (e) => {
        console.log(e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div>
            Please enter a name
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={onChangeInput}
            />
            <input
                name="surname"
                type="surname"
                value={form.surname}
                onChange={onChangeInput}
            />
            {form.name}
            -
            {form.surname}
        </div>
    );
};

export default InputExample;
