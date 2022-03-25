import dynamic from "next/dynamic";

const ViewerUI = dynamic(() => import("./Viewer/index"), {
  ssr: false,
});

interface ITextViewerProps {
  width: string | number;
  height: string | number;
  value: string;
}
export default function TextViewer01(props: ITextViewerProps) {
  console.log(props)
  return (
    <div style={{ height: props.height, width: props.width }}>
      <ViewerUI value={props.value}/>
    </div>
  );
}
