import Image from "../../../common/Image";
import {useEffect, useState} from "react";
import Overlay from "../../../common/Overlay";

interface IVideo {
  videoCover: string;
  videoUrl: string;
  noOverlay?: boolean;
}

export default function Video({videoCover, videoUrl, noOverlay}: IVideo) {

  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    setIsStarted(false);
  }, [videoCover])

  return (
    <>

      {isStarted || (
        <div className={`relative w-full h-[315px] rounded-lg overflow-hidden`}>
          {!!videoCover && <Image src={videoCover} objectFit={`cover`} />}
          {noOverlay || <Overlay />}
          <div
            className={`absolute w-full h-full flex justify-center items-center group cursor-pointer`}
            onClick={() => setIsStarted(true)}
          >
            <span className={`group-hover:scale-150 duration-500`}>
              <PlayVideoIcon />
            </span>
          </div>
        </div>
      )}

      {isStarted && (
        <iframe
          className={`w-full`}
          height="315"
          src="https://www.youtube.com/embed/bW_BILl7n0Y?autoplay=true"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

    </>
  );
}


function PlayVideoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61.336"
      height="61.336"
      viewBox="0 0 61.336 61.336"
    >
      <g transform="translate(5 6.444)">
        <g data-name="playbutton" transform="translate(1 1)">
          <g transform="translate(-6 -7.444)">
            <path
              fill="#fff"
              d="M0 9.243V5.461c0-4.882 3.45-6.85 7.667-4.422l3.271 1.891 3.271 1.891c4.217 2.428 4.217 6.415 0 8.843l-3.271 1.891-3.271 1.892C3.45 19.875 0 17.881 0 13.025z"
              transform="translate(23.257 21.425)"
            ></path>
            <path
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.5"
              d="M56.224 30.668A25.557 25.557 0 1130.668 5.111a25.557 25.557 0 0125.556 25.557z"
              data-name="Vector"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}