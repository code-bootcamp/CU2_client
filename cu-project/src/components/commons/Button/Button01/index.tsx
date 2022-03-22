import { MouseEvent, HTMLAttributes } from "react";

interface IButtonProps {
  weight?: number | string;
  size?: string;
  color?: string;
  value: string;
  attr?: HTMLAttributes<HTMLButtonElement>;
  padding?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button01(props: IButtonProps) {
  return (
    <button
      {...props.attr}
      style={{
        color: props.color ?? "black",
        fontWeight: props.weight ?? "normal",
        fontSize: props.size ?? "25px",
        padding: props.padding ?? "10px 0px",
      }}
    >
      {props.value}
    </button>
  );
}
