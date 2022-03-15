import { ILayoutProps } from "./layout.types";

export default function Layout(props: ILayoutProps) {
  return <div>{props.children}</div>;
}
