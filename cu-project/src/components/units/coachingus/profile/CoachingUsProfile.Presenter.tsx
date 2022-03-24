import { ICoachingUsProfileUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsProfile.Style";
import CoachingUsProfileRate from "./CoachingUsProfileRate";
import { BsFillTriangleFill } from "react-icons/bs";

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
            <Blank height="20px" />
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
      </S.CoachSidebar>
      <S.CoachProfileBody>
        <S.CoachIntro>
          <S.CoachIntroTitle>멘토소개</S.CoachIntroTitle>
          <S.CoachIntroContents>멘토소개글</S.CoachIntroContents>
        </S.CoachIntro>
        <Blank height="30px" />
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
            <S.MoreBtn>
              <p>{">"}</p>더보기
            </S.MoreBtn>
          </S.CommentsBody>
        </S.CoachComments>
        <Blank height="30px" />
        <S.CoachColumn>Coach Columns</S.CoachColumn>
      </S.CoachProfileBody>
    </S.Wrapper>
  );
}
