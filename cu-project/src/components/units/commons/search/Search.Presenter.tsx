import { ISearchUIProps } from "../../../../commons/types/types";
import SearchAll from "./all/SearchAll";
import SearchCoachingUs from "./coachingUs/SearchCoachingUs";
import * as S from "./Search.Style";

export default function SearchUI(props: ISearchUIProps) {
  const gubun = false;
  return (
    <S.Wrapper>
      검색 페이지입니다.
      {() => {
        return gubun ? <SearchAll /> : <SearchCoachingUs />;
      }}
    </S.Wrapper>
  );
}
