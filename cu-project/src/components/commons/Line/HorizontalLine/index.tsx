interface ILineProps {
  thickness?: number;
  type?: string;
  color?: string;
  margin?: number;
  width?: string | number;
}
export default function HorizontalLine(props: ILineProps) {
  return (
    <div
      style={{
        width: `${props.width ? props.width.toString() : "100%"}`,
        border: `${props.thickness ?? 1}px ${props.type ?? "solid"} ${
          props.color ?? "#BDBDBD"
        }`,
        margin: props.margin ? `${props.margin}px 0px` : "40px 0px",
      }}
    ></div>
  );
}
