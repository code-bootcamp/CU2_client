import { ICodingUsBlogWriteProps } from "../../../../../commons/types/types";
import CodingUsBlogWriteUI from "./BlogWrite.Presenter";
import {} from "./BlogWrite.Queries";
import { Editor } from "@toast-ui/react-editor";
import { useRef, useState } from "react";
export default function CodingUsBlogWrite(props: ICodingUsBlogWriteProps) {
  const ref = useRef<Editor>(null);
  const [tags, setTags] = useState<string[]>([])
  return <CodingUsBlogWriteUI ref={ref} tags={tags} setTags={setTags}/>;
}
