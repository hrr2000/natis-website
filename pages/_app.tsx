import "../styles/globals.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import {Router} from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#C3BC05",
  className: "progress-bar",
  delay: 100,
});
try {
  Router.events.on("routeChangeStart", () => {
    progress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    progress.finish();
  });
  Router.events.on("routeChangeError", () => {
    progress.finish();
  });
} catch (err) {
  console.error(err);
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale } = router;
  return (
    <div dir={["ar-SA"].includes(locale || "") ? "rtl" : "ltr"}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
