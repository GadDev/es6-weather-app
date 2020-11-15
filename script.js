'use strict';
import * as elements from './el.js';
import { API } from './api.js';
import { WeatherData, Weather_Proxy_Handler } from './weather.js';

const searchCityWeather = () => {
	const city = elements.search_city.value.trim();
	if (city.length > 0) {
		console.log(city);
		const proxyUrl = 'https://mysterious-retreat-29857.herokuapp.com/';
		const API_URL = `api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f9a4534091714e88b53a5d4f3ed7155`;

		API.fetchData(proxyUrl + API_URL)
			.then((response) => {
				const WEATHER_DATA = new WeatherData(
					city,
					response.weather[0].description,
					response.main.temp
				);
				console.log(WEATHER_DATA);
				const WEATHER_PROXY = new Proxy(
					WEATHER_DATA,
					Weather_Proxy_Handler
				);
				console.log(WEATHER_PROXY);
				displayWeather(WEATHER_PROXY);
				elements.result.hidden = false;
				elements.noResult.hidden = true;
				elements.detailsResult.hidden = false;
			})
			.catch((error) => {
				console.log('errror', error);
				elements.result.hidden = false;
				elements.noResult.hidden = false;
				elements.noResult.textContent = 'City not found';
				elements.detailsResult.hidden = true;
			});
	} else {
		elements.result.hidden = false;
		elements.noResult.textContent = 'Please enter a city name';
		elements.noResult.hidden = false;

		elements.detailsResult.hidden = true;
	}
};

const displayWeather = (data) => {
	elements.result_city.textContent = data.cityName;
	elements.result_desc.textContent = data.desc;
	elements.result_temp.textContent = Math.round(data.temperature) + '℃';
};

elements.search_btn.addEventListener('click', searchCityWeather);
