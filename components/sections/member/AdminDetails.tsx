import React from "react";

type Props = {
  memberName: string;
};

export default function AdminDetailsCard({memberName}: Props) {
  return (
    <section className="grid-cols-custom grid-rows-custom grid  flex-1 flex-shrink-0">
      <div className="col-1/3s row-1/3s bg-yellow-500"></div>
      <div className="col-2/-2 row-2/-2 bg-white z-20">
        <div className="">{memberName}</div>
      </div>
      <div className="col-1/3e row-1/3e bg-yellow-500"></div>
    </section>
  );
}
