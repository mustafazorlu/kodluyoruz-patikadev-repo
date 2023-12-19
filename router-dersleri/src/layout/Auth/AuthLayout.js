import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="auth-container">
            <div>
                <Link to="/auth">Giriş Yap</Link>
                <Link to="/auth/register">Kayıt Ol</Link>
                <Link to="/">Ana Sayfa</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
