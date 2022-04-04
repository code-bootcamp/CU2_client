import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsCoach.Style";
export default function CoachingUsCoachUI(props) {
  return (
    <>
      <S.CoachIntro>
        <S.CoachIntroTitle>멘토소개</S.CoachIntroTitle>
        <S.CoachIntroContents>
          {props.coachData?.fetchCoachUser.coachProfile.profileTitle ||
            "멘토 소개글이 없습니다."}
        </S.CoachIntroContents>
        <S.CoachIntroContents>
          {props.coachData?.fetchCoachUser.coachProfile.profileContents}
        </S.CoachIntroContents>
      </S.CoachIntro>
      <Blank height="100px" />
      <S.CoachComments
        onClick={props.moveToPage(
          `/coachingus/coaches/${props.router.query.coachId}/${props.comment?.[0]?.id}`
        )}
      >
        Coach Comments
        <Blank height="20px" />
        <S.CommentsBody>
          <S.CommentsTitle>
            <BsQuestionCircleFill
              style={{
                color: "#EA345A",
                height: "25px",
                width: "25px",
                marginBottom: "4px",
              }}
            />{" "}
            <Blank width="10px" />
            {props.comment?.[0]?.title} <Blank width="10px" />
            <p>{props.comment?.[0]?.fromUser.name}님의 질문입니다</p>
          </S.CommentsTitle>
          <Blank height="10px" />
          <S.CommentsContents>
            {props.comment?.[0]?.contents}
          </S.CommentsContents>
          <Blank height="20px" />
          <S.CommentsInfo>
            <S.CommentsInfoLikes>
              좋아요 {props.answer?.[0]?.likecount}
            </S.CommentsInfoLikes>
            <Blank width="20px" />
          </S.CommentsInfo>
          <S.MoreBtn
            onClick={(event) => {
              event.stopPropagation();
              props.setComponent(`comments`);
            }}
          >
            <p>{">"}</p>더보기
          </S.MoreBtn>
        </S.CommentsBody>
      </S.CoachComments>
      <Blank height="100px" />
      <S.CoachColumn>
        Coach Columns
        <Blank height="30px" />
        {props.columnList?.length === 0 ? (
          <S.ContainerColumnsListNoBody>
            <S.ColumnsNoList> Column이 비어있습니다!</S.ColumnsNoList>
          </S.ContainerColumnsListNoBody>
        ) : (
          <S.ContainerColumnsListBody>
            {props.columnList?.map((column) => (
              <S.ColumnsList
                key={column.id}
                onClick={props.moveToPage(
                  `/coachingus/coaches/${props.router.query.coachId}/columns/${column.id}`
                )}
              >
                <S.ColumnPicture>{column.picture}</S.ColumnPicture>

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
              <S.ListMoreBtn onClick={() => props.setComponent(`columns`)}>
                <p>{">"}</p>더보기
              </S.ListMoreBtn>
            </>
          </S.ContainerColumnsListBody>
        )}
      </S.CoachColumn>
    </>
  );
}
