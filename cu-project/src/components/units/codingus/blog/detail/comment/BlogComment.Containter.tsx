import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateBlogCommentArgs,
  IMutationDeleteBlogCommentArgs,
  IMutationUpdateBlogCommentArgs,
  IQuery,
  IQueryFetchBlogCommentorderbycreateArgs,
  IUser,
} from "../../../../../../commons/types/generated/types";
import CodingUsBlogCommentUI from "./BlogComment.Presenter";
import {
  CREATE_BLOG_COMMENT,
  DELETE_BLOG_COMMENT,
  FETCH_BLOG_COMMENT_ORDERBY_CREATE,
  UPDATE_BLOG_COMMENT,
} from "./BlogComment.Queries";
interface IBlogCommentProps {
  blogId: string;
  loggedInUser: IUser;
}

export default function CodingUsBlogComment(props: IBlogCommentProps) {
  const { data: commentList } = useQuery<
    Pick<IQuery, "fetchBlogCommentorderbycreate">,
    IQueryFetchBlogCommentorderbycreateArgs
  >(FETCH_BLOG_COMMENT_ORDERBY_CREATE, { variables: { blogid: props.blogId } });
  const [createBlogComment] = useMutation<
    Pick<IMutation, "createBlogComment">,
    IMutationCreateBlogCommentArgs
  >(CREATE_BLOG_COMMENT);
  const [deleteBlogComment] = useMutation<
    Pick<IMutation, "deleteBlogComment">,
    IMutationDeleteBlogCommentArgs
  >(DELETE_BLOG_COMMENT);
  const [updateBlogComment] = useMutation<
    Pick<IMutation, "updateBlogComment">,
    IMutationUpdateBlogCommentArgs
  >(UPDATE_BLOG_COMMENT);
  const editCommentRef = useRef<HTMLTextAreaElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const onClickWriteSubmit = async () => {
    try {
      if (!commentRef.current?.value) {
        alert("댓글 내용을 입력해주세요");
        return;
      }
      const result = await createBlogComment({
        variables: {
          blogid: props.blogId,
          contents: commentRef.current?.value,
        },
      });
      if (!result.data?.createBlogComment.id) {
        alert("등록 실패");
        return;
      }
      location.reload();
    } catch (err: any) {
      alert("등록 실패");
    }
  };
  const onClickDeleteComment = (id: string) => async () => {
    try {
      const result = await deleteBlogComment({
        variables: { blogcommentid: id },
      });
      if (!result.data?.deleteBlogComment) {
        alert("삭제 실패");
        return;
      }
      location.reload();
    } catch (error) {}
  };
  const [isEdits, setIsEdits] = useState<boolean[]>([]);

  useEffect(() => {
    if (
      !commentList?.fetchBlogCommentorderbycreate.length ||
      commentList?.fetchBlogCommentorderbycreate.length < 1
    )
      return;
    setIsEdits(
      new Array(commentList?.fetchBlogCommentorderbycreate.length).fill(false)
    );
  }, [commentList]);
  const onClickEditComment = (idx: number) => () => {
    setIsEdits([...isEdits.map((_, index) => idx === index)]);
  };
  const onClickEditSubmit = (id: string) => async () => {
    if (
      editCommentRef.current!.defaultValue === editCommentRef.current!.value ||
      !editCommentRef.current!.value
    ) {
      alert("수정할 내용을 입력하세요");
      return;
    }
    const variables: IMutationUpdateBlogCommentArgs = {
      blogcommentid: id,
      blogid: props.blogId,
      contents: String(editCommentRef.current?.value),
    };

    const result = await updateBlogComment({ variables });
    if (!result.data?.updateBlogComment.id) {
      alert("수정 실패");
      return;
    }
    location.reload();
  };
  const onLoadMore = () => {};
  return (
    <CodingUsBlogCommentUI
      newCommentProps={{
        onClickSubmit: onClickWriteSubmit,
        commentRef: commentRef,
        commentCnt: commentList?.fetchBlogCommentorderbycreate.length ?? 0,
      }}
      commentListProps={{
        commentList: commentList?.fetchBlogCommentorderbycreate!,
        onClickDeleteComment: onClickDeleteComment,
        onClickEditComment: onClickEditComment,
        onLoadMore: onLoadMore,
        onClickSubmit: onClickEditSubmit,
        isEdits: isEdits,
        loggedInUser: props.loggedInUser,
        editCommentRef: editCommentRef,
      }}
    />
  );
}
