import styled from "@emotion/styled";
import { ICurrentPathProps } from "../../../../../commons/types/types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  padding-bottom: 20px;

  border-bottom: 2px solid black;
  @media screen and (max-width: 1440px) {
    font-size: 21px;
  }
`;
export const Sidenav = styled.div`
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 21px;
  color: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "black" : "#C4C4C4"};
  font-weight: ${(props: ICurrentPathProps) =>
    props.isCurrent ? "bold" : "normal"};
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const BoldLine = styled.div`
  width: 1%;
  animation: present 1s forwards;
  @keyframes present {
    0% {
      width: 1%;
      border-bottom: solid 3px black;
    }
    100% {
      width: 100%;
      border-bottom: solid 3px black;
    }
  }
`;
