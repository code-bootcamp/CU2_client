import RecCoachCardUI from "./RecCoachCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { ICoachingUsRecCoachCardProps } from "../../../../../commons/types/types";
import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { CREATE_FOLLOW, FETCH_COACH_ORDER_LIST } from "./RecCoachCard.Queries";
import { useMutation, useQuery } from "@apollo/client";
import ConfirmModal from "../../../../commons/Modal/ConfirmModal/ConfirmModal";
import { Router, useRouter } from "next/router";

export default function RecCoachCardPage(props: ICoachingUsRecCoachCardProps) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const [isStart, setIsStart] = useState(true);
  const { data } = useQuery(FETCH_COACH_ORDER_LIST);
  const [following] = useMutation(CREATE_FOLLOW);
  const [newList, setNewList] = useState([]);
  const [coachId, setCoachId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const rank = [3912, 4143, 1232];

  const result = data?.fetchUserOrderbyscore
    .filter((el) => el.role === "COACH")
    .slice(0, 3);

  const onClickFollowBtn = async (e) => {
    try {
      setCoachId(e.target.id);
      const followResult = await following({
        variables: {
          followUserId: e.target.id,
        },
      });
      setModalOpen(true);
    } catch (e) {
      setModalOpen(true);
      if (e.message === "Unauthorized") {
        setErrorMessage("로그인을 해주세요");
      } else {
        setErrorMessage(e.message);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setNewList(result);
    }
    setTimeout(() => {
      setIsStart(false);
    }, 2200);
  }, [data]);

  if (modalOpen) {
    if (errorMessage) {
      return (
        <ConfirmModal
          router={() => setModalOpen(false)}
          btnText="돌아가기"
          mainText="팔로우가 되지 않았습니다."
          subText={errorMessage}
        />
      );
    } else {
      return (
        <ConfirmModal
          router={() => router.push(`/coachingus/coaches/${coachId}`)}
          btnText="코치소개 보러가기"
          mainText="코치를 팔로우하셨습니다."
          list={[
            "코치의 프로필을 더 자세히 보고 싶으시다면 ",
            "아래의 버튼을 눌러주세요.",
          ]}
        />
      );
    }
  }

  return (
    <RecCoachCardUI
      recommendCoachList={newList}
      isStart={isStart}
      moveToPage={moveToPage}
      rank={rank}
      onClickFollowBtn={onClickFollowBtn}
    />
  );
}
