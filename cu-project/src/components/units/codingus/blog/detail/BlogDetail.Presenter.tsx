import { getDateString } from "../../../../../commons/libraries/dateUtils";
import Label01 from "../../../../commons/Label/Label01";
import TextViewer01 from "../../../../commons/TextViewer/TextViewer01";
import * as S from "./BlogDetail.Style";
import { v4 as uuidv4 } from "uuid";
import Blank from "../../../../commons/Blank";

interface ICodingUsBlogDetailUIProps {
  width?: string | number;
  height?: string | number;
  contents: string;
  title: string;
  writer: string;
  createdAt: string;
  tags: string[];
  isPicked?: boolean;
}
export default function CodingUsBlogDetailUI(
  props: ICodingUsBlogDetailUIProps
) {
  return (
    <S.Wrapper style={{ width: "100%", height: "100%" }}>
      <S.BlogDetailBody>
        <S.RowWrapper>
          <S.Title></S.Title>
          <S.BookMarkIcon></S.BookMarkIcon>
        </S.RowWrapper>
        <S.RowWrapper>
          <Label01 value={props.writer} />
          <Label01 value={getDateString(props.createdAt, ".")} />
        </S.RowWrapper>
        <S.TagWrapper>
          {props.tags.map((el) => (
            <div key={uuidv4()}>
              <Tag03 value={el} />
              <Blank width="10px" />
            </div>
          ))}
        </S.TagWrapper>
        <Blank height="55px" />
        <TextViewer01 width={"100%"} height={"100%"} value={props.contents} />
      </S.BlogDetailBody>
    </S.Wrapper>
  );
}
