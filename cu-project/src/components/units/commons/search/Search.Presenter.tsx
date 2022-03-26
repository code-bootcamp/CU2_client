import { ISearchUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import SearchAll from "./all/SearchAll";
import SearchCoachingUs from "./coachingUs/SearchCoachingUs";
import * as S from "./Search.Style";

export default function SearchUI(props: ISearchUIProps) {
  const gubun = true;
  return (
    <S.Wrapper>
      <S.NavBox>
        <S.Nav isSelect={true}>Total</S.Nav>
        <S.Nav isSelect={false}>CodingUs</S.Nav>
        <S.Nav isSelect={false}>CoachingUs</S.Nav>
        <S.Nav isSelect={false}>Us</S.Nav>
      </S.NavBox>
      <SearchAll />
      {() => {
        return gubun ? <SearchAll /> : <SearchCoachingUs />;
      }}
    </S.Wrapper>
  );
}
