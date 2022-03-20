import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceName = styled.p`
  width: 1200px;
  padding: 0 30px;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  :hover {
    cursor: pointer;
  }
`;

export const BlogList = styled.div`
  width: 1200px;
  height: 300px;
  padding: 30px;
`;

export const ContentsList = styled.div`
  width: 1000px;
  padding: 30px;
`;

export const ImgDiv = styled.div`
  width: 100px;
  padding: 20px;
`;

export const SliderBox = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #e3e3e3;
    font-size: 30px;
  }
`;
