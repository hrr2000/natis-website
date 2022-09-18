import NextImage from "next/image";

export default function Image({ src, className, alt, ...props }: any) {
  return (
    <figure className={className}>
      <NextImage src={src} layout={`fill`} alt={alt || ""} {...props} />
    </figure>
  );
}
