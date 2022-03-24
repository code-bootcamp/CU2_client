import Color from "../../../../../commons/styles/color";
import Blank from "../../../../commons/Blank";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import Label01 from "../../../../commons/Label/Label01";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import * as S from "./style";
export default function CodingUsNavbar() {
  const { moveToPage, currentPage } = useMoveToPage();

  const printNavbarItem = (name: string) => {
    const path = name === "Q&A" ? "qna" : name.toLowerCase();
    const isNow =
      currentPage.split("/")[currentPage.split("/").length - 1] === path;
    return (
      <div>
        <S.Title
          isNow={isNow}
          onClick={moveToPage(`/codingus/${path === "codingus" ? "" : path}`)}
        >
          {name}
        </S.Title>
        <Blank height="35px" />
      </div>
    );
  };

  return (
    <S.Wrapper>
      <Label01 value="CodingUs" size="36px" weight="700" />
      <HorizontalLine margin={35} thickness={2} color={Color.dark} />
      {["CodingUs", "Blog", "Q&A", "Us"].map((el) => printNavbarItem(el))}
    </S.Wrapper>
  );
}