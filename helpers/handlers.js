import { success, alert } from "../services/log.service.js";

const promiseHandler = async (func, successMessage, errorMessage, ...args) => {
  try {
    const result = await func(...args);
    success(successMessage);
    return result;
  } catch (error) {
    alert(error?.message || errorMessage);
  }
};

export { promiseHandler };
