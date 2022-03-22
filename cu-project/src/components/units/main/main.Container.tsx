import { notification } from "antd";
import "antd/dist/antd.css";
import { useEffect } from "react";
import { MainPageProps } from "../../../commons/types/types";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import MainUI from "./main.Presenter";
import {} from "./main.Queries";

export default function Main(props: MainPageProps) {
  const { moveToPage } = useMoveToPage();

  const openNotification = (placement) => {
    notification.info({
      message: `ㅎㅇ`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  useEffect(() => {
    () => openNotification("bottomRight");
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <button
        onClick={() => openNotification("bottomRight")}
        style={{ display: "none" }}
      >
        bottomRight
      </button>
      <MainUI settings={settings} moveToPage={moveToPage} />
    </>
  );
}
