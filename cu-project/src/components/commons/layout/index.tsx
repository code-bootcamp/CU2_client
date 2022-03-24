import styled from "@emotion/styled";
import Header from "./header/LayoutHeader.Container";
import { ILayoutProps } from "./layout.types";

const LayoutBody = styled.div`
  padding: 30px 0 0 0;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
