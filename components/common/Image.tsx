import NextImage  from "next/image";

type ImageType = {
  [index: string]: string | undefined | {};
  src: string;
  className?: {};
  alt?: string;
};
export default function Image({ src, className, alt, ...props }: ImageType) {
  return (
    <figure className={`${className}`}>
      <NextImage src={src} layout={`fill`} alt={alt || ""} {...props} placeholder={`blur`} blurDataURL={src} />
    </figure>
  );
}
