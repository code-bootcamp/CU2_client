// @ts-ignore
import { FullPage, Slide } from "react-full-page";
import FifthPage from "./landingFifth";
import FirstPage from "./landingFirst";
import FourthPage from "./landingFourth";
import SecondPage from "./landingSecond";
import SeventhPage from "./landingSeventh";
import SixthPage from "./landingSixth";
import ThirdPage from "./landingThird";

const controlsProps = {
  style: {
    left: "50%",
    paddingTop: "10px",
    position: "fixed",
    transform: "translateX(-50%)",
  },
};

export default function LandingUI() {
  return (
    <>
      <FullPage controls controlsProps={controlsProps}>
        <Slide>
          <FirstPage />
        </Slide>
        <Slide>
          <SecondPage />
        </Slide>
        <Slide>
          <ThirdPage />
        </Slide>
        <Slide>
          <FourthPage />
        </Slide>
        <Slide>
          <FifthPage />
        </Slide>
        <Slide>
          <SixthPage />
        </Slide>
        <Slide>
          <SeventhPage />
        </Slide>
      </FullPage>
    </>
  );
}
