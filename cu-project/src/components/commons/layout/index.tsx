import { ILayoutProps } from "./layout.types";
import styled from "@emotion/styled";
import Header from "./header/LayoutHeader.Container";

const LayoutBody = styled.div`
  padding: 50px 0;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
