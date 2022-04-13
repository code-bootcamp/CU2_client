import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getIndexFromMD } from "../../../../../commons/libraries/mdUtils";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useScroll } from "../../../../commons/hooks/useScroll";
import { dummyMD } from "../../../codingus/blog/dummy";
import ColumnUI from "./Column.Presenter";
import { DELETE_COLUMN, FETCH_DETAIL_COLUMN } from "./Column.Queries";

export default function ColumnDetailPage() {
  const router = useRouter();
  const { moveToPage } = useMoveToPage();
  const [indexPositions, setIndexPositions] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { data } = useQuery(FETCH_DETAIL_COLUMN, {
    variables: { columnId: String(router.query.columnId) },
  });

  const [deleteColumn] = useMutation(DELETE_COLUMN);

  const onClickUpdate = () => {
    moveToPage(`/codingus/blog/${"blogId자리입니다~~~~"}/update`);
  };
  const { y: scrollY } = useScroll();

  const deleteColumnBtn = async () => {
    try {
      await deleteColumn({
        variables: {
          columnId: String(router.query.columnId),
        },
      });
      router.back();
    } catch (e) {
      alert(e);
    }
  };

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
  const contents = data?.fetchDetailColumn?.contents;

  return (
    <ColumnUI
      contents={contents}
      writer={data?.fetchDetailColumn?.user.name}
      title={data?.fetchDetailColumn?.title}
      createdAt="2022-02-07T14:42:53.532Z"
      index={getIndexFromMD(dummyMD)}
      currentIndex={currentIndex}
      indexPositions={indexPositions}
      setCurrentIndex={setCurrentIndex}
      isPicked={true}
      onClickUpdate={onClickUpdate}
      deleteColumnBtn={deleteColumnBtn}
    />
  );
}
function useHistory() {
  throw new Error("Function not implemented.");
}
