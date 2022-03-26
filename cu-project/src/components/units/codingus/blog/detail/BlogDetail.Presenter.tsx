import { getDateString } from "../../../../../commons/libraries/dateUtils";
import Label01 from "../../../../commons/Label/Label01";
import TextViewer01 from "../../../../commons/TextViewer/TextViewer01";
import * as S from "./BlogDetail.Style";
import { v4 as uuidv4 } from "uuid";
import Blank from "../../../../commons/Blank";
import Tag03 from "../../../../commons/Tag/Tag03";

interface ICodingUsBlogDetailUIProps {
  width?: string | number;
  height?: string | number;
  contents: string;
  title: string;
  writer: string;
  createdAt: string;
  tags: string[];
  isPicked?: boolean;
  onClickDelete: () => void;
  onClickUpdate: () => void;
}
export default function CodingUsBlogDetailUI(
  props: ICodingUsBlogDetailUIProps
) {
  return (
    <S.Wrapper style={{ width: "100%", height: "100%" }}>
      <S.BlogDetailBody>
        <S.RowWrapper style={{justifyContent:"space-between"}}>
          <S.Title>{props.title}</S.Title>
          {/* <S.BookMarkIcon></S.BookMarkIcon> */}
        </S.RowWrapper>
        <Blank height="22px" />
        <S.RowWrapper style={{justifyContent:"space-between"}}>
          <S.RowWrapper>
            <Label01 value={props.writer} size="16px" />
            <Blank width="8px" />
            <Label01 value={getDateString(props.createdAt, ".")} size="16px" />
          </S.RowWrapper>
            {props.writer !== "로그인한 유저" && (
              <S.RowWrapper>
                <S.BtnLabel>수정</S.BtnLabel>
                <Blank width="8px" />
                <S.BtnLabel>삭제</S.BtnLabel>
              </S.RowWrapper>
            )}
        </S.RowWrapper>
        <Blank height="12px" />
        <S.RowWrapper>
          {props.tags.map((el) => (
            <div key={uuidv4()} style={{ display: "flex" }}>
              <Tag03 value={el} />
              <Blank width="10px" />
            </div>
          ))}
        </S.RowWrapper>
        <Blank height="55px" />
        <TextViewer01 width={"100%"} height={"100%"} value={props.contents} />
      </S.BlogDetailBody>
    </S.Wrapper>
  );
}
