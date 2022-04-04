import Blank from "../../../../commons/Blank";
import { ICodingUsBlogWriteUIProps } from "../../../../../commons/types/types";
import * as S from "./BlogWrite.Style";
import TextEditor01 from "../../../../commons/TextEditor/TextEditor01";
import Button01 from "../../../../commons/Button/Button01";
import Button02 from "../../../../commons/Button/Button02";
import HorizontalLine from "../../../../commons/Line/HorizontalLine";
import { AiOutlineEdit } from "react-icons/ai";
import TagInput from "../../../../commons/Tag/TagInput";
import { stackList } from "../../../../../commons/data/stack";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import StackSelect from "../../../../commons/Select/StackSelect";
export default function CodingUsBlogWriteUI(props: ICodingUsBlogWriteUIProps) {
  return (
    <S.CodingUsBlogWrite>
      <S.ButtonWrapper>
        <Button01
          value={props.isEdit ? "취소" : "나가기"}
          onClick={props.onClickExit}
          padding="12px 38px"
        />
        <Button02
          value={props.isEdit ? "수정" : "완료"}
          icon={AiOutlineEdit}
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        />
      </S.ButtonWrapper>
      <Blank height="150px" />
      <S.TitleInput
        placeholder="제목을 입력하세요"
        value={props.title}
        onChange={props.onChangeTitle}
      />
      <HorizontalLine margin={30} color="#DBDBDB" />
      <S.RowWrapper>
        <TagInput tags={props.tags} setTags={props.setTags} />
        <StackSelect onChange={props.onChangeStack} value= {props.stack} list={stackList}/>
      </S.RowWrapper>
      <Blank height="32px" />
      <TextEditor01
        width="100%"
        height="100%"
        editorRef={props.editorRef}
        data={props.data}
        isEdit={props.isEdit}
      />
    </S.CodingUsBlogWrite>
  );
}
