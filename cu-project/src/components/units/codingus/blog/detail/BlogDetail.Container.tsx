import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getIndexFromMD } from "../../../../../commons/libraries/mdUtils";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useScroll } from "../../../../commons/hooks/useScroll";
import { dummyMD } from "../dummy";
import CodingUsBlogDetailUI from "./BlogDetail.Presenter";
import { FETCH_BLOG } from "./BlogDetail.Queries";

export default function CodingUsBlogDetail() {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const [indexPositions, setIndexPositions] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // const {data: fetchBlogData} = useQuery<Pick<IQuery,"fetchBlog">,IQueryFetchBlogArgs>(FETCH_BLOG, {variables: {blogId: router.query.blogId}})
  // const {data: fetchBlogData} = useQuery(FETCH_BLOG, {variables: {blogId: router.query.blogId}})
  const onClickDelete = () => {
    // 삭제 확인
  };
  const onClickUpdate = () => {
    moveToPage(`/codingus/blog/${"blogId자리입니다~~~~"}/update`);
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
      contents={dummyMD}
      writer={"CodingMaster"}
      title={"Zustand - 상태 관리 라이브러리"}
      createdAt="2022-02-07T14:42:53.532Z"
      tags={["JavaScript", "React", "Zustand"]}

      // fetchBlogData={fetchBlogData}
      // index={getIndexFromMD(fetchBlogData.contents)}
      // isPicked={true}

      currentIndex={currentIndex}
      indexPositions={indexPositions}
      setCurrentIndex={setCurrentIndex}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
    />
  );
}
