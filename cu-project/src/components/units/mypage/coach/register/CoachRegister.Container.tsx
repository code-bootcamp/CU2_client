import { useCallback, useState } from "react";
import CoachRegisterUI from "./CoachRegister.Presenter";

export default function CoachRegister(props) {
  const [hashtag, setHashtag] = useState<string | "">("");
  const [hashArr, setHashArr] = useState<string[] | []>([]);
  const [hashState, setHashState] = useState("해시태그 입력");

  // if (hashArr.length > 2) {
  //   setHashState("");
  // }

  const onChangeHashtag = (event) => {
    setHashtag(event.target.value);
  };

  const onKeyUp = useCallback(
    (e) => {
      hashArr.length > 1 ? setHashState("") : setHashState("해시태그 입력");

      if (hashArr.length > 1) {
        alert("해시태그는 2개만 입력 가능합니다.");
        return;
      }

      if (process.browser) {
        const $HashWrapOuter = document.querySelector(".HashWrapOuter");
        const $HashWrapInner = document.createElement("div");
        $HashWrapInner.className = "HashWrapInner";

        /* 태그를 클릭 이벤트 관련 로직 */
        $HashWrapInner.addEventListener("click", () => {
          $HashWrapOuter?.removeChild($HashWrapInner);
          console.log($HashWrapInner.innerHTML);
          console.log(hashArr);
          setHashArr(
            hashArr.filter(
              (el) =>
                el !==
                String($HashWrapInner.innerHTML).split("#")[1].split("<")[0]
            )
          );
        });

        /* enter 키 코드 :13 */
        if (e.keyCode === 13 && e.target.value.trim() !== "") {
          // console.log("Enter Key 입력됨!", e.target.value);
          $HashWrapInner.innerHTML = "#" + e.target.value;
          $HashWrapOuter?.appendChild($HashWrapInner);
          setHashArr((hashArr) => [...hashArr, hashtag]);
          setHashtag("");
        }
      }
    },
    [hashtag, hashArr]
  );

  return (
    <CoachRegisterUI
      isEdit={props.isEdit}
      hashtag={hashtag}
      hashState={hashState}
      onChangeHashtag={onChangeHashtag}
      onKeyUp={onKeyUp}
    />
  );
}
