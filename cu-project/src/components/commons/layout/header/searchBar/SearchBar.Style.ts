import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
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
export const SearchBarBody = styled.div`
  resize: none;
  background: none;
  border: none;
  font-size: 16px;
  color: #bdbdbd;
  /* min-width: 350px; */
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
