#!/usr/bin/env node
import { getArguments } from './helpers/args.js';

import { help } from './services/log.service.js';

const init = () => {
  const args = getArguments(process.argv);

  if (args.h) help();
  if (args.s) {
    // We should store our city
  }
  if (args.t) {
    // We should store a token
  }

  // We should show the weather
};

init();
