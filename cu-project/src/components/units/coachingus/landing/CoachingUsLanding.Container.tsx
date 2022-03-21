import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
import { useState } from "react";
import { ICoachingUsLandingProps } from "../../../../commons/types/types";
import CoachingUsLandingUI from "./CoachingUsLanding.Presenter";
import {} from "./CoachingUsLanding.Queries";

export default function CoachingUsLanding(props: ICoachingUsLandingProps) {
  const corList = [
    "대기업",
    "IT",
    "공기업",
    "스타트업",
    "중견기업",
    "외국계",
    "대학원",
  ];
  const [favorList, setFavorList] = useState<(string | undefined)[]>([]);

  const onChangeCheckBox = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setFavorList([...favorList, e.target.id]);
    }

    let restList;

    if (!e.target.checked) {
      [e.target.id, ...restList] = favorList;
      setFavorList([...restList]);
    }
  };

  const onClickStart = () => {
    if (!favorList.length) alert("관심 카테고리를 선택해주세요.");
    else {
      localStorage.setItem("favorList", String(favorList));
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
