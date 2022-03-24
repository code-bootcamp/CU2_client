import { CSSProperties } from "react";

interface ILineProps {
  thickness?: number;
  type?: string;
  color?: string;
  margin?: number;
  style?: CSSProperties | undefined
}
export default function VerticalLine(props: ILineProps) {
  return (
    <div
      style={{
        height: "100%",
        border: `${props.thickness ?? 1}px ${props.type ?? "solid"} ${
          props.color ?? "#BDBDBD"
        }`,
        margin: props.margin ? `0px ${props.margin}px` : "0px 40px",
        ...props.style
      }}
    ></div>
  );
}
