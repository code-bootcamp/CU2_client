import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useStore from "../../../../commons/store/store";
import { IBlog, IQuery } from "../../../../commons/types/generated/types";
import {} from "../../../../commons/types/types";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsBlogUI from "./CodingUsBlog.Presenter";
import {
  FETCH_BLOG_LIKE,
  FETCH_MY_FOLLOWING,
  FETCH_OTHER_BLOG_ORDERBY_CREATEAT,
  FETCH_OTHER_BLOG_ORDERBY_LIKE,
} from "./CodingUsBlog.Queries";

export default function CodingUsBlog() {
  const { data: blogListOrderByCreatedAt } = useQuery<
    Pick<IQuery, "fetchotherBlogorderbycreateAt">
  >(FETCH_OTHER_BLOG_ORDERBY_CREATEAT);
  const { data: blogListOrderByLike } = useQuery<
    Pick<IQuery, "fetchotherBlogorderbylikeAll">
  >(FETCH_OTHER_BLOG_ORDERBY_LIKE);
  const [fetchBloglike, { data: bloglikeList }] =
    useLazyQuery<Pick<IQuery, "fetchBloglike">>(FETCH_BLOG_LIKE);

  const { accessToken, userInfo } = useStore((state) => state);
  const [fetchmyFollowing] =
    useLazyQuery<Pick<IQuery, "fetchmyFollowing">>(FETCH_MY_FOLLOWING);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOrderByPopular, setIsOrderByPopular] = useState(true);
  const [blogList, setBlogList] = useState<{ blog: IBlog; isLike: boolean }[]>(
    []
  );
  const [followBlogList, setFollowBlogList] = useState<IBlog[]>([]);
  useEffect(() => {
    if(followBlogList.length > 0) return;
    if (!blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt) return;
    setFollowBlogList(
      blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt?.filter(
        (_, idx) => idx < 4
      )
    );
  }, [blogListOrderByCreatedAt]);

  useEffect(() => {
    if (!accessToken || !blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt) return;
    const getFollowBlogList = async () => {
      try {
        const followList = await fetchmyFollowing();
        if (
          !followList.data?.fetchmyFollowing ||
          followList.data?.fetchmyFollowing?.length < 1
        ) {
          return;
        }

        const followBlogList =
          blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt.filter((el) =>
            followList.data?.fetchmyFollowing
              .map((follow) => follow.id)
              .includes(el.id)
          );
        if (followBlogList.length < 1) return;
        setFollowBlogList(followBlogList);
      } catch (err: any) {}
    };
    getFollowBlogList();
  }, [accessToken]);

  const onToggleSortGubun = () => {
    setIsOrderByPopular((prev) => !prev);
  };

  const updateBlogList = (isChanged?: boolean) => {
    const page = isChanged ? 0 : currentPage;
    if (
      !isChanged &&
      blogList.length ===
        blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt.length
    )
      return;

    if (!blogListOrderByLike || !blogListOrderByCreatedAt) return;
    let currentList = isOrderByPopular
      ? [...blogListOrderByLike?.fetchotherBlogorderbylikeAll]
      : [...blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt];
    currentList = currentList!.filter((_, idx) => idx < (page + 1) * 8);

    const result = currentList.map((blog) => {
      return {
        blog: blog,
        isLike:
          (bloglikeList?.fetchBloglike &&
            bloglikeList?.fetchBloglike.map(
              (like) => like.id === blog.id
            )[0]) ??
          false,
      };
    });
    setBlogList(result);
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const getBlogLike = async () => {
      await fetchBloglike;
    };
    if (userInfo) getBlogLike();
  }, []);

  const onLoadMore = () => {
    updateBlogList();
  };

  useEffect(() => {
    updateBlogList(true);
  }, [isOrderByPopular]);

  return (
    <CodingUsLayout
      children={
        <CodingUsBlogUI
          onLoadMore={onLoadMore}
          blogList={blogList}
          onToggleSortGubun={onToggleSortGubun}
          isOrderByPopular={isOrderByPopular}
          followBlogList={followBlogList}
        />
      }
    />
  );
}
