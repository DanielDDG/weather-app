import { retrieveWeather } from "./modules/calls";

retrieveWeather("colorado").then((result) => {
  console.log(result);
});
