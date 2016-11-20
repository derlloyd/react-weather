import React from 'react';

const WeatherMessage = (props) => {
    const { temp, location } = props;
    return (
        <div>
            <p>It's {temp} in {location}</p>
    
        </div>
    );
};

export default WeatherMessage;
