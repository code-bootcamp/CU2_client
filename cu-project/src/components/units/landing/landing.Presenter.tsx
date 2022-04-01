import Slider from "react-slick";
// import "./Slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FirstPage from "./landingFirst";
import ThirdPage from "./landingThird";
import SixthPage from "./landingSixth";
import SecondPage from "./landingSecond";
import FourthPage from "./landingFourth";
import FifthPage from "./landingFifth";
import SevenPage from "./landingSeven";
import * as S from "./landing.Style";
import styled from "@emotion/styled";
import NextArrow from "./arrow/NextArrow";
import PrevArrow from "./arrow/PrevArrow";
import { useEffect, useRef, useState } from "react";
import useBackground from "../../../commons/store/path";
import { useRouter } from "next/router";

const Slide = styled(Slider)`
  .slick-dots {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    bottom: 0;
    width: 20px;
    height: 100vh;
    /* padding-bottom: 50px; */
  }
`;

export default function LandingUI() {
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
    dotsClass: "slick-dots",
    nextArrow: <NextArrow scrollDownRef={scrollDownRef} />,
    prevArrow: <PrevArrow scrollUpRef={scrollUpRef} />,
  };

  return (
    <S.Wrapper>
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
