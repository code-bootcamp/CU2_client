import { useState } from "react";
import { ICodingUsBlogCardProps, ICodingUsMainProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsMainUI from "./CodingUsMain.Presenter";
import {} from "./CodingUsMain.Queries";

const bestUserItems = [
  {
    userInfo: {
      id: "Asasdasdasd",
      image: "https://source.unsplash.com/random",
      name: "김재민",
      stack: "JavaScript",
      ranking: 1,
      iFollowed: true,
    },
    latestBlogItem: {
      id: "Asasdasdasd",
      tags: ["tag1", "tag2", "tag3"],
      title: "제목입니다~~",
      contents:
        "모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의…",
      images: [
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
      ],
      likeCnt: 5,
      commentCnt: 12,
      iLiked: true,
      createdAt: "2022-02-07T14:42:53.532Z",
    },
  },
  {
    userInfo: {
      id: "Asasdasdasd",
      image: "https://source.unsplash.com/random",
      name: "김태훈",
      stack: "JavaScript",
      ranking: 2,
      iFollowed: false,
    },
    latestBlogItem: {
      id: "Asasdasdasd",
      tags: ["tag1", "tag2", "tag3"],
      title: "제목입니다~~",
      contents:
        "모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의…",
      images: [
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
      ],
      likeCnt: 5,
      commentCnt: 12,
      iLiked: true,
      createdAt: "2022-03-07T14:42:53.532Z",
    },
  },
  {
    userInfo: {
      id: "Asasdasdasd",
      image: "https://source.unsplash.com/random",
      name: "최건",
      stack: "JavaScript",
      ranking: 3,
      iFollowed: false,
    },
    latestBlogItem: {
      id: "Asasdasdasd",
      tags: ["tag1", "tag2", "tag3"],
      title: "제목입니다~~",
      contents:
        "모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의…",
      images: [
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
      ],
      likeCnt: 5,
      commentCnt: 12,
      iLiked: false,
      createdAt: "2022-03-27T14:42:53.532Z",
    },
  },
];

export default function CodingUsMain(props: ICodingUsMainProps) {
  const { moveToPage } = useMoveToPage();
  const [blogItems, setBlogItems] = useState<ICodingUsBlogCardProps[]>(new Array(8).fill(0).map(_ => {
    return {
      images: ["https://source.unsplash.com/random"],
      stacks: ["JAVA"],
      title: "비전공자를 위한 개발자 취업 올인원 가이드",
      content: "모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도…",
      writer: "작성자",
      likeCnt: 10,
      commentCnt: 30,
      createdAt: "2022-02-07T14:42:53.532Z",
      isLike: true,
    }
  }))
  const onClickItem = (id: string) => () => {};
  const onClickFollow = (id: string) => () => {};
  const onClickLike = (id: string) => () => {};
  return (
    <CodingUsLayout
      children={
        <CodingUsMainUI
          moveToPage={moveToPage}
          onClickItem={onClickItem}
          onClickFollow={onClickFollow}
          onClickLike={onClickLike}
          bestUserItems={bestUserItems}
          blogItems={blogItems}
        />
      }
    ></CodingUsLayout>
  );
}
