import { MouseEvent } from "react";
import styled from "@emotion/styled";

const MainButton = styled.button`
  width: 164px;
  height: 53px;
  color: white;
  font-size: 24px;
  background-color: #e9345a;
  border: none;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;

interface IButtonProps {
  value: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function MyPageButton(props: IButtonProps) {
  return <MainButton onClick={props.onClick}>{props.value}</MainButton>;
}
