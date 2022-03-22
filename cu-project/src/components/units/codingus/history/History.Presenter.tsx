import Color from "../../../../commons/styles/color";
import Blank from "../../../commons/Blank";
import Label01 from "../../../commons/Label/Label01";
import * as S from "./History.Style";
import { v4 as uuidV4 } from "uuid";
interface IHistoryProps {
  historyData: Object;
  title: string;
}

export default function CodingUsHistoryUI(props: IHistoryProps) {
  const printItems = () => {
    const items = [];
    for (const [key, val] of Object.entries(props.historyData)) {
      items.push(
        <S.HistoryItem key={uuidV4()}>
          <S.Top>
            <Label01
              color={Color.medium}
              weight="700"
              size="24px"
              value={key}
              padding="0px"
            />
            <Blank width="13px" />
            <Label01
              color={Color.medium}
              weight="700"
              size="24px"
              value={">"}
              padding="0px"
            />
          </S.Top>
          <Blank height="32px" />
          <S.Bottom>
            <Label01 color={Color.dark} size="36px" value={val} padding="0px" />
          </S.Bottom>
        </S.HistoryItem>
      );
    }
    return items;
  };

  return (
      <S.HistoryWrapper>
        <Label01
          size="24px"
          weight="700"
          value={props.title}
          padding="0px"
        />
        <Blank height="29px" />
        <S.HistoryItems>{printItems()}</S.HistoryItems>
      </S.HistoryWrapper>
  );
}
