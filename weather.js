#!/usr/bin/env node
import { getArguments } from "./helpers/args.js";
import { promiseHandler } from "./helpers/handlers.js";
import { TOKEN, CITY } from "./helpers/constants.js";

import { help, logWeather } from "./services/log.service.js";
import { getItem, storeItem } from "./services/storage.service.js";
import { fetchWeather } from "./services/api.service.js";

const init = async () => {
  const args = getArguments(process.argv);

  if (args.h) help();

  const city = await getItem(CITY);
  if (args.s && args.s !== city) {
    await promiseHandler(
      storeItem,
      "city is saved",
      "city isn't saved",
      CITY,
      args.s
    );
  }

  const token = await getItem(TOKEN);
  if (args.t && args.t !== token) {
    await promiseHandler(
      storeItem,
      "token is saved",
      "token isn't saved",
      TOKEN,
      args.t
    );
  }

  // We should show the weather
  const data = await promiseHandler(
    fetchWeather,
    "weather is fetched",
    "weather isn't fetched",
    args.s ?? city,
    args.t ?? token
  );

  logWeather(data);
};

init();
