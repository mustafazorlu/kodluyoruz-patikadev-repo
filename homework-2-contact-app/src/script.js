const getData = async () => {
    await fetch(
        "https://api.twitter.com/2/users/by/username/"
    )
        .then((response) => response.json())
        .then((data) => console.log(data));
};

export default getData;

//3a8001b54eeccc01f49f54dec3173bc2
