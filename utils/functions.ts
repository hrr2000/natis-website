import {ASSET_BASE_URL} from "./constants";

export function asset(name: string) {
  return ASSET_BASE_URL + name;
}

export function GRK(name: string): string {
  let result = `${name}_`;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < name.length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function unComplete(text: string, size = 80) {
  if(!text) return "";
  let tmp = text.split("").splice(0, size).join("");
  if(text !== tmp) tmp += "...";
  return tmp;
}

export function relative_date(date_string: string) {
  return date_string;
}