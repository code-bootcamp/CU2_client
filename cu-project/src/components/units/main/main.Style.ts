import styled from "@emotion/styled";
import Slider from "react-slick";
import Color from "../../../commons/styles/color";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const SliderBox = styled(Slider)`
  width: 100vw;
  height: 50vh;
  z-index: -1;
`;

export const SliderBanner = styled.div`
  margin: 0;
  width: 100vw;
  height: 50vh;
  background-image: url("/backgroundmain.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 20vh;
  display: flex;
  justify-content: center;

  & div {
    min-width: 1200px;
  }
`;

export const CodingUsBanner = styled.div`
  width: 100vw;
  background-color: #f6f5f5;
  display: flex;
  justify-content: center;
`;

export const CodingUsBannerDiv = styled.div`
  min-width: 1200px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CodingUsBannerTitle = styled.div`
  background-color: #f6f5f5;
  > p {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin: 0;
  }
  > h1 {
    font-weight: bold;
    color: ${Color.main};
    margin: 0;
  }
`;

export const CodingUsButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  color: white;
  background-color: ${Color.main};
`;

export const SearchBox = styled.div`
  min-width: 1200px;
`;

export const TagsBox = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Tag = styled.button`
  padding: 10px;
  background-color: #f6f5f5;
  border: none;
  border-radius: 70px;
`;

export const ServiceBox = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ServiceHead = styled.h2`
  font-weight: bold;
  font-size: 24px;
  width: 100%;
`;
export const ServiceSubHead = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  color: #808080;
`;

export const ServiceBody = styled.div`
  width: 100%;
  align-items: center;

  .container {
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
    width: 400px;
  }
  h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }

  .slick-next:before {
    color: black;
  }
`;

export const SearchBarArea = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  width: 100%;
  background: #f6f5f5;
  border-radius: 100px;
  padding: 5px 25px;
`;
export const SearchBarBody = styled.input`
  width: 100%;
  padding: 10px 0;
  resize: none;
  background: none;
  border: none;
  font-size: 16px;
  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
  :focus {
    outline: none;
  }
`;
