import Header from "./components/Header";
import "./App.css";
import PropTypes from "prop-types";
import User from "./components/User";

function App() {
    const name = "Mustafa";
    const name2 = "Habibe";

    const users = [
        {
            name: "Mustafa",
            surname: "Zorlu",
            age: 23,
            isLoggedIn: true,
        },
        {
            name: "Habibe",
            surname: "Zorlu",
            age: 23,
            isLoggedIn: true,
        },
    ];
    return (
        <>
            <Header />
            <p className="xyz">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum odio ex, ut corporis tempore est et in temporibus
                voluptate asperiores.
            </p>
            <label htmlFor="input">
                Name:
                <input type="text" id="input" />
            </label>
            <p>{name + "❤️" + name2}</p>
            <User users={users} adress={{ title: "adress", zip: 12 }} />
        </>
    );
}



export default App;
