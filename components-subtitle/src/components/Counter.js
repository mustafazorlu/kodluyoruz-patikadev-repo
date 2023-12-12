import React, { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    
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

        //unmount ediyoruz
        //burası çok önemliiiiiiiiiii !!!!!!!
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{counter}</h1>
            {/* <button onClick={() => increase()}>increase +</button>
            <button onClick={() => decrease()}>decrease -</button> */}
           
        </div>
    );
};

export default Counter;
