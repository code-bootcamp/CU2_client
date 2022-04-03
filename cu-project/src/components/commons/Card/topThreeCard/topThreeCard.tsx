import * as S from "./topThreeCard.Style";
import { Avatar } from "antd";
import Label01 from "../../Label/Label01";
import Blank from "../../Blank";
import { IUser } from "../../../../commons/types/generated/types";
interface ICodingUsCardProps {
  width?: number;
  height?: number;
  data: IUser;
  ranking: number;
}

export default function TopThreeCard(props: ICodingUsCardProps) {
  return (
    <S.Wrapper
      width={props.width ? `${props.width}px` : "387px"}
      height={props.height ? `${props.height}px` : "300px"}
    >
      <S.Image src={`/${props.ranking}-place-medal.png`}></S.Image>
      <S.UserWrapper>
        <Avatar
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: "50%",
            padding: "5px",
            width: "120px",
            height: "120px",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        />
        <Blank height="22px" />
        <Label01 value={props.data.nickname} />
        <Blank height="10px" />
        <Label01 value={`${String(props.data.score)} 점`} />
      </S.UserWrapper>
    </S.Wrapper>
  );
}
