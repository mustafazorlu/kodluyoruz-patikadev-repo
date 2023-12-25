import React from "react";
import { FaArrowUpLong, FaArrowDownLong, FaWind } from "react-icons/fa6";

const Card = ({ stateData }) => {
    const data = stateData;
    // console.log(data.coord.lat);
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
            <div className="card_data flex">
                {data?.weather?.map((item) => (
                    <div className="flex">
                        <img
                            src={`https://openweathermap.org/img/wn/${item.icon.slice(
                                0,
                                2
                            )}d@2x.png`}
                            alt=""
                            className="weather_icon"
                        />
                        <span key={item.id} className="weather_name">
                            {item.main}
                        </span>
                    </div>
                ))}
                <span className="temp">
                    <FaArrowDownLong className="icon" />
                    {data?.main?.temp_min?.toFixed()} C°
                </span>
                <span className="temp">
                    <FaArrowUpLong className="icon" />
                    {data?.main?.temp_max?.toFixed()} C°
                </span>

                <span className="wind">
                    <FaWind className="" />
                    {data?.wind?.speed}/s
                </span>
            </div>
        </div>
    );
};

export default Card;
