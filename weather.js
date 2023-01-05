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
  if (args.s)
    promiseHandler(
      storeItem,
      "city is saved",
      "city isn't saved",
      CITY,
      args.s
    );

  if (args.t)
    promiseHandler(
      storeItem,
      "token is saved",
      "token isn't saved",
      TOKEN,
      args.t
    );

  // We should show the weather
  const city = args.s || (await getItem(CITY));
  const data = await promiseHandler(
    fetchWeather,
    "weather is fetched",
    "weather isn't fetched",
    city
  );

  logWeather(data);
};

init();
