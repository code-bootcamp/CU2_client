import { MainPageProps } from "../../../commons/types/types";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import MainUI from "./main.Presenter";
import {} from "./main.Queries";

export default function Main(props: MainPageProps) {
  const { moveToPage } = useMoveToPage();
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

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const blogSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const stackQnASettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const coachesSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <MainUI
      moveToPage={moveToPage}
      blogSettings={blogSettings}
      stackQnASettings={stackQnASettings}
      coachesSettings={coachesSettings}
      SampleNextArrow={SampleNextArrow}
      SamplePrevArrow={SamplePrevArrow}
    />
  );
}
