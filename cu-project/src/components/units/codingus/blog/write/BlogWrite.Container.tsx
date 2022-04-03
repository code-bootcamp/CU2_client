import { ICodingUsBlogWriteProps } from "../../../../../commons/types/types";
import CodingUsBlogWriteUI from "./BlogWrite.Presenter";
import { CREATE_BLOG } from "./BlogWrite.Queries";
import { Editor } from "@toast-ui/react-editor";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBlogArgs,
} from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useAuth } from "../../../../commons/hooks/useAuth";
import { useRouter } from "next/router";

export default function CodingUsBlogWrite(props: ICodingUsBlogWriteProps) {
  useAuth();
  const [createBlog] = useMutation<
    Pick<IMutation, "createBlog">,
    IMutationCreateBlogArgs
  >(CREATE_BLOG);
  const editorRef = useRef<Editor>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [stack, setStack] = useState<string>("");
  const router = useRouter();
  const onClickSubmit = async (_: MouseEvent<HTMLButtonElement>) => {
    const contents = editorRef.current?.getInstance().getMarkdown();
    if (!(contents && title)) {
      alert("필수 입력 항목 누락");
      return;
    }
    if(!stack){
      alert("스택을 선택해 주세요");
      return;
    }
    try {
      const variables = {
        blogcategorytag: [stack],
        blogtag: tags,
        contents,
        title,
      };
      if (tags.length < 1) variables.blogtag = [""];
      const result = await createBlog({ variables });
      if (result.errors) {
        alert("등록 실패");
        return;
      }
      // moveToPage(`/codingus/blog/${result?.data?.createBlog?.id}`);
      router.push(`/codingus/blog/${result.data?.createBlog.id}`)
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickExit = (_: MouseEvent<HTMLButtonElement>) => {};
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeStack = (event: ChangeEvent<HTMLSelectElement>) => {
    setStack(event.target.value);
  };
  return (
    <CodingUsBlogWriteUI
      editorRef={editorRef}
      tags={tags}
      setTags={setTags}
      onClickExit={onClickExit}
      onClickSubmit={onClickSubmit}
      title={title}
      onChangeTitle={onChangeTitle}
      setStack={setStack}
      stack={stack}
      onChangeStack={onChangeStack}
    />
  );
}
