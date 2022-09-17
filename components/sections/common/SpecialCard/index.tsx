interface ISpecialCard {
  reverse?: boolean;
}

export default function SpecialCard({reverse}: ISpecialCard) {
  return (
    <div className="flex min-h-screen max-w-7xl items-center justify-center">
      <div className="flex w-full justify-center bg-gray-50 py-6 sm:py-12">
        <div className="h-[400px] basis-2/12 bg-red-300"></div>
        <div className="-mt-24 h-[400px] basis-5/12 bg-red-700" style={{
          marginInlineStart: '-8.333333%'
        }}></div>
        <div className="flex basis-6/12 flex-col justify-center bg-red-400 px-8 py-6" style={{
          marginInlineStart: '-16.666667%'
        }}>
          <header className="mb-8 flex flex-col gap-3 font-medium capitalize">
            <h4 className="text-2xl">statement of ownership</h4>
            <h2 className="text-4xl">about nati esl</h2>
          </header>
          <main>
            <p className="max-w-[70ch]">
              North America Technical Institute ESL (NATI ESL) Institute Was
              Founded In 2022 And Is Privately Owned By Dr. Abed Sami Almala,
              A Veteran Educator Who Has Been Serving In Educational
              Institutions Since 1995. He Started His Career As A High
              Institute Teacher And Now Is A Higher Education Veteran. The
              Intensive English Program At The NATI ESL Is Accredited By The
              Commission On English Language Program Accreditation (CEA).
            </p>
          </main>
        </div>
      </div>
    </div>
  )
}