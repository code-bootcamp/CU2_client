import * as S from "./SearchBar.Style";
import { BsSearch } from "react-icons/bs";
import Blank from "../../../../commons/Blank";

export default function SearchBarUI() {
  return (
    <S.Wrapper>
      <S.SearchBarArea>
        <BsSearch style={{ color: "#BDBDBD", fontSize: "18px" }} />
        <Blank width="12px" />
        <S.SearchBarBody placeholder="Search" />
      </S.SearchBarArea>
    </S.Wrapper>
  );
}
