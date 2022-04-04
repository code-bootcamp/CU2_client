import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import Tag01 from "../../../../commons/Tag/Tag01";
import Tag02 from "../../../../commons/Tag/Tag02";
import QnAAnswerCard from "../../card/qnaAnswer/QnA.Answer";
import * as S from "./QnADetail.Style";
import { v4 as uuidv4 } from "uuid";
import VerticalLine from "../../../../commons/Line/VerticalLine";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import QnANewAnswerCard from "./newAnswer/NewAnswer";
import QnAQuestionCard from "../../card/qnaQuestion/QnA.Question";
import {
  IStack,
  IStackComment,
} from "../../../../../commons/types/generated/types";
interface ICodingUsQnaDetailUIProps {
  question: IStack | undefined;
  answers: any[];
  isSortGood: boolean;
  toggleSortGubun: () => void;
  onClickButton: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (id: string) => () => void;
  editValue: string;
  setEditValue: Dispatch<SetStateAction<string>>;
  onClickEditSubmit: (id: string) => () => void;
  onClickSubmitAnswer: (content: string) => () => void;
}

export default function CodingUsQnADetailUI(props: ICodingUsQnaDetailUIProps) {
  return (
    <S.QnADetail>
      <Label01 value="Stack" size="36px" weight="700" />
      <Blank height="28px" />
      <S.Tags>
        <Tag01
          value={props?.question?.stacktag?.[0].tag || ""}
          isShort={true}
        />
        <Blank width="20px" />
        {props.question?.stacktag &&
          props.question?.stacktag
            .filter((_, idx) => idx > 0)
            .map((el) => (
              <S.RowWrapper key={uuidv4()}>
                <Tag02 value={el.tag} size="24px" />
                <Blank width="10px" />
              </S.RowWrapper>
            ))}
      </S.Tags>
      <Blank height="21px" />
      <QnAQuestionCard
        isQuestion={true}
        title={props.question?.title}
        contents={props.question?.contents}
        like={props.question?.like}
        createAt={props.question?.createAt}
        nickname={props.question?.user.nickname}
        dislike={props.question?.dislike}
        tags={props.question?.stacktag?.map((el) => el.tag)}
        onClickBtn={props.onClickButton}
        onClickDelete={props.onClickDelete}
        editValue={props.editValue}
        setEditValue={props.setEditValue}
        onClickEditSubmit={props.onClickEditSubmit}
      />
      <Blank height="166px" />

      <Label01 value="New Answer" size="36px" weight="700" />
      <Blank height="24px" />
      <QnANewAnswerCard onClickSubmitAnswer={props.onClickSubmitAnswer} />
      <Blank height="90px" />

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
          <QnAAnswerCard
            key={uuidv4()}
            title={el.title}
            contents={el.contents}
            like={el.like}
            createAt={el.createAt}
            nickname={el.nickname}
            dislike={el.dislike}
            tags={["JavaScript"]}
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
