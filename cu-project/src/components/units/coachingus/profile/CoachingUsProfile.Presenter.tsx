import { ICoachingUsProfileUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsProfile.Style";
import CoachingUsProfileRate from "./CoachingUsProfileRate";
import { BsFillTriangleFill } from "react-icons/bs";
import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";

export default function CoachingUsProfileUI(props: ICoachingUsProfileUIProps) {
  return (
    <S.Wrapper>
      <S.CoachSidebar>
        <S.CoachCard>
          <S.CardPicture></S.CardPicture>
          <S.CardContents>
            <S.ContentsTitle>{props.coach.corName}</S.ContentsTitle>
            <Blank height="5px" />
            <S.ContentsSubTitle>
              <p>{props.coach.profile.name} </p> &nbsp;| 프론트엔드 2년차
            </S.ContentsSubTitle>
            <Blank height="15px" />
            <S.ContentsPersentage>
              <S.AnswerRate>
                <S.RateText>
                  답변률 <p>90%</p>
                </S.RateText>
                <CoachingUsProfileRate />
              </S.AnswerRate>
              <S.ActivityRankingBox>
                <S.ActivityRanking>
                  <BsFillTriangleFill
                    style={{
                      width: "62px",
                      height: "62px",
                      color: "pink",
                    }}
                  />
                </S.ActivityRanking>
                <S.ActivityRanking2>
                  <BsFillTriangleFill
                    style={{
                      width: "62px",
                      height: "62px",
                      color: "white",
                    }}
                  />
                </S.ActivityRanking2>
                <S.RateTextRanking>
                  코치순위 <p>10%</p>
                </S.RateTextRanking>
              </S.ActivityRankingBox>

              <S.Rantangle>
                <S.RateTextActive>
                  활동점수 <p>2132점</p>
                </S.RateTextActive>
              </S.Rantangle>
            </S.ContentsPersentage>
            <Blank height="20px" />
            <S.ProfileBtn>
              <S.ContentsFollowBtn>팔로우</S.ContentsFollowBtn>
              <S.ContentsFollowBtn>질문하기</S.ContentsFollowBtn>
            </S.ProfileBtn>
          </S.CardContents>
        </S.CoachCard>
        <Blank height="50px" />
        <S.AddSideBar>
          <CoachingUsSidebar />
        </S.AddSideBar>
        <Blank height="50px" />
      </S.CoachSidebar>
      <S.CoachProfileBody>
        <S.CoachIntro>
          <S.CoachIntroTitle>멘토소개</S.CoachIntroTitle>
          <S.CoachIntroContents>멘토소개글</S.CoachIntroContents>
        </S.CoachIntro>
        <Blank height="100px" />
        <S.CoachComments>
          <S.CoachComments>Coach Comments</S.CoachComments>
          <Blank height="10px" />
          <S.CommentsBody>
            <S.CommentsTitle>Q) 멘티 질문 제목</S.CommentsTitle>
            <Blank height="10px" />
            <S.CommentsContents>
              A) 멘토 답변 내용 멘토 답변 내용 멘토 답변 내용 멘토 답변 내용
              멘토 답변 내용멘토 답변 내용멘토 답변 내용멘토 답변 내용멘토 답변
              내용멘토 답변 내용멘토 답변 내용멘토 답변 내용
            </S.CommentsContents>
            <Blank height="20px" />
            <S.CommentsInfo>
              <S.CommentsInfoHits>조회수 302</S.CommentsInfoHits>
              <Blank width="20px" />
              <S.CommentsInfoLikes>좋아요 21</S.CommentsInfoLikes>
            </S.CommentsInfo>
            <S.MoreBtn
              onClick={props.moveToPage(
                `/coachingus/coaches/columnid/comments`
              )}
            >
              <p>{">"}</p>더보기
            </S.MoreBtn>
          </S.CommentsBody>
        </S.CoachComments>
        <Blank height="100px" />
        <S.CoachColumn>
          Coach Columns
          <Blank height="30px" />
          <S.ContainerColumnsListBody>
            {props.columnList.map((column) => (
              <S.ColumnsList
                key={column.id}
                onClick={props.moveToPage(`/coachingus/column/${column.id}`)}
              >
                <S.ColumnPicture>{column.picture}</S.ColumnPicture>
                <Blank height="20px" />
                <S.ColumnText>
                  <S.ColumnTitle>
                    {column.title.length > 25 ? (
                      <S.ColumnShortenTitle>
                        {column.title.slice(0, 25) + "..."}
                      </S.ColumnShortenTitle>
                    ) : (
                      <S.ColumnTitle>{column.title}</S.ColumnTitle>
                    )}
                  </S.ColumnTitle>
                  <S.ColumnContents>
                    {column.contents.length > 30 ? (
                      <S.ColumnShortenContents>
                        {column.contents.slice(0, 30) + "..."}
                      </S.ColumnShortenContents>
                    ) : (
                      <S.ColumnContents>{column.contents}</S.ColumnContents>
                    )}
                  </S.ColumnContents>
                  <Blank height="5px" />
                  <S.ColumnFooter>
                    <div>김태훈</div>2일전
                  </S.ColumnFooter>
                </S.ColumnText>
              </S.ColumnsList>
            ))}
            <>
              <S.ListMoreBtn onClick={props.moveToPage(`/coachingus/columns`)}>
                <p>{">"}</p>더보기
              </S.ListMoreBtn>
            </>
          </S.ContainerColumnsListBody>
        </S.CoachColumn>
      </S.CoachProfileBody>
    </S.Wrapper>
  );
}
