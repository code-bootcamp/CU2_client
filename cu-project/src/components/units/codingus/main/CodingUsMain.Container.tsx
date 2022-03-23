import { ICodingUsMainProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CodingUsLayout from "../layout/CodingUsLayout";
import CodingUsMainUI from "./CodingUsMain.Presenter";
import {} from "./CodingUsMain.Queries";
export default function CodingUsMain(props: ICodingUsMainProps) {
  const { moveToPage } = useMoveToPage();

  return (
    <CodingUsLayout
      children={<CodingUsMainUI moveToPage={moveToPage} />}
    ></CodingUsLayout>
  );
}
