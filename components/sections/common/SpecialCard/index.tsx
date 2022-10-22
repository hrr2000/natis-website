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
}

export default function SpecialCard({image, smallTitle, bigTitle, description, reverse, animation }: ISpecialCard) {

  const {locale} = useRouter();
  const textDirection = locale === 'ar-SA' ? 'rtl' : 'ltr';
  const containerDirection = reverse ? 'rtl' : 'ltr';

  return (
    <AnimationOnScroll animateIn={reverse ? 'animate__fadeInRight' : 'animate__fadeInLeft'} animateOnce {...animation}>
      <div className="flex items-center justify-center mx-auto my-32  container">
        <div className="flex w-full justify-start py-6 sm:py-12" dir={containerDirection}>
          <div className="h-[600px] basis-2/12 bg-secondary"></div>
          <div className="-mt-24 h-[600px] basis-4/12 relative z-1" style={{
            marginInlineStart: '-8.333333%'
          }}>
            <Image src={image} objectFit={'cover'} />
          </div>
          <div className="flex basis-8/12 flex-col justify-center bg-white px-12 py-6 shadow-lg relative z-2" style={{
            marginInlineStart: '-8.333333%'
          }}>
            <header className="mb-8 flex flex-col gap-3 font-medium capitalize" dir={textDirection}>
              <h4 className="text-2xl">{smallTitle}</h4>
              <h2 className="text-6xl text-secondary">{bigTitle}</h2>
            </header>
            <main dir={textDirection} >
              <p className="max-w-[70ch] text-xl font-bold text-primary leading-10 whitespace-pre-wrap">{description}</p>
            </main>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}