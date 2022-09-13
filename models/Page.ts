import DirectusClient from "../services/DirectusClient";
import {DIRECTUS_HOSTNAME} from "../utils/constants";

export default class Page {

  name = "";
  locale = "en-US";
  directus = new DirectusClient(process.env.DIRECTUS_HOSTNAME || DIRECTUS_HOSTNAME);
  dataObject: any = null;

  functions: any = {
    'home_page': () => this.getHomePage(),
  }

  constructor(name: string, locale: string) {
    this.name = name;
    this.locale = locale;
  }

  async data() {
    if(this.dataObject) return this.dataObject;
    return this.dataObject = this.functions?.[this.name]?.();
  }

  async getHomePage() {
    const client = this.directus;
    return {
      ...(await client.getOne('home_page')),
      ...(await client.getOne('home_page_translations', this.locale)),
    };
  }

  async getItems(name: string) {
    const client = this.directus;
    return (await client.getMany(name, this.locale))
  }

}