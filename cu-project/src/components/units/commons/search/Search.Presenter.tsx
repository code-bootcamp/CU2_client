import { ISearchUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import SearchAll from "./all/SearchAll";
import SearchBlog from "./blog/SearchBlog";
import SearchColumns from "./columns/SearchColumns";
import SearchComments from "./comments/SearchComments";
// import SearchCoachingUs from "./blog/SearchBlog";
import * as S from "./Search.Style";
import SearchStack from "./stackQnA/SearchStackQnA";
import SearchUs from "./us/SearchUs";

export default function SearchUI(props: ISearchUIProps) {
  // const gubun = true;
  return (
    <S.Wrapper>
      <S.NavBox>
        <S.Nav isSelect={false}>Total</S.Nav>
        <S.Nav isSelect={true}>Blog</S.Nav>
        <S.Nav isSelect={false}>{`Stack Q&A`}</S.Nav>
        <S.Nav isSelect={false}>Comments</S.Nav>
        <S.Nav isSelect={false}>Columns</S.Nav>
        <S.Nav isSelect={false}>Us</S.Nav>
      </S.NavBox>
      <Blank height="30px" />
      {/* <SearchAll /> */}
      <SearchBlog />
      <SearchStack />
      <SearchColumns />
      <SearchComments />
      <SearchUs />
      {/* {() => {
        return gubun ? <SearchAll /> : <SearchCoachingUs />;
      }} */}
    </S.Wrapper>
  );
}
