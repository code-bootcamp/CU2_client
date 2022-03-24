import { useEffect, useState } from "react";
import TextEditor01 from "../../../../commons/TextEditor/TextEditor01";

export default function CodingUsBlogDetail() {
  const [contents, setContents] = useState("");

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TextEditor01
        width={"100%"}
        height={"100%"}
        value={contents}
        setValue={setContents}
      />
    </div>
  );
}
