import styled from "@emotion/styled";

export const AllWrapper = styled.div`
  margin: 100px 12.5% 0;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const TitleInput = styled.input`
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  border: none;
  :focus {
    outline: none;
  }
`;
