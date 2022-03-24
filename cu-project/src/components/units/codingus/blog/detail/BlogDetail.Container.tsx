import { useEffect, useState } from "react";
import TextViewer01 from "../../../../commons/TextViewer/TextViewer01";

export default function CodingUsBlogDetail() {
  const [contents, setContents] = useState("");

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TextViewer01
        width={"100%"}
        height={"100%"}
        value={contents}
      />
    </div>
  );
}
