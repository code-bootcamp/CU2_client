import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
`;

export const SliderBox = styled(Slider)`
  z-index: -1;
`;

export const Box1 = styled.div`
  margin: 50px 0 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  padding-top: 240px;
  padding-left: 260px;
`;

export const Box2 = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #7918f2 0%,
    #7918f2 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box3 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
`;
