import Blank from "../../../../commons/Blank";
// import { ICodingUsBlogWriteUIProps } from "../../../../../commons/types/types";
import * as S from "./CoachingUsColumnWrite.Style";
// import { v4 as uuidV4 } from "uuid";
import TextEditor01 from "../../../../commons/TextEditor/TextEditor01";
import Button01 from "../../../../commons/Button/Button01";
import Button02 from "../../../../commons/Button/Button02";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import CoachingUsSidebar from "../../sidebar/CoachingUsSidebar.Container";
import { AiOutlineEdit } from "react-icons/ai";
import TagInput from "../../../../commons/Tag/TagInput";
import { ICoachingUsColumnWriteUIProps } from "../../../../../commons/types/types";

export default function CoachingUsColumnWriteUI(
  props: ICoachingUsColumnWriteUIProps
) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebar />
      </S.LeftSideBar>
      <S.CoachingUsWrite>
        <S.TitleInput placeholder="제목을 입력하세요" />
        <HorizontalLine margin={30} color="#DBDBDB" />
        <TagInput tags={props.tags} setTags={props.setTags} />
        <Blank height="32px" />
        <TextEditor01 width="100%" height="100%" editorRef={props.editorRef} />
        <S.ButtonWrapper>
          <Button01
            value="나가기"
            onClick={props.moveToPage("/coachingus/columns")}
            padding="12px 38px"
          />
          <Button02
            value="완료"
            icon={AiOutlineEdit}
            onClick={props.onClickSubmit}
          />
        </S.ButtonWrapper>
      </S.CoachingUsWrite>
    </S.Wrapper>
  );
}
