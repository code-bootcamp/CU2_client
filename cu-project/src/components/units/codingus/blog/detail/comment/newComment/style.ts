import styled from "@emotion/styled";
import Color from "../../../../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const CommentInput = styled.textarea`
  font-size: 18px;
  resize: none;
  padding: 20px 15px 20px 15px;
  border: 1px solid ${Color.medium};
  width: 100%;
  height: 120px;
  border-radius: 4px;
  line-height: 30px;

  :focus {
    outline: none;
  }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
`;