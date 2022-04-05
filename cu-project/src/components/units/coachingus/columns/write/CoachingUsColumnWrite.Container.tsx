import CoachingUsColumnWriteUI from "./CoachingUsColumnWrite.Presenter";
// import {} from "./BlogWrite.Queries";
import { Editor } from "@toast-ui/react-editor";
import { MouseEvent, useRef, useState } from "react";
import { ICodingUsBlogWriteProps } from "../../../../../commons/types/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function CoachingUsColumnWrite(props: ICodingUsBlogWriteProps) {
  const editorRef = useRef<Editor>(null);
  const [tags, setTags] = useState<string[]>([]);
  const { moveToPage } = useMoveToPage();

  const onClickSubmit = (_: MouseEvent<HTMLButtonElement>) => {
    const value = editorRef.current?.getInstance().getMarkdown();
    if (!value?.length) {
      alert("내용을 입력해주세요");
      return;
    }
    const splitArr = value.split(/!\[([-_.]?[0-9a-zA-Z])*\]\(/);
    const imageArr = [];
    const textArr = [];
    const gubunArr = [];
    let cnt = 0;
    for (let i = 0; i < splitArr.length; i++) {
      if (!splitArr[i]) continue;
      if (splitArr[i].startsWith("data")) {
        imageArr.push(splitArr[i].split(")")[0]);
        gubunArr.push({
          gubun: "image",
          value: splitArr[i].split(")")[0],
          index: cnt,
        });
        cnt++;
        if (splitArr[i].split(")")[1]) {
          textArr.push(splitArr[i].split(")")[1]);
          gubunArr.push({
            gubun: "text",
            value: splitArr[i]
              .split(")")
              .filter((_, idx) => idx !== 0)
              .join(")"),
            index: cnt,
          });
          cnt++;
        }
      } else {
        gubunArr.push({ gubun: "text", value: splitArr[i], index: cnt });
        textArr.push(splitArr[i]);
        cnt++;
      }
    }
    alert(value);
  };
  return (
    <CoachingUsColumnWriteUI
      editorRef={editorRef}
      tags={tags}
      setTags={setTags}
      onClickSubmit={onClickSubmit}
      moveToPage={moveToPage}
    />
  );
}
