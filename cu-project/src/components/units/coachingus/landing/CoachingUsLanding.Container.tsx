import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ICoachingUsLandingProps } from "../../../../commons/types/types";
import CoachingUsLandingUI from "./CoachingUsLanding.Presenter";
import {} from "./CoachingUsLanding.Queries";

export default function CoachingUsLanding(props: ICoachingUsLandingProps) {
  const router = useRouter();

  const corList = [
    "대기업",
    "IT",
    "공기업",
    "스타트업",
    "중견기업",
    "외국계",
    "네카라쿠배",
    "데브옵스",
    "백엔드",
    "프론트엔드",
    "플랫폼",
  ];
  const [favorList, setFavorList] = useState<(string | undefined)[]>([]);

  const onChangeCheckBox = (e: MouseEvent) => {
    if (favorList.includes(e.currentTarget.id)) {
      let temp = [];
      temp = favorList.filter((favor) => favor !== e.currentTarget.id);
      setFavorList(temp);
    } else {
      setFavorList([...favorList, e.currentTarget.id]);
    }
  };

  const onClickStart = () => {
    if (!favorList.length) alert("관심 카테고리를 선택해주세요.");
    else {
      if (!props.isLogin) localStorage.setItem("favorList", String(favorList));
      else {
        props.setFavorString(...favorList);
      }
      props.setIsFavorites(true);
    }
  };

  return (
    <CoachingUsLandingUI
      corList={corList}
      favorList={favorList}
      onChangeCheckBox={onChangeCheckBox}
      setIsFavorites={props.setIsFavorites}
      onClickStart={onClickStart}
    />
  );
}
