import React, { useEffect, useState } from "react";
import * as S from "./style";

function Loading() {
  const [ranNum, setRanNum] = useState(0);
  const [done, setDone] = useState(false);
  const randomNum = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    setRanNum(num);
    setDone(true);
    return num;
  };
  const textList = [
    <S.LoadingText key="0">
      수강신청 알리미는
      <br />
      여러분의 올클을 응원합니다!
    </S.LoadingText>,
    <S.LoadingText color="#8B0128" key="1">
      <span>수알 콘텐츠</span>에선
      <br />
      수강신청과 관련된 재밌는 정보를 알려줘요 !
    </S.LoadingText>,
    <S.LoadingText key="2">
      &apos;지난 수희등 경쟁률&apos; 페이지에서
      <br />
      수희등 경쟁률 확인해보세요 :)
    </S.LoadingText>,
    <S.LoadingText color="#FFA000" key="3">
      즐겨찾기에 <b>수강신청</b> 과목을 등록하고
      <br />
      <span>&apos;고파스 쪽지&apos;</span>로 빈자리 알림 받기 :)
    </S.LoadingText>,
    <S.LoadingText color="#8B0128" key="4">
      수강신청 기간엔 <span>학수번호/과목 복사</span>하고
      <br />
      수강신청 올클 하세요 :)
    </S.LoadingText>,
    <S.LoadingText color="#8B0128" key="5">
      즐겨찾기에 <b>수강희망</b> 과목을 등록하고
      <br />
      원하는 과목의 정원을 한눈에 확인하세요 :)
    </S.LoadingText>,
  ];
  useEffect(() => {
    randomNum(0, 5);
  }, []);
  return (
    <S.LoadingContaniner>
      <p>로딩 중...</p>
      <S.Loading
        alt="loading"
        src="https://sugangalimi-2021-1.s3.ap-northeast-2.amazonaws.com/icon/img_alarm.svg"
      />
      {done && textList[ranNum]}
    </S.LoadingContaniner>
  );
}

export default React.memo(Loading);
