import { ILink } from "../../../../Types/common";
import Card from "../../../common/Card";

import ItemsSection from "../../common/ItemsSection";
import {dd, GRK} from "../../../../utils/functions";

interface IMembersSection {
  title?: string;
  headerLink?: ILink;
  members: any[];
}

export default function MembersSection({
  title,
  headerLink,
  members,
}: IMembersSection) {
  return (
    <ItemsSection
      title={title}
      headerLink={headerLink}
      items={members}
      template={({ item: { name, photo, role, bio }, key }: any) => {
        return (
          <Card
            key={key}
            name={name}
            photo={photo}
            role={role}
            bio={bio}
            clickable
            onClick={() => dd('works!')}
          />
        );
      }}
    />
  );
}
