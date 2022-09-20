import AvatarSwiper from "./AvatarSwiper";
import SectionWrapper from "../../common/SectionWrapper";
import Video from "../AboutSection/Video";
import { useState } from "react";
import { asset } from "../../../../utils/functions";
import SectionHeading from "../../common/SectionHeading";

export default function TestimonialsSection({ title, testimonials }: any) {
  const [review, setReview] = useState<any>({});

  return (
    <>
      <section className={`container mx-auto py-8`}>
        <header>
          <SectionHeading text={title} />
        </header>
      </section>
      <div className={`bg-gray-100`}>
        <SectionWrapper style={{ marginTop: 0 }}>
          <article className={`flex flex-wrap mb-10 pt-10`}>
            <main className={`lg:w-1/2 w-full`}>
              <Video
                videoCover={asset(review?.video_cover)}
                videoUrl={review?.video_url}
                noOverlay
              />
            </main>
            <aside className={`lg:w-1/2 lg:px-10 lg:py-0 pt-10`}>
              <h3 className={`text-2xl`}>{review?.name}</h3>
              <p>{review?.review}</p>
            </aside>
          </article>
          <AvatarSwiper data={testimonials} setReview={setReview} />
        </SectionWrapper>
      </div>
    </>
  );
}
