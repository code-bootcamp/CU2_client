import Blank from "../../../../commons/Blank";
import Label01 from "../../../../commons/Label/Label01";
import * as S from "./style";

interface ICodingUsRightSideBarProps {
  todayPercent?: number;
  todayPoint?: number;
  todayRanking: { prev: number; today: number };
  totalRanking: { prev: number; today: number };
}

export default function CodingUsRightSideBar(
  props: ICodingUsRightSideBarProps
) {
  const todayDiff =
    props.todayRanking?.prev - props.todayRanking?.today > 0
      ? `+${props.todayRanking?.prev - props.todayRanking?.today}`
      : props.todayRanking?.prev - props.todayRanking?.today;
  const totalDiff =
    props.totalRanking?.prev - props.totalRanking?.today > 0
      ? `+${props.totalRanking?.prev - props.totalRanking?.today}`
      : props.totalRanking?.prev - props.totalRanking?.today;
  return (
    <S.Wrapper>
      <Label01 value="나의 정보" size="24px" weight="700"/>
      <S.StackWrapper>
        <Blank height="40px" />
        <S.Item>
          <S.StackLabel>{`상위 ${props.todayPercent}%`}</S.StackLabel>
          <S.StackLabel>오늘활동</S.StackLabel>
        </S.Item>
        <Blank height="40px" />
        <S.Item>
          <S.StackLabel>{`${props.todayPoint}p`}</S.StackLabel>
          <S.StackLabel>획득한 점수</S.StackLabel>
        </S.Item>
        <Blank height="40px" />
        <S.Item>
          <S.StackLabel>{`${props.todayRanking?.today}위(${todayDiff}위)`}</S.StackLabel>
          <S.StackLabel>오늘 순위</S.StackLabel>
        </S.Item>
        <Blank height="40px" />
        <S.Item>
          <S.StackLabel>{`${props.totalRanking?.today}위(${totalDiff}위)`}</S.StackLabel>
          <S.StackLabel>전체 순위</S.StackLabel>
        </S.Item>
        <Blank height="40px" />
      </S.StackWrapper>
    </S.Wrapper>
  );
}
