import styled from "@emotion/styled";
import Color from "../../../../../../../commons/styles/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Comment = styled.div`
  padding: 3%;
`;

export const CommentHeader = styled(RowWrapper)`
  justify-content: space-between;
`;

export const UserInfo = styled(RowWrapper)``;
export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Color.medium};
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column-reverse; ;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LikeButton = styled.div``;

export const MyButtonWrapper = styled(RowWrapper)``;

export const MyButton = styled.div`
  display: ${(props: { isMyComment: boolean }) =>
    props.isMyComment ? "block" : "none"};
  color: ${Color.medium};
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;

export const CommentBody = styled.div``;

export const Contents = styled.div`
  font-size: 18px;
  line-height: 25px;
  font-weight: 300;
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

export const CommentInputWrapper = styled.div`
  
`;
