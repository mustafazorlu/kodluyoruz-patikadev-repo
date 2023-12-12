import React from "react";
import PropTypes from "prop-types";

const User = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <p>{user.name}</p>
            ))}
        </div>
    );
};

//proplara tip vermek

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    isLoggedIn: false,
    name: "İsimsiz",
};

export default User;
