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
import { useEffect, useRef } from "react";
import useBackground from "../../../commons/store/path";
import { useRouter } from "next/router";

const Slide = styled(Slider)`
  min-height: calc(100vh);

  overflow: hidden;
  .slick-dots {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 10px;
    width: 20px;
    height: 100vh;
    padding-bottom: 50px;
    /* background-color: red; */
  }
`;

export default function LandingUI() {
  const router = useRouter();
  const setIsLanding = useBackground((state) => state.setIsLanding);

  const scrollUpRef = useRef(null);
  const scrollDownRef = useRef(null);

  const onScroll = () => {
    if (window.scrollY < 1) {
      scrollUpRef.current?.click();
    }
    if (window.scrollY >= 2) {
      scrollDownRef.current?.click();
    }

    window.scrollTo(0, 1);
  };

  useEffect(() => {
    setIsLanding(router.asPath);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const firstSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1500,
    pauseOnHover: true,
    vertical: true,
    dotsClass: "slick-dots",
    nextArrow: <NextArrow scrollDownRef={scrollDownRef} />,
    prevArrow: <PrevArrow scrollUpRef={scrollUpRef} />,
  };

  return (
    <S.Wrapper>
      <Slide {...firstSettings}>
        <FirstPage />

        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <SevenPage />
      </Slide>
    </S.Wrapper>
  );
}
