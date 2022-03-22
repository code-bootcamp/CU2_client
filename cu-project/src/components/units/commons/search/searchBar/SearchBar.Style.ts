import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
`;
export const SearchBarArea = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  width: 100%;
  background: #f6f5f5;
  border-radius: 100px;
  padding: 5px 25px;
`;
export const SearchBarBody = styled.input`
  resize: none;
  background: none;
  border: none;
  font-size: 16px;
  /* min-width: 350px; */
  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
  :focus {
    outline: none;
  }
`;
