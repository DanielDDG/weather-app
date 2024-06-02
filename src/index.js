import { retrieveWeather } from "./modules/calls";
import "./modules/styling";

retrieveWeather("colorado").then((result) => {
  console.log(result);
});
