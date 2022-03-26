import { useEffect, useState } from "react";
import { dummyMD } from "../dummy";
import CodingUsBlogDetailUI from "./BlogDetail.Presenter";

export default function CodingUsBlogDetail() {
  const [contents, setContents] = useState("");

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return <CodingUsBlogDetailUI contents={dummyMD} />;
}
