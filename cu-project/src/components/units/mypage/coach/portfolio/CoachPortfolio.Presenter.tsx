import { AiOutlineEdit } from "react-icons/ai";
import Button02 from "../../../../commons/Button/Button02";
import { CoachPageNav } from "../../../../commons/Mypage/MypageNav";
import TextEditor01 from "../../../../commons/TextEditor/TextEditor01";
import CoachpageMenu from "../CoachpageMenu.Container";
import * as S from "./CoachPortfolio.Style";

export default function CoachPortfolioUI(props) {
  return (
    <S.AllWrapper>
      <CoachpageMenu />

      <S.Wrapper>
        <CoachPageNav menu="포트폴리오 추가/수정" />
        <div
          style={{ width: "90%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button02
            value={props.isEdit ? "수정하기" : "작성하기"}
            icon={AiOutlineEdit}
            onClick={props.onClickSubmit}
          />
        </div>
        <TextEditor01 width="90%" height="100%" editorRef={props.editorRef} />
      </S.Wrapper>
    </S.AllWrapper>
  );
}
