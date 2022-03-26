import React from "react";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsCoach.Style";
export default function CoachingUsCoachUI(props) {
  return (
    <>
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
            A) 멘토 답변 내용 멘토 답변 내용 멘토 답변 내용 멘토 답변 내용 멘토
            답변 내용멘토 답변 내용멘토 답변 내용멘토 답변 내용멘토 답변
            내용멘토 답변 내용멘토 답변 내용멘토 답변 내용
          </S.CommentsContents>
          <Blank height="20px" />
          <S.CommentsInfo>
            <S.CommentsInfoHits>조회수 302</S.CommentsInfoHits>
            <Blank width="20px" />
            <S.CommentsInfoLikes>좋아요 21</S.CommentsInfoLikes>
          </S.CommentsInfo>
          <S.MoreBtn onClick={() => props.setComponent(`comments`)}>
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
            <S.ListMoreBtn onClick={() => props.setComponent(`columns`)}>
              <p>{">"}</p>더보기
            </S.ListMoreBtn>
          </>
        </S.ContainerColumnsListBody>
      </S.CoachColumn>
    </>
  );
}
