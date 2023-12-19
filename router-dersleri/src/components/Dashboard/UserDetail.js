import React from "react";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetail = () => {
    let { id } = useParams();
    const location = useLocation();
    console.log(location)
    console.log(id);
    const [user, setUser] = useState({});
    console.log(user);

    if (id > 10) {
        id = 0;
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [id]);

    return (
        <div>
            <div>Kullanıcı adı: {user.name}</div>
            <div>Kullanıcı rumuz: {user.username}</div>
            <div>Kullanıcı telefonu: {user.phone}</div>
            <div>Kullanıcı website: {user.website}</div>
            <div>Kullanıcı email: {user.email}</div>

            {JSON.stringify(location.state)}

            <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
        </div>
    );
};

export default UserDetail;
