import React, { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [dataUsers, setDataUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const increase = () => {
    //     setCounter(counter + 1);
    // };
    // const decrease = () => {
    //     setCounter(counter - 1);
    //     if (counter <= 0) {
    //         setCounter(counter);
    //     }
    // };

    useEffect(() => {
        console.log("component 1 kez mount edildi");
        //degiskene atıyoruz
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 1000);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setDataUsers(data))
            .finally(() => setIsLoading(false));

        //unmount ediyoruz
        //burası çok önemliiiiiiiiiii !!!!!!!
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{counter}</h1>
            {isLoading && <div>Loading...</div>}

            {dataUsers.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}

            {/* <button onClick={() => increase()}>increase +</button>
            <button onClick={() => decrease()}>decrease -</button> */}
        </div>
    );
};

export default Counter;
