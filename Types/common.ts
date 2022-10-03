import React from "react";

export interface ILink {
  icon_svg?: string;
  text: string;
  url: string;
  items?: ILink[];
}

export interface InputFields {
  [x: string]: {} | string | boolean | undefined;
  name: string;
  id: string;
  required?: boolean | undefined;
}

export type labelsType = { [label: string]: string };
export type contextType = { children: React.ReactNode; labels: labelsType };
export type errorType = { [label: string]: string };

export type AdminDetailsCard = {
  adminName: string;
  adminSrcImage: string;
  adminRole: {
    name: string;
    description: string;
  };
};
export type AdminDetailsText = {
  adminName: string;
  adminStory: string;
};

export type AdminDetails = AdminDetailsCard & AdminDetailsText;
