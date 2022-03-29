import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
interface ICardWrapperProps {
  width?: string;
  height?: string;
  isMine: boolean;
}
export const Wrapper = styled.div`
  width: ${(props: ICardWrapperProps) => props.width};
  height: : ${(props: ICardWrapperProps) => props.height};
  border: 1px solid black;
  border-radius: 20px;
  padding: ${(props: ICardWrapperProps) =>
  props.isMine ? "14px 30px 34px 30px" : "40px 30px 34px 30px"};
  margin: 0px 0px 20px 0px;
  background-color: ${Color.white};

  `;
export const MyButtonWrapper = styled(RowWrapper)`
  width: 100%;
  display: ${(props: { isMine: boolean }) => (props.isMine ? "flex" : "none")};
  justify-content: flex-end;
`;
export const TagWrapper = styled.div`
  display: flex;
`;

export const TextArea = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled(TextArea)`
  display: flex;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  :hover {
    cursor: pointer;
  }
  p {
    color: ${Color.main};
    margin: 0px 10px 0px 0px;
  }
`;

export const Date = styled.div`
  font-weight: 200;
  font-size: 24px;
  line-height: 36px;
  color: ${Color.medium};
  text-align: right;
  color: "#808080";
`;

export const Contents = styled(TextArea)`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`;

export const Writer = styled(TextArea)`
  font-weight: 200;
  font-size: 24px;
  line-height: 29px;
  color: ${Color.medium};
  text-align: right;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface IButtonProps {
  isGood: boolean;
}

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 25px;
  border-radius: 8px;

  background-color: ${Color.white};
  :hover {
    pointer: cursor;
  }
  p {
    color: ${(props: IButtonProps) => (props.isGood ? Color.main : Color.dark)};
  }
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
