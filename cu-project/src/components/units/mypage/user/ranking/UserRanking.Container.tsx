import { RadioChangeEvent } from "antd";
import UserRankingUI from "./UserRanking.Presenter";

export default function UserRanking() {
  const onChangeDuration = (e: RadioChangeEvent) => {};

  return <UserRankingUI onChangeDuration={onChangeDuration} />;
}
