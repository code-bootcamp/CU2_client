import Label01 from "../../../../commons/Label/Label01";
import * as S from "./BlogShortCard.Style";
import Blank from "../../../../commons/Blank";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { getShortDateString } from "../../../../../commons/libraries/dateUtils";
import Tag01 from "../../../../commons/Tag/Tag01";

interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  stacks?: string[];
  title?: string;
  content?: string;
  writer?: string;
  goodCnt?: number;
  badCnt?: number;
  createdAt?: string;
  isGood?: boolean;
  isBad?: boolean;
}

export default function BlogShortCard(props: ICodingUsCardProps) {
  const { moveToPage } = useMoveToPage();
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "285px"}
      height={props.height ? `${props.height}px` : "327px"}
    >
      <Tag01 value={String(props.stacks[0])} />
      <Blank height="18px" />
      <S.Image src="https://source.unsplash.com/random" />
      <Blank height="19px" />
      <S.Contents>
        {props.content}
      </S.Contents>
    </S.Wrapper>
  );
}
