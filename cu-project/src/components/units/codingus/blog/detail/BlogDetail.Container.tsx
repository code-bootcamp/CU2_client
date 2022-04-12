import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLoggenInUser } from "../../../../../commons/libraries/getLoggedInUser";
import { getIndexFromMD } from "../../../../../commons/libraries/mdUtils";
import useStore from "../../../../../commons/store/store";
import {
  IMutation,
  IMutationDeleteBlogArgs,
  IQuery,
  IQueryFetchblogoneArgs,
  IUser,
} from "../../../../../commons/types/generated/types";
import { useGetUserInfo } from "../../../../commons/hooks/useGetUserInfo";
import { useScroll } from "../../../../commons/hooks/useScroll";
import CodingUsBlogDetailUI from "./BlogDetail.Presenter";
import { DELETE_BLOG, FETCH_BLOG_ONE } from "./BlogDetail.Queries";

export default function CodingUsBlogDetail() {

  const accessToken = useStore((state) => state.accessToken);

  const [userInfo, setUserInfo] = useState<IUser>();
  useGetUserInfo();
  useEffect(() => {
    if (!accessToken) return;
    const getUserInfo = async () => {
      const userInfo = await getLoggenInUser(accessToken);
      setUserInfo(userInfo);
    };
    getUserInfo();
  }, [accessToken]);

  const router = useRouter();
  const [indexPositions, setIndexPositions] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const {data: fetchBlogData} = useQuery<Pick<IQuery,"fetchblogone">,IQueryFetchblogoneArgs>(FETCH_BLOG_ONE, {variables: {blogid: String(router.query.blogId)}})
  const [deleteBlog] = useMutation<
    Pick<IMutation, "deleteBlog">,
    IMutationDeleteBlogArgs
  >(DELETE_BLOG);
  const onClickDelete = async () => {
    try {
      // 삭제확인
      const result = await deleteBlog({
        variables: { blogid: String(router.query.blogId) },
      });
      if (!result) {
        alert("삭제 실패");
        return;
      }
      alert("삭제 성공");
      router.push("/codingus/blog");
    } catch (err: any) {
      alert(err.message);
    }
  };
  const onClickEdit = () => {
    router.push(`/codingus/blog/${router.query.blogId}/edit`);
  };
  const { y: scrollY } = useScroll();

  useEffect(() => {
    if (indexPositions.length < 1) {
      const hTags = [
        ...Array.from(document.getElementsByTagName("h1")),
        ...Array.from(document.getElementsByTagName("h2")),
        ...Array.from(document.getElementsByTagName("h3")),
      ];
      if (hTags.length < 1) return;
      const scrollTops = getIndexFromMD(String(fetchBlogData?.fetchblogone.contents)).map(
        (el) => {
          const tag = hTags.filter((tag) => el.includes(tag.innerText))[0];
          return Math.floor(tag.getBoundingClientRect().top - 100);
        }
      );
      setIndexPositions(scrollTops);
    }
    if (indexPositions[currentIndex + 1] <= scrollY) {
      setCurrentIndex(currentIndex + 1);
    } else if (indexPositions[currentIndex] > scrollY) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [scrollY, currentIndex]);
  return (
    <CodingUsBlogDetailUI
      data={fetchBlogData?.fetchblogone}
      index={getIndexFromMD(fetchBlogData?.fetchblogone?.contents || "")}
      // isPicked={fetchBlogData.isLiked}
      currentIndex={currentIndex}
      indexPositions={indexPositions}
      setCurrentIndex={setCurrentIndex}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      loggedInUser={userInfo}
    />
  );
}
