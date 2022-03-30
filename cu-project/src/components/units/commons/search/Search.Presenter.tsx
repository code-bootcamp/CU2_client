import { v4 as uuidv4 } from "uuid";
import { ISearchUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import SearchAll from "./all/SearchAll";
import SearchBlog from "./blog/SearchBlog";
import SearchColumns from "./columns/SearchColumns";
import SearchComments from "./comments/SearchComments";
import * as S from "./Search.Style";
import SearchStack from "./stackQnA/SearchStackQnA";
import SearchUs from "./us/SearchUs";

export default function SearchUI(props: ISearchUIProps) {
  return (
    <S.Wrapper>
      <S.SortGubun>
        {[
          "Total",
          "Blog",
          "Stack Q&A",
          "Columns",
          "Comments",
          "Us & Coaches",
        ].map((el) => (
          <div style={{ display: "flex" }} key={uuidv4()}>
            <S.GubunLabel
              isSelected={el === props.category}
              onClick={props.onClickPeriodCategory(el)}
            >
              {`${el}`}
            </S.GubunLabel>
            <Blank width="10px" />
          </div>
        ))}
      </S.SortGubun>
      <Blank height="50px" />
      {props.category === "Total" && <SearchAll />}
      {props.category === "Blog" && <SearchBlog />}
      {props.category === "Stack Q&A" && <SearchStack />}
      {props.category === "Columns" && <SearchColumns />}
      {props.category === "Comments" && <SearchComments />}
      {props.category === "Us & Coaches" && <SearchUs />}
    </S.Wrapper>
  );
}
