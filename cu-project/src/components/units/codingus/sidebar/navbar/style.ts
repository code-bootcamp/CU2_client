import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 250px; */
`;

export const CodingUs= styled.div`
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

export const Title = styled.div`
  display: inherit;
  font-size: 18px;
  width: 180px;
  color: ${(props: {isNow: boolean}) => props.isNow ? Color.dark : Color.medium};
  font-weight: ${(props: {isNow: boolean}) => props.isNow ? "700":"400"};
  :hover {
    cursor: pointer;
  }
`;
