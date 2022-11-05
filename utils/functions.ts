import {ASSET_BASE_URL, DEBUG_MODE} from "./constants";
import sending from "../assets/sending.gif";
import sent from "../assets/sent.gif";

export function asset(name: string) {
  return ASSET_BASE_URL + name;
}

export function GRK(name: string): string {
  let result = `${name}_`;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < name.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function unComplete(text: string, size = 80) {
  if (!text) return "";
  let tmp = text.split("").splice(0, size).join("");
  if (text !== tmp) tmp += "...";
  return tmp;
}

export function relative_date(date_string: string) {
  return date_string;
}

export const awaitTimeout = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const dd = (obj: any) => {
  if(!DEBUG_MODE) return;
  console.log(obj)
}

export const getSubmissionResources = (modalState: number) => {
  let src, heading, textContent;
  if (modalState === 1) {
    src = sending;
    heading = "Sending the request";
    textContent =
      "Currently, the application is being submitted to the NATI ESL Institute ...";
  } else if (modalState === 2) {
    src = sent;
    heading = "Completed request submission";
    textContent =
      "Your request has been sent to NATI ESL, check your email and wait for a response...";
  }
  return { src, heading, textContent };
};

export const beatifyCamelCase = (str: string) => {
  return capitalizeFirstLetter(str.replace(/([a-z])([A-Z])/g, "$1 $2"));
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}