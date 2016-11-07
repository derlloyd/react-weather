var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=imperial&appid=65f552da8ce77e3ed6d5e8c193c6355f';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
        
        return axios.get(requestUrl).then(function(res) {
            // debugger;
            if (res.data.cod != 200 && res.data.message != 'accurate') {
                throw new Error(res.data.message);
            } else {
                return res.data.list[0].main.temp; //, res.data.list[0].name;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
};


