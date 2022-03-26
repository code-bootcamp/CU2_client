import { useEffect, useState } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { getIndexFromMD } from "../../../../../commons/libraries/mdUtils";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useScroll } from "../../../../commons/hooks/useScroll";
import { dummyMD } from "../dummy";
import CodingUsBlogDetailUI from "./BlogDetail.Presenter";

export default function CodingUsBlogDetail() {
  const { moveToPage } = useMoveToPage();

  const onClickDelete = () => {
    // 삭제 확인
  };
  const onClickUpdate = () => {
    moveToPage(`/codingus/blog/${"blogId자리입니다~~~~"}/update`);
  };
  useEffect(() => {
    const hTags = [
      ...Array.from(document.getElementsByTagName("h1")),
      ...Array.from(document.getElementsByTagName("h2")),
      ...Array.from(document.getElementsByTagName("h3")),
    ];
    // console.log("asd", hTags);
    //     const scrollTops = getIndexFromMD(dummyMD).map(
    //       (el) =>
    //         hTags
    //           .filter((tag) => el.includes(tag.innerText))[0]
    //           .getBoundingClientRect().top
    //     );
    // console.log(scrollTops);
    // console.log(hTags);
  }, []);

  const {y: scrollY} = useScroll();

  useEffect(() => {
    console.log(scrollY)
  }, [scrollY])
  return (
    <CodingUsBlogDetailUI
      contents={dummyMD}
      writer={"CodingMaster"}
      title={"Zustand - 상태 관리 라이브러리"}
      createdAt="2022-02-07T14:42:53.532Z"
      tags={["JavaScript", "React", "Zustand"]}
      index={getIndexFromMD(dummyMD)}
      isPicked={true}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
    />
  );
}
