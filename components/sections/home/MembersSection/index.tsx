import { ILink } from "../../../../Types/common";
import Card from "../../../common/Card";

import ItemsSection from "../../common/ItemsSection";
import {CommitteeMember} from "../../../../Types/directus";

interface IMembersSection {
  title?: string;
  headerLink?: ILink;
  members: CommitteeMember[];
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
      template={({ item: { name, photo, role, bio, slug }, key }: any) => {
        return (
            <Card
              key={key}
              name={name}
              photo={photo}
              role={role}
              bio={bio}
              slug={slug}
            />
        );
      }}
    />
  );
}
