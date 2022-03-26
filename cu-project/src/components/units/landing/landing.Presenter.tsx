// @ts-ignore
import { FullPage, Slide } from "react-full-page";
import FirstPage from "./landingFirst";
import ThirdPage from "./landingThird";
import SixthPage from "./landingSixth";
import SecondPage from "./landingSecond";
import FourthPage from "./landingFourth";
import FifthPage from "./landingFifth";

export default function LandingUI() {
  // const controlsProps = {
  //   style: {
  //     left: "50%",
  //     paddingTop: "10px",
  //     position: "fixed",
  //     transform: "translateX(-50%)",
  //   },
  // };

  return (
    <>
      <FullPage controls>
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
      </FullPage>
    </>
  );
}
