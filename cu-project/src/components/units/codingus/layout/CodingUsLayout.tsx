import { ILayoutProps } from "../../../../commons/types/types";
import CodingUsSidebar from "../sidebar/Sidebar.Container";
import * as S from "./CodingUsLayout.Style";
export default function CodingUsLayout(props: ILayoutProps) {
  return (
    <S.Wrapper>
      <CodingUsSidebar />
      {props.children}
    </S.Wrapper>
  );
}
