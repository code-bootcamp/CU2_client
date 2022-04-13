import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import Tag01 from "../../../../commons/Tag/Tag01";
import Tag02 from "../../../../commons/Tag/Tag02";
import QnAAnswerCard from "../../card/qnaAnswer/QnA.Answer";
import * as S from "./QnADetail.Style";
import { v4 as uuidv4 } from "uuid";
import VerticalLine from "../../../../commons/Line/VerticalLine";
import QnANewAnswerCard from "./newAnswer/NewAnswer";
import QnAQuestionCard from "../../card/qnaQuestion/QnA.Question";
import { ICodingUsQnaDetailUIProps } from "../../../../../commons/types/types";


export default function CodingUsQnADetailUI(props: ICodingUsQnaDetailUIProps) {
  return (
    <S.QnADetail>
      <Label01 value="Stack" size="36px" weight="700" />
      <Blank height="28px" />
      <S.Tags>
        <Tag01
          value={props?.question?.stacktag?.[0]&& props?.question?.stacktag?.[0].tag || ""}
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
        id={props.question?.id}
        isQuestion={true}
        data={props.question}
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
          isSelected={props.isSortLike}
          onClick={() => {
            if (!props.isSortLike) props.toggleSortGubun();
          }}
        >
          Good순
        </S.GubunLabel>
        <VerticalLine margin={20} />
        <S.GubunLabel
          isSelected={!props.isSortLike}
          onClick={() => {
            if (props.isSortLike) props.toggleSortGubun();
          }}
        >
          최신순
        </S.GubunLabel>
      </S.Gubun>
      <Blank height="30px" />
      {props.answers &&
        props.answers.map((el) => (
          <QnAAnswerCard
            data={el}
            key={uuidv4()}
            onClickBtn={props.onClickButton}
            onClickDelete={props.onClickDelete}
            onClickEditSubmit={props.onClickEditSubmit}
            editValue={props.editValue}
            setEditValue={props.setEditValue}
            editCommentRef={props.editCommentRef}
            onClickEditAnswer={props.onClickEditAnswer}
          />
        ))}
    </S.QnADetail>
  );
}
