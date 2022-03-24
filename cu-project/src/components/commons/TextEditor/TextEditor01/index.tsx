import {Editor} from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import {  RefObject } from "react";

const EditorUI = dynamic(() => import("./Editor/index"), {
  ssr: false,
});

interface ITextEditorProps {
  width: string | number;
  height: string | number;
  ref: RefObject<Editor>;
}
export default function TextEditor01(props: ITextEditorProps) {
  return (
    <div style={{ height: props.height, width: props.width }}>
      <EditorUI ref={props.ref}/>
    </div>
  );
}
