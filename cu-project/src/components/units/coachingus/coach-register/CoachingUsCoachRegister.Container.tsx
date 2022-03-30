import { useCallback, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsCoachRegisterUI from "./CoachingUsCoachRegister.Presenter";

export default function CoachingUsCoachRegisterPage() {
  const [coachProfile, setCoachProfile] = useState({
    email: "",
    cor: "",
    subCorType: "",
    exp: "",
  });
  const [emailTextErr, setEmailTextErr] = useState(false);
  const [activateBtn, setActivateBtn] = useState(false);

  const [tags, setTags] = useState([]);
  const [corType, setCorType] = useState("");

  const { moveToPage } = useMoveToPage();

  const onChangeTags = (e) => {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (e.key === "Backspace" && e.target.value === "") {
      console.log(e.target.id);
      return setTags(tags.filter((_, i) => i + 1 !== tags.length));
    } else {
      if (tags.length > 1) {
        e.target.value = "";
        return alert("최대 네 개까지 입력 가능합니다.");
      } else {
        if (e.key === "Enter") {
          if (e.target.value === "") {
            setTags([...tags]);
            e.target.value = "";
          } else {
            setTags([...tags, e.target.value]);
            e.target.value = "";
          }
        }
      }
    }
  };

  const onChangeCoachProfile = (e) => {
    const { value, name } = e.target;
    setCoachProfile({
      ...coachProfile,
      [name]: value,
    });
  };

  const onClickDeleteTags = (e) => {
    setTags(tags.filter((_, i) => Number(e.target.id) !== i));
  };

  const onClickCorType = (e) => {
    setCorType(e.target.value);
  };

  const checkEmail = (emailForm) => {
    const email = emailForm;
    const exptext =
      /^([\w\\.\\_\\-])*[a-zA-Z0-9]+([\w\\.\\_\\-])*([a-zA-Z0-9])+([\w\\.\\_\\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
    if (exptext.test(email) === false) {
      setEmailTextErr(true);
      return false;
    } else {
      setEmailTextErr(false);
      return true;
    }
  };

  const coachRegisterBtn = () => {
    setActivateBtn(true);
    if (
      checkEmail(coachProfile.email) &&
      coachProfile.cor &&
      coachProfile.subCorType &&
      coachProfile.exp &&
      tags.length === 2 &&
      corType
    ) {
      // 회원가입 로직 작성 폼이 완성 됐을 때 실행 가능
      console.log("zz");
    }
  };
  return (
    <CoachingUsCoachRegisterUI
      onChangeTags={onChangeTags}
      onClickDeleteTags={onClickDeleteTags}
      onChangeCoachProfile={onChangeCoachProfile}
      tags={tags}
      setTags={setTags}
      coachProfile={coachProfile}
      onClickCorType={onClickCorType}
      corType={corType}
      moveToPage={moveToPage}
      coachRegisterBtn={coachRegisterBtn}
      emailTextErr={emailTextErr}
      activateBtn={activateBtn}
    />
  );
}
