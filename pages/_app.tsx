import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale } = router;
  return (
    <div dir={["ar-SA"].includes(locale || "") ? "rtl" : "ltr"}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
