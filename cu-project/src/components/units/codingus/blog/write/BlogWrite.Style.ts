import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

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
`;

export const ButtonWrapper = styled(RowWrapper)`
  justify-content: space-between;
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
