import axios from "axios";

const getData = async (user_id) => {
    const result = await axios(
        `https://jsonplaceholder.typicode.com/users/${user_id}`
    );
    const {data: posts_data} = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    )
    console.log({...result.data ,posts_data});
};

export default getData;
