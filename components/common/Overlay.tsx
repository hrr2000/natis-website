export default function Overlay({color}: {color?: string}) {
  return (
    <div className={`${color || 'bg-black'} opacity-50 w-full h-full absolute top-0 start-0`}></div>
  )
}