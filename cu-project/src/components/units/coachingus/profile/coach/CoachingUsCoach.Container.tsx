import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachingUsCoachUI from "./CoachingUsCoach.Presenter";

export default function CoachingUsCoachPage(props) {
  const { moveToPage } = useMoveToPage();
  const columnList = [
    {
      id: 0,
      title: "형제들에서 알립니다!",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "손오공",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 1,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
  ];
  return (
    <CoachingUsCoachUI
      moveToPage={moveToPage}
      columnList={columnList}
      setComponent={props.setComponent}
    />
  );
}
