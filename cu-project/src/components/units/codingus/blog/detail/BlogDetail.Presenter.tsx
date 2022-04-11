import Label01 from "../../../../commons/Label/Label01";
import TextViewer01 from "../../../../commons/TextViewer/TextViewer01";
import * as S from "./BlogDetail.Style";
import { v4 as uuidv4 } from "uuid";
import Blank from "../../../../commons/Blank";
import Tag03 from "../../../../commons/Tag/Tag03";
import BlogDetailIndex from "./index/BlogDetailIndex";
import CodingUsBlogComment from "./comment/BlogComment.Containter";
import { ICodingUsBlogDetailUIProps } from "../../../../../commons/types/types";
import { getDateString } from "../../../../../commons/libraries/dateUtils";


export default function CodingUsBlogDetailUI(
  props: ICodingUsBlogDetailUIProps
) {
  return (
    <S.Wrapper style={{ width: "100%", height: "100%" }}>
      <S.BlogDetailLayout>
        <S.BlogDetailBody>
          <S.RowWrapper style={{ justifyContent: "space-between" }}>
            <S.Title>{props.data?.title}</S.Title>
            {/* <S.BookMarkIcon></S.BookMarkIcon> */}
          </S.RowWrapper>
          <Blank height="22px" />
          <S.RowWrapper style={{ justifyContent: "space-between" }}>
            <S.RowWrapper>
              <Label01 value={String(props.data?.user?.nickname)} size="16px" />
              <Blank width="8px" />
              <Label01
                value={getDateString(props.data?.createAt, ".")}
                size="16px"
              />
            </S.RowWrapper>
            {props.data?.user?.nickname !== "로그인한 유저" && (
              <S.RowWrapper>
                <S.BtnLabel onClick ={props.onClickEdit}>수정</S.BtnLabel>
                <Blank width="8px" />
                <S.BtnLabel onClick={props.onClickDelete}>삭제</S.BtnLabel>
              </S.RowWrapper>
            )}
          </S.RowWrapper>
          <Blank height="12px" />
          <S.RowWrapper>
            {props.data?.blogtag?.map((el) => (
              <div key={uuidv4()} style={{ display: "flex" }}>
                <Tag03 value={el.tag} />
                <Blank width="10px" />
              </div>
            ))}
          </S.RowWrapper>
          <Blank height="55px" />
          <TextViewer01 width={"100%"} height={"100%"} value={props?.data?.contents || ""} />
        <CodingUsBlogComment  blogId ={String(props.data?.id)}/>
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
