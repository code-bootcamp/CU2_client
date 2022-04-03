import { useQuery } from "@apollo/client";
import "antd/dist/antd.css";
import { MainPageProps } from "../../../commons/types/types";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import MainUI from "./main.Presenter";
import {
  FETCH_OTHER_BLOG_ORDER_BY_LIKE_ALL,
  FETCH_OTHER_STACK_ORDER_BY_LIKE,
} from "./main.Queries";

export default function Main(props: MainPageProps) {
  const { moveToPage } = useMoveToPage();
  const { data: blogData } = useQuery(FETCH_OTHER_BLOG_ORDER_BY_LIKE_ALL);
  const { data: stackData } = useQuery(FETCH_OTHER_STACK_ORDER_BY_LIKE);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

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
        blogData={blogData}
        stackData={stackData}
        settings={settings}
        responsiveSettings={responsiveSettings}
        moveToPage={moveToPage}
      />
    </>
  );
}
