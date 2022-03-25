import { BsQuestionCircleFill } from "react-icons/bs";
import Blank from "../../../../commons/Blank";
import CoachingUsSidebar from "../../sidebar/CoachingUsSidebar.Container";
import CoachingUsCoachCard from "../CoachingUsCoachCard";
import * as S from "./CoachingUsComments.Style";

export default function CoachingUsCommentsUI(props) {
  return (
    <S.Wrapper>
      <S.CoachSidebar>
        <CoachingUsCoachCard />
        <Blank height="50px" />
        <S.AddSideBar>
          <CoachingUsSidebar />
        </S.AddSideBar>
        <Blank height="50px" />
      </S.CoachSidebar>
      <S.CoachProfileBody>
        <S.CoachCommentsWrapper>
          <S.CoachCommentsTitle>Coach Comments</S.CoachCommentsTitle>
          <S.CoachCommentsContents>
            {props.coachComments.map((comment) => (
              <S.commentWrapper key={comment.id}>
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
                    <S.CommentsInfoHits>조회수 302</S.CommentsInfoHits>
                    <Blank width="20px" />
                    <S.CommentsInfoLikes>좋아요 21</S.CommentsInfoLikes>
                  </S.CommentsInfo>
                </S.WrapperLeft>
                <S.WrapperRight>
                  <S.ContentsPicture />
                </S.WrapperRight>
              </S.commentWrapper>
            ))}
          </S.CoachCommentsContents>
        </S.CoachCommentsWrapper>
      </S.CoachProfileBody>
    </S.Wrapper>
  );
}
