
import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";




export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;
export const HistoryWrapper = styled.div`
width: 100%;`;

export const HistoryItems = styled(RowWrapper)`
  width: 100%;
  /* background-color: ${Color.dark}; */
  border-radius: 100px;
  justify-content: space-around;
  padding: 21px 0px 32px 0px;
`;
export const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.light};
  width: 230px;
  padding: 15px 0px 15px 0px;
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


