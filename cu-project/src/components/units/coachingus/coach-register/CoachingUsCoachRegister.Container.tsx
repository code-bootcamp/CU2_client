import { useCallback, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsCoachRegisterUI from "./CoachingUsCoachRegister.Presenter";

export default function CoachingUsCoachRegisterPage() {
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [corType, setCorType] = useState("");

  const { moveToPage } = useMoveToPage();

  const onChangeTags = (e) => {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (e.key === "Backspace" && e.target.value === "") {
      console.log(e.target.id);
      return setTags(tags.filter((_, i) => i + 1 !== tags.length));
    } else {
      if (tags.length > 1) {
        e.target.value = "";
        return alert("최대 네 개까지 입력 가능합니다.");
      } else {
        if (e.key === "Enter") {
          if (e.target.value === "") {
            setTags([...tags]);
            e.target.value = "";
          } else {
            setTags([...tags, e.target.value]);
            e.target.value = "";
          }
        }
      }
    }
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickDeleteTags = (e) => {
    setTags(tags.filter((_, i) => Number(e.target.id) !== i));
  };

  const onClickCorType = (e) => {
    setCorType(e.target.value);
  };

  return (
    <CoachingUsCoachRegisterUI
      onChangeTags={onChangeTags}
      onClickDeleteTags={onClickDeleteTags}
      onChangeText={onChangeText}
      tags={tags}
      setTags={setTags}
      text={text}
      onClickCorType={onClickCorType}
      corType={corType}
      moveToPage={moveToPage}
    />
  );
}
