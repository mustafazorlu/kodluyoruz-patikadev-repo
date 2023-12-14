import React from "react";
import { useState, useEffect } from "react";

const initialValues = { fullname: "", phone_number: "" };

const Form = ({ setContacts, contacts }) => {
    const [form, setForm] = useState(initialValues);

    useEffect(() => {
        clearInput();
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        setContacts([...contacts, form]);
        console.log(form);
    };

    const clearInput = () => {
        setForm(initialValues);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="fullname"
                    placeholder="fullname"
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    name="phone_number"
                    placeholder="phone number"
                    value={form.phone_number}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    );
};

export default Form;
