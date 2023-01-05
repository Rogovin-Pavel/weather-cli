import https from "https";
import { getItem } from "./storage.service.js";
import { TOKEN } from "./../helpers/constants.js";

import axios from "axios";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getItem(TOKEN));

  if (!token) throw new Error("Token is undefined");

  const { data } = await axios.get(API_URL, {
    params: {
      q: city,
      appid: token,
      units: "metric",
    },
  });

  return data;
};
