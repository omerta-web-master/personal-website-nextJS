import React, { useEffect } from "react";

const BASE_API_URL = "https://portfolio-api2.herokuapp.com";
const GEOLOCATION_API_KEY = "c77fbeed277844f6984cac026a86b03f";

const useTrackUsers = () => {
	useEffect(() => {
		trackUsers();
		//eslint-disable-next-line
	}, []);

	async function trackUsers() {
		try {
			const res = await fetch(
				`https://api.ipgeolocation.io/ipgeo?apiKey=${GEOLOCATION_API_KEY}`
			);
			if (!res.ok) throw new Error("Fetch error");
			const data = await res.json();
			const geoData = {
				ip: data.ip,
				city: data.city,
				country: data.country_name,
				zipcode: data.zipcode,
				lat: data.latitude,
				lon: data.longitude,
			};
			sendDataToServer(geoData);
		} catch (error: any) {
			console.log(error.message);
		}
	}

	async function sendDataToServer(data: any) {
		const config = {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		};
		try {
			const res = await fetch(BASE_API_URL + "/visitors", config);
			if (!res.ok) throw new Error("Fetch error");
			const data = await res.json();
			console.log(data);
		} catch (error: any) {
			console.log(error.message);
		}
	}

	return {};
};

export default useTrackUsers;
