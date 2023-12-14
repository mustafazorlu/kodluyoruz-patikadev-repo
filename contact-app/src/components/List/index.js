import React from "react";
import { useState } from "react";

const List = ({ contacts }) => {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) =>
        Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        )
    );

    console.log(filtered);

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="filtered contact"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </div>
            <ul className="contact-list">
                {filtered.map((contact, index) => (
                    <li key={index}>{contact.fullname} {contact.phone_number}</li>
                ))}
                Total Contacts {filtered.length}
            </ul>
        </div>
    );
};

export default List;
