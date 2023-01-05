import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const exists = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

const filePath = join(homedir(), "/weather-data.json");

const storeItem = async (key, value) => {
  if (value === true) throw new Error("Fill the data");
  let data = {};
  if (await exists(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getItem = async (key) => {
  if (await exists(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);

    return data[key];
  }

  return undefined;
};

export { storeItem, getItem };
