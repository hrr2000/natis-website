import React from "react";
import { AdminDetailsText } from "../../../Types/common";
const AdminDetailsText = ({ adminName, adminStory }: AdminDetailsText) => {
  return (
    <section className="flex-1">
      <h2 className="p-0 mb-6 capitalize">about {adminName}</h2>
      <p className="text-[1.25rem] font-bold">{adminStory}</p>
    </section>
  );
};

export default AdminDetailsText;
