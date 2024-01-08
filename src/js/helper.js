// reused important functions are stored here

import { TIMEOUT_SEC } from "./config";

export const getJSONdata = async function (url) {
  try {
    const response = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);

    if (!response.ok) {
      throw new Error(`unable to find the recipe`);
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
