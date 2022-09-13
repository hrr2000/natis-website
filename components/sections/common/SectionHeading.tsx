interface ISectionHeading {
  text: string;
}

export default function SectionHeading({ text }: ISectionHeading) {
  return (
    <h2>
      {text}
    </h2>
  )
}