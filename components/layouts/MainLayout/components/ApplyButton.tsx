import Link from "../../../common/Link";

export default function ApplyButton({text}: {text: string}) {
  return (
    <div className={`w-max`}>
      <Link
        link={{url: '/apply', text}}
        className="bg-secondary uppercase w-full md:w-max px-4 py-[.5rem] text-xs sm:text-sm rounded-md text-white font-semibold duration-300 hover:opacity-70" />
    </div>
  )
}