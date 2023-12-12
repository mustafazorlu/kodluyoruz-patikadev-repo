import Header from "./components/Header";
import "./App.css";
import PropTypes from "prop-types";
import User from "./components/User";
import { useState } from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";
import { useEffect } from "react";

function App() {
    const [isVisible, setIsVisible] = useState(true);
    // const name = "Mustafa";
    // const name2 = "Habibe";

    // const [array, setArray] = useState(["elma", "karpuz"]);
    // const [name, setName] = useState("Mustafa");
    // const [address, setAddress] = useState([{ title: "İzmir", zip: "1234" }]);

    // useEffect(() => {
    //     console.log('adres değişti')
    // },[address])
    // const users = [
    //     {
    //         name: "Mustafa",
    //         surname: "Zorlu",
    //         age: 23,
    //         isLoggedIn: true,
    //     },
    //     {
    //         name: "Habibe",
    //         surname: "Zorlu",
    //         age: 23,
    //         isLoggedIn: true,
    //     },
    // ];
    return (
        <>
            {/* <Header />
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
            {array.map((item) => (
                <span>{item}</span>
            ))}
            <button onClick={() => setArray([...array, "muz"])}>ekle</button>

            <div>
                {address.map((item) => (
                    <div>
                        <span>{item.title}</span>
                        <span>{item.zip}</span>
                    </div>
                ))}
            </div>
            <button
                onClick={() =>
                    setAddress([...address, { title: "Eskişehir", zip: 1234 }])
                }
            >
                adres ekle
            </button> */}

            {isVisible && <Counter />}
            <button onClick={() => setIsVisible(!isVisible)}>kaldır</button>
            {/* <InputExample/> */}
        </>
    );
}

export default App;
