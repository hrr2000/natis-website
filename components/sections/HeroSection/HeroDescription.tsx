export default function HeroDescription({text}: {text: string}) {
  return (
    <p className={`text-sm lg:text-xl mb-5`}>
      {text}
    </p>
  );
}