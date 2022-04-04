import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  ReactChild,
  RefObject,
  SetStateAction,
  KeyboardEvent,
} from "react";
import { Editor } from "@toast-ui/react-editor";


import { RadioChangeEvent } from "antd";
import { IBlog, IStack, IUser } from "./generated/types";


export interface ILayoutProps {
  children: ReactChild;
}

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
  moveToPage: (page: string) => () => void;
}
export interface ILoginProps {}

export interface IRegisterUIProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickRegister: () => void;
  onClickGetAuthNum: (data: FormValues) => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  phone: string;
  isToken: boolean;
  codeRef: RefObject<HTMLInputElement>;
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

export interface ICodingUsLandingUIProps {
  corList: string[];
  onChangeCheckBox: (event: MouseEvent<HTMLElement>) => void;
  onClickStart: () => void;
  interestList: (string | undefined)[];
  setIsFavorites: (props: boolean) => void;
}

export interface ICodingUsSidebarProps {
  todayRanking: {
    prev: number;
    today: number;
  };
  totalRanking: {
    prev: number;
    today: number;
  };
  todayPercent: string;
  todayPoint: string;
  stacks: string[];
  userInfo?: {
    name: string;
    point: number;
  };
}

export interface ICodingUsBlogProps {}

export interface ICodingUsBlogCardProps {
  // graphQL Types 가져오면 수정할 예정
  images: string[];
  stacks: string[];
  title: string;
  content: string;
  writer: string;
  likeCnt: number;
  commentCnt: number;
  createdAt: string;
  isLike: boolean;
}
export interface ICodingUsBlogUIProps {
  onLoadMore: () => void;
  onToggleSortGubun: (_: MouseEvent<HTMLDivElement>) => void;
  blogList: { blog: IBlog; isLike: boolean }[];
  isOrderByPopular: boolean;
}
export interface ICodingUsBlogWriteProps {
  isEdit?: boolean;
  data?: IBlog | undefined;
}
export interface ICodingUsBlogWriteUIProps {
  isEdit: boolean;
  editorRef: RefObject<Editor>;
  tags: string[];
  data?: IBlog;
  setTags: (tags: React.SetStateAction<string[]>) => void;
  setStack: (tags: React.SetStateAction<string>) => void;
  onClickExit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStack: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  stack: string;
}
export interface ICodingUsMainProps {}
export interface ICodingUsMainUIProps {
  moveToPage: (page: string) => void;
  bestUserItems: { user: IUser; blog: IBlog }[];
  blogRecommendItems: IBlog[];
  bestQuestions: IStack[];
  onClickItem: (id: string) => () => void;
  onClickFollow: (id: string) => () => void;
  onClickLike: (id: string) => () => void;
  data: {
    fetchUserOrderbyscore: IUser;
    fetchBlogAll: IBlog;
  };
}

export interface ICodingUsBlogDetailUIProps {
  width?: string | number;
  height?: string | number;
  data: IBlog | undefined;
  onClickDelete: () => void;
  onClickEdit: () => void;
  index: string[];
  currentIndex: number;
  indexPositions?: number[];
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export interface ICodingUsCommentsProps {
  id: string;
  user: { name: string; image: string };
  cretedAt: string;
  isLiked: boolean;
  likeCnt: number;
  contents: string;
}

export interface ICodingUsQnAProps {}
export interface ICodingUsQnAUIProps {
  isMyQuestion: boolean;
  toogleIsMyQuestion: () => void;
  stackListOrderByLike: IStack[];
  stackListAll: IStack[];
  myStackList: IStack[];
  waitingCnt: number;
  myWaitingCnt: number;
}
export interface IWatingItemProps {
  data: IStack;
  isAnswered?: boolean;
}

export interface ICodingUsCardProps {
  width?: number;
  height?: number;
  image?: string;
  tags?: string[];
  title?: string;
  contents?: string;
  writer?: string;
}

export interface ICodingQuestionCardProps {
  isQuestion?: boolean;
  id?: string;
  width?: number;
  height?: number;
  tags: string[] | undefined;
  nickname: string | undefined;
  contents: string | undefined;
  title: string | undefined;
  like: number | undefined;
  dislike: number | undefined;
  createAt: string | undefined;
  // data?: IStack | IStackComment;
  onClickBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (id: string) => () => void;
  onClickEditSubmit: (id: string) => () => void;
  editValue: string;
  setEditValue: Dispatch<SetStateAction<string>>;
}

export interface ICodingUsQuestionUIProps {
  nickname?: string;
  onChangeInput: (
    gubun: string
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  inputs: {
    title: string;
    contents: string;
  };
  onChangeTags: (e: KeyboardEvent<HTMLInputElement>) => void
  onClickDeleteTags: (event: any) => void
  tags: string[];
}
export interface ICodingUsRankProps {}

export interface IRankingInfo {
  user: {
    name: string;
    image: string;
  };
  currInfo?: {
    ranking: number;
    point: number;
  };
  prevInfo?: {
    ranking: number;
    point: number;
  };
}
export interface ICodingUsRankUIProps {
  rankingInfos: IUser[] | undefined;
  myInfo: IUser | null | undefined;
  // gubun: string;
  // onClickPeriodGubun: (gubun: string) => () => void;
}
export interface ICodingUsRankingProps{
  rankingInfos: IUser[];
    myInfo: IUser | null;
  }
export interface ICogindUsRankingProps {
  height?: number;
  data?: IUser;
  ranking: number;
  isMyRanking: boolean;
}
// #endregion

// #region CoachingUs
export interface ICoachingUsLandingProps {
  setIsFavorites: (props: boolean) => void;
}
export interface ICoachingUsLandingUIProps {
  corList: string[];
  onChangeCheckBox: (event: MouseEvent<HTMLElement>) => void;
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

// #region CoachingUs - columnWrite
export interface ICoachingUsColumnWriteUIProps {
  editorRef: RefObject<Editor>;
  tags: string[];
  setTags: (tags: React.SetStateAction<string[]>) => void;
  onClickExit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}
// #endregion

// #region MyPage
export interface IMyPageProps {}
export interface IMyPageUIProps {}

export interface IUserBlogUIProps {
  data: {
    fetchmyBlog: {
      title: string;
      contents: string;
      like: number;
      createAt: number;
    };
  };
}

export interface IMyPageMenuUIProps {
  mainstack: {
    fetchmainstack: {};
  };
  data: {
    fetchmyuser: {
      role: string;
      nickname: string;
      point: number;
      mainstack: string;
      score: number;
    };
  };
  isModal: boolean;
  onClickModal: () => void;
  onClickMove: (path: string) => () => void;
}

export interface IUserQuestionsUI {
  data: {
    fetchmyStack: [
      {
        id: string;
        title: string;
        contents: string;
        like: number;
        length: number;
        user: {
          nickname: string;
        };
        stacktag: {
          tag: string;
        };
      }
    ];
  };
}

export interface IQuestionCardMyPage01 {
  id: string;
}

export interface ICoachPageMenuUIProps {
  userData: {
    fetchmyuser: {
      role: string;
      nickname: string;
      point: number;
      mainstack: string;
    };
  };
  data: {
    fetchCoachUser: {
      nickname: string;
      point: number;
      score: number;
    };
  };
  isModal: boolean;
  onClickModal: () => void;
  onClickMove: (path: string) => () => void;
}
export interface IUserUpdateUI {
  userData: {
    fetchmyuser: {
      email: string;
      name: string;
      nickname: string;
      phonenumber: string;
    };
  };
  isVerify: boolean;
  tokenResult: boolean;
  isToken: boolean;

  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNickName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCheckToken: () => void;
  onClickSendToken: () => void;
  onClickVerifyNicName: () => void;
  onClickUpdate: () => void;
  onClickMove: (path: string) => () => void;
  setPhone: Dispatch<SetStateAction<string>>;
}

export interface IUserPointUI {
  isModal: boolean;
  onClickModal: () => void;
}

export interface IUserRankingUI {
  onChangeDuration: (e: RadioChangeEvent) => void;
}
// #endregion

// #region MainPage
export interface MainPageProps {}
export interface MainPageUIProps {
  moveToPage: (page: string) => () => void;
  settings: {
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
  };
  blogSettings: {
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    arrows: boolean;
    nextArrow: any;
    prevArrow: any;
  };
  SampleNextArrow: any;

  responsiveSettings: {};
  blogData: {
    fetchotherBlogorderbylikeAll: {
      id: string;
      url: string;
      blogcategorytag: {
        tag: string;
      };
      title: string;
      contents: string;
      user: {
        nickname: string;
      };
      createAt: string;
      updatedat: string;
      like: number;
    };
  };
  stackData: {
    fetchotherStackorderbylike: IStack[];
  };
}

// #endregion
// #endregion
