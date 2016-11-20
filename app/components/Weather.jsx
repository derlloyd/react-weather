import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends Component {
    state = { isLoading: false };

    handleSearch(location) {
        this.setState({ isLoading: true });

        openWeatherMap.getTemp(location)
            .then((result) => {
                this.setState({
                    isLoading: false,
                    location: result.name || location,  // sometimes no result in name field
                    temp: result.temp
                });
            }, (errorMessage) => {
                alert(`City Name Error: ${errorMessage}`);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { isLoading, temp, location } = this.state;
        
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch.bind(this)} />
                {renderMessage()}
                
            </div>
        );
    }
}

export default Weather;
