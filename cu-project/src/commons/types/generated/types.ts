export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IAnswer = {
  __typename?: 'Answer';
  amount: Scalars['Int'];
  contents: Scalars['String'];
  dislikecount: Scalars['Int'];
  id: Scalars['String'];
  likecount: Scalars['Int'];
  question: IQuestion;
  title: Scalars['String'];
};

export type IAnswerLike = {
  __typename?: 'AnswerLike';
  answer: IAnswer;
  id: Scalars['String'];
  idDislike: Scalars['Boolean'];
  isLike: Scalars['Boolean'];
  user: IUser;
};

export type IBlog = {
  __typename?: 'Blog';
  blogcategorytag: Array<IBlogCategoryTag>;
  blogtag: Array<IBlogTag>;
  contents: Scalars['String'];
  dislike: Scalars['Int'];
  id: Scalars['String'];
  like: Scalars['Int'];
  title: Scalars['String'];
  user: IUser;
};

export type IBlogCategoryTag = {
  __typename?: 'BlogCategoryTag';
  blog: Array<IBlog>;
  id: Scalars['String'];
  tag: Scalars['String'];
};

export type IBlogComment = {
  __typename?: 'BlogComment';
  blog: IBlog;
  contents: Scalars['String'];
  id: Scalars['String'];
  like: Scalars['Int'];
  user: IUser;
};

export type IBlogCommentLike = {
  __typename?: 'BlogCommentLike';
  blogcomment: IBlogComment;
  id: Scalars['String'];
  islike: Scalars['Boolean'];
  user: IUser;
};

export type IBlogLike = {
  __typename?: 'BlogLike';
  blog: IBlog;
  id: Scalars['String'];
  isdislike: Scalars['Boolean'];
  islike: Scalars['Boolean'];
  user: IUser;
};

export type IBlogTag = {
  __typename?: 'BlogTag';
  blog: Array<IBlog>;
  id: Scalars['String'];
  tag: Scalars['String'];
};

export enum IC_Like_Status {
  Column = 'COLUMN',
  Comment = 'COMMENT'
}

export type ICoachColumn = {
  __typename?: 'CoachColumn';
  contents: Scalars['String'];
  dislikecount: Scalars['Int'];
  hits: Scalars['Int'];
  id: Scalars['String'];
  likecount: Scalars['Int'];
  title: Scalars['String'];
  user: IUser;
};

export type ICoachProfile = {
  __typename?: 'CoachProfile';
  answerInitAmount?: Maybe<Scalars['Int']>;
  department: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  job: Scalars['String'];
  orgEmail: Scalars['String'];
  orgName: Scalars['String'];
  orgType: Scalars['String'];
  profileContents: Scalars['String'];
  profileTitle: Scalars['String'];
};

export type IColumnComment = {
  __typename?: 'ColumnComment';
  coachColumn: ICoachColumn;
  contents: Scalars['String'];
  id: Scalars['String'];
  likecount: Scalars['Int'];
  user: IUser;
};

export type IColumnLike = {
  __typename?: 'ColumnLike';
  coachColumn: ICoachColumn;
  columnComment: IColumnComment;
  id: Scalars['String'];
  idDislike: Scalars['Boolean'];
  isLike: Scalars['Boolean'];
  status: IC_Like_Status;
  user: IUser;
};

export type ICreateAnswerInput = {
  contents: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateCoachProfileInput = {
  answerInitAmount?: InputMaybe<Scalars['Int']>;
  department: Scalars['String'];
  image: Scalars['String'];
  job: Scalars['String'];
  orgEmail: Scalars['String'];
  orgName: Scalars['String'];
  orgType: Scalars['String'];
  profileContents: Scalars['String'];
  profileTitle: Scalars['String'];
};

export type ICreateColumnInput = {
  contents: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateQuestionInput = {
  QType?: InputMaybe<IQuestion_Field_Enum>;
  contents: Scalars['String'];
  title: Scalars['String'];
};

export type IMainStack = {
  __typename?: 'MainStack';
  C: Scalars['Int'];
  CSS: Scalars['Int'];
  Cpp: Scalars['Int'];
  Cshop: Scalars['Int'];
  Express: Scalars['Int'];
  Git: Scalars['Int'];
  Go: Scalars['Int'];
  HTML: Scalars['Int'];
  Java: Scalars['Int'];
  JavaScript: Scalars['Int'];
  Node_js: Scalars['Int'];
  Objective_C: Scalars['Int'];
  PHP: Scalars['Int'];
  Python: Scalars['Int'];
  R: Scalars['Int'];
  React_js: Scalars['Int'];
  Ruby: Scalars['Int'];
  SQL: Scalars['Int'];
  Spring: Scalars['Int'];
  Swift: Scalars['Int'];
  Vue_js: Scalars['Int'];
  etc: Scalars['Int'];
  id: Scalars['String'];
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  Blogcommenttoggle: IBlogCommentLike;
  DislikeColumnToggle: IColumnLike;
  LikeColumnToggle: IColumnLike;
  Stackdisliketoggle: IStackLike;
  Stackliketoggle: IStackLike;
  cancelAnswerOrder: IOrderHistory;
  cancelPointTransaction: IPointTransaction;
  checktoken: Scalars['Boolean'];
  createAnswerOrder: IOrderHistory;
  createBlog: IBlog;
  createBlogComment: IBlogComment;
  createBlogManyTag: Array<IStackTag>;
  createBlogManycategoryTag: Array<IBlogCategoryTag>;
  createBlogTag: IStackTag;
  createBlogcategoryTag: IBlogCategoryTag;
  createCoachAnswer: IAnswer;
  createCoachProfile: IUser;
  createCoachQuestion: IQuestion;
  createColumn: ICoachColumn;
  createColumnComment: IColumnComment;
  createPointTransaction: IPointTransaction;
  createStack: IStack;
  createStackComment: IStackComment;
  createUser: IUser;
  deleteBlog: Scalars['String'];
  deleteBlogComment: Scalars['Boolean'];
  deleteBlogTag: IStackTag;
  deleteBlogcategoryTag: IBlogCategoryTag;
  deleteCoachAnswer: Scalars['Boolean'];
  deleteCoachProfile: Scalars['Boolean'];
  deleteCoachQuestion: Scalars['Boolean'];
  deleteColumn: Scalars['Boolean'];
  deleteColumnComment: Scalars['Boolean'];
  deleteStack: Scalars['String'];
  deleteStackComment: IStackComment;
  deleteUser: Scalars['Boolean'];
  deletemyBlog: Scalars['String'];
  deletemyBlogComment: Scalars['Boolean'];
  dislikeAnswerToggle: IAnswerLike;
  dislikeBlogtoggle: IBlogLike;
  increaseColumnHit: ICoachColumn;
  likeAnswerToggle: IAnswerLike;
  likeBlogtoggle: IBlogLike;
  login: Scalars['String'];
  logout: Scalars['String'];
  minususerscore: IUser;
  plususerscore: IUser;
  resotreAccessToken: Scalars['String'];
  sendTokenTOSMS: Scalars['String'];
  updateBlog: IBlog;
  updateBlogComment: IBlogComment;
  updateBlogcategorytag: Array<IBlogCategoryTag>;
  updateBlogtag: Array<IStackTag>;
  updateCoachAnswer: IAnswer;
  updateCoachProfile: IUser;
  updateCoachQuestion: IQuestion;
  updateColumn: ICoachColumn;
  updateColumnComment: IColumnComment;
  updateStack: IStack;
  updateStackComment: IStackComment;
  updateUser: IUser;
  uploadStackFile: Array<Scalars['String']>;
  uploadblogFile: Array<Scalars['String']>;
  usernulliddelete: Scalars['Boolean'];
};


export type IMutationBlogcommenttoggleArgs = {
  blogcommentid: Scalars['String'];
};


export type IMutationDislikeColumnToggleArgs = {
  columnId: Scalars['String'];
};


export type IMutationLikeColumnToggleArgs = {
  columnId: Scalars['String'];
};


export type IMutationStackdisliketoggleArgs = {
  stackid: Scalars['String'];
};


export type IMutationStackliketoggleArgs = {
  stackid: Scalars['String'];
};


export type IMutationCancelAnswerOrderArgs = {
  answerId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCancelPointTransactionArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationChecktokenArgs = {
  phonenumber: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateAnswerOrderArgs = {
  answerId: Scalars['String'];
};


export type IMutationCreateBlogArgs = {
  blogcategorytag: Array<Scalars['String']>;
  blogtag: Array<Scalars['String']>;
  contents: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationCreateBlogCommentArgs = {
  blogid: Scalars['String'];
  contents: Scalars['String'];
};


export type IMutationCreateBlogManyTagArgs = {
  stacktag: Array<Scalars['String']>;
};


export type IMutationCreateBlogManycategoryTagArgs = {
  blogcategorytag: Array<Scalars['String']>;
};


export type IMutationCreateBlogTagArgs = {
  stacktag: Scalars['String'];
};


export type IMutationCreateBlogcategoryTagArgs = {
  blogcategorytag: Scalars['String'];
};


export type IMutationCreateCoachAnswerArgs = {
  createAnswerInput: ICreateAnswerInput;
  questionId: Scalars['String'];
};


export type IMutationCreateCoachProfileArgs = {
  createProfileInput: ICreateCoachProfileInput;
};


export type IMutationCreateCoachQuestionArgs = {
  coachId: Scalars['String'];
  createQuestionInput: ICreateQuestionInput;
};


export type IMutationCreateColumnArgs = {
  createColumnInput: ICreateColumnInput;
};


export type IMutationCreateColumnCommentArgs = {
  columnId: Scalars['String'];
  contents: Scalars['String'];
};


export type IMutationCreatePointTransactionArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationCreateStackArgs = {
  contents: Scalars['String'];
  stacktag: Array<Scalars['String']>;
  title: Scalars['String'];
};


export type IMutationCreateStackCommentArgs = {
  contents: Scalars['String'];
  stackid: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phonenumber: Scalars['String'];
};


export type IMutationDeleteBlogArgs = {
  blogid: Scalars['String'];
};


export type IMutationDeleteBlogCommentArgs = {
  blogcommentid: Scalars['String'];
};


export type IMutationDeleteBlogTagArgs = {
  stacktag: Scalars['String'];
};


export type IMutationDeleteBlogcategoryTagArgs = {
  blogcategorytag: Scalars['String'];
};


export type IMutationDeleteCoachAnswerArgs = {
  answerId: Scalars['String'];
};


export type IMutationDeleteCoachQuestionArgs = {
  questionId: Scalars['String'];
};


export type IMutationDeleteColumnArgs = {
  columnId: Scalars['String'];
};


export type IMutationDeleteColumnCommentArgs = {
  columnId: Scalars['String'];
  commentId: Scalars['String'];
};


export type IMutationDeleteStackArgs = {
  blogid: Scalars['String'];
};


export type IMutationDeleteStackCommentArgs = {
  stackcommentid: Scalars['String'];
};


export type IMutationDeletemyBlogArgs = {
  blogid: Scalars['String'];
};


export type IMutationDeletemyBlogCommentArgs = {
  blogcommentid: Scalars['String'];
};


export type IMutationDislikeAnswerToggleArgs = {
  answerId: Scalars['String'];
};


export type IMutationDislikeBlogtoggleArgs = {
  blogid: Scalars['String'];
};


export type IMutationIncreaseColumnHitArgs = {
  columnId: Scalars['String'];
};


export type IMutationLikeAnswerToggleArgs = {
  answerId: Scalars['String'];
};


export type IMutationLikeBlogtoggleArgs = {
  blogid: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationMinususerscoreArgs = {
  score: Scalars['Float'];
};


export type IMutationPlususerscoreArgs = {
  score: Scalars['Float'];
};


export type IMutationSendTokenTosmsArgs = {
  phonenumber: Scalars['String'];
};


export type IMutationUpdateBlogArgs = {
  blogid: Scalars['String'];
  contents: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationUpdateBlogCommentArgs = {
  blogcommentid: Scalars['String'];
  blogid: Scalars['String'];
  contents: Scalars['String'];
};


export type IMutationUpdateBlogcategorytagArgs = {
  blogcategorytag: Scalars['String'];
  updateblogtag: Scalars['String'];
};


export type IMutationUpdateBlogtagArgs = {
  stacktag: Scalars['String'];
  updateblogtag: Scalars['String'];
};


export type IMutationUpdateCoachAnswerArgs = {
  answerId: Scalars['String'];
  updateAnswerInput: IUpdateAnswerInput;
};


export type IMutationUpdateCoachProfileArgs = {
  UpdateCoachInput: IUpdateCoachInput;
};


export type IMutationUpdateCoachQuestionArgs = {
  questionId: Scalars['String'];
  updateQuestionInput: IUpdateQuestionInput;
};


export type IMutationUpdateColumnArgs = {
  columnId: Scalars['String'];
  updateColumnInput: IUpdateColumnInput;
};


export type IMutationUpdateColumnCommentArgs = {
  commentId: Scalars['String'];
  contents: Scalars['String'];
};


export type IMutationUpdateStackArgs = {
  blogid: Scalars['String'];
  contents: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationUpdateStackCommentArgs = {
  contents: Scalars['String'];
  stackcommentid: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phonenumber: Scalars['String'];
};


export type IMutationUploadStackFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadblogFileArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IOrder_Status {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IOrderHistory = {
  __typename?: 'OrderHistory';
  amount: Scalars['Int'];
  answer: IAnswer;
  id: Scalars['String'];
  status: IOrder_Status;
  user: IUser;
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT',
  Pending = 'PENDING'
}

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  amount: Scalars['Int'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export enum IQuestion_Field_Enum {
  Norm = 'NORM',
  Portforlio = 'PORTFORLIO',
  Resume = 'RESUME'
}

export type IQuery = {
  __typename?: 'Query';
  coachAnsweredList: Array<IAnswer>;
  fetchAllBlogcomment: IStackComment;
  fetchAllUser: Array<IUser>;
  fetchBlogAll: Array<IBlog>;
  fetchBlogCommentorderby: Array<IBlogComment>;
  fetchBlogSearch: Array<IBlog>;
  fetchBlogcommentlike: Array<IBlogComment>;
  fetchBloglike: Array<IBlog>;
  fetchCoachQuestionList: Array<IQuestion>;
  fetchCoachUser: IUser;
  fetchCoachUserList: Array<IUser>;
  fetchColumnCommentList: Array<IColumnComment>;
  fetchColumnList: Array<ICoachColumn>;
  fetchColumnListWhatILike: Array<IColumnLike>;
  fetchDetailColumn: ICoachColumn;
  fetchHighHitColumnList: Array<ICoachColumn>;
  fetchHighHitColumnListArgs: Array<ICoachColumn>;
  fetchMyCoachInfo: IUser;
  fetchMyColumn: Array<ICoachColumn>;
  fetchMyColumnComment: Array<IColumnComment>;
  fetchMyPointHistory: Array<IPointTransaction>;
  fetchMyQuestionList: Array<IQuestion>;
  fetchQuestion: IQuestion;
  fetchRecommendColumnList: Array<ICoachColumn>;
  fetchRecommendColumnListArgs: Array<ICoachColumn>;
  fetchSearchedColumnList: Array<ICoachColumn>;
  fetchStack: Array<IStack>;
  fetchStackmylike: Array<IStack>;
  fetchUserOrderbylike: Array<IUser>;
  fetchUsersearch: Array<IUser>;
  fetchisnicknameuser: Scalars['Boolean'];
  fetchmainstack: Scalars['String'];
  fetchmyBlog: Array<IBlog>;
  fetchmyStack: Array<IStack>;
  fetchmyuser: IUser;
  fetchotherBlogorderbycreateAt: Array<IBlog>;
  fetchotherBlogorderbylikeAll: Array<IBlog>;
  fetchotherBlogorderbylikecreate: Array<IBlog>;
  fetchotherStackorderbycreateAt: Array<IStack>;
  fetchotherStackorderbylike: Array<IStack>;
  fetchuserbypage: Array<IUser>;
  goodEvalAnswerList: Array<IAnswer>;
  myCoachingListHasAnswer: Array<IAnswer>;
  stringReturn: Scalars['String'];
};


export type IQueryFetchAllBlogcommentArgs = {
  stackid: Scalars['String'];
};


export type IQueryFetchBlogCommentorderbyArgs = {
  blogid: Scalars['String'];
};


export type IQueryFetchBlogSearchArgs = {
  search: Scalars['String'];
};


export type IQueryFetchCoachUserArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchColumnCommentListArgs = {
  columnId: Scalars['String'];
};


export type IQueryFetchDetailColumnArgs = {
  columnId: Scalars['String'];
};


export type IQueryFetchHighHitColumnListArgsArgs = {
  itemcount: Scalars['Float'];
  pageNum: Scalars['Float'];
};


export type IQueryFetchQuestionArgs = {
  questionId: Scalars['String'];
};


export type IQueryFetchRecommendColumnListArgsArgs = {
  itemcount: Scalars['Float'];
  pageNum: Scalars['Float'];
};


export type IQueryFetchSearchedColumnListArgs = {
  search: Scalars['String'];
};


export type IQueryFetchUsersearchArgs = {
  search: Scalars['String'];
};


export type IQueryFetchisnicknameuserArgs = {
  nickname: Scalars['String'];
};


export type IQueryFetchuserbypageArgs = {
  page?: InputMaybe<Scalars['Float']>;
  perpage?: InputMaybe<Scalars['Float']>;
};


export type IQueryGoodEvalAnswerListArgs = {
  itemCount: Scalars['Float'];
};

export type IQuestion = {
  __typename?: 'Question';
  QType: IQuestion_Field_Enum;
  contents: Scalars['String'];
  fromUser: IUser;
  id: Scalars['String'];
  title: Scalars['String'];
  toCoach: IUser;
};

export enum IRole {
  Admin = 'ADMIN',
  Coach = 'COACH',
  User = 'USER'
}

export type IStack = {
  __typename?: 'Stack';
  contents: Scalars['String'];
  dislike: Scalars['Int'];
  id: Scalars['String'];
  like: Scalars['Int'];
  stacktag: Array<IStackTag>;
  title: Scalars['String'];
  user: IUser;
};

export type IStackComment = {
  __typename?: 'StackComment';
  contents: Scalars['String'];
  dislike: Scalars['Int'];
  id: Scalars['String'];
  like: Scalars['Int'];
  stack: IStack;
  user: IUser;
};

export type IStackLike = {
  __typename?: 'StackLike';
  id: Scalars['String'];
  islike: Scalars['Boolean'];
  stack: IStack;
  user: IUser;
};

export type IStackTag = {
  __typename?: 'StackTag';
  id: Scalars['String'];
  stack: Array<IStack>;
  tag: Scalars['String'];
};

export type IUpdateAnswerInput = {
  amount?: InputMaybe<Scalars['Int']>;
  contents?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateCoachInput = {
  answerInitAmount?: InputMaybe<Scalars['Int']>;
  department: Scalars['String'];
  image: Scalars['String'];
  job: Scalars['String'];
  profileContents: Scalars['String'];
  profileTitle: Scalars['String'];
};

export type IUpdateColumnInput = {
  contents?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateQuestionInput = {
  Qtype?: InputMaybe<IQuestion_Field_Enum>;
  contents: Scalars['String'];
  title: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  coachInterest: Scalars['String'];
  coachProfile: ICoachProfile;
  codeInterest: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  mainstack: IMainStack;
  name: Scalars['String'];
  nickname: Scalars['String'];
  phonenumber?: Maybe<Scalars['String']>;
  point: Scalars['Int'];
  role: IRole;
  score: Scalars['Int'];
  user: IMainStack;
};
