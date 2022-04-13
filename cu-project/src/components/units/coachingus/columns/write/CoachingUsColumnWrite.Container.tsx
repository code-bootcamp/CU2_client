import CoachingUsColumnWriteUI from "./CoachingUsColumnWrite.Presenter";
// import {} from "./BlogWrite.Queries";
import { Editor } from "@toast-ui/react-editor";
import { MouseEvent, useRef, useState } from "react";
import { ICodingUsBlogWriteProps } from "../../../../../commons/types/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import {
  CREATE_COLUMN,
  FETCH_COLUMN,
  PLUSUSERSCORE,
  UPDATE_COLUMN,
} from "./CoachingUsColumnWrite.Queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function CoachingUsColumnWrite(props: ICodingUsBlogWriteProps) {
  const editorRef = useRef<Editor>(null);
  const router = useRouter();
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [data, setData] = useState();
  const { moveToPage } = useMoveToPage();

  const [getEditorText] = useMutation(CREATE_COLUMN);
  const [editEditorText] = useMutation(UPDATE_COLUMN);
  const [plusScore] = useMutation(PLUSUSERSCORE);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onClickSubmit = async (_: MouseEvent<HTMLButtonElement>) => {
    try {
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
      console.log("권한이 없나요?");

      const result = await getEditorText({
        variables: {
          createColumnInput: {
            title,
            contents: value,
          },
        },
        refetchQueries: [
          {
            query: FETCH_COLUMN,
          },
        ],
      });
      // alert(value);
      if (result) {
        console.log(result);
        setData(result);
        plusScore({ variables: { score: 1 } });
        router.push(
          `/coachingus/coaches/${result?.data?.createColumn.user.id}/columns/${result?.data?.createColumn.id}`
        );
      }
    } catch (e) {
      alert(e);
    }
  };

  const onClickSubmitEdit = async (_: MouseEvent<HTMLButtonElement>) => {
    try {
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
      const result = editEditorText({
        variables: {
          updateColumnInput: {
            title,
            contents: value,
          },
          columnId: String(router.query.columnId),
        },
        refetchQueries: [
          {
            query: FETCH_COLUMN,
          },
        ],
      });
      if (result) {
        setData(result);
        router.push(
          `/coachingus/coaches/${router.query.coachId}/columns/${router.query.columnId}`
        );
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <CoachingUsColumnWriteUI
      editorRef={editorRef}
      tags={tags}
      setTags={setTags}
      onClickSubmit={onClickSubmit}
      moveToPage={moveToPage}
      data={data}
      onChangeTitle={onChangeTitle}
      title={title}
      isEdit={props.isEdit}
      onClickSubmitEdit={onClickSubmitEdit}
    />
  );
}
