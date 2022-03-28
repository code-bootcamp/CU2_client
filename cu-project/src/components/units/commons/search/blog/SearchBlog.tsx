import styled from "@emotion/styled";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  ICodingUsBlogCardProps,
  ICodingUsBlogProps,
} from "../../../../../commons/types/types";
import BlogCard from "../../../codingus/card/blogCard/BlogCard02/BlogCard02";
import { v4 as uuidV4 } from "uuid";
import Blank from "../../../../commons/Blank";

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchHead = styled.h1`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

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

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;

export const CardWrapper = styled(RowWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export default function SearchBlog() {
  const [sortedBlogList, setSortedBlogList] = useState<
    ICodingUsBlogCardProps[]
  >(new Array(10).fill(dummy));

  const onLoadMore = () => {
    const temp = [...sortedBlogList];
    setSortedBlogList([...temp, ...new Array(10).fill(dummy)]);
  };

  return (
    <Wrapper>
      <SearchHead>CodingUs Blog</SearchHead>
      <Blank height="30px" />
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true || false}
        useWindow={true}
      >
        <CardWrapper>
          {sortedBlogList?.map((el: ICodingUsBlogCardProps) => (
            <BlogCard key={uuidV4()} blogData={el} />
          ))}
        </CardWrapper>
      </InfiniteScroll>
    </Wrapper>
  );
}
