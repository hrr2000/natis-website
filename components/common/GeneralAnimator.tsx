import {useEffect} from 'react';
// @ts-ignore
import AOS from 'aos';
import "aos/dist/aos.css";

export default function GeneralAnimator({children}: any) {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      {children}
    </div>
  )
}