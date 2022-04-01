import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { IconType } from "react-icons";
import Blank from "../../Blank";
export const Button = styled.button`
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #dbdbdb;

  :hover {
    background-color: black;
    color: white;
  }
`;

interface IButtonProps {
  value: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  padding?: string;
  icon?: IconType;
  iconSize?: number;
}
export default function Button01(props: IButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      style={{ padding: props.padding ? props.padding : "12px 30px 12px 30px" }}
    >
      {props.icon && (
        <props.icon
          fontSize={`${props.iconSize ? props.iconSize + 4 : 22}px`}
        />
      )}
      <Blank width="14px" />
      {props.value}
    </Button>
  );
}
