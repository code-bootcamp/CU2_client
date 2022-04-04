import { ICodingUsBlogWriteProps } from "../../../../../commons/types/types";
import CodingUsBlogWriteUI from "./BlogWrite.Presenter";
import { CREATE_BLOG, UPDATE_BLOG } from "./BlogWrite.Queries";
import { Editor } from "@toast-ui/react-editor";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBlogArgs,
  IMutationUpdateBlogArgs,
} from "../../../../../commons/types/generated/types";
import { useAuth } from "../../../../commons/hooks/useAuth";
import { useRouter } from "next/router";
import ScoreModal from "../../../../commons/Modal/ScoreModal";

export default function CodingUsBlogWrite(props: ICodingUsBlogWriteProps) {
  useAuth();
  const [createBlog] = useMutation<
    Pick<IMutation, "createBlog">,
    IMutationCreateBlogArgs
  >(CREATE_BLOG);
  const [updateBlog] = useMutation<
    Pick<IMutation, "updateBlog">,
    IMutationUpdateBlogArgs
  >(UPDATE_BLOG);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const editorRef = useRef<Editor>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [stack, setStack] = useState<string>("");
  const router = useRouter();
  
  useEffect(() => {
    if (!props.data) return;
    setTags(props.data?.blogtag?.map((el) => el.tag) || []);
    setTitle(props.data?.title);
    setStack(props.data?.blogcategorytag?.[0].tag || "");
  }, [props.data]);

  const onClickSubmit = async (_: MouseEvent<HTMLButtonElement>) => {
    // setIsModalVisible(true);
    // return;
    const contents = editorRef.current?.getInstance().getMarkdown();
    if (!(contents && title)) {
      alert("필수 입력 항목 누락");
      return;
    }
    if (!stack) {
      alert("스택을 선택해 주세요");
      return;
    }
    try {
      const variables = {
        blogcategorytag: [stack],
        blogtag: tags,
        contents,
        title,
        url: "",
      };
      if (tags.length < 1) variables.blogtag = [""];
      const result = await createBlog({ variables });
      
      if (result.errors) {
        alert("등록 실패");
        return;
      }
      router.push(`/codingus/blog/${result.data?.createBlog.id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickExit = (_: MouseEvent<HTMLButtonElement>) => {
    router.push(
      props.isEdit ? `/codingus/blog/${props.data?.id}` : "/codingus/blog"
    );
  };
  const onClickEdit = async () => {
    if (
      title === props.data?.title &&
      editorRef.current?.getInstance().getMarkdown() === props.data?.contents
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    try {
      const variables = {
        title,
        contents: editorRef.current?.getInstance().getMarkdown() || "",
        blogid: String(router.query.blogId),
        url: "",
      };
      const result = await updateBlog({ variables });
      if (!result.data?.updateBlog.id) {
        alert("수정 실패");
        return;
      }
      router.push(`/codingus/blog/${router.query.blogId}`);
    } catch (err: any) {}
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeStack = (event: ChangeEvent<HTMLSelectElement>) => {
    setStack(event.target.value);
  };
  return (
    <>
    <CodingUsBlogWriteUI
      isEdit={props.isEdit || false}
      data={props.data}
      editorRef={editorRef}
      title={title}
      stack={stack}
      tags={tags}
      setTags={setTags}
      onClickExit={onClickExit}
      onClickSubmit={onClickSubmit}
      onChangeTitle={onChangeTitle}
      setStack={setStack}
      onChangeStack={onChangeStack}
      onClickEdit={onClickEdit}
    />
    {isModalVisible && <ScoreModal router="/codingUs/blog" beforeScore={1233} currScore={1234}/>}
    </>
  );
}
