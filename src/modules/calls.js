export async function retrieveWeather(location) {
  const data = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a016d2051be44e2f9be171214241005&q=${location}`
  );

  const weather = await data.json();
  return weather;
}
