import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const CodingUsBlog = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* max-width: 1200px; */
`;
export const CodingUsBlogBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;
export const HistoryWrapper = styled.div`
  width: 100%;
`;

export const HistoryItems = styled(RowWrapper)`
  width: 100%;
  /* background-color: ${Color.dark}; */
  background-color: ${Color.light};
  border-radius: 100px;
  justify-content: space-around;
  padding: 21px 0px 32px 0px;
`;
export const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export const HotTopicWrapper = styled.div``;
export const CardWrapper = styled(RowWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
export const FollowingWrapper = styled.div``;
interface IGubunProps {
  isSelected: boolean;
}
export const SortGubun = styled(RowWrapper)``;
export const GubunLabel = styled.div`
  font-weight: ${(props: IGubunProps) => (props.isSelected ? "700" : "300")};
  font-size: 24px;
  color: ${(props: IGubunProps) => (props.isSelected ? "black" : Color.medium)};
  margin-right: 18px;
  :hover {
    cursor: pointer;
  }
`;
