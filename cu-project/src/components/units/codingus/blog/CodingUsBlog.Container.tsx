import { MouseEvent, useEffect, useState } from "react";
import {
  ICodingUsBlogCardProps,
  ICodingUsBlogProps,
} from "../../../../commons/types/types";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsBlogUI from "./CodingUsBlog.Presenter";
import {} from "./CodingUsBlog.Queries";

const dummy: ICodingUsBlogProps = {
  images: [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
  ],
  stacks: ["JavaScript"],
  title: "모든 국민은 학문과 예술의 자유를 가진다. ",
  content:
    "모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다.…",
  writer: "작성자",
  likeCnt: 31,
  commentCnt: 12,
  createdAt: "2022-02-07T14:42:53.532Z",
  isLike: true,
};

export default function CodingUsBlog(props: ICodingUsBlogProps) {
  const [sortedBlogList, setSortedBlogList] = useState<
    ICodingUsBlogCardProps[]
  >(new Array(10).fill(dummy));
  const [isSortByPopular, setIsSortByPopular] = useState(true);

  const onToggleSortGubun = (_: MouseEvent<HTMLDivElement>) => {
    setIsSortByPopular((prev) => !prev);
  };

  const onLoadMore = () => {
    const temp = [...sortedBlogList];
    setSortedBlogList([...temp, ...new Array(10).fill(dummy)]);
  };

  useEffect(() => {
    // 정렬 구분 변경 -> 데이터 요청
  }, [isSortByPopular]);

  return (
    <CodingUsLayout
      children={
        <CodingUsBlogUI
          onLoadMore={onLoadMore}
          sortedBlogList={sortedBlogList}
          onToggleSortGubun={onToggleSortGubun}
          isSortByPopular={isSortByPopular}
        />
      }
    />
  );
}
