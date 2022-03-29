import styled from "@emotion/styled";
import Color from "../../../../../../commons/styles/color";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
interface ICardWrapperProps {
  width?: string;
  height?: string;
  isQuestion?: boolean;
  isMine: boolean;
}
export const Wrapper = styled.div`
  width: ${(props: ICardWrapperProps) => props.width};
  height: : ${(props: ICardWrapperProps) => props.height};
  border-radius: 20px;
  padding: ${(props: ICardWrapperProps) =>
    props.isMine ? "14px 30px 34px 30px" : "40px 30px 34px 30px"};
  margin: 0px 0px 20px 0px;
  background-color: ${(props: ICardWrapperProps) =>
    props.isQuestion ? "#F0F0F0" : Color.white};

    border: ${(props: ICardWrapperProps) =>
      props.isQuestion ? "none" : "1px solid black"};
  `;

export const TitleInput = styled.input`
width: 100%;
height: 100%;
border: none;
font-size: 24px;
padding: 30px 30px 0px 30px;
:focus{
  outline: none;
}
`;

export const ContentsInput = styled.textarea`
width: 100%;
height: 100%;
border: none;
min-height: 200px;
font-size: 24px;
padding: 30px 30px 10px 30px;
:focus{
  outline: none;
}
  resize: none;
`;
