import { BsQuestionCircleFill } from "react-icons/bs";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsComments.Style";

export default function CoachingUsCommentsUI(props) {
  console.log(props.answer);
  return (
    <S.CoachCommentsWrapper>
      <S.CoachCommentsTitle>Coach Comments</S.CoachCommentsTitle>
      <S.CoachCommentsContents>
        {props.coachComments.map((comment) => (
          <S.commentWrapper
            key={comment.id}
            onClick={() =>
              props.router.push(
                `/coachingus/coaches/${props.router.query.coachId}/${comment.id}`
              )
            }
          >
            <S.WrapperLeft>
              <S.commentTitle>
                <BsQuestionCircleFill
                  style={{
                    color: "#EA345A",
                    height: "25px",
                    width: "25px",
                    marginBottom: "4px",
                  }}
                />{" "}
                <Blank width="10px" />
                <p>{comment.title}</p>
              </S.commentTitle>
              <Blank height="10px" />
              <S.commentContents>{comment.contents}</S.commentContents>
              <Blank height="20px" />
              <S.CommentsInfo>
                <S.CommentsInfoLikes>
                  좋아요{" "}
                  {
                    props.answer?.filter(
                      (el) => el?.question?.id === comment.id
                    )[0]?.likecount
                  }
                </S.CommentsInfoLikes>
              </S.CommentsInfo>
            </S.WrapperLeft>
            {props.answer?.filter(
              (el) => el?.question?.id === comment.id
            )[0] !== undefined && <S.WrapperRight>답변완료</S.WrapperRight>}
          </S.commentWrapper>
        ))}
      </S.CoachCommentsContents>
    </S.CoachCommentsWrapper>
  );
}
