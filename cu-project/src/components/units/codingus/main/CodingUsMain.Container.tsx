import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useStore from "../../../../commons/store/store";
import { IBlog, IQuery, IUser } from "../../../../commons/types/generated/types";
import { ICodingUsMainProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsMainUI from "./CodingUsMain.Presenter";
import { FETCH_BEST_USER_AND_BLOG } from "./CodingUsMain.Queries";

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

export const dummyData = {
  id: "0c35241b-6f7e-4de8-94b8-30203974aaa8",
  title: "test",
  contents: "test",
  blogtag: [
    {
      tag: "asd",
    },
    {
      tag: "ddd",
    },
    {
      tag: "kkk",
    },
  ],
  blogcategorytag: [
    {
      tag: "JavaScript",
    },
  ],
  user: {
    nickname: "asd",
  },
  createAt: "2022-04-01T12:53:49.788Z",
  like: 1,
};

export default function CodingUsMain(props: ICodingUsMainProps) {
  const { data } = useQuery(FETCH_BEST_USER_AND_BLOG);
  const { moveToPage } = useMoveToPage();
  const [bestUserItems, setBestUserItems] = useState<{items: {
    user: IUser;
    Blog: IBlog;
  }}>();
  useEffect(() => {
    if (data) {
      data.fetchUserOrderbyscore.filter((el: IUser,idx: number) => idx < 3).map((el: IUser) => {
        
      })
    };
  }, []);

  const [bestQuestions, setBestQuestions] = useState<
    {
      tags?: string[];
      title?: string;
      contents?: string;
      writer?: string;
      likeCnt: number;
    }[]
  >(
    new Array(4).fill(0).map((el) => {
      return {
        tags: ["JavaScript", "CSS"],
        title: "국회는 의장 1인과 부의장 2인을 선출한다?",
        contents:
          "국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정 국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정 국국정 국국정 국국정 국국정 국국정 국",
        writer: "작성자",
        likeCnt: 10,
      };
    })
  );
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
          blogRecommendItems={new Array(8).fill(dummyData)}
          bestQuestions={bestQuestions}
          data={data}
        />
      }
    ></CodingUsLayout>
  );
}
