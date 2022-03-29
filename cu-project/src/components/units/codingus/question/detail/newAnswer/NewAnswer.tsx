import * as S from "./NewAnswer.Style";
import { useRef } from "react";
import Button02 from "../../../../../commons/Button/Button02";

interface IQnANewAnswerProps {
  onClickSubmitAnswer: (contente: string) => () => void;
}

export default function QnANewAnswerCard(props: IQnANewAnswerProps) {
  const contentsRef = useRef<HTMLTextAreaElement>(null);
  const onClickSubmitButton = () => {
    const contentsVal = contentsRef.current?.value;
    if (!contentsVal) {
      alert("답변을 입력해주세요");
      return;
    }
    props.onClickSubmitAnswer(contentsVal);
  };
  return (
    <>
    <S.Wrapper width={"100%"} isMine={true}>
      <S.ContentsInput placeholder="내용" ref={contentsRef}></S.ContentsInput>
    </S.Wrapper>
      <S.RowWrapper style={{ justifyContent: "flex-end", padding: "0px 10px"}}>
        <Button02 value="등록" onClick={onClickSubmitButton} />
      </S.RowWrapper>
    </>
  );
}
