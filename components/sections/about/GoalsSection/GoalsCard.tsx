import Overlay from "../../../common/Overlay";
import Image from "../../../common/Image";
import HTMLRenderer from "../../../common/HTMLRenderer";

interface IGoalsCard {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export default function GoalsCard({icon, title, description, image}: IGoalsCard) {
  return (
    <article className={`mx-3 col-span-2 min-h-[273px] w-[250px] bg-primary rounded-lg overflow-hidden my-10`}>
      <div className={`relative min-h-[200px]`}>
        <Image src={image} objectFit={`cover`}/>
        <Overlay color={'bg-primary'} />
        <div className={`absolute w-full h-full flex flex-col justify-start py-10 items-center text-center`}>
          <span className={`text-primary mb-4`}>
            <HTMLRenderer content={icon} />
          </span>
          <p className={`text-white mb-4 px-5`}>
            {title}
          </p>
        </div>
      </div>
      <div className={`text-white font-medium text-sm text-center p-5`}>
        <p>
          {description}
        </p>
      </div>
    </article>
  )
}