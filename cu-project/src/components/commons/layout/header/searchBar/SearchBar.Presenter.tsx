import * as S from "./SearchBar.Style";
import { BsSearch } from "react-icons/bs";
import Blank from "../../../Blank";

export default function SearchBarUI(props) {
  return (
    <S.Wrapper onClick={() => props.setIsSearch(true)}>
      <S.SearchBarArea>
        <BsSearch style={{ color: "#BDBDBD", fontSize: "18px" }} />
        <Blank width="12px" />
        <S.SearchBarBody>Search</S.SearchBarBody>
      </S.SearchBarArea>
    </S.Wrapper>
  );
}
