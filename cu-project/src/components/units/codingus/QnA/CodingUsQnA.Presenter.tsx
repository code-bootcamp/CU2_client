import { ICodingUsQnAUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import Label01 from "../../../commons/Label/Label01";
import QnACard from "../card/qnaCard/QnACard";
import CodingUsHistory from "../history/History.Container";
import CodingUsSidebar from "../sidebar/Sidebar.Container";
import * as S from "./CodingUsQnA.Style";
import WaitingItem from "./waitingItem/WaitingItem.Container";

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
          <S.BannerWrapper/>
          <Blank height="97px" />
          <Label01 value={"Q&A CodingUs"} weight="700" size="27px" />
          <Blank height="16px" />
          <Label01 value={"많이 본 Q&A"} weight="700" size="18px" />
          <Blank height="15px" />
          <S.CardWrapper>
            {new Array(4).fill(0).map((_, idx) => (
              <QnACard
                key={idx}
                title="Q. 국회는 의장 1인과 부의장 2인을 선출한다?"
                contents="국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정"
                writer="작성자"
                tags={["JAVA", "CSS"]}
                // onClick={props.moveToPage(`/codingUs/qna/${idx}`)}
              ></QnACard>
            ))}
          </S.CardWrapper>
          <Blank height="135px" />
          <S.WaitingWrapper>
            <Label01
              value={"답변을 기다리고 있어요"}
              weight="700"
              size="36px"
            />
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
            {new Array(4).fill(0).map((el, idx) => (
              <div key={idx}>
                <WaitingItem
                  data={{
                    stack: "스택",
                    tags: ["컴퓨터 부품", "JAVA"],
                    title: "모든 국민은 학문과 예술의 자유를 가진다.",
                    images: ["https://source.unsplash.com/random"],
                    commentCnt: 3,
                    createdAt: "2022-02-07T14:42:53.532Z",
                  }}
                  onClickAnswer={() => {}}
                />
                <Blank height="30px" />
              </div>
            ))}
          </S.WaitingWrapper>
        </S.CodingUsQnABody>
      </S.CodingUsQnA>
  );
}
