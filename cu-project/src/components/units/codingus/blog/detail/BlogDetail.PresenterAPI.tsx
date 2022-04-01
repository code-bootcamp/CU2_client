import { getDateString } from "../../../../../commons/libraries/dateUtils";
import Label01 from "../../../../commons/Label/Label01";
import TextViewer01 from "../../../../commons/TextViewer/TextViewer01";
import * as S from "./BlogDetail.Style";
import { v4 as uuidv4 } from "uuid";
import Blank from "../../../../commons/Blank";
import Tag03 from "../../../../commons/Tag/Tag03";
import BlogDetailIndex from "./index/BlogDetailIndex";
import CodingUsBlogComment from "./comment/BlogComment.Containter";
import { ICodingUsBlogDetailUIProps } from "../../../../../commons/types/types";


export default function CodingUsBlogDetailUI(
  props: ICodingUsBlogDetailUIProps
) {
  return (
    <S.Wrapper style={{ width: "100%", height: "100%" }}>
      <S.BlogDetailLayout>
        <S.BlogDetailBody>
          <S.RowWrapper style={{ justifyContent: "space-between" }}>
            <S.Title>{props.data.title}</S.Title>
            {/* <S.BookMarkIcon></S.BookMarkIcon> */}
          </S.RowWrapper>
          <Blank height="22px" />
          <S.RowWrapper style={{ justifyContent: "space-between" }}>
            <S.RowWrapper>
              <Label01 value={props.data.user.nickname} size="16px" />
              <Blank width="8px" />
              <Label01
                value={getDateString(props.createdAt, ".")}
                size="16px"
              />
            </S.RowWrapper>
            {/* 이부분 확인 필 */}
            {props.data.user.nickname !== "로그인한 유저" && (
              <S.RowWrapper>
                <S.BtnLabel>수정</S.BtnLabel>
                <Blank width="8px" />
                <S.BtnLabel>삭제</S.BtnLabel>
              </S.RowWrapper>
            )}
          </S.RowWrapper>
          <Blank height="12px" />
          <S.RowWrapper>
            {props.data.blogtag.map((el) => (
              <div key={uuidv4()} style={{ display: "flex" }}>
                <Tag03 value={el.tag} />
                <Blank width="10px" />
              </div>
            ))}
          </S.RowWrapper>
          <Blank height="55px" />
          <TextViewer01 width={"100%"} height={"100%"} value={props.data.contents} />
        <CodingUsBlogComment />
        </S.BlogDetailBody>
        <BlogDetailIndex
          index={props.index}
          currentIndex={props.currentIndex}
          indexPositions={props.indexPositions}
          setCurrentIndex={props.setCurrentIndex}
        />
      </S.BlogDetailLayout>
    </S.Wrapper>
  );
}
