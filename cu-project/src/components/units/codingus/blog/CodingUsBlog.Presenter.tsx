import Blank from "../../../commons/Blank";
import { ICodingUsBlogUIProps } from "../../../../commons/types/types";
import BlogShortCard from "../card/blogShortCard/BlogShortCard";
import * as S from "./CodingUsBlog.Style";
export default function CodingUsBlogUI(props: ICodingUsBlogUIProps) {
  return (
    <S.Wrapper>
      <Blank height="100px" />
      <S.HistoryWrapper></S.HistoryWrapper>
      <S.HotTopicWrapper>
        <S.CardWrapper>
          {new Array(5).fill(0).map((_, idx) => (
            <BlogShortCard
              key={idx}
              image="https://source.unsplash.com/random"
              stacks={["스택"]}
              title="모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기..."
            />
          ))}
        </S.CardWrapper>
      </S.HotTopicWrapper>
      <S.FollowingWrapper></S.FollowingWrapper>
    </S.Wrapper>
  );
}
