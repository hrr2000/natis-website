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
    <article>
      <div className={`relative min-h-[200px]`}>
        <Image src={image} objectFit={`cover`}/>
        <Overlay />
        <div>
          <HTMLRenderer content={icon} />
          
        </div>
      </div>
      <div>
        <p>
          {description}
        </p>
      </div>
    </article>
  )
}