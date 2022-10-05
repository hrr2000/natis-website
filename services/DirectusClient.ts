import {dd} from "../utils/functions";

export default class DirectusClient {
  hostname = "";

  constructor(hostname: string) {
    this.hostname = hostname;
  }

  async get(name: string) {
    return (
      await fetch(this.hostname + "/items/" + name)
        .then((res) => res.json())
        .catch(console.error)
    )?.data;
  }

  async getOne(name: string, locale?: string): Promise<any> {
    if (locale) name += `?filter[languages_code][_eq]=${locale}`;

    const response = await this.get(name);

    if (Array.isArray(response)) return response?.[0];

    return response;
  }

  async find(name: string, slug: string, locale?: string) {
    let item = await  this.get(`${name}?filter[slug][_eq]=${slug}`);
    if (Array.isArray(item)) item = item?.[0];
    let translatedItem = await this.get(`${name}_translations?filter[${name}_id][_eq]=${item.id}&filter[languages_code][_eq]=${locale}`);
    if (Array.isArray(translatedItem)) translatedItem = translatedItem?.[0];
    return {
      ...item,
      ...translatedItem
    };
  }

  async getMany(name: string, locale?: string): Promise<any> {
    if (!locale) return await this.get(name);

    const items = await this.get(name);

    if (!Array.isArray(items)) return [];

    const translations = await this.get(
      name + "_translations" + `?filter[languages_code][_eq]=${locale}`
    );

    if (!Array.isArray(translations)) return [];

    const translationsMap = new Map();

    for (const obj of translations) {
      translationsMap.set(obj?.[`${name}_id`], obj);
    }

    return items.map((item: any) => {
      return {
        ...item,
        ...translationsMap.get(item?.id),
      };
    });
  }
}
