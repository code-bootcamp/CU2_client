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
} from "react";
import { Editor } from "@toast-ui/react-editor";

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
  sortedBlogList: ICodingUsBlogCardProps[];
  onToggleSortGubun: (_: MouseEvent<HTMLDivElement>) => void;
  isSortByPopular: boolean;
}
export interface ICodingUsBlogWriteProps {}
export interface ICodingUsBlogWriteUIProps {
  editorRef: RefObject<Editor>;
  tags: string[];
  setTags: (tags: React.SetStateAction<string[]>) => void;
  setStack: (tags: React.SetStateAction<string>) => void;
  onClickExit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface ICodingUsMainProps {}
export interface ICodingUsMainUIProps {
  moveToPage: (page: string) => void;
  bestUserItems: any[];
  blogItems: ICodingUsBlogCardProps[];
  bestQuestions: any[];
  onClickItem: (id: string) => () => void;
  onClickFollow: (id: string) => () => void;
  onClickLike: (id: string) => () => void;
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
  waitingCnt: number;
  myWaitingCnt: number;
}
export interface IWatingItemProps {
  data: {
    stack: string;
    tags?: string[];
    title: string;
    images?: string[];
    commentCnt: number;
    createdAt: string;
  };
  onClickAnswer: () => void;
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
  width?: number;
  height?: number;
  image?: string;
  title?: string;
  contents?: string;
  writer: string;
  isQuestion?: boolean;
  createdAt: string;
  goodCnt?: number;
  badCnt?: number;
  isGood?: boolean;
  isBad?: boolean;
  onClickBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (id: string) => () => void;
  onClickEditSubmit: (id: string) => () => void;
  editValue: string;
  setEditValue: Dispatch<SetStateAction<string>>;
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
  rankingInfos: IRankingInfo[];
  myRankingInfo: IRankingInfo;
  moveToPage: (page: string) => () => void;
  gubun: string;
  onClickPeriodGubun: (gubun: string) => () => void;
  onLoadMore: () => void;
  onClickMyPage: (userId: string) => () => void;
}

// #endregion

// #region CoachingUs
export interface ICoachingUsLandingProps {
  setIsFavorites: (props: boolean) => void;
}
export interface ICoachingUsLandingUIProps {
  corList: string[];
  onChangeCheckBox: (event: MouseEvent) => void;
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
export interface IMyPageMenuUIProps {
  isCoach: boolean;
  moveToPage: (page: string) => () => void;
  getIsCurrentPage: (page: string) => boolean;
}
// #endregion

// #region MainPage
export interface MainPageProps {}
export interface MainPageUIProps {
  moveToPage: (page: string) => () => void;
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
// #endregion
