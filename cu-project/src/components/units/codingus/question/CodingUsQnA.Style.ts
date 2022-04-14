import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 0;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CodingUsQnA = styled.div`
  display: flex;
  min-width: 1200px;
  width: 1200px;
`;

export const WaitingWrapper = styled.div``;

export const GubunLabel = styled(RowWrapper)`
  font-weight: 700;
  font-size: 24px;
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? Color.dark : Color.light};

  :hover {
    cursor: ${(props: { isSelected: boolean }) =>
      props.isSelected ? "normal" : "pointer"};
  }

  p {
    margin: 0px 0px 0px 10px;
    color: ${(props: { isSelected: boolean }) =>
      props.isSelected ? Color.main : Color.light};
  }
`;

export const CodingUsQnABody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

export const CardWrapper = styled(RowWrapper)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 172px;

  background: #0094ff;
  border-radius: 8px;
`;
