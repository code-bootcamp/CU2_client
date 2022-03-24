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
  justify-content: space-between;
`;

export const ButtonWrapper = styled(RowWrapper)``;

export const TitleInput = styled.input`
  font-weight: 700;
  font-size: 48px;
  border: none;
  :focus {
    outline: none;
  }
`;
