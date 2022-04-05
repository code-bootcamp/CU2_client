import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const RowWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  width: 60%;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  height:36px;
  overflow: hidden;
`;

export const AnswerBtn = styled.button`
  width: 187px;
  height: 62px;
  color: white;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  border-radius: 8px;
  border: none;
  transition: all 0.2s ease-in-out;
  /* background-color: red; */
  background: ${Color.main};
  animation: showing2 0.2s linear;
  :hover {
    cursor: pointer;
    background-color: ${Color.sub}
  }
`;
