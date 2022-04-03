import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import useStore from "../../../../commons/store/store";
import {
  IMutation,
  IMutationCreateCoachProfileArgs,
} from "../../../../commons/types/generated/types";
import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ConfirmModal from "../../../commons/Modal/ConfirmModal";
import CoachingUsCoachRegisterUI from "./CoachingUsCoachRegister.Presenter";
import { CREATE_COACH_PROFILE } from "./CoachingUsCoachRegister.Queries";

export default function CoachingUsCoachRegisterPage() {
  const router = useRouter();
  const { isCoach } = useAuth();

  const [createCoachProfile] = useMutation<
    Pick<IMutation, "createCoachProfile">,
    IMutationCreateCoachProfileArgs
  >(CREATE_COACH_PROFILE);

  const [coachProfile, setCoachProfile] = useState({
    orgEmail: "",
    orgName: "",
    job: "",
    department: "",
  });
  const [emailTextErr, setEmailTextErr] = useState(false);
  const [activateBtn, setActivateBtn] = useState(false);
  const userInfo = useStore((state) => state.userInfo);
  const [tags, setTags] = useState<string[]>([]);
  const [orgType, setOrgType] = useState("");
  const { moveToPage } = useMoveToPage();

  const onChangeTags = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (e.key === "Backspace" && e.currentTarget.value === "") {
      console.log(e.currentTarget.id);
      return setTags(tags.filter((_, i) => i + 1 !== tags.length));
    } else {
      if (tags.length > 1) {
        e.currentTarget.value = "";
        return alert("최대 두 개까지 입력 가능합니다.");
      } else {
        if (e.key === "Enter") {
          if (e.currentTarget.value === "") {
            setTags([...tags]);
            e.currentTarget.value = "";
          } else {
            setTags([...tags, e.currentTarget.value]);
            e.currentTarget.value = "";
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

  const onClickOrgType = (e) => {
    setOrgType(e.target.value);
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

  const coachRegisterBtn = async () => {
    setActivateBtn(true);

    if (
      checkEmail(coachProfile.orgEmail) &&
      coachProfile.orgName &&
      coachProfile.job &&
      coachProfile.department &&
      tags.length === 2 &&
      orgType
    ) {
      const variables = {
        createProfileInput: {
          ...coachProfile,
          image: "",
          orgType,
          profileContents: "",
          profileTitle: "",
          answerInitAmount: 1000,
        },
        stacktag: tags,
      };
      console.log("히히");
      const result = await createCoachProfile({ variables });
      console.log(result.data);
      router.push("/mypage/coach/portfolio/");

      if (!result.data) {
        alert("코치 등록 실패");
        return;
      }
    }
  };

  console.log(isCoach);

  return (
    <CoachingUsCoachRegisterUI
      onChangeTags={onChangeTags}
      onClickDeleteTags={onClickDeleteTags}
      onChangeCoachProfile={onChangeCoachProfile}
      tags={tags}
      setTags={setTags}
      coachProfile={coachProfile}
      onClickOrgType={onClickOrgType}
      orgType={orgType}
      moveToPage={moveToPage}
      coachRegisterBtn={coachRegisterBtn}
      emailTextErr={emailTextErr}
      activateBtn={activateBtn}
      userInfo={userInfo}
      isCoach={isCoach}
    />
  );
}
