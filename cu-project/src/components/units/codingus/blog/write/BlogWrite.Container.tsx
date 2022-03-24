import { ICodingUsBlogWriteProps } from "../../../../../commons/types/types";
import CodingUsBlogWriteUI from "./BlogWrite.Presenter";
import {} from "./BlogWrite.Queries";
import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
export default function CodingUsBlogWrite(props: ICodingUsBlogWriteProps) {
  const ref = useRef<Editor>(null);
  return <CodingUsBlogWriteUI ref={ref}/>;
}
