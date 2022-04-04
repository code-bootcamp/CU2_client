import Color from "../../../../commons/styles/color";
import Blank from "../../../commons/Blank";
import Label01 from "../../../commons/Label/Label01";
import * as S from "./History.Style";
import { v4 as uuidV4 } from "uuid";
import {
  AiOutlineEdit,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineMessage,
  AiOutlineCheckCircle,
} from "react-icons/ai";
interface IHistoryProps {
  historyData: Object;
  title: string;
}

export default function CodingUsHistoryUI(props: IHistoryProps) {
  const printItems = () => {
    const items = [];
    const iconArr = [
      <AiOutlineEdit style={{width: "25px", height: "25px"}} key={"작성글"} />,
      <AiOutlineLike style={{width: "25px", height: "25px"}} key={"GOOD"} />,
      <AiOutlineDislike style={{width: "25px", height: "25px"}} key={"BAD"} />,
      <AiOutlineMessage style={{width: "25px", height: "25px"}} key={"채택"} />,
      <AiOutlineCheckCircle style={{width: "25px", height: "25px"}} key={"댓글"} />,
    ];
    for (const [key, val] of Object.entries(props.historyData)) {
      items.push(
        <S.HistoryItem key={uuidV4()}>
          <S.Top>
            {iconArr.filter((el) => el.key === key)}
            <Blank width="8px" />
            <Label01
              color={Color.medium}
              weight="700"
              size="18px"
              value={key}
              padding="0px"
            />
          </S.Top>
          <Blank height="32px" />
          <S.Bottom>
            <Label01 color={Color.dark} size="24px" value={val} padding="0px" />
          </S.Bottom>
        </S.HistoryItem>
      );
    }
    return items;
  };

  return (
    <S.HistoryWrapper>
      <Label01 size="24px" weight="700" value={props.title} padding="0px" />
      <Blank height="0px" />
      <S.HistoryItems>{printItems()}</S.HistoryItems>
    </S.HistoryWrapper>
  );
}
