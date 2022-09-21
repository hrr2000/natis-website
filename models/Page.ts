import DirectusClient from "../services/DirectusClient";
import {DIRECTUS_HOSTNAME} from "../utils/constants";

export default class Page {

  name = "";
  locale = "en-US";
  directus = new DirectusClient(process.env.DIRECTUS_HOSTNAME || DIRECTUS_HOSTNAME);
  dataObject: any = null;

  constructor(name: string, locale: string) {
    this.name = name;
    this.locale = locale;
  }

  async data() {
    if(this.dataObject) return this.dataObject;
    return this.dataObject = this.get(this.name) || {};
  }

  async get(name: string) {
    const client = this.directus;
    return {
      ...(await client.getOne(name)),
      ...(await client.getOne(name + '_translations', this.locale)),
    };
  }

  async getItems(name: string) {
    const client = this.directus;
    return (await client.getMany(name, this.locale))
  }

}