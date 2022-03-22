import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { IPage } from "../../components/commons/hooks/useMoveToPage";

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
  moveToPage: (page: IPage) => () => void;
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
export interface ICodingUsMainUIProps {
  moveToPage: (page: string) => void;
}

export interface ICodingUsStackProps {}
export interface ICodingUsStackUIProps {}

export interface ICodingUsRankProps {}
export interface ICodingUsRankUIProps {}
// #endregion

// #region CoachingUs
export interface ICoachingUsLandingProps {
  setIsFavorites: (props: boolean) => void;
}
export interface ICoachingUsLandingUIProps {
  corList: string[];
  onChangeCheckBox: (event: CheckboxChangeEvent) => void;
  onClickStart: () => void;
  favorList: (string | undefined)[];
  setIsFavorites: (props: boolean) => void;
}

export interface ICoachingUsMainProps {}
export interface ICoachingUsMainUIProps {}

// #region CoachingUs - coachescard
export interface ICoachingUsCoachesCardProps {}
export interface ICoachingUsCoachesCardUIProps {
  coachesList: {
    id: number;
    corName: string;
    subCorName: string;
    profile: {
      picture: string;
      name: string;
      tags: string[];
      followers: number;
      score: number;
    };
  }[];
  moveToPage: (page: string) => () => void;
}

// #region CoachingUs - columnscard
export interface ICoachingUsColumnsCardProps {}
export interface ICoachingUsColumnsCardUIProps {
  columnList: {
    id: number;
    title: string;
    contents: string;
    picture: string;
  }[];
  // moveToPage: (page: string) => () => void;
}

// #region CoachingUs - reccoachcard
export interface ICoachingUsRecCoachCardProps {}
export interface ICoachingUsRecCoachCardUIProps {
  recommendCoachList: {
    id: number;
    corName: string;
    subCorName: string;
    profile: {
      picture: string;
      name: string;
      tags: string[];
      followers: number;
      score: number;
    };
  }[];
}

// #region CoachingUs - navbar

export interface ICoachingUsNavbarProps {}
export interface ICoachingUsNavbarUIProps {
  currentPath: string;
  moveToPage: (page: string) => () => void;
}
export interface ICurrentPathProps {
  isCurrent: boolean;
}

export interface ICoachingUsCommentsProps {}
export interface ICoachingUsCommentsUIProps {}

export interface ICoachingUsProfileProps {}
export interface ICoachingUsProfileUIProps {}

export interface ICoachingUsQuestionProps {}
export interface ICoachingUsQuestionUIProps {}
// #endregion

// #region MyPage
export interface IMyPageProps {}
export interface IMyPageUIProps {
  moveToPage: (page: IPage) => () => void;
  onClickModal: () => void;
  isModal: boolean;
}
export interface IMyPageMenuUIProps {
  isCoach: boolean;
  moveToPage: (page: IPage) => () => void;
}
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
