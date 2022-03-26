import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
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
  return (
    <CodingUsBlogDetailUI
      contents={dummyMD}
      writer={"CodingMaster"}
      title={"Zustand - 상태 관리 라이브러리"}
      createdAt="2022-02-07T14:42:53.532Z"
      tags={["JavaScript", "React", "Zustand"]}
      isPicked={true}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
    />
  );
}
