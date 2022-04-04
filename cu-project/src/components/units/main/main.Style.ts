import styled from "@emotion/styled";
import Slider from "react-slick";
import Color from "../../../commons/styles/color";
import { breakPoints } from "../../../commons/styles/media";

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
  height: 400px;
`;

export const SliderBanner = styled.div`
  width: 100vw;
  height: 400px;
  background-image: url("/backgroundmain.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 0;
  word-break: keep-all;
  & div {
    max-width: 1200px;
    width: 100%;
    & h1 {
      color: white;
      font-size: 48px;
      @media ${breakPoints.tablet} {
        font-size: 36px;
      }
      @media ${breakPoints.mobile} {
        font-size: 32px;
      }
    }
    & p {
      color: white;
      font-size: 28px;
      @media ${breakPoints.tablet} {
        font-size: 24px;
      }
      @media ${breakPoints.mobile} {
        font-size: 18px;
      }
    }
  }
`;

export const CodingUsBanner = styled.div`
  width: 100vw;
  background-color: #f6f5f5;
  display: flex;
  justify-content: center;
`;

export const CodingUsBannerDiv = styled.div`
  width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-break: keep-all;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const CodingUsBannerTitle = styled.div`
  background-color: #f6f5f5;
  > p {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin: 0;
    @media ${breakPoints.tablet} {
      font-size: 18px;
    }
    @media ${breakPoints.mobile} {
      font-size: 16px;
    }
  }
  > h1 {
    font-weight: bold;
    color: ${Color.main};
    margin: 0;
    @media ${breakPoints.tablet} {
      font-size: 24px;
    }
    @media ${breakPoints.mobile} {
      font-size: 18px;
    }
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
  cursor: pointer;

  @media ${breakPoints.mobile} {
    margin-top: 10px;
  }
`;

export const SearchBox = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
`;

export const TagsBox = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  overflow: scroll;
  @media ${breakPoints.tablet && breakPoints.mobile} {
    justify-content: flex-start;
  }
`;

export const Tag = styled.p`
  width: max-content;
  padding: 10px;
  height: 40px;
  background-color: #f6f5f5;
  border: none;
  border-radius: 70px;
  @media ${breakPoints.tablet && breakPoints.mobile} {
    margin-right: 10px;
  }
`;

export const ServiceBox = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.tablet} {
    padding: 0 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
`;

export const ServiceHead = styled.h2`
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  @media ${breakPoints.mobile} {
    font-size: 18px;
  }
`;
export const ServiceSubHead = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  color: #808080;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const SliderContentBox = styled(Slider)`
  width: calc(100% - 30px);
`;

export const ServiceBody = styled.div`
  width: 100%;
  align-items: center;

  h3 {
    background: #5f9ea0;
    color: #fff;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    text-align: center;
    box-sizing: content-box;
  }
  .slick-next:before {
    color: ${Color.main};
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

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: "wrap";
`;
