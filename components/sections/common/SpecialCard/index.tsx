import {useRouter} from 'next/router';
import Image from '../../../common/Image';

interface ISpecialCard {
  image: string;
  smallTitle: string;
  bigTitle: string;
  description: string;
  reverse?: boolean;
}

export default function SpecialCard({image, smallTitle, bigTitle, description, reverse}: ISpecialCard) {

  const {locale} = useRouter();
  const textDirection = locale === 'ar-SA' ? 'rtl' : 'ltr';
  const containerDirection = reverse ? 'rtl' : 'ltr';

  return (
    <div className="flex max-w-7xl items-center justify-center mx-auto my-32">
      <div className="flex w-full justify-center bg-gray-50 py-6 sm:py-12" dir={containerDirection}>
        <div className="h-[600px] basis-2/12 bg-secondary"></div>
        <div className="-mt-24 h-[600px] basis-4/12 bg-black relative z-1" style={{
          marginInlineStart: '-8.333333%'
        }}>
          <Image src={image} objectFit={'cover'} />
        </div>
        <div className="flex basis-7/12 flex-col justify-center bg-white px-12 py-6 shadow-lg relative z-2" style={{
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
  )
}