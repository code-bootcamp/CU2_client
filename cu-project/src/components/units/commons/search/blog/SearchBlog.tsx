import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  ICodingUsBlogCardProps,
  ICodingUsBlogProps,
} from "../../../../../commons/types/types";
import BlogCard from "../../../codingus/card/blogCard/BlogCard02/BlogCard02";
import { v4 as uuidV4 } from "uuid";
import Blank from "../../../../commons/Blank";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BlogCard01 from "../../../../commons/Card/BlogCard01/BlogCard01";

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
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
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 1000px;
`;

const FETCH_BLOG_SEARCH = gql`
  query fetchBlogSearch($search: String!) {
    fetchBlogSearch(search: $search) {
      id
      title
      contents
      updatedat
      like
      user {
        nickname
      }
      blogcategorytag {
        tag
      }
    }
  }
`;

export default function SearchBlog() {
  const router = useRouter();
  const [sortedBlogList, setSortedBlogList] = useState<
    ICodingUsBlogCardProps[]
  >(new Array(10).fill(dummy));

  // const onLoadMore = () => {
  //   const temp = [...sortedBlogList];
  //   setSortedBlogList([...temp, ...new Array(10).fill(dummy)]);
  // };

  const { data, refetch } = useQuery(FETCH_BLOG_SEARCH, {
    variables: { search: router.query.keyword },
  });

  useEffect(() => {
    refetch({ search: router.query.keyword });
    console.log("data", data);
  }, [data]);

  return (
    <Wrapper>
      <SearchHead>CodingUs Blog</SearchHead>
      <Blank height="30px" />
      <CardWrapper>
        {data?.fetchBlogSearch?.map((el: ICodingUsBlogCardProps, index) => (
          <div
            key={index}
            style={{ marginRight: "40px", marginBottom: "40px" }}
          >
            <BlogCard01 key={uuidV4()} data={el} isLike={el.isLike} />
          </div>
        ))}
      </CardWrapper>
    </Wrapper>
  );
}
