import { useEffect } from "react/cjs/react.production.min.js";
import getData from "./getData.js";

getData(1);

import React from "react";

const FetchData = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
            console.log(response)
        );
    }, []);
    return <div>FetchData</div>;
};

export default FetchData;
