import { ICodingUsBlogWriteProps } from "../../../../../commons/types/types";
import CodingUsBlogWriteUI from "./BlogWrite.Presenter";
import {} from "./BlogWrite.Queries";
import { Editor } from "@toast-ui/react-editor";
import { MouseEvent, useRef, useState } from "react";
export default function CodingUsBlogWrite(props: ICodingUsBlogWriteProps) {
  const editorRef = useRef<Editor>(null);
  const [tags, setTags] = useState<string[]>([]);
  const onClickSubmit = (_: MouseEvent<HTMLButtonElement>) => {
    console.log("a");
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
  const onClickExit = (_: MouseEvent<HTMLButtonElement>) => {};
  return (
    <CodingUsBlogWriteUI
      editorRef={editorRef}
      tags={tags}
      setTags={setTags}
      onClickExit={onClickExit}
      onClickSubmit={onClickSubmit}
    />
  );
}
