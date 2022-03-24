import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";

const Editor = dynamic(() => import("./Editor/index"), {
  ssr: false,
});

interface ITextEditorProps {
  width: string | number;
  height: string | number;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
export default function TextEditor01(props: ITextEditorProps) {
  return (
    <div style={{ height: props.height, width: props.width }}>
      <Editor value={props.value} setValue={props.setValue} />
    </div>
  );
}
