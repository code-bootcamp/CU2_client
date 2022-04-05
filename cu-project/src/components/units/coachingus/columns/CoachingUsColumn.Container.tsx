import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useStore from "../../../../commons/store/store";
import { IBlog, IQuery } from "../../../../commons/types/generated/types";
import { useAuthCoach } from "../../../commons/hooks/useAuthCoach";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import {
  FETCH_BLOG_LIKE,
  FETCH_OTHER_BLOG_ORDERBY_CREATEAT,
  FETCH_OTHER_BLOG_ORDERBY_LIKE,
} from "../../codingus/blog/CodingUsBlog.Queries";
import CoachingUsColumnUI from "./CoachingUsColumn.Presenter";
import {
  FETCH_RECOMMEND_COLUMN_LIST,
  FETCH_COLUMN_LIST,
} from "./CoachingUsColumn.Queries";

export default function CoachingUsColumnPage() {
  const { isCoach } = useAuthCoach();
  const userInfo = useStore((state) => state.userInfo);
  const { data } = useQuery(FETCH_RECOMMEND_COLUMN_LIST);
  const [fetchBloglike, { data: bloglikeList }] =
    useLazyQuery<Pick<IQuery, "fetchBloglike">>(FETCH_BLOG_LIKE);
  const { data: totalColumns } = useQuery(FETCH_COLUMN_LIST);
  const { data: blogListOrderByCreatedAt } = useQuery<
    Pick<IQuery, "fetchotherBlogorderbycreateAt">
  >(FETCH_OTHER_BLOG_ORDERBY_CREATEAT);
  const { data: blogListOrderByLike } = useQuery<
    Pick<IQuery, "fetchotherBlogorderbylikeAll">
  >(FETCH_OTHER_BLOG_ORDERBY_LIKE);
  const [isOrderByPopular, setIsOrderByPopular] = useState(true);
  const [blogList, setBlogList] = useState<{ blog: IBlog; isLike: boolean }[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(0);
  const onToggleSortGubun = (_: MouseEvent<HTMLDivElement>) => {
    setIsOrderByPopular((prev) => !prev);
  };

  const updateBlogList = (isChanged?: boolean) => {
    const page = isChanged ? 0 : currentPage;

    if (
      !isChanged &&
      blogList.length ===
        blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt.length
    )
      return;

    if (!blogListOrderByLike || !blogListOrderByCreatedAt) return;
    let currentList = isOrderByPopular
      ? [...blogListOrderByLike?.fetchotherBlogorderbylikeAll]
      : [...blogListOrderByCreatedAt?.fetchotherBlogorderbycreateAt];
    currentList = currentList!.filter((_, idx) => idx < (page + 1) * 8);

    const result = currentList.map((blog) => {
      return {
        blog: blog,
        isLike:
          (bloglikeList?.fetchBloglike &&
            bloglikeList?.fetchBloglike.map(
              (like) => like.id === blog.id
            )[0]) ??
          false,
      };
    });
    setBlogList(result);
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const getBlogLike = async () => {
      await fetchBloglike;
    };
    if (userInfo) getBlogLike();
  }, []);

  const onLoadMore = () => {
    updateBlogList();
  };

  useEffect(() => {
    updateBlogList(isOrderByPopular);
  }, [isOrderByPopular]);

  const [totalColumn, setTotalColumn] = useState([]);

  const { moveToPage } = useMoveToPage();
  const columnBestList = data?.fetchRecommendColumnList.slice(0, 3);

  const columnList = totalColumns?.fetchColumnList;

  useEffect(() => {
    if (columnList) {
      setTotalColumn([...columnList?.slice(0, 10)]);
    }
  }, [totalColumns]);

  const url = [
    "https://media.vlpt.us/images/choigeon96/post/e543f16a-29ad-409b-bdf6-284b6c96a8c5/bear.png",
    "https://storage.googleapis.com/cucutoo-dev-bucket/axios.jpeg",
    "https://storage.googleapis.com/cucutoo-dev-bucket/redux.png",
  ];

  const columns = [
    {
      id: 0,
      title: "Zustand - 상태 관리 라이브러리",
      contents:
        "요즘 새롭게 떠오르고 있는 상태 관리 라이브러리인 Zustand를 사용해 봤다. 왜...",
      name: "최건",
      createdAt: "9시간 전",
    },
    {
      id: 1,
      title:
        "[React] ContextAPI를 사용한 Router 설정 + 타입에러(type error) 해결#2",
      contents:
        "바로 전 글에서 NextJS에서 ContextAPI를 사용해보는 시간을 가졌습니다. NextJS에서는 알겠는데, React에서는?",
      name: "김재민",
      createdAt: "2일전",
    },
    {
      id: 2,
      title: "[React] 디바운싱을 이용한 API 요청 #1",
      contents:
        "디바운싱은 언제 사용하면 좋을까요? 디바운싱은 사용자가 보내는 여러 요청들 중 마지막 요청만 보낼 수 있도록 기능을 구현할",
      name: "김태훈",
      createdAt: "5일전",
    },
  ];

  return (
    <CoachingUsColumnUI
      columnBestList={columnBestList}
      moveToPage={moveToPage}
      totalColumn={totalColumn}
      onLoadMore={onLoadMore}
      blogList={blogList}
      onToggleSortGubun={onToggleSortGubun}
      isOrderByPopular={isOrderByPopular}
      isCoach={isCoach}
      imgUrl={url}
      columns={columns}
    />
  );
}
