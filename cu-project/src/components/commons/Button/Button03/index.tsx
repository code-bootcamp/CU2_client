import styled from "@emotion/styled";
import  { MouseEvent } from "react";
import { IconType } from "react-icons";
import Color from "../../../../commons/styles/color";
import Blank from "../../Blank";
export const Button = styled.button`
  border: 1px solid ${Color.light};
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${Color.light};
  background-color: ${Color.dark};
`;

interface IButtonProps {
  value: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  padding?: string;
  icon?: IconType;
  iconSize?: number;
}
export default function Button03(props: IButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      style={{ padding: props.padding ? props.padding : "12px 30px 12px 30px" }}
    >
      {props.icon && <props.icon fontSize={`${props.iconSize ? props.iconSize + 4 : 22}px`}/>}
      {props.icon && <Blank width="14px" />}
      {props.value}
    </Button>
  );
}
