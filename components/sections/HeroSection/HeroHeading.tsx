export default function HeroHeading({text}: {text: string}) {
  return (
    <h1 className={`h-full mb-5`}>
      {text}
    </h1>
  );
}