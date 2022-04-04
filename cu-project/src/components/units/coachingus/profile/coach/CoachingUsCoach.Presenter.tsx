import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
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
      <S.CoachComments onClick={props.moveToPage(`/coachingus/coaches/0/0`)}>
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
            멘티 질문 제목
          </S.CommentsTitle>
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
                onClick={props.moveToPage(`/coachingus/coaches/0/columns/0`)}
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
