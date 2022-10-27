import React from "react";
import { AdminDetailsText } from "../../../Types/common";
import {useRouter} from "next/router";
const AdminDetailsText = ({ adminName, adminStory }: AdminDetailsText) => {
  const router = useRouter();
  return (
    <section className="col-span-6">
      <h2 className="p-0 mb-6 capitalize">{router.locale === 'ar-SA' ? 'عن ' : 'About '}{adminName}</h2>
      <p className="text-[1.25rem] font-bold whitespace-pre-wrap">{adminStory}</p>
    </section>
  );
};

export default AdminDetailsText;
