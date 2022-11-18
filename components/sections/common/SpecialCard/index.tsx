import {useRouter} from 'next/router';
import Image from '../../../common/Image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface ISpecialCard {
  image: string;
  smallTitle?: string;
  bigTitle: string;
  description: string;
  reverse?: boolean;
  animation?: any;
  initiallyVisible?: boolean;
}

export default function SpecialCard({image, smallTitle, bigTitle, description, reverse, animation, initiallyVisible }: ISpecialCard) {

  const {locale} = useRouter();
  const textDirection = locale === 'ar-SA' ? 'rtl' : 'ltr';
  const containerDirection = reverse ? 'rtl' : 'ltr';

  return (
    <AnimationOnScroll initiallyVisible={initiallyVisible } animateIn={reverse ? 'animate__fadeInRight' : 'animate__fadeInLeft'} animateOnce {...animation}>
      <div className="flex items-center justify-center mx-auto my-5 lg:my-32 container w-[80%] lg:w-full">
        <div className="flex flex-col relative lg:flex-row w-full justify-center lg:justify-start py-6 sm:py-12" dir={containerDirection}>
          <div className="h-[80%] top-0 w-full absolute lg:relative mx-[-16.666667%] lg:mx-0 lg:h-[600px] lg:basis-2/12 bg-secondary"></div>
          <div className="lg:-mt-24 mx-[-8.333333%] lg:mx-0 h-[320px] md:h-[400px] lg:h-[600px] lg:basis-4/12 relative z-1" style={{
            marginInlineStart: '-8.333333%'
          }}>
            <Image src={image} objectFit={'cover'} />
          </div>
          <div className="flex mx-[-8.333333%] lg:mx-0 basis-8/12 flex-col justify-center bg-white px-6 lg:px-12 pb-6 lg:py-6 shadow-lg relative z-2" style={{
            marginInlineStart: '-8.333333%'
          }}>
            <header className="md:mb-4 lg:mb-8 flex flex-col lg:gap-3 py-5 lg:py-0 font-medium capitalize" dir={textDirection}>
              <h4 className="text-xl p-0 lg:text-2xl">{smallTitle}</h4>
              <h2 className="text-4xl p-0 lg:text-6xl text-secondary">{bigTitle}</h2>
            </header>
            <main dir={textDirection} >
              <p className="max-w-[70ch] text-md lg:text-xl font-bold text-primary leading-6 lg:leading-10 whitespace-pre-wrap text-justify">{description}</p>
            </main>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}