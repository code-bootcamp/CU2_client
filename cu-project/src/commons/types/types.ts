import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
import { IPage } from "../../components/commons/hooks/useMoveToPage";
import { MouseEvent } from "react";
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

export interface ICodingUsBlogCardProps {
  // graphQL Types 가져오면 수정할 예정
  images: string[];
  stacks : string[];
  title : string;
  content : string;
  writer : string;
  likeCnt : number;
  commentCnt : number;
  createdAt : string;
  isLike : boolean;
}
export interface ICodingUsBlogUIProps {
  onLoadMore: () => void;
  sortedBlogList: ICodingUsBlogCardProps[];
  onToggleSortGubun: (_: MouseEvent<HTMLDivElement>) => void;
  isSortByPopular: boolean;
}

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
