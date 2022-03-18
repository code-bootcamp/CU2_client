import { MainPageProps } from "../../../commons/types/types";
import MainUI from "./main.Presenter";
import {} from "./main.Queries";

export default function Main(props: MainPageProps) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
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

  return (
    <MainUI
      blogSettings={blogSettings}
      SampleNextArrow={SampleNextArrow}
      SamplePrevArrow={SamplePrevArrow}
    />
  );
}
