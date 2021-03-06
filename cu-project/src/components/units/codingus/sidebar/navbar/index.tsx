import Blank from "../../../../commons/Blank";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./style";
import { v4 as uuidv4 } from "uuid";
export default function CodingUsNavbar() {
  const { moveToPage, currentPage } = useMoveToPage();

  const printNavbarItem = (name: string) => {
    const path = name === "Q&A" ? "question" : name.toLowerCase();
    const isNow =
      currentPage.split("/")[currentPage.split("/").length - 1] === path;
    return (
      <div key={uuidv4()}>
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
      <S.CodingUs>CodingUs</S.CodingUs>
      <Blank height="30px" />
      {["CodingUs", "Blog", "Q&A", "Us"].map((el) => printNavbarItem(el))}
    </S.Wrapper>
  );
}
