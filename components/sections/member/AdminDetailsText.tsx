import React from "react";
import { AdminDetailsText } from "../../../Types/common";
const AdminDetailsText = ({ adminName, adminStory }: AdminDetailsText) => {
  return (
    <section className="col-span-6">
      <h2 className="p-0 mb-6 capitalize">{adminName}</h2>
      <p className="text-[1.25rem] font-bold whitespace-pre-wrap">{adminStory}</p>
    </section>
  );
};

export default AdminDetailsText;
