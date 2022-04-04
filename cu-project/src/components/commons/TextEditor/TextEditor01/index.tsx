import { Editor } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { RefObject } from "react";
import { IBlog } from "../../../../commons/types/generated/types";

const EditorUI = dynamic(() => import("./Editor/index"), {
  ssr: false,
});

interface ITextEditorProps {
  width: string | number;
  height: string | number;
  editorRef: RefObject<Editor>;
  data?: IBlog;
  isEdit?: boolean;
}
export default function TextEditor01(props: ITextEditorProps) {
  console.log(props);
  return (
    <div style={{ height: props.height, width: props.width }}>
      <EditorUI editorRef={props.editorRef} isEdit={props.isEdit} data={props.data}/>
    </div>
  );
}
