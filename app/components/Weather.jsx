import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';
import ErrorModal from './ErrorModal';

class Weather extends Component {
    state = { isLoading: false };

    handleSearch(location) {
        this.setState({ isLoading: true, errorMessage: undefined });

        openWeatherMap.getTemp(location)
            .then((result) => {
                this.setState({
                    isLoading: false,
                    location: result.name || location,  // sometimes no result in name field
                    temp: result.temp
                });
            }, (e) => {
                // debugger;
                // alert(`City Name Error: ${errorMessage}`);
                this.setState({ isLoading: false, errorMessage: e.message });
            });
    }

    render() {
        const { isLoading, temp, location, errorMessage } = this.state;
        
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} />
                );
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch.bind(this)} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
}

export default Weather;
