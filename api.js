export class API {
	static async fetchData(url) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}
// USE XMLHttpRequest
// export class API {
// 	static fetchData(url) {
// 		return new Promise((resolve, reject) => {
// 			const HTTP = new XMLHttpRequest();
// 			HTTP.open('GET', url);
// 			HTTP.onreadystatechange = function () {
// 				if (
// 					HTTP.readyState == XMLHttpRequest.DONE &&
// 					HTTP.status == 200
// 				) {
// 					const RES = JSON.parse(HTTP.responseText);
// 					resolve(RES);
// 				} else if (HTTP.readyState == XMLHttpRequest.DONE) {
// 					reject('something went wrong');
// 				}
// 			};

// 			HTTP.send();
// 		});
// 	}
// }
