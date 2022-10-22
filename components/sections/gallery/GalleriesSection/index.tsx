import { ILink } from "../../../../Types/common";
import Card from "./Card";

import ItemsSection from "../../common/ItemsSection";

interface IGalleriesSection {
  title?: string;
  headerLink?: ILink;
  galleries: any[];
}

export default function GalleriesSection({
   title,
   headerLink,
   galleries,
 }: IGalleriesSection) {
  return (
    <ItemsSection
      title={title}
      headerLink={headerLink}
      items={galleries}
      template={({ item: { gallery_title, gallery_cover, images, slug }, key }: any) => {
        return (
          <Card
            key={key}
            title={gallery_title}
            image={gallery_cover}
            imagesCount={images?.length || 0}
            slug={slug}
          />
        );
      }}
    />
  );
}
