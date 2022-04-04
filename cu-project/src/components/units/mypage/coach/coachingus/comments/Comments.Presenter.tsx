import { useRouter } from "next/router";
import { BiDislike, BiLike } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { SiAnsible } from "react-icons/si";
import Blank from "../../../../../commons/Blank";
import { CoachPageNav } from "../../../../../commons/Mypage/MypageNav";
import { CoachingSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import CoachpageMenu from "../../CoachpageMenu.Container";
import * as S from "./Comments.Style";

export default function CommentsUI(props) {
  const router = useRouter();
  return (
    <S.AllWrapper>
      <S.Web>
        <CoachpageMenu />
      </S.Web>
      <S.Wrapper>
        <CoachPageNav menu={"내 코칭 보기"} />
        <S.BlogHeader>
          <h2>전체글 {props.data?.fetchCoachQuestionList.length}</h2>
          <CoachingSearchBar />
        </S.BlogHeader>
        {props.data?.fetchCoachQuestionList?.map((comment, index) => (
          <S.CommentsContainer key={index} style={{ width: "90%" }}>
            <S.CommentsTitle>
              <S.CommentsTitleLeft
                onClick={() =>
                  router.push(
                    `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
                  )
                }
              >
                <S.TitlePicture></S.TitlePicture>
                <Blank width="10px" />
                <h1 style={{ margin: "0" }}>{comment.toCoach.name} coach </h1>
                <p>님이 받은 질문</p>
              </S.CommentsTitleLeft>
              <S.CommentsTitleRight>{"22-03-14"}</S.CommentsTitleRight>
            </S.CommentsTitle>
            <S.CommentsContents>
              <S.ContentsQuestion
                onClick={() =>
                  router.push(
                    `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
                  )
                }
              >
                <S.QuestionIcon>
                  <BsQuestionCircleFill
                    style={{
                      color: "#EA345A",
                      height: "24px",
                      width: "24px",
                      marginBottom: "4px",
                    }}
                  />
                </S.QuestionIcon>
                <Blank width="20px" />
                <S.QuestionText>{comment.title}</S.QuestionText>
              </S.ContentsQuestion>
              <Blank height="20px" />
              <S.ContentsAnwer
                onClick={() =>
                  router.push(
                    `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
                  )
                }
              >
                <S.QuestionIcon>
                  <SiAnsible
                    style={{
                      background: "#EA345A",
                      color: "white",
                      height: "25px",
                      width: "25px",
                      padding: "1px",
                      borderRadius: "100%",
                    }}
                  />
                </S.QuestionIcon>
                <Blank width="20px" />
                <S.QuestionText>
                  {props.totalAnswer?.map((answer) => {
                    if (comment.id === answer.question.id) {
                      return (
                        <S.AnswerSheet>
                          {answer?.title}
                          {answer?.contents}
                        </S.AnswerSheet>
                      );
                    }
                  })[0] || (
                    <div style={{ color: "red", fontWeight: "500" }}>
                      아직 답변이 달리지 않았습니다.
                    </div>
                  )}
                </S.QuestionText>
              </S.ContentsAnwer>
              <Blank height="15px" />
              <S.ContentsInfo>
                <S.ContentsInfoLikes>
                  <BiLike
                    style={{
                      height: "20px",
                      width: "20px",
                      marginBottom: "1px",
                    }}
                  />
                  <Blank width="10px" />
                  Good{" "}
                  {props.totalAnswer?.map((answer) => {
                    if (comment.id === answer.question.id) {
                      return <>{answer.likecount || 0}</>;
                    }
                  })[0] || <>0</>}
                </S.ContentsInfoLikes>
                <Blank width="30px" />
                <S.ContentsInfoDislikes>
                  <BiDislike
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                  />
                  <Blank width="10px" />
                  Bad{" "}
                  {props.totalAnswer?.map((answer) => {
                    if (comment.id === answer.question.id) {
                      return <>{answer.dislikecount || 0}</>;
                    }
                  })[0] || <>0</>}
                </S.ContentsInfoDislikes>
              </S.ContentsInfo>
            </S.CommentsContents>
          </S.CommentsContainer>
        ))}
      </S.Wrapper>
    </S.AllWrapper>
  );
}
