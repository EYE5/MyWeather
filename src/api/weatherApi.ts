import axios from 'axios';

export async function getWeatherByCity(city: string) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4396e23adb00776df18a39608768f482`);
    
}