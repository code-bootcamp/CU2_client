import Blank from "../../../commons/Blank";
import {
  ICodingUsBlogCardProps,
  ICodingUsBlogUIProps,
} from "../../../../commons/types/types";
import BlogShortCard from "../card/blogShortCard/BlogShortCard";
import * as S from "./CodingUsBlog.Style";
import Label01 from "../../../commons/Label/Label01";
import { v4 as uuidV4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import BlogCard02 from "../card/blogCard/BlogCard02/BlogCard02";
import CodingUsHistory from "../history/History.Container";
export default function CodingUsBlogUI(props: ICodingUsBlogUIProps) {
  return (
      <S.CodingUsBlog>
        <S.CodingUsBlogBody>
          <CodingUsHistory
            historyData={{
              작성글: 10,
              GOOD: 24,
              BAD: 2,
              채택: 0,
              댓글: 13,
            }}
            title="My Blog History"
          />
          <Blank height="65px" />
          <S.HotTopicWrapper>
            <Label01 value="팔로잉" padding="0px" weight="700" size="36px" />
            <Blank height="32px" />
            <S.CardWrapper>
              {new Array(4).fill(0).map((_, idx) => (
                <BlogShortCard
                  key={idx}
                  image="https://source.unsplash.com/random"
                  stacks={["스택"]}
                  title="모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기..."
                />
              ))}
            </S.CardWrapper>
          </S.HotTopicWrapper>
          <Blank height="120px" />
          <S.FollowingWrapper>
            <Label01
              value="전체 블로그"
              padding="0px"
              weight="700"
              size="36px"
            />
            <Blank height="21px" />
            <S.SortGubun>
              <S.GubunLabel isSelected={props.isSortByPopular} onClick={props.onToggleSortGubun}>인기</S.GubunLabel>
              <S.GubunLabel isSelected={false}>|</S.GubunLabel>
              <S.GubunLabel isSelected={!props.isSortByPopular} onClick={props.onToggleSortGubun}>최신</S.GubunLabel>
            </S.SortGubun>
            <Blank height="34px" />
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true || false}
              useWindow={true}
            >
              <S.CardWrapper>
                {props.sortedBlogList?.map((el: ICodingUsBlogCardProps) => (
                  <BlogCard02 key={uuidV4()} blogData={el} />
                ))}
              </S.CardWrapper>
            </InfiniteScroll>
          </S.FollowingWrapper>
        </S.CodingUsBlogBody>
      </S.CodingUsBlog>
  );
}
