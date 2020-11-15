export class WeatherData {
	constructor(cityName, desc, temperature) {
		this.cityName = cityName;
		this.desc = desc;
		this.temperature = temperature;
	}
}

export const Weather_Proxy_Handler = {
	get: function (target, property) {
		console.log('target', target, 'property', property);
		return Reflect.get(target, property);
	},
};
