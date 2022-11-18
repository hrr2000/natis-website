export default function HeroHeading({text}: {text: string}) {
  return (
    <h1 className={`h-full mt-8 lg:mt-0 lg:mb-5`}>
      {text}
    </h1>
  );
}