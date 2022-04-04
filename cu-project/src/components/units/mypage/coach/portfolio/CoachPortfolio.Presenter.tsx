import { AiOutlineEdit } from "react-icons/ai";
import Blank from "../../../../commons/Blank";
import Button02 from "../../../../commons/Button/Button02";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
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
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <S.TitleInput
            placeholder="제목을 입력하세요"
            value={props.title}
            onChange={props.onChangeTitle}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></div>
          <HorizontalLine margin={10} color="#DBDBDB" />
        </div>
        <TextEditor01 width="90%" height="100%" editorRef={props.editorRef} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button02
            value={props.isEdit ? "수정하기" : "작성하기"}
            icon={AiOutlineEdit}
            onClick={props.onClickSubmit}
          />
        </div>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
