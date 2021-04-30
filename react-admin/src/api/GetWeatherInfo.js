//Fetch weather information from https://www.weatherapi.com api
const apiKey = "fa9aae7823b64781968215823212904";

export default function fetchWeatherInformation(coordinate, numOfDays) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${coordinate}&days=${numOfDays}`;

  return fetch(url)
  .then(res => res.json())
  .catch(err => console.log(err))
}