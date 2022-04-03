import { ICodingUsQnAUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import Label01 from "../../../commons/Label/Label01";
import WriteBtn from "../writeBtn/WriteBtn";
import QnACard from "../card/qnaCard/QnACard";
import CodingUsHistory from "../history/History.Container";
import * as S from "./CodingUsQnA.Style";
import QuestionCard01 from "../../../commons/Card/QuestionCard01/QuestionCard01.Container";
import { v4 as uuidv4 } from "uuid";
const dummyData = {
  id: "asdasdsadsadasdsadsa",
  title: "이것이 궁금해요~~~~~!!!",
  contents: "JAVA,컴퓨터부품![contents]궁금해요~~~~알려주세요~~~~~~~",
  createdAt: "2022-02-07T14:42:53.532Z",
  stacktag: [{ tag: "JavaScript" }],
};

export default function CodingUsQnAUI(props: ICodingUsQnAUIProps) {
  return (
    <S.CodingUsQnA>
      <S.CodingUsQnABody>
        <CodingUsHistory
          historyData={{
            작성글: 10,
            GOOD: 24,
            BAD: 2,
            채택: 0,
            댓글: 13,
          }}
          title="My Stack History"
        ></CodingUsHistory>
        <Blank height="57px" />
        <S.BannerWrapper />
        <Blank height="97px" />
        <Label01 value={"Q&A CodingUs"} weight="700" size="27px" />
        <Blank height="16px" />
        <Label01 value={"많이 본 Q&A"} weight="700" size="18px" />
        <Blank height="15px" />
        <S.CardWrapper>
          {props.data?.fetchotherStackorderbylike
            .filter((_, idx) => idx < 4)
            .map((el) => (
              <QnACard
                key={uuidv4()}
                data={el}
                // onClick={props.moveToPage(`/codingUs/qna/${idx}`)}
              ></QnACard>
            ))}
        </S.CardWrapper>
        <Blank height="135px" />
        <S.WaitingWrapper>
          <Label01 value={"답변을 기다리고 있어요"} weight="700" size="36px" />
          <Label01
            value={"더 보기 >"}
            weight="700"
            size="18px"
            textAlign="right"
          />
          <S.RowWrapper>
            <S.GubunLabel
              isSelected={props.isMyQuestion}
              onClick={() => {
                !props.isMyQuestion && props.toogleIsMyQuestion();
              }}
            >
              질문<p>{props.waitingCnt ?? 0}</p>
            </S.GubunLabel>
            <Blank width="22px" />
            |
            <Blank width="22px" />
            <S.GubunLabel
              isSelected={!props.isMyQuestion}
              onClick={() => {
                props.isMyQuestion && props.toogleIsMyQuestion();
              }}
            >
              내 질문 <p>{props.myWaitingCnt ?? 0}</p>
            </S.GubunLabel>
          </S.RowWrapper>
          <Blank height="30px" />
          <Blank height="30px" />
          {props.data?.fetchotherStackorderbylike.map((el) => (
            <div key={uuidv4()}>
              <QuestionCard01
                data={el}
                isAnswered={true}
                onClickAnswer={() => {}}
              />
              <Blank height="30px" />
            </div>
          ))}
        </S.WaitingWrapper>
      </S.CodingUsQnABody>
      <WriteBtn page="question" />
    </S.CodingUsQnA>
  );
}
