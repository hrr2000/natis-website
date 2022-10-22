import NextImage, {StaticImageData}  from "next/image";

type ImageType = {
  [index: string]: string | undefined | {};
  src: string | StaticImageData;
  className?: {};
  alt?: string;
};
export default function Image({ src, className, alt, ...props }: ImageType) {
  return (
    <figure className={`${className}`}>
      <NextImage
        src={src}
        layout={`fill`}
        alt={alt || ""}
        // placeholder={`blur`}
        // blurDataURL={typeof src === 'string' ? src : ''}
        {...props}
      />
    </figure>
  );
}
