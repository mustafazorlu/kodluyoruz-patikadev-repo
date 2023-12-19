import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Kullanıcılar</h2>
            <div className="users_wrapper">
                {users.map((user) => (
                    <div key={user.id}>
                        <Link to={`${user.id}`} state={user}>{user.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
