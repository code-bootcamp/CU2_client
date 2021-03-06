import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const AllWrapper = styled.div`
  margin: 100px 12.5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Web = styled.div`
  @media ${breakPoints.tablet && breakPoints.mobile} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const NavBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Box = styled.div`
  width: 80%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px #bdbdbd;
  border-radius: 10px;
  padding: 30px;
  & button {
    height: 50px;
    border: none;
    border-radius: 10px;
    font-size: 18px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  line-height: 30px;
  & p {
    width: 30%;
  }
  & input {
    width: 40%;
    height: 40px;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
    margin-right: 10px;
    padding-left: 10px;
  }

  & button {
    width: 100px;
    height: 100%;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    :hover {
      cursor: pointer;
      :disabled {
        :hover {
          cursor: default;
        }
      }
    }
  }
`;
