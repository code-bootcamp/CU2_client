import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentsList = styled.div`
  width: 1000px;
  height: 300px;
  background-color: skyblue;
  padding: 30px;
`;

export const ImgDiv = styled.div`
  width: 100px;
  height: 200px;
  padding: 20px;
`;

export const SliderBox = styled(Slider)``;
