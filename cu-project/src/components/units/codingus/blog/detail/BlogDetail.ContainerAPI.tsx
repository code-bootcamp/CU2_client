import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getIndexFromMD } from "../../../../../commons/libraries/mdUtils";
import { IMutation, IMutationDeleteBlogArgs, IQuery } from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useScroll } from "../../../../commons/hooks/useScroll";
import { dummyMD } from "../dummy";
import CodingUsBlogDetailUI from "./BlogDetail.PresenterAPI";
import { DELETE_BLOG, FETCH_BLOG } from "./BlogDetail.Queries";

export default function CodingUsBlogDetail() {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const [indexPositions, setIndexPositions] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const {data: fetchBlogData} = useQuery<Pick<IQuery,"fetchBlog">,IQueryFetchBlogArgs>(FETCH_BLOG, {variables: {blogId: router.query.blogId}})
  const [deleteBlog] = useMutation<Pick<IMutation,"deleteBlog">,IMutationDeleteBlogArgs>(DELETE_BLOG);
  const onClickDelete = async () => {
    // 삭제 확인
    if(!"삭제확인") return;

    try{const result = await deleteBlog({variables: {blogid: String(router.query.blogId)}})
    if(!result){
      alert("삭제 실패");
      return;
    }
    alert("삭제 성공");
    router.push("/codingus/blog");
  }catch(err: any){
      alert(err.message);
    }
  };
  const onClickUpdate = () => {
    moveToPage(`/codingus/blog/${router.query.blogId}/update`);
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
      const scrollTops = getIndexFromMD(dummyMD).map(
        (el) =>{
          const tag = hTags
            .filter((tag) => el.includes(tag.innerText))[0];
            console.log(tag.style);
            return Math.floor(tag.getBoundingClientRect().top - 100);
        }
      );
      setIndexPositions(scrollTops);
    }
    if (indexPositions[currentIndex + 1] <= scrollY) {
      setCurrentIndex(currentIndex + 1);
      console.log(indexPositions[currentIndex +1], scrollY)
    }
    else if (indexPositions[currentIndex] > scrollY) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [scrollY,currentIndex]);
  return (
    <CodingUsBlogDetailUI
      data={fetchBlogData.Blog}
      index={getIndexFromMD(fetchBlogData.Blog.contents)}
      isPicked={fetchBlogData.isLiked}
      currentIndex={currentIndex}
      indexPositions={indexPositions}
      setCurrentIndex={setCurrentIndex}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
    />
  );
}
