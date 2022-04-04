import { ICoachingUsCommentsUIProps } from "../../../../commons/types/types";
import { BsQuestionCircleFill } from "react-icons/bs";
import { SiAnsible } from "react-icons/si";
import { BiLike, BiDislike } from "react-icons/bi";
import Blank from "../../../commons/Blank";
import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";
import * as S from "./CoachingUsComments.Style";
import { useRouter } from "next/router";

export default function CoachingUsCommentsUI(
  props: ICoachingUsCommentsUIProps
) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebar />
      </S.LeftSideBar>
      <S.CommentsBody>
        <p>Comments</p>

        {props.commentsList.map((comment, index) => (
          <S.CommentsContainer key={index}>
            <S.CommentsTitle>
              <S.CommentsTitleLeft
                onClick={props.moveToPage(
                  `/coachingus/coaches/${comment.id}/${comment.id}`
                )}
              >
                <S.TitlePicture></S.TitlePicture>
                <Blank width="10px" />
                <p>
                  {comment.mento.name} | {comment.mento.cor}
                </p>
              </S.CommentsTitleLeft>
              <S.CommentsTitleRight>{comment.createdAt}</S.CommentsTitleRight>
            </S.CommentsTitle>
            <S.CommentsContents>
              <S.ContentsQuestion
                onClick={props.moveToPage(
                  `/coachingus/coaches/${comment.id}/${comment.id}`
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
                <S.QuestionText>{comment.question}</S.QuestionText>
              </S.ContentsQuestion>
              <Blank height="20px" />
              <S.ContentsAnwer
                onClick={props.moveToPage(
                  `/coachingus/coaches/${comment.id}/${comment.id}`
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
                <S.QuestionText>{comment.answer}</S.QuestionText>
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
                  Good {comment.likes}
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
                  Bad {comment.disLiske}
                </S.ContentsInfoDislikes>
              </S.ContentsInfo>
            </S.CommentsContents>
          </S.CommentsContainer>
        ))}
      </S.CommentsBody>
    </S.Wrapper>
  );
}

export const CommentsCard = (props) => {
  const router = useRouter();
  return (
    <>
      <S.CommentsContainer>
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
              {props.data.toCoach.name} |{" "}
              {props.data.toCoach.coachProfile.orgName}
            </p>
          </S.CommentsTitleLeft>
          {/* <S.CommentsTitleRight>{props.data.id}</S.CommentsTitleRight> */}
        </S.CommentsTitle>
        <S.CommentsContents>
          <S.ContentsQuestion
            onClick={() =>
              router.push(
                `/coachingus/coaches/${props.toCoach.id}/${props.data.id}`
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
            <S.QuestionText>{props.data.title}</S.QuestionText>
          </S.ContentsQuestion>
          <Blank height="20px" />
          <S.ContentsAnwer
            onClick={() =>
              router.push(
                `/coachingus/coaches/${props.data.toCoach.id}/${props.data.id}`
              )
            }
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
            <S.QuestionText>{props.data.contents}</S.QuestionText>
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
              Good {props.data.likes}
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
              Bad {props.data.disLiske}
            </S.ContentsInfoDislikes>
          </S.ContentsInfo> */}
        </S.CommentsContents>
      </S.CommentsContainer>
    </>
  );
};
