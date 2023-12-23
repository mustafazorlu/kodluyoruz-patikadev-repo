import React from "react";

const Card = ({ stateData }) => {
    const data = stateData;
    return (
        <div className="card">
            <div className="card_header">
                <span className="state_name">{data.name}</span>
                <img
                    src="https://foxstudy.com/wp-content/uploads/2023/08/Londra-1.jpg"
                    alt=""
                    className="card_image"
                />
            </div>
            <div className="card_data">
                <span>{data.cod}</span>
                <span>{data.coord.lat}</span>
            </div>
            {/* <span>{stateData}</span> */}
        </div>
    );
};

export default Card;
