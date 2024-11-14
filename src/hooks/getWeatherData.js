import { useEffect, useState } from "react";

const useWeatherData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [geoData, setGeoData] = useState(null);
    useEffect(() => {
        const getGeoData = async () => {
            navigator.geolocation.getCurrentPosition((res) => {
                setGeoData(res);
            });
        };
        getGeoData();
    }, []);

    useEffect(() => {
        if (!geoData) return;

        const API_KEY = "092f098a38964e7400dacffa2b6caf6f";
        const { latitude, longitude } = geoData.coords;
        const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

        const fetchData = async () => {
            try {
                const response = await fetch(fetchUrl);
                if (!response.ok) {
                    throw new Error("네트워크 반응이 좋지 않음.");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, [geoData]);

    return { data, error };
};

export default useWeatherData;
