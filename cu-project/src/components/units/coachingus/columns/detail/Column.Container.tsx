import React, { useEffect, useState } from "react";
import { getIndexFromMD } from "../../../../../commons/libraries/mdUtils";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useScroll } from "../../../../commons/hooks/useScroll";
import { dummyMD } from "../../../codingus/blog/dummy";
import ColumnUI from "./Column.Presenter";

export default function ColumnDetailPage() {
  const { moveToPage } = useMoveToPage();
  const [indexPositions, setIndexPositions] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const onClickUpdate = () => {
    moveToPage(`/codingus/blog/${"blogId자리입니다~~~~"}/update`);
  };
  const { y: scrollY } = useScroll();

  useEffect(() => {
    if (indexPositions.length < 1) {
      const hTags = [
        ...Array.from(document.getElementsByTagName("h1")),
        ...Array.from(document.getElementsByTagName("h2")),
        ...Array.from(document.getElementsByTagName("h3")),
      ];
      if (hTags.length < 1) return;
      const scrollTops = getIndexFromMD(dummyMD).map((el) => {
        const tag = hTags.filter((tag) => el.includes(tag.innerText))[0];
        return Math.floor(tag.getBoundingClientRect().top - 100);
      });
      setIndexPositions(scrollTops);
    }
    if (indexPositions[currentIndex + 1] <= scrollY) {
      setCurrentIndex(currentIndex + 1);
    } else if (indexPositions[currentIndex] > scrollY) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [scrollY, currentIndex]);

  return (
    <ColumnUI
      contents={dummyMD}
      writer={"CodingMaster"}
      title={"Zustand - 상태 관리 라이브러리"}
      createdAt="2022-02-07T14:42:53.532Z"
      tags={["JavaScript", "React", "Zustand"]}
      index={getIndexFromMD(dummyMD)}
      currentIndex={currentIndex}
      indexPositions={indexPositions}
      setCurrentIndex={setCurrentIndex}
      isPicked={true}
      onClickUpdate={onClickUpdate}
    />
  );
}
