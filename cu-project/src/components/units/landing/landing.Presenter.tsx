import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "./arrow/NextArrow";
import PrevArrow from "./arrow/PrevArrow";
import * as S from "./landing.Style";
import FifthPage from "./landingFifth";
import FirstPage from "./landingFirst";
import FourthPage from "./landingFourth";
import SecondPage from "./landingSecond";
import SevenPage from "./landingSeven";
import SixthPage from "./landingSixth";
import ThirdPage from "./landingThird";

const Slide = styled(Slider)`
  overflow-x: hidden;
  .slick-dots {
    all: unset;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    bottom: 0;
    width: 20px;
    height: 100vh;
  }
`;

export default function LandingUI() {
  const router = useRouter();
  const slideRef = useRef();
  const scrollUpRef = useRef(null);
  const scrollDownRef = useRef(null);

  useEffect(() => {
    const slideRefCurrent = slideRef.current;
    let timer;
    const onScroll = (e) => {
      if (timer) {
        clearTimeout(timer);
      }

      let { scrollTop } = slideRef.current;

      console.log(scrollTop);

      if (scrollTop === 0) {
        scrollUpRef.current?.click();
      }
      if (scrollTop === 2) {
        scrollDownRef.current?.click();
      }

      timer = setTimeout(function () {
        slideRefCurrent?.scrollTo(0, 1);
      }, 200);
    };

    slideRefCurrent?.addEventListener("scroll", onScroll);

    return () => {
      slideRefCurrent?.removeEventListener("scroll", onScroll);
    };
  });

  const firstSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1300,
    pauseOnHover: true,
    vertical: true,
    draggable: true,
    // dotsClass: "slick-dots",
    nextArrow: <NextArrow scrollDownRef={scrollDownRef} />,
    prevArrow: <PrevArrow scrollUpRef={scrollUpRef} />,
  };

  return (
    <S.Wrapper>
      <S.Logo onClick={() => router.push("/main")} src="/CU2_LOGO.png" />
      <S.Outer ref={slideRef}>
        <Slide {...firstSettings}>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
          <FifthPage />
          <SixthPage />
          <SevenPage />
        </Slide>
      </S.Outer>
    </S.Wrapper>
  );
}
