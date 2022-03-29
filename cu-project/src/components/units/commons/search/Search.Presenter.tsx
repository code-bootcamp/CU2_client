import { ISearchUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import VerticalLine from "../../../commons/Line/VerticalLine";
import SearchAll from "./all/SearchAll";
import SearchBlog from "./blog/SearchBlog";
import SearchColumns from "./columns/SearchColumns";
import SearchComments from "./comments/SearchComments";
// import SearchCoachingUs from "./blog/SearchBlog";
import * as S from "./Search.Style";
import SearchStack from "./stackQnA/SearchStackQnA";
import SearchUs from "./us/SearchUs";
import { v4 as uuidv4 } from "uuid";

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
              isSelected={el === props.query.category}
              onClick={props.onClickPeriodGubun(el)}
            >
              {`${el}`}
            </S.GubunLabel>
            <Blank width="10px" />
          </div>
        ))}
      </S.SortGubun>
      <Blank height="50px" />
      {props.query.category === "Total" && <SearchAll />}
      {props.query.category === "Blog" && <SearchBlog />}
      {props.query.category === "Stack Q&A" && <SearchStack />}
      {props.query.category === "Columns" && <SearchColumns />}
      {props.query.category === "Comments" && <SearchComments />}
      {props.query.category === "Us & Coaches" && <SearchUs />}
    </S.Wrapper>
  );
}
