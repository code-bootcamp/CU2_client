import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
import { ChangeEvent } from "react";

// #region Commons
export interface ILoginUIProps {}
export interface ILoginProps {}

export interface IRegisterUIProps {}
export interface IRegisterProps {}

export interface ISearchUIProps {}
export interface ISearchProps {}
// #endregion

// #region CodingUs
export interface ICodingUsBlogProps {}
export interface ICodingUsBlogUIProps {}

export interface ICodingUsMainProps {}
export interface ICodingUsMainUIProps {
    moveToPage: (page: string) => void;
}

export interface ICodingUsStackProps {}
export interface ICodingUsStackUIProps {}

export interface ICodingUsRankProps {}
export interface ICodingUsRankUIProps {}
// #endregion

// #region CoachingUs
export interface ICoachingUsLandingProps {}
export interface ICoachingUsLandingUIProps {
  corList: string[];
  onChangeCheckBox: (event: CheckboxChangeEvent) => void;
}

export interface ICoachingUsMainProps {}
export interface ICoachingUsMainUIProps {}

export interface ICoachingUsCommentsProps {}
export interface ICoachingUsCommentsUIProps {}

export interface ICoachingUsProfileProps {}
export interface ICoachingUsProfileUIProps {}

export interface ICoachingUsQuestionProps {}
export interface ICoachingUsQuestionUIProps {}
// #endregion

// #region MyPage
export interface IMyPageProps {}
export interface IMyPageUIProps {}
// #endregion
