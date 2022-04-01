import { MouseEvent, HTMLAttributes } from "react";
interface ILabelProps {
  weight?: number | string;
  size?: string;
  color?: string;
  value: string;
  attr?: HTMLAttributes<HTMLDivElement>;
  padding?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  textAlign?: "left" | "right" | "center";
}

export default function Label01(props: ILabelProps) {
  return (
    <div
      {...props.attr}
      style={{
        color: props.color ?? "black",
        fontWeight: props.weight ?? "normal",
        fontSize: props.size ?? "25px",
        padding: props.padding ?? "0px 0px",
        textAlign: props.textAlign ?? "left",
        display: "table-cell",
        verticalAlign: "middle"
      }}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}
