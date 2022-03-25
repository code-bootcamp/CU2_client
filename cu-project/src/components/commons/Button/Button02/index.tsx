import styled from "@emotion/styled";
import { MouseEvent } from "react";
import Color from "../../../../commons/styles/color";
import { IconType } from "react-icons";
import Blank from "../../Blank";
export const Button = styled.button`
  background: ${Color.main};
  border: 1px solid ${Color.main};
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

interface IButtonProps {
  value: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  padding?: string;
  icon?: IconType;
  iconSize?: number;
}
export default function Button02(props: IButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      style={{ padding: props.padding ? props.padding : "12px 30px 12px 30px" }}
    >
      {props.icon && <props.icon fontSize={`${props.iconSize ? props.iconSize + 4 : 22}px`}/>}
      <Blank width="14px" />
      {props.value}
    </Button>
  );
}
