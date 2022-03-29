import styled from "@emotion/styled";
import { ICurrentPathProps } from "../../../../commons/types/types";

export const Wrapper = styled.div`
  min-width: 100vw;
  height: max-content;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  padding: ${({ isSearch }) =>
    isSearch ? "10px 40px 130px 40px" : "10px 40px"};

  position: fixed;
  top: 0;

  z-index: 10;
`;

export const LeftHeader = styled.div``;
export const HeaderBody = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightHeader = styled.div`
  display: flex;
`;

export const HeaderLogo = styled.img`
  width: 50px;
  cursor: pointer;
`;
export const HeaderCodingUs = styled.div`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "bold" : "normal"};
  color: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "#ea345a" : "black"};
  cursor: pointer;
`;
export const HeaderCoachingUs = styled.div`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "bold" : "normal"};
  color: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "#ea345a" : "black"};
  cursor: pointer;
`;

export const HeaderSign = styled.div`
  display: flex;
`;
export const SingIn = styled.div`
  min-width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "bold" : "normal"};
  color: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "#ea345a" : "black"};
  cursor: pointer;
`;
export const SingUp = styled.div`
  min-width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "bold" : "normal"};
  color: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "#ea345a" : "black"};
  cursor: pointer;
`;
export const HeaderMypage = styled.div`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "bold" : "normal"};
  color: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "#ea345a" : "black"};
  cursor: pointer;
`;

export const BoldLine = styled.div`
  width: 1%;
  animation: present 1s forwards;
  @keyframes present {
    0% {
      width: 1%;
      border-bottom: ${(props: ICurrentPathProps) =>
        props.isCurrent ? "solid 3px #ea345a" : "solid 3px black"};
    }
    100% {
      width: 100%;
      border-bottom: ${(props: ICurrentPathProps) =>
        props.isCurrent ? "solid 3px #ea345a" : "solid 3px black"};
    }
  }
`;

// searchBar 영역

export const SearchBarDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -30px;
  left: 0;
  width: 100vw;
  margin-top: 100px;
  transition: all 0.1s ease-in-out;
  /* background-color: red; */
  animation: ${({ isSearch }) => isSearch && "showing 0.1s linear"};
  @keyframes showing {
    0% {
      height: 0%;
      /* width: 0%; */
    }
    100% {
      height: 100px;
      /* width: 100vw; */
    }
  }
`;

export const CategoryLine = styled.div`
  width: 1%;
  animation: Category 1s forwards;
  @keyframes Category {
    0% {
      width: 1%;
      border-bottom: ${(props) =>
        props.isCategory ? "solid 3px #7918F2" : "solid 3px black"};
    }
    100% {
      width: 100%;
      border-bottom: ${(props) =>
        props.isCategory ? "solid 3px #7918F2" : "solid 3px black"};
    }
  }
`;

export const SearchCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
export const Category = styled.div`
  color: ${({ isCurrent }) => (isCurrent ? "#7918F2" : "black")};
  font-weight: ${({ isCurrent }) => (isCurrent ? "bolder" : "normal")};
`;

export const CoachingUsSubCategory = styled.div`
  cursor: pointer;
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  width: 50%;
  background: #f6f5f5;
  border-radius: 100px;
  padding: 15px 25px;
`;
export const SearchBarInput = styled.input`
  all: unset;
  width: calc(100% - 20px);
  padding-left: 10px;
`;

export const SearchBarCancleBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 25px;
  background-color: #dbdbdb;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  padding: 10px 30px;
  position: relative;
  top: 105px;
  right: -800px;
  :hover {
    background-color: black;
  }
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  /* background-color: red; */
  animation: showing2 0.2s linear;
  @keyframes showing2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
