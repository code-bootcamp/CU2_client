import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import Tag01 from "../../../../commons/Tag/Tag01";
import Tag02 from "../../../../commons/Tag/Tag02";
import QnADetailCard from "../../card/qnaDetailCard/QnADetailCard";
import * as S from "./QnADetail.Style";
import { v4 as uuidv4 } from "uuid";
import VerticalLine from "../../../../commons/Line/VerticalLine";
import { Dispatch, MouseEvent, SetStateAction } from "react";
interface ICodingUsQnaDetailUIProps {
  question: {
    writer: string;
    createdAt: string;
    title: string;
    contents: string;
    stack: string;
    tags: string[];
  };
  answers: {
    writer: string;
    createdAt: string;
    title: string;
    contents: string;
    stack: string;
    tags: string[];
  }[];
  isSortGood: boolean;
  toggleSortGubun: () => void;
  onClickButton: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (gubun: "question" | "answer", id: string) => () => void;
  editValue: string;
  setEditValue: Dispatch<SetStateAction<string>>
  onClickEditSubmit: (gubun: "question" | "answer", id: string) => () => void;
}

export default function CodingUsQnADetailUI(props: ICodingUsQnaDetailUIProps) {
  return (
    <S.QnADetail>
      <Label01 value="Stack" size="36px" weight="700" />
      <Blank height="28px" />
      <S.Tags>
        <Tag01 value={props.question.stack} isShort={true} />
        <Blank width="20px" />
        {props.question.tags &&
          props.question.tags.map((el) => (
            <S.RowWrapper key={uuidv4()}>
              <Tag02 value={el} size="24px" />
              <Blank width="10px" />
            </S.RowWrapper>
          ))}
      </S.Tags>
      <Blank height="21px" />
      <QnADetailCard
        isQuestion={true}
        writer={props.question.writer}
        title={props.question.title}
        contents={props.question.contents}
        createdAt={props.question.createdAt}
        onClickBtn={props.onClickButton}
        onClickDelete={props.onClickDelete}
        editValue={props.editValue}
        setEditValue={props.setEditValue}
        onClickEditSubmit={props.onClickEditSubmit}
      />
      <Blank height="166px" />
      <Label01 value="Answers" size="36px" weight="700" />
      <Blank height="24px" />
      <S.Gubun>
        <S.GubunLabel
          isSelected={props.isSortGood}
          onClick={() => {
            if (!props.isSortGood) props.toggleSortGubun();
          }}
        >
          Good순
        </S.GubunLabel>
        <VerticalLine margin={20} />
        <S.GubunLabel
          isSelected={!props.isSortGood}
          onClick={() => {
            if (props.isSortGood) props.toggleSortGubun();
          }}
        >
          최신순
        </S.GubunLabel>
      </S.Gubun>
      <Blank height="30px" />
      {props.answers &&
        props.answers.map((el) => (
          <QnADetailCard
            key={uuidv4()}
            isQuestion={false}
            writer={el.writer}
            title={el.title}
            contents={el.contents}
            createdAt={el.createdAt}
            onClickBtn={props.onClickButton}
            onClickDelete={props.onClickDelete}
            onClickEditSubmit={props.onClickEditSubmit}
            editValue={props.editValue}
            setEditValue={props.setEditValue}
          />
        ))}
    </S.QnADetail>
  );
}
