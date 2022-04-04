import { ICoachingUsCommentsUIProps } from "../../../../commons/types/types";
import { BsQuestionCircleFill } from "react-icons/bs";
import { SiAnsible } from "react-icons/si";
import { BiLike, BiDislike } from "react-icons/bi";
import Blank from "../../../commons/Blank";
import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";
import * as S from "./CoachingUsComments.Style";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";

export default function CoachingUsCommentsUI(
  props: ICoachingUsCommentsUIProps
) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebar />
      </S.LeftSideBar>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.CommentsBody>
          <p>Comments</p>
          {props.commentsList?.map((comment, index) => (
            <S.CommentsContainer key={index}>
              <S.CommentsTitle>
                <S.CommentsTitleLeft
                  onClick={props.moveToPage(
                    `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
                  )}
                >
                  <S.TitlePicture></S.TitlePicture>
                  <Blank width="10px" />
                  <h1>{comment.toCoach.name} coach </h1>
                  <p>님이 받은 질문</p>
                </S.CommentsTitleLeft>
                <S.CommentsTitleRight>{"22-03-14"}</S.CommentsTitleRight>
              </S.CommentsTitle>
              <S.CommentsContents>
                <S.ContentsQuestion
                  onClick={props.moveToPage(
                    `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
                  )}
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
                  onClick={props.moveToPage(
                    `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
                  )}
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
        </S.CommentsBody>
      </InfiniteScroll>
    </S.Wrapper>
  );
}

export const CommentsCard = (props) => {
  const router = useRouter();
  return (
    <>
      <S.CommentsContainer key={index}>
        <S.CommentsTitle>
          <S.CommentsTitleLeft
            onClick={() =>
              router.push(
                `/coachingus/coaches/${props.data?.toCoach.id}/${props.data.id}`
              )
            }
          >
            <S.TitlePicture></S.TitlePicture>
            <Blank width="10px" />
            <p>
              {comment.toCoach.name} | {comment.toCoach.coachProfile.orgName}
            </p>
          </S.CommentsTitleLeft>
          <S.CommentsTitleRight>{"22-03-14"}</S.CommentsTitleRight>
        </S.CommentsTitle>
        <S.CommentsContents>
          <S.ContentsQuestion
            onClick={props.moveToPage(
              `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
            )}
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
            onClick={props.moveToPage(
              `/coachingus/coaches/${comment.toCoach.id}/${comment.id}`
            )}
          >
            {/* <S.QuestionIcon>
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
            </S.QuestionIcon> */}
            <Blank width="20px" />
            <S.QuestionText>{comment.contents}</S.QuestionText>
          </S.ContentsAnwer>
          {/* <Blank height="15px" />
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
              Good {index * 3}
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
              Bad {index}
            </S.ContentsInfoDislikes>
          </S.ContentsInfo> */}
        </S.CommentsContents>
      </S.CommentsContainer>
    </>
  );
};
