import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Header from "./header/LayoutHeader.Container";
import { ILayoutProps } from "./layout.types";

const LayoutBody = styled.div`
  padding: 20px 0 0 0;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const HIDDEN_HEADERS = ["/"];
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {isHiddenHeader || <Header />}
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
