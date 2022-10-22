import DirectusClient from "../services/DirectusClient";
import {DEFAULT_LOCALE, DIRECTUS_HOSTNAME} from "../utils/constants";
import {ILink} from "../Types/common";

export default class Page {

  name = "";
  locale = DEFAULT_LOCALE;
  directus = new DirectusClient(process.env.DIRECTUS_HOSTNAME || DIRECTUS_HOSTNAME);
  dataObject: any = null;

  constructor(name: string = "", locale: string = DEFAULT_LOCALE) {
    this.name = name;
    this.locale = locale;
  }

  async data() {
    if(this.dataObject) return this.dataObject;
    const returnObject = this.dataObject = {
      ...(await this.get(this.name) || {}),
      common_data: (await this.get('common_data') || {}),
      navbar: (await this.get('navbar') || {}),
      topbar: (await this.get('topbar') || {})
    };
    console.log(getBreadCrumbs(returnObject.navbar.links || []));
    return {
      ...returnObject,
      breadcrumbs: getBreadCrumbs(returnObject.navbar.links || [])
    };
  }

  async get(name: string) {
    const client = this.directus;
    return {
      ...(await client.getOne(name)),
      ...(await client.getOne(name + '_translations', this.locale)),
    };
  }

  async getItem(name: string, slug?: { key: string, value: string }) {
    if(!slug) return {};
    const client = this.directus;
    return (await client.find(name, slug, this.locale))
  }

  async getItems(name: string) {
    const client = this.directus;
    return (await client.getMany(name, this.locale))
  }



}

function getBreadCrumbs(links: ILink[] = [], parent: string[] = []): any {
  if (!links) return {};
  return links.reduce((acc: any, link: ILink) => {
    return {
      ...acc,
      [link.url]: (link.items?.length ? [] : [...parent, link.text]),
      ...getBreadCrumbs(link.items, [...parent, link.text]),
    }
  }, {});
}