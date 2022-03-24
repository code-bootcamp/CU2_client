import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const QnADetail = styled.div`
  width: 95%;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Tags = styled(RowWrapper)``;

export const GubunLabel = styled.div`
font-size: 24px;
  color: ${(props: {isSelected: boolean})=> props.isSelected ? Color.dark : Color.medium};
  font-weight: ${(props: {isSelected: boolean})=> props.isSelected ? "700" : "400"};
  :hover{
    cursor: ${(props: {isSelected: boolean})=> props.isSelected ? "normal": "pointer"}
  }
`;

export const Gubun = styled.div`
  display: flex;
`;