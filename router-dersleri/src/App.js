import "./App.css";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./components/Dashboard/Home";
// import User from "./components/User";
import Users from "./components/Dashboard/Users";
import About from "./components/Dashboard/About";
import Contact from "./components/Dashboard/Contact";
import UserDetail from "./components/Dashboard/UserDetail";
import Login from "./components/Auth/Login";
import DashboardLayout from "./layout/Dashboard/DashboardLayout";
import AuthLayout from "./layout/Auth/AuthLayout";
import Register from "./components/Auth/Register";
import Error404 from "./components/Error404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="users" element={<Users />} />
                    <Route path="users/:id" element={<UserDetail />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="auth" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
