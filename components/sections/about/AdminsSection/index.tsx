import SectionWrapper from "../../common/SectionWrapper";
import {CommitteeMember} from "../../../../Types/directus";
import {asset, GRK} from "../../../../utils/functions";
import Image from "../../../common/Image";
import {useState} from "react";
import Link from "../../../common/Link";

interface IAdminsSection {
  title: string;
  description: string;
  items: CommitteeMember[];
}

export default function AdminsSection({title, description, items}: IAdminsSection) {

  const [activeMember, setActiveMember] = useState<CommitteeMember>(items?.[0] || {});

  return (
    <SectionWrapper>
      <header className={`text-center`}>
        <h2 className={`text-secondary text-6xl pb-5`}>
          {title}
        </h2>
        <p className={`max-w-[500px] mx-auto`}>
          {description}
        </p>
      </header>
      <main className={`grid grid-cols-12 my-10`}>
        <div className="col-span-2 flex flex-col">
          {items?.map((item: CommitteeMember) => {
            return (
              <div key={GRK('committee_member')} className={`group cursor-pointer my-5`} onClick={() => {
                setActiveMember(item);
              }}>
                <h3 className={`font-normal text-xl w-max`}>{item.name}</h3>
                <span className={`text-secondary text-xs`}>{item.role}</span>
                <span className={`bg-secondary h-0.5 duration-200 w-0 group-hover:w-full block`}></span>
              </div>
            );
          })}
        </div>
        <div className="col-span-6 mx-10">
          <Image src={asset(activeMember.photo)} objectFit={`cover`} className={`relative h-full`} />
        </div>
        <div className="col-span-4">
          <Link link={{url: `/admins-supervisors/${activeMember.slug}`}}>
            <h3 className={`hover:underline`}>{activeMember.name}</h3>
          </Link>
          <span className={`text-xl text-secondary`}>
            {activeMember.role}
          </span>
          <p className={`whitespace-pre-wrap text-sm text-primary`}>
            {activeMember.bio}
          </p>
        </div>
      </main>
    </SectionWrapper>
  )
}