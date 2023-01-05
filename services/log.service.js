import chalk from "chalk";

const help = () =>
  console.log(
    `
      ${chalk.bgCyan("Help")}
      Without options - log the weather
      ${chalk.bgGreen("-h")} - for help
      ${chalk.bgYellow("-s")} [CITY] - set up your city
      ${chalk.bgRed("-t")} [API_KEY] - set up your API key
    `
  );
const alert = (error) => console.log(chalk.bgRed(`Error: ${error}`));
const success = (success) => console.log(chalk.bgGreen(`Success: ${success}`));
const logWeather = (res) => {
  console.log(`
    ${chalk.bgYellow(`Weather in ${res.name}`)}
    :${res.weather[0].icon}: ${res.weather[0].description}
    Temperature ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity ${res.main.humidity}%
    Wind's speed ${res.wind.speed}
  `);
};

export { help, alert, success, logWeather };
