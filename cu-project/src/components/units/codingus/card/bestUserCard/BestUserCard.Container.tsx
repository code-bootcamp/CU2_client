import { useRouter } from "next/router";
import {
  IBlog,
  IQuery,
  IQueryFetchBlogCommentorderbycreateArgs,
  IUser,
} from "../../../../../commons/types/generated/types";
import { useLazyQuery } from "@apollo/client";
import {
  FETCH_BLOG_DATA_COMMON,
  FETCH_BLOG_DATA_LOGGENIN,
} from "./BestUserCard.Queries";
import { useEffect, useState } from "react";
import useStore from "../../../../../commons/store/store";
import BestUserCardUI from "./BestUserCard.Presenter";
interface ICodingUsBestUserProps {
  user: IUser;
  blog: IBlog;
}

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  ranking?: number;
  onClickBestUserFollow: (targetId: string) => () => void;
  data: ICodingUsBestUserProps;
}
export default function BestUserCard(props: ICodingUsCardProps) {
  const accessToken = useStore((state) => state.accessToken);
  const router = useRouter();
  const [fetchBlogCommentorderbycreate] = useLazyQuery<
    Pick<IQuery, "fetchBlogCommentorderbycreate">,
    IQueryFetchBlogCommentorderbycreateArgs
  >(FETCH_BLOG_DATA_COMMON);
  const [fetchBloglike] = useLazyQuery<Pick<IQuery, "fetchBloglike">>(
    FETCH_BLOG_DATA_LOGGENIN
  );
  const [commentCnt, setCommentCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const isFollowed = false;
const userInfo = useStore(state => state.userInfo);
  useEffect(() => {
    try {
      const getCommentCnt = async () => {
        const result = await fetchBlogCommentorderbycreate({
          variables: { blogid: props.data.blog.id },
        });
        setCommentCnt(result.data?.fetchBlogCommentorderbycreate.length ?? 0);
      };
      getCommentCnt();

      if (!accessToken) return;
      const getIsLike = async () => {
        const result = await fetchBloglike();
        const likeList = result.data?.fetchBloglike.filter(
          (el) => el.id === props.data.blog.id
        );
        if (likeList && likeList.length > 0) setIsLiked(true);
      };
      getIsLike();
    } catch (err: any) {
      alert(err.message);
    }
  }, []);

  const moveToPage = () => {
    router.push(`/codingus/blog/${props.data.blog.id}`);
  };

  return (
   <BestUserCardUI
   {...props}
   moveToPage={moveToPage}
   isFollowed={isFollowed}
   isLiked={isLiked}
   commentCnt={commentCnt}
   />
  );
}
