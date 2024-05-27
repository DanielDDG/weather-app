import "./style.css";
import { retrieveWeather } from "./calls";

retrieveWeather("colorado").then((result) => {
  console.log(result);
});
