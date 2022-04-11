import { useMutation, useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateBlogCommentArgs,
  IMutationDeleteBlogCommentArgs,
  IQuery,
  IQueryFetchBlogCommentorderbycreateArgs,
} from "../../../../../../commons/types/generated/types";
import CodingUsBlogCommentUI from "./BlogComment.Presenter";
import {
  CREATE_BLOG_COMMENT,
  DELETE_BLOG_COMMENT,
  FETCH_BLOG_COMMENT_ORDERBY_CREATE,
} from "./BlogComment.Queries";
interface IBlogCommentProps {
  blogId: string;
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
  const onClickEditComment = (idx: number) => () => {
    setIsEdits(isEdits.map((el, index) => idx === index));
  };
  const onClickEditSubmit = (id: string) => () => {};
  const onLoadMore = () => {};
  const [isEdits, setIsEdits] = useState<boolean[]>([]);

  // useEffect(() => {
  //   setIsEdits([...new Array(commentList.length).fill(false)]);
  // }, []);

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
      }}
    />
  );
}
