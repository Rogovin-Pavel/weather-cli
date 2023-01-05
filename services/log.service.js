import chalk from "chalk";

const help = () =>
  console.log(
    `
      ${chalk.bgCyan("Help")}
      Без параметров - вывод погоды
      ${chalk.bgGreen("-h")} - для вывода помощи
      ${chalk.bgYellow("-s")} [CITY] - для установки города
      ${chalk.bgRed("-t")} [API_KEY] - для сохранения токена
    `
  );
const alert = (error) => console.log(chalk.bgRed(`Error: ${error}`));
const success = (success) => console.log(chalk.bgGreen(`Success: ${success}`));

export { help, alert, success };
