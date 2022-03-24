import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  margin: 100px auto 0;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavBox = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
`;

export const Nav = styled.div`
  width: 100px;
  padding: 5px;
  border: none;
  border-radius: 15px;
  text-align: center;
  margin-right: 20px;
  color: ${(props) => (props.isSelect ? "white" : Color.sub)};
  background-color: ${(props) => (props.isSelect ? Color.sub : "white")};
  border: ${(props) => (props.isSelect ? "none" : `1px solid ${Color.sub}`)};
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const CodingUs = styled.h1`
  background: linear-gradient(0deg, #7918f2 0%, #ea345a 100%);
  color: transparent;
  -webkit-background-clip: text;
`;

export const Line1 = styled.div`
  width: 100%;
  height: 1px;
  /* background-color: #444444; */
  border: 1px solid;
  border-radius: 20px;
  border-image: linear-gradient(to right, #ea345a, rgba(255, 255, 255, 0));
  border-image-slice: 1;
  margin: 10px;
`;

export const BlogBox = styled.div`
  width: 100%;
`;

export const BlogBackGround = styled.div`
  width: 100%;
  background-image: url("/Rectangle 571.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const QuestionBox = styled.div`
  width: 100%;
`;

export const QuestionBackGround = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.25rem;
  border: none;
  border-radius: 10px;
  background-color: ${Color.main};
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export const CoachingUs = styled.h1`
  background: linear-gradient(0deg, #7918f2 0%, #ea345a 100%);
  color: transparent;
  -webkit-background-clip: text;
`;

export const Line2 = styled.div`
  width: 100%;
  height: 1px;
  /* background-color: #444444; */
  border: 1px solid;
  border-radius: 20px;
  border-image: linear-gradient(to right, #7918f2, rgba(255, 255, 255, 0));
  border-image-slice: 1;
  margin: 10px;
`;

export const CoachingBackGround = styled.div`
  width: 100%;
  background-image: url("/Rectangle 567.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const SearchButton2 = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.25rem;
  border: none;
  border-radius: 10px;
  background-color: ${Color.sub};
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;
