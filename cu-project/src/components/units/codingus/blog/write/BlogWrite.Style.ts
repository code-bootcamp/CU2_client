import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const CodingUsBlogWrite = styled.div`
  margin: 100px 0% 0% 5%;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  justify-content: center;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled(RowWrapper)`
  justify-content: space-between;
  z-index: 2;
  position: fixed;
  width: 90%;
  top: 80px;
  padding: 20px 0px 10px 0px;
  background-color: ${Color.white};
`;

export const TitleInput = styled.input`
  font-weight: 700;
  font-size: 48px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const TagWrapper = styled(RowWrapper)`
  width: 100%;
`;

export const TagList = styled(RowWrapper)``;

export const TagInput = styled.input`
  display: inherit;
  width: 100%;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  border: none;
  :focus {
    outline: none;
  }
  
`;

