import React from "react";
import List from "../List";
import Form from "../Form";
import { useState, useEffect } from "react";

const Contact = () => {
    const [contacts, setContacts] = useState([
        { fullname: "Mustafa", phone_number: "505" },
        { fullname: "Habibe", phone_number: "507" },
    ]);
    console.log(contacts);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div className="container">
            <List contacts={contacts} />
            <Form setContacts={setContacts} contacts={contacts} />
        </div>
    );
};

export default Contact;
