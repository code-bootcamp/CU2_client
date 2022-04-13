import { useQuery } from "@apollo/client";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { MainPageProps } from "../../../commons/types/types";
import MainUI from "./main.Presenter";
import {
  FETCH_COACH_USER_LIST,
  FETCH_OTHER_BLOG_ORDER_BY_LIKE_ALL,
  FETCH_OTHER_STACK_ORDER_BY_LIKE,
  FETCH_QUESTION_LIST,
  FETCH_RECOMMEND_COLUM_LIST,
  FETCH_USER_ORDER_BY_SCORE,
} from "./main.Queries";

export default function Main(props: MainPageProps) {
  const router = useRouter();
  const { data: blogData } = useQuery(FETCH_OTHER_BLOG_ORDER_BY_LIKE_ALL);
  const { data: stackData } = useQuery(FETCH_OTHER_STACK_ORDER_BY_LIKE);
  const { data: commentData } = useQuery(FETCH_QUESTION_LIST);
  const { data: columnData } = useQuery(FETCH_RECOMMEND_COLUM_LIST);
  const { data: rankData } = useQuery(FETCH_USER_ORDER_BY_SCORE);
  const { data: coachData } = useQuery(FETCH_COACH_USER_LIST);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const onClickSearch = (event: { target: HTMLInputElement }) => {
    router.push({
      pathname: `/search/`,
      query: {
        category: "Total",
        keyword: String(event.target.id),
      },
    });
  };

  const responsiveSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <MainUI
        coachData={coachData}
        rankData={rankData}
        columnData={columnData}
        commentData={commentData}
        blogData={blogData}
        stackData={stackData}
        settings={settings}
        responsiveSettings={responsiveSettings}
        onClickSearch={onClickSearch}
      />
    </>
  );
}
