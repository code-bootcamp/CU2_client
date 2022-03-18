import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

// #region Login && Register
export interface FormValues {
  name?: string;
  email?: string;
  password?: string;
  checkPassword?: string;
}

export interface ILoginUIProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickLogin: (data: FormValues) => void;
}
export interface ILoginProps {}

export interface IRegisterUIProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickRegister: (data: FormValues) => void;
}
export interface IRegisterProps {}

// #endregion

// #region Find
export interface IFindUIProps {}
export interface IFindProps {}
// #endregion

// #region Search
export interface ISearchUIProps {}
export interface ISearchProps {}
// #endregion

// #region CodingUs
export interface ICodingUsBlogProps {}
export interface ICodingUsBlogUIProps {}

export interface ICodingUsMainProps {}
export interface ICodingUsMainUIProps {}

export interface ICodingUsStackProps {}
export interface ICodingUsStackUIProps {}

export interface ICodingUsRankProps {}
export interface ICodingUsRankUIProps {}
// #endregion

// #region CoachingUs
export interface ICoachingUsCommentsProps {}
export interface ICoachingUsCommentsUIProps {}

export interface ICoachingUsMainProps {}
export interface ICoachingUsMainUIProps {}

export interface ICoachingUsProfileProps {}
export interface ICoachingUsProfileUIProps {}

export interface ICoachingUsQuestionProps {}
export interface ICoachingUsQuestionUIProps {}
// #endregion

// #region MyPage
export interface IMyPageProps {}
export interface IMyPageUIProps {}
// #endregion

// #region MainPage
export interface MainPageProps {}
export interface MainPageUIProps {
  blogSettings: {
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    arrows: boolean;
    nextArrow: any;
    prevArrow: any;
  };
  SampleNextArrow: any;
  SamplePrevArrow: any;
}

// #endregion
