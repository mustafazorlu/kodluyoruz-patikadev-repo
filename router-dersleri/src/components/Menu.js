import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    return (
        <nav className="navigation">
            <ul className="menu">
                <div className="menu-nav">
                    <li onClick={() => navigate(-1)}>Geri</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li onClick={() => navigate("contact")}>İletişim</li>
                </div>

                <div className="login-in">
                    <Link to="/auth">Giriş Yap</Link>
                </div>
            </ul>
        </nav>
    );
};

export default Menu;
