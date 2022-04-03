import Label01 from "../../../../commons/Label/Label01";
import * as S from "./style";
import Blank from "../../../../commons/Blank";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import PointIcon from "../../../../commons/Icon/Icon01/PointIcon";
import DropDownIcon from "../../../../commons/Icon/DropDownIcon";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { ICodingUsSidebarProps } from "../../../../../commons/types/types";
import useStore from "../../../../../commons/store/store";



export default function SidebarUserInfo(props: ICodingUsSidebarProps) {
  const todayDiff =
    props.todayRanking?.prev - props.todayRanking?.today > 0
      ? `+${props.todayRanking?.prev - props.todayRanking?.today}`
      : props.todayRanking?.prev - props.todayRanking?.today;
  const totalDiff =
    props.totalRanking?.prev - props.totalRanking?.today > 0
      ? `+${props.totalRanking?.prev - props.totalRanking?.today}`
      : props.totalRanking?.prev - props.totalRanking?.today;

  const [toggleState, setToggleState] = useState({
    userInfo: false,
    stack: false,
  });
  const userInfo = useStore(state => state.userInfo);
  const chgToggleState = (gubun: "userInfo" | "stack") => () => {
    const temp = { ...toggleState };
    temp[gubun] = !temp[gubun];
    setToggleState(temp);
  };
  const {moveToPage} = useMoveToPage()
  return (
    <S.Wrapper>
      <S.UserInfoHeader>
        {userInfo ? (
          <>
            <S.ProfileImage />
            <Blank width="10px" />
            <S.UserInfo>
              <Label01 size="14px" weight="700" value={userInfo.nickname} />
              <S.Point>
                <PointIcon size={20} />
                <Blank width="5px" />
                {userInfo.score}
              </S.Point>
            </S.UserInfo>
          </>
        ) : (
          <S.LoginLabel onClick={moveToPage("/login")}>로그인</S.LoginLabel>
        )}
      </S.UserInfoHeader>
      {userInfo && <Blank height="24px" />}
      <S.UserInfoBody>
        {userInfo && (
          <S.Toggle onClick={chgToggleState("userInfo")}>
            {"나의 정보"}
            <DropDownIcon isUp={toggleState.userInfo || false} />
          </S.Toggle>
        )}
        {userInfo && toggleState.userInfo && (
          <div>
            <Blank height="24px" />
            <S.Item>
              <S.StackLabel>{`상위 ${props.todayPercent}%`}</S.StackLabel>
              <S.StackLabel>오늘활동</S.StackLabel>
            </S.Item>
            <Blank height="24px" />
            <S.Item>
              <S.StackLabel>{`${props.todayPoint}p`}</S.StackLabel>
              <S.StackLabel>획득한 점수</S.StackLabel>
            </S.Item>
            <Blank height="24px" />
            <S.Item>
              <S.StackLabel>{`${props.todayRanking?.today}위(${todayDiff}위)`}</S.StackLabel>
              <S.StackLabel>오늘 순위</S.StackLabel>
            </S.Item>
            <Blank height="24px" />
            <S.Item>
              <S.StackLabel>{`${props.totalRanking?.today}위(${totalDiff}위)`}</S.StackLabel>
              <S.StackLabel>전체 순위</S.StackLabel>
            </S.Item>
          </div>
        )}
        <Blank height="12px" />
        <S.Toggle onClick={chgToggleState("stack")}>
          {"관심 스택"}
          <DropDownIcon isUp={toggleState.stack || false} />
        </S.Toggle>
        {toggleState.stack &&
          props.stacks?.map((el) => (
            <div key={uuidv4()}>
              <Blank height="24px" />
              <S.StackLabel>{el}</S.StackLabel>
            </div>
          ))}
        {toggleState.stack && (
          <div>
            <Blank height="24px" />
            <S.StackLabel>관심 스택 추가하기</S.StackLabel>
          </div>
        )}
      </S.UserInfoBody>
    </S.Wrapper>
  );
}
