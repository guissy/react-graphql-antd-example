type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * BigInt can represent values between -(2^53) + 1 and 2^53 - 1.
   */
  BigInt: any;
  /** The `Upload` scalar type represents a file upload promise that resolves an
   * object containing `stream`, `filename`, `mimetype` and `encoding`.
   */
  Upload: any;
};

export type Admin = {
  id: Scalars["Int"];
  email: Scalars["String"];
  mobile: Scalars["String"];
  password: Scalars["String"];
  trueName?: Maybe<Scalars["String"]>;
  gender: Gender;
  garden: Garden;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  roleVer: RoleVer;
  roleAuth: RoleAuth;
};

export type AdminInput = {
  id: Scalars["Int"];
};

export type AdminLoginResult = {
  admin: Admin;
  loginInfo: LoginInfo;
  authInfo: AuthInfo;
};

export type AdminPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Admin>;
};

export type AdwardPaper = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  kid: Kid;
  status?: Maybe<OnOffStatus>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type AdwardPaperInput = {
  id?: Maybe<Scalars["Int"]>;
};

export type AdwardPaperPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<AdwardPaper>;
};

export type Album = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  playType?: Maybe<PlayType>;
  thumb?: Maybe<Scalars["String"]>;
  thumbRaw?: Maybe<Scalars["String"]>;
  ageMin?: Maybe<Scalars["Int"]>;
  ageMax?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
  category?: Maybe<Category>;
  programs: Array<Program>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
};

export type AlbumInput = {
  id: Scalars["Int"];
};

export type AlbumPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Album>;
};

export type App = {
  id: Scalars["Int"];
  name: Scalars["String"];
  packageName: Scalars["String"];
  downloadUrl: Scalars["String"];
  logo: Scalars["String"];
  thumbRaw?: Maybe<Scalars["String"]>;
  version: Scalars["String"];
  pic1: Scalars["String"];
  pic2: Scalars["String"];
  pic3: Scalars["String"];
  pic4: Scalars["String"];
  about: Scalars["String"];
  from: AppFrom;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export enum AppFrom {
  Wosheng = "wosheng",
  Garden = "garden",
  Public = "public"
}

export type AppLink = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  scheme?: Maybe<Scalars["String"]>;
  sorting?: Maybe<Scalars["Int"]>;
  packageName?: Maybe<Scalars["String"]>;
  downloadUrl?: Maybe<Scalars["String"]>;
  isCp?: Maybe<Scalars["Boolean"]>;
};

export type AppPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<App>;
};

export type AuthInfo = {
  moduleNames: Array<Scalars["String"]>;
  routes: Array<Route>;
};

export type Banner = {
  id: Scalars["Int"];
  productCode: ProductCode;
  name: Scalars["String"];
  pic: Scalars["String"];
  link: Scalars["String"];
  status: OnOffStatus;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  sorting?: Maybe<Scalars["Int"]>;
};

export type BannerPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Banner>;
};

export type Book = {
  id: Scalars["Int"];
  name: Scalars["String"];
  thumb: Scalars["String"];
  grade?: Maybe<Grade>;
  bookType?: Maybe<BookType>;
  canScore?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Category>;
  units: Array<Unit>;
  press?: Maybe<Press>;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type BookInput = {
  id: Scalars["Int"];
};

export type BookPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Book>;
};

export enum BookType {
  K12 = "k12",
  Dubbing = "dubbing"
}

export type Cache = {
  key: Scalars["String"];
  value: Scalars["String"];
};

export type Category = {
  id?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
  sorting?: Maybe<Scalars["Int"]>;
  thumb?: Maybe<Scalars["String"]>;
  thumbRaw?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  garden?: Maybe<Garden>;
  type?: Maybe<CategoryType>;
  parent?: Maybe<Category>;
  children?: Maybe<Array<Maybe<Category>>>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  needUpdate?: Maybe<NeedUpdateItem>;
};

export type CategoryInput = {
  id: Scalars["Int"];
};

export enum CategoryType {
  Course = "course",
  Album = "album",
  Book = "book",
  K12 = "k12"
}

export type Chart = {
  items: Array<ChartItem>;
};

export type ChartGarden = {
  courses: Array<ChartValue>;
  gardens: Array<ChartValue>;
};

export type ChartItem = {
  name: Scalars["String"];
  data: Array<Scalars["Int"]>;
};

export type ChartValue = {
  name: Scalars["String"];
  value: Scalars["Int"];
};

export type Comment = {
  id: Scalars["Int"];
  content: Scalars["String"];
  pic?: Maybe<Scalars["String"]>;
  garden?: Maybe<Garden>;
  homework?: Maybe<Homework>;
  course?: Maybe<Course>;
  program?: Maybe<Program>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type CommentPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Comment>;
};

export type Course = {
  id?: Maybe<Scalars["Int"]>;
  thumb?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  garden?: Maybe<Garden>;
  text?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  sorting?: Maybe<Scalars["Int"]>;
  category?: Maybe<Category>;
  trainings: Array<Training>;
  comments: Array<Comment>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type CoursePageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Course>;
  all: Array<Course>;
};

export type Dashboard = {
  user?: Maybe<DashboardItem>;
  feedback?: Maybe<DashboardItem>;
  course?: Maybe<DashboardItem>;
  admin?: Maybe<DashboardItem>;
  issue?: Maybe<DashboardItem>;
  banner?: Maybe<DashboardItem>;
  screen?: Maybe<DashboardItem>;
  album?: Maybe<DashboardItem>;
  program?: Maybe<DashboardItem>;
  kid?: Maybe<DashboardItem>;
  device?: Maybe<DashboardItem>;
  garden?: Maybe<DashboardItem>;
  training?: Maybe<DashboardItem>;
  homeworkRecord?: Maybe<DashboardItem>;
  app?: Maybe<DashboardItem>;
};

export type DashboardItem = {
  total: Scalars["Int"];
  todo: Scalars["Int"];
};

export type DatePlan = {
  id: Scalars["Int"];
  name: Scalars["String"];
  teacher?: Maybe<Teacher>;
  timePlans: Array<TimePlan>;
  startDate: Scalars["Date"];
  endDate: Scalars["Date"];
  status?: Maybe<OnOffStatus>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type DatePlanInput = {
  id: Scalars["Int"];
};

export type DatePlanPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<DatePlan>;
};

export type Device = {
  id?: Maybe<Scalars["Int"]>;
  code?: Maybe<DeviceCode>;
  garden?: Maybe<Garden>;
  master?: Maybe<User>;
  kid?: Maybe<Kid>;
  inviteCode?: Maybe<Scalars["String"]>;
  loginDate?: Maybe<Scalars["Date"]>;
  familyUsers?: Maybe<Array<Maybe<FamilyUser>>>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  sn?: Maybe<Scalars["String"]>;
};

export enum DeviceCode {
  Bbl2 = "bbl2",
  Bbl3 = "bbl3",
  Unknown = "unknown"
}

export type DeviceLog = {
  id: Scalars["Int"];
  deviceOp: DeviceOp;
  version: Scalars["String"];
  ip: Scalars["String"];
  gardenCode: Scalars["String"];
  createdDate: Scalars["Date"];
};

export type DeviceLoginResult = {
  device: Device;
  loginInfo: LoginInfo;
};

export type DeviceLogPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<DeviceLog>;
};

export enum DeviceOp {
  Login = "login",
  GardenChange = "gardenChange",
  LauncherOta = "launcherOta",
  AppInstall = "appInstall",
  AppDownload = "appDownload",
  AppUninstall = "appUninstall",
  OsOta = "osOta",
  Other = "other"
}

export type DevicePageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Device>;
};

export type Exercise = {
  id: Scalars["Int"];
  name: Scalars["String"];
  questions: Array<Question>;
  lesson?: Maybe<Lesson>;
  papers: Array<Paper>;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type ExercisePageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Exercise>;
};

export type FamilyUser = {
  id?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  device?: Maybe<Device>;
  mobile?: Maybe<Scalars["String"]>;
  who?: Maybe<Scalars["String"]>;
};

export type Favorite = {
  id: Scalars["Int"];
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type FavoritePageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Favorite>;
};

export type Feedback = {
  id: Scalars["Int"];
  productCode?: Maybe<ProductCode>;
  title?: Maybe<Scalars["String"]>;
  content: Scalars["String"];
  remark?: Maybe<Scalars["String"]>;
  readDate?: Maybe<Scalars["Date"]>;
  remarkDate?: Maybe<Scalars["Date"]>;
  user?: Maybe<User>;
  /** admin: Admin */
  status?: Maybe<FeedbackStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type FeedbackPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Feedback>;
};

export enum FeedbackStatus {
  Unremark = "unremark",
  Remarked = "remarked",
  Read = "read"
}

export type Garden = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  inviteCodes?: Maybe<Array<Maybe<Scalars["String"]>>>;
  city?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  wechat?: Maybe<Scalars["String"]>;
  qcode?: Maybe<Scalars["String"]>;
  gardenType?: Maybe<GardenType>;
  appCpStatus?: Maybe<OnOffStatus>;
  address?: Maybe<Scalars["String"]>;
  bootMovie?: Maybe<Scalars["String"]>;
  sprite?: Maybe<Sprite>;
  screenFirst?: Maybe<Screen>;
  screenSecond?: Maybe<Screen>;
  screenThird?: Maybe<Screen>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  kidAuthDateMax: Scalars["Int"];
  kidAuthDateCost: Scalars["Int"];
  trainings: Array<Training>;
  kidCount: Scalars["Int"];
  admins: Array<Admin>;
  modules: Array<Scalars["String"]>;
};

export type GardenInput = {
  id: Scalars["Int"];
};

export type GardenPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Garden>;
};

export enum GardenType {
  Garden = "garden",
  Education = "education"
}

export enum Gender {
  Man = "man",
  Girl = "girl",
  Secret = "secret"
}

export enum Grade {
  G1 = "g1",
  G2 = "g2",
  G3 = "g3",
  G4 = "g4",
  G5 = "g5",
  G6 = "g6",
  G7 = "g7",
  G8 = "g8",
  G9 = "g9"
}

export enum GradeOrScore {
  Grade = "grade",
  Score = "score"
}

export type Homework = {
  id: Scalars["Int"];
  content: Scalars["String"];
  pics?: Maybe<Array<Scalars["String"]>>;
  audio?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  file?: Maybe<Scalars["String"]>;
  kemu: Kemu;
  endDate: Scalars["Date"];
  gradeOrScore: GradeOrScore;
  status: OnOffStatus;
  submitType: SubmitType;
  teacher?: Maybe<Teacher>;
  comments?: Maybe<Array<Comment>>;
  homeworkRecords: Array<HomeworkRecord>;
  trainings?: Maybe<Array<Training>>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type HomeworkInput = {
  id: Scalars["Int"];
};

export type HomeworkPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Homework>;
};

export type HomeworkRecord = {
  id: Scalars["Int"];
  content: Scalars["String"];
  pics: Array<Scalars["String"]>;
  audio: Scalars["String"];
  video: Scalars["String"];
  device?: Maybe<Device>;
  kid: Kid;
  homework?: Maybe<Homework>;
  reviewContent?: Maybe<Scalars["String"]>;
  reviewPic?: Maybe<Scalars["String"]>;
  reviewAudio?: Maybe<Scalars["String"]>;
  reviewVideo?: Maybe<Scalars["String"]>;
  reviewGrade?: Maybe<ReviewGrade>;
  reviewScore?: Maybe<Scalars["Int"]>;
  reviewCreatedDate?: Maybe<Scalars["Date"]>;
  reviewKidReadDate?: Maybe<Scalars["Date"]>;
  reviewUserReadDate?: Maybe<Scalars["Date"]>;
  reviewTeacher?: Maybe<Teacher>;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type HomeworkRecordInput = {
  id: Scalars["Int"];
};

export type HomeworkRecordPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<HomeworkRecord>;
};

export type IconDiy = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  parent?: Maybe<IconDiy>;
  children: Array<IconDiy>;
  pic?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type IconDiyInput = {
  id: Scalars["Int"];
};

export type IconDiyPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<IconDiy>;
};

export type IncomeSetting = {
  id: Scalars["Int"];
  garden?: Maybe<Garden>;
  ad?: Maybe<OnOffStatus>;
  reward?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type IncomeSettingPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<IncomeSetting>;
};

export type Issue = {
  id: Scalars["Int"];
  title: Scalars["String"];
  productCode: ProductCode;
  sentryId: Scalars["Int"];
  shortId: Scalars["String"];
  status: Scalars["String"];
  file: Scalars["String"];
  type: Scalars["String"];
  value: Scalars["String"];
  userCount: Scalars["Int"];
  count: Scalars["Int"];
  lastSeen: Scalars["Date"];
  firstSeen: Scalars["Date"];
};

export type IssuePageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Issue>;
};

export type Kemu = {
  id: Scalars["Int"];
  name: Scalars["String"];
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type KemuInput = {
  id: Scalars["Int"];
};

export type KemuPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Kemu>;
};

export type Kid = {
  id: Scalars["Int"];
  studentId: Scalars["String"];
  trueName: Scalars["String"];
  mobile: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
  gender?: Maybe<Gender>;
  period?: Maybe<PeriodType>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  trainings: Array<Training>;
  homeworkRecords: Array<HomeworkRecord>;
  birthDate?: Maybe<Scalars["Date"]>;
  createdDate?: Maybe<Scalars["Date"]>;
};

export type KidInput = {
  id: Scalars["Int"];
};

export type KidNameInput = {
  id?: Maybe<Scalars["Int"]>;
  trueName?: Maybe<Scalars["String"]>;
};

export type KidPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Kid>;
};

export type Lesson = {
  id: Scalars["Int"];
  name: Scalars["String"];
  thumb: Scalars["String"];
  pics: Array<Scalars["String"]>;
  texts: Array<Scalars["String"]>;
  timePoints: Array<Scalars["Float"]>;
  pointReadLists: Array<Array<PointRead>>;
  unit: Unit;
  video: Scalars["String"];
  audio: Scalars["String"];
  canScore: Scalars["Boolean"];
  duration: Scalars["Float"];
  exercise?: Maybe<Exercise>;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type LessonInput = {
  id: Scalars["Int"];
};

export type LessonPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Lesson>;
};

export enum Letter {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  H = "H"
}

export type LoginInfo = {
  token: Scalars["String"];
  expiration: Scalars["BigInt"];
};

export enum Module {
  None = "none",
  Admin = "admin",
  Dashboard = "dashboard",
  Publish = "publish",
  Course = "course",
  Table = "table",
  User = "user",
  Feedback = "feedback"
}

export type Mutation = {
  kidCreate?: Maybe<Kid>;
  kidUpdate?: Maybe<Kid>;
  kidDelete?: Maybe<Scalars["Boolean"]>;
  trainingKidSave?: Maybe<Kid>;
  kidAuthDateUpdate?: Maybe<Scalars["Boolean"]>;
  kidAuthDateCostUpdate?: Maybe<Scalars["Boolean"]>;
  userCreate?: Maybe<User>;
  userUpdate?: Maybe<User>;
  userDelete?: Maybe<Scalars["Boolean"]>;
  trainingUserSave?: Maybe<User>;
  userLogCreate?: Maybe<UserLog>;
  userLogDelete?: Maybe<Scalars["Boolean"]>;
  adminVerifyCode: Scalars["Boolean"];
  adminLogin?: Maybe<AdminLoginResult>;
  teacherLogin?: Maybe<AdminLoginResult>;
  adminCreate?: Maybe<Admin>;
  adminUpdate?: Maybe<Admin>;
  adminPwd?: Maybe<Admin>;
  adminDelete?: Maybe<Scalars["Boolean"]>;
  adwardPaperCreate?: Maybe<AdwardPaper>;
  adwardPaperDelete?: Maybe<Scalars["Boolean"]>;
  albumCreate?: Maybe<Album>;
  albumUpdate?: Maybe<Album>;
  albumDelete?: Maybe<Scalars["Boolean"]>;
  appCreate?: Maybe<App>;
  appUpdate?: Maybe<App>;
  appBeTemplate?: Maybe<Scalars["Boolean"]>;
  appNotBeTemplate?: Maybe<Scalars["Boolean"]>;
  gardenSyncAppCp?: Maybe<Scalars["Boolean"]>;
  gardenNeverAppCp?: Maybe<Scalars["Boolean"]>;
  appDelete?: Maybe<Scalars["Boolean"]>;
  bannerCreate?: Maybe<Banner>;
  bannerUpdate?: Maybe<Banner>;
  bannerDelete?: Maybe<Scalars["Boolean"]>;
  bookCreate?: Maybe<Book>;
  cacheDelete?: Maybe<Scalars["Boolean"]>;
  categoryCreate?: Maybe<Category>;
  categoryUpdate?: Maybe<Category>;
  categoryDelete?: Maybe<Scalars["Boolean"]>;
  shortcutsSort?: Maybe<Scalars["Boolean"]>;
  commentCreate?: Maybe<Comment>;
  commentUpdate?: Maybe<Comment>;
  commentDelete?: Maybe<Scalars["Boolean"]>;
  courseCreate?: Maybe<Course>;
  courseUpdate?: Maybe<Course>;
  courseDelete?: Maybe<Scalars["Boolean"]>;
  datePlanCreate?: Maybe<DatePlan>;
  datePlanUpdate?: Maybe<DatePlan>;
  datePlanDelete?: Maybe<Scalars["Boolean"]>;
  deviceCreate?: Maybe<Device>;
  deviceUpdate?: Maybe<Device>;
  deviceDelete?: Maybe<Scalars["Boolean"]>;
  deviceBreak?: Maybe<Scalars["Boolean"]>;
  deviceToUserQrcodeCreateById: Scalars["String"];
  deviceLogCreate?: Maybe<DeviceLog>;
  deviceLogDelete?: Maybe<Scalars["Boolean"]>;
  exerciseCreate?: Maybe<Exercise>;
  exerciseUpdate?: Maybe<Exercise>;
  exerciseDelete?: Maybe<Scalars["Boolean"]>;
  favoriteCreate?: Maybe<Favorite>;
  favoriteUpdate?: Maybe<Favorite>;
  favoriteDelete?: Maybe<Scalars["Boolean"]>;
  feedbackCreate?: Maybe<Feedback>;
  feedbackUpdate?: Maybe<Feedback>;
  feedbackDelete?: Maybe<Scalars["Boolean"]>;
  gardenCreate?: Maybe<Garden>;
  gardenUpdate?: Maybe<Garden>;
  gardenModules?: Maybe<Garden>;
  gardenDelete?: Maybe<Scalars["Boolean"]>;
  homeworkCreate?: Maybe<Homework>;
  homeworkUpdate?: Maybe<Homework>;
  homeworkDelete?: Maybe<Scalars["Boolean"]>;
  homeworkRecordCreate?: Maybe<HomeworkRecord>;
  homeworkRecordCreateByTeacher: Array<HomeworkRecord>;
  homeworkRecordUpdate?: Maybe<HomeworkRecord>;
  homeworkRecordDelete?: Maybe<Scalars["Boolean"]>;
  homeworkReviewChange?: Maybe<HomeworkRecord>;
  homeworkReviewChangeBatch: Array<HomeworkRecord>;
  iconDiyCreate?: Maybe<IconDiy>;
  iconDiyUpdate?: Maybe<IconDiy>;
  iconDiyDelete?: Maybe<Scalars["Boolean"]>;
  iconDiyBuild: Scalars["String"];
  incomeSettingCreate?: Maybe<IncomeSetting>;
  incomeSettingUpdate?: Maybe<IncomeSetting>;
  incomeSettingDelete?: Maybe<Scalars["Boolean"]>;
  issueUpdate?: Maybe<Issue>;
  issueDelete?: Maybe<Scalars["Boolean"]>;
  kemuCreate?: Maybe<Kemu>;
  kemuUpdate?: Maybe<Kemu>;
  kemuDelete?: Maybe<Scalars["Boolean"]>;
  KemuCreateSuper: Array<Kemu>;
  lessonCreate?: Maybe<Lesson>;
  lessonUpdate?: Maybe<Lesson>;
  lessonDelete?: Maybe<Scalars["Boolean"]>;
  notifyCreate?: Maybe<Notify>;
  notifyUpdate?: Maybe<Notify>;
  notifyDelete?: Maybe<Scalars["Boolean"]>;
  orderCreate?: Maybe<Order>;
  orderUpdate?: Maybe<Order>;
  orderDelete?: Maybe<Scalars["Boolean"]>;
  paperCreate?: Maybe<Paper>;
  paperUpdate?: Maybe<Paper>;
  paperDelete?: Maybe<Scalars["Boolean"]>;
  permissionCreate?: Maybe<Permission>;
  permissionUpdate?: Maybe<Permission>;
  permissionDelete?: Maybe<Scalars["Boolean"]>;
  permissionsInit: Array<Permission>;
  photoCreate?: Maybe<Photo>;
  photoUpdate?: Maybe<Photo>;
  photoDelete?: Maybe<Scalars["Boolean"]>;
  photoGroupCreate?: Maybe<PhotoGroup>;
  photoGroupUpdate?: Maybe<PhotoGroup>;
  photoGroupAdd?: Maybe<PhotoGroup>;
  photoGroupRemove?: Maybe<PhotoGroup>;
  photoGroupDelete?: Maybe<Scalars["Boolean"]>;
  pointReadCreate?: Maybe<PointRead>;
  pointReadUpdate?: Maybe<PointRead>;
  pointReadDelete?: Maybe<Scalars["Boolean"]>;
  pressCreate?: Maybe<Press>;
  pressUpdate?: Maybe<Press>;
  pressDelete?: Maybe<Scalars["Boolean"]>;
  programCreate?: Maybe<Program>;
  programUpdate?: Maybe<Program>;
  programDelete?: Maybe<Scalars["Boolean"]>;
  publishCreate?: Maybe<Publish>;
  publishUpdate?: Maybe<Publish>;
  publishDelete?: Maybe<Scalars["Boolean"]>;
  questionCreate?: Maybe<Question>;
  questionUpdate?: Maybe<Question>;
  questionDelete?: Maybe<Scalars["Boolean"]>;
  rewardCreate?: Maybe<Reward>;
  rewardUpdate?: Maybe<Reward>;
  rewardDelete?: Maybe<Scalars["Boolean"]>;
  screenCreate?: Maybe<Screen>;
  screenUpdate?: Maybe<Screen>;
  screenDelete?: Maybe<Scalars["Boolean"]>;
  seoRecordDelete?: Maybe<Scalars["Boolean"]>;
  settingCreate?: Maybe<Setting>;
  settingUpdate?: Maybe<Setting>;
  settingDelete?: Maybe<Scalars["Boolean"]>;
  settleCreate?: Maybe<Settle>;
  settleUpdate?: Maybe<Settle>;
  settleDelete?: Maybe<Scalars["Boolean"]>;
  spriteCreate?: Maybe<Sprite>;
  spriteDelete?: Maybe<Scalars["Boolean"]>;
  teacherCreate?: Maybe<Teacher>;
  teacherUpdate?: Maybe<Teacher>;
  teacherDelete?: Maybe<Scalars["Boolean"]>;
  trainingTeacherSave?: Maybe<Teacher>;
  timePlanCreate?: Maybe<TimePlan>;
  timePlanUpdate?: Maybe<TimePlan>;
  timePlanDelete?: Maybe<Scalars["Boolean"]>;
  trainingCreate?: Maybe<Training>;
  trainingUpdate?: Maybe<Training>;
  trainingDelete?: Maybe<Scalars["Boolean"]>;
  unitCreate?: Maybe<Unit>;
  unitUpdate?: Maybe<Unit>;
  unitDelete?: Maybe<Scalars["Boolean"]>;
  weUserLogin: WeUserLoginResult;
  weUserUpdate?: Maybe<WeUser>;
  weUserDelete?: Maybe<Scalars["Boolean"]>;
  wxLogin?: Maybe<WxLoginResult>;
};

export type MutationKidCreateArgs = {
  trueName?: Maybe<Scalars["String"]>;
  studentId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  period?: Maybe<PeriodType>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  birthDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  gender?: Maybe<Gender>;
  trainings: Array<TrainingInput>;
};

export type MutationKidUpdateArgs = {
  id: Scalars["Int"];
  trueName?: Maybe<Scalars["String"]>;
  studentId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  period?: Maybe<PeriodType>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  birthDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  gender?: Maybe<Gender>;
  trainings: Array<TrainingInput>;
};

export type MutationKidDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationTrainingKidSaveArgs = {
  trueName?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  weUser?: Maybe<WeUserInput>;
  trainings?: Maybe<Array<TrainingInput>>;
};

export type MutationUserCreateArgs = {
  password?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  qq?: Maybe<Scalars["String"]>;
  wechat?: Maybe<Scalars["String"]>;
  userName?: Maybe<Scalars["String"]>;
  trueName?: Maybe<Scalars["String"]>;
  nickName?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  type?: Maybe<UserType>;
  birthDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  gender?: Maybe<Gender>;
};

export type MutationUserUpdateArgs = {
  id: Scalars["Int"];
  password?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  qq?: Maybe<Scalars["String"]>;
  wechat?: Maybe<Scalars["String"]>;
  userName?: Maybe<Scalars["String"]>;
  trueName?: Maybe<Scalars["String"]>;
  nickName?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  type?: Maybe<UserType>;
  birthDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  gender?: Maybe<Gender>;
};

export type MutationUserDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationTrainingUserSaveArgs = {
  trueName: Scalars["String"];
  mobile?: Maybe<Scalars["String"]>;
  kids?: Maybe<Array<KidInput>>;
  weUser?: Maybe<WeUserInput>;
  trainings?: Maybe<Array<TrainingInput>>;
};

export type MutationUserLogCreateArgs = {
  userOp?: Maybe<UserOp>;
  client?: Maybe<Scalars["String"]>;
  ip?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  platform?: Maybe<Scalars["String"]>;
};

export type MutationUserLogDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationAdminVerifyCodeArgs = {
  mobile: Scalars["String"];
};

export type MutationAdminLoginArgs = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type MutationTeacherLoginArgs = {
  mobile: Scalars["String"];
  verifyCode: Scalars["String"];
};

export type MutationAdminCreateArgs = {
  garden?: Maybe<GardenInput>;
  email: Scalars["String"];
  mobile: Scalars["String"];
  password: Scalars["String"];
  trueName?: Maybe<Scalars["String"]>;
  roleVer?: Maybe<RoleVer>;
  roleAuth?: Maybe<RoleAuth>;
  endDate?: Maybe<Scalars["Date"]>;
};

export type MutationAdminUpdateArgs = {
  id: Scalars["Int"];
  email?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  trueName?: Maybe<Scalars["String"]>;
  garden?: Maybe<GardenInput>;
  roleVer?: Maybe<RoleVer>;
  roleAuth?: Maybe<RoleAuth>;
  endDate?: Maybe<Scalars["Date"]>;
};

export type MutationAdminPwdArgs = {
  password: Scalars["String"];
  passwordNew: Scalars["String"];
};

export type MutationAdminDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationAdwardPaperCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  kid: KidInput;
};

export type MutationAdwardPaperDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationAlbumCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  playType?: Maybe<PlayType>;
  thumbRaw?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  ageMin?: Maybe<Scalars["Int"]>;
  ageMax?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
  category?: Maybe<CategoryInput>;
  programs?: Maybe<Array<Maybe<ProgramInput>>>;
};

export type MutationAlbumUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  playType?: Maybe<PlayType>;
  thumbRaw?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  ageMin?: Maybe<Scalars["Int"]>;
  ageMax?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
  category?: Maybe<CategoryInput>;
  programs?: Maybe<Array<Maybe<ProgramInput>>>;
};

export type MutationAlbumDeleteArgs = {
  id: Scalars["Int"];
  status?: Maybe<OnOffStatus>;
};

export type MutationAppCreateArgs = {
  name: Scalars["String"];
  version: Scalars["String"];
  downloadUrl: Scalars["String"];
  logo?: Maybe<Scalars["String"]>;
  thumbRaw?: Maybe<Scalars["String"]>;
  packageName?: Maybe<Scalars["String"]>;
  pic1?: Maybe<Scalars["String"]>;
  pic2?: Maybe<Scalars["String"]>;
  pic3?: Maybe<Scalars["String"]>;
  pic4?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  status: OnOffStatus;
  from?: Maybe<AppFrom>;
};

export type MutationAppUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  downloadUrl?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  thumbRaw?: Maybe<Scalars["String"]>;
  packageName?: Maybe<Scalars["String"]>;
  pic1?: Maybe<Scalars["String"]>;
  pic2?: Maybe<Scalars["String"]>;
  pic3?: Maybe<Scalars["String"]>;
  pic4?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  from?: Maybe<AppFrom>;
};

export type MutationAppBeTemplateArgs = {
  id: Scalars["Int"];
};

export type MutationAppNotBeTemplateArgs = {
  id: Scalars["Int"];
};

export type MutationGardenSyncAppCpArgs = {
  id: Scalars["Int"];
};

export type MutationGardenNeverAppCpArgs = {
  id: Scalars["Int"];
};

export type MutationAppDeleteArgs = {
  id: Scalars["Int"];
  status?: Maybe<OnOffStatus>;
};

export type MutationBannerCreateArgs = {
  productCode: ProductCode;
  name: Scalars["String"];
  pic: Scalars["String"];
  link: Scalars["String"];
  status: OnOffStatus;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  sorting?: Maybe<Scalars["Int"]>;
};

export type MutationBannerUpdateArgs = {
  id: Scalars["Int"];
  productCode: ProductCode;
  name: Scalars["String"];
  pic: Scalars["String"];
  link: Scalars["String"];
  status: OnOffStatus;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  sorting?: Maybe<Scalars["Int"]>;
};

export type MutationBannerDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationBookCreateArgs = {
  name: Scalars["String"];
  thumb: Scalars["String"];
  grade?: Maybe<Grade>;
  canScore?: Maybe<Scalars["Boolean"]>;
  bookType?: Maybe<BookType>;
  units?: Maybe<Array<UnitNameInput>>;
  press?: Maybe<PressNameInput>;
  status: OnOffStatus;
};

export type MutationCacheDeleteArgs = {
  pattern: Scalars["String"];
};

export type MutationCategoryCreateArgs = {
  name: Scalars["String"];
  thumb?: Maybe<Scalars["String"]>;
  thumbRaw?: Maybe<Scalars["String"]>;
  sorting?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
  parent?: Maybe<CategoryInput>;
  children?: Maybe<Array<Maybe<CategoryInput>>>;
  type: CategoryType;
};

export type MutationCategoryUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  thumbRaw?: Maybe<Scalars["String"]>;
  sorting?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
  parent?: Maybe<CategoryInput>;
  children?: Maybe<Array<Maybe<CategoryInput>>>;
  type?: Maybe<CategoryType>;
};

export type MutationCategoryDeleteArgs = {
  id: Scalars["Int"];
  status?: Maybe<OnOffStatus>;
};

export type MutationShortcutsSortArgs = {
  items: Array<ShortcutInput>;
};

export type MutationCommentCreateArgs = {
  content: Scalars["String"];
  pic?: Maybe<Scalars["String"]>;
  user: UserInput;
  homework: HomeworkInput;
};

export type MutationCommentUpdateArgs = {
  id: Scalars["Int"];
  content: Scalars["String"];
  pic?: Maybe<Scalars["String"]>;
};

export type MutationCommentDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationCourseCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  sorting?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
  category?: Maybe<CategoryInput>;
  trainings?: Maybe<Array<TrainingInput>>;
};

export type MutationCourseUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  sorting?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
  category?: Maybe<CategoryInput>;
  trainings?: Maybe<Array<TrainingInput>>;
};

export type MutationCourseDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationDatePlanCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  teacher?: Maybe<TeacherInput>;
  timePlans?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  training: TrainingInput;
};

export type MutationDatePlanUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  teacher?: Maybe<TeacherInput>;
  timePlans?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationDatePlanDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationDeviceCreateArgs = {
  code: DeviceCode;
  sn: Scalars["String"];
};

export type MutationDeviceUpdateArgs = {
  id: Scalars["Int"];
  code?: Maybe<DeviceCode>;
  sn?: Maybe<Scalars["String"]>;
};

export type MutationDeviceDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationDeviceBreakArgs = {
  id: Scalars["Int"];
};

export type MutationDeviceToUserQrcodeCreateByIdArgs = {
  id: Scalars["Int"];
};

export type MutationDeviceLogCreateArgs = {
  deviceOp?: Maybe<DeviceOp>;
  version?: Maybe<Scalars["String"]>;
  ip?: Maybe<Scalars["String"]>;
};

export type MutationDeviceLogDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationExerciseCreateArgs = {
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationExerciseUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationExerciseDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationFavoriteCreateArgs = {
  program: ProgramInput;
};

export type MutationFavoriteUpdateArgs = {
  id: Scalars["Int"];
  program: ProgramInput;
};

export type MutationFavoriteDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationFeedbackCreateArgs = {
  productCode: ProductCode;
  title?: Maybe<Scalars["String"]>;
  content: Scalars["String"];
};

export type MutationFeedbackUpdateArgs = {
  id: Scalars["Int"];
  remark?: Maybe<Scalars["String"]>;
};

export type MutationFeedbackDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationGardenCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  kidAuthDateMax?: Maybe<Scalars["Int"]>;
  logo?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  wechat?: Maybe<Scalars["String"]>;
  qrcode?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  gardenType?: Maybe<GardenType>;
  bootMovie?: Maybe<Scalars["String"]>;
};

export type MutationGardenUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  kidAuthDateMax?: Maybe<Scalars["Int"]>;
  logo?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  wechat?: Maybe<Scalars["String"]>;
  qrcode?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  gardenType?: Maybe<GardenType>;
  bootMovie?: Maybe<Scalars["String"]>;
};

export type MutationGardenModulesArgs = {
  id: Scalars["Int"];
  modules: Array<Scalars["String"]>;
};

export type MutationGardenDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationHomeworkCreateArgs = {
  content: Scalars["String"];
  kemu: KemuInput;
  pics?: Maybe<Array<Scalars["String"]>>;
  audio?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  file?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["Date"]>;
  submitType?: Maybe<SubmitType>;
  status: OnOffStatus;
  trainings: Array<TrainingInput>;
  gradeOrScore?: Maybe<GradeOrScore>;
};

export type MutationHomeworkUpdateArgs = {
  id: Scalars["Int"];
  content: Scalars["String"];
  kemu: KemuInput;
  pics?: Maybe<Array<Scalars["String"]>>;
  audio?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  file?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["Date"]>;
  submitType?: Maybe<SubmitType>;
  status: OnOffStatus;
  trainings: Array<TrainingInput>;
  gradeOrScore?: Maybe<GradeOrScore>;
};

export type MutationHomeworkDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationHomeworkRecordCreateArgs = {
  content: Scalars["String"];
  pics?: Maybe<Array<Scalars["String"]>>;
  audio?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  homework: HomeworkInput;
  kid: KidInput;
};

export type MutationHomeworkRecordCreateByTeacherArgs = {
  content: Scalars["String"];
  pics?: Maybe<Array<Scalars["String"]>>;
  audio?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  homework: HomeworkInput;
  kids: Array<KidInput>;
  reviewGrade?: Maybe<ReviewGrade>;
};

export type MutationHomeworkRecordUpdateArgs = {
  id: Scalars["Int"];
  content: Scalars["String"];
  pics?: Maybe<Array<Scalars["String"]>>;
  audio?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
};

export type MutationHomeworkRecordDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationHomeworkReviewChangeArgs = {
  id: Scalars["Int"];
  reviewContent?: Maybe<Scalars["String"]>;
  reviewPic?: Maybe<Scalars["String"]>;
  reviewAudio?: Maybe<Scalars["String"]>;
  reviewVideo?: Maybe<Scalars["String"]>;
  reviewGrade?: Maybe<ReviewGrade>;
  reviewScore?: Maybe<Scalars["Int"]>;
};

export type MutationHomeworkReviewChangeBatchArgs = {
  ids: Array<Scalars["Int"]>;
  reviewContent?: Maybe<Scalars["String"]>;
  reviewPic?: Maybe<Scalars["String"]>;
  reviewAudio?: Maybe<Scalars["String"]>;
  reviewVideo?: Maybe<Scalars["String"]>;
  reviewGrade?: Maybe<ReviewGrade>;
  reviewScore?: Maybe<Scalars["Int"]>;
};

export type MutationIconDiyCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  parent?: Maybe<IconDiyInput>;
  pic?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationIconDiyUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  parent?: Maybe<IconDiyInput>;
  pic?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationIconDiyDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationIconDiyBuildArgs = {
  bg?: Maybe<Scalars["String"]>;
  fg?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
};

export type MutationIncomeSettingCreateArgs = {
  ad: OnOffStatus;
  reward: OnOffStatus;
};

export type MutationIncomeSettingUpdateArgs = {
  id: Scalars["Int"];
  ad: OnOffStatus;
  reward: OnOffStatus;
};

export type MutationIncomeSettingDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationIssueUpdateArgs = {
  id: Scalars["Int"];
  productCode: ProductCode;
  status: Scalars["String"];
};

export type MutationIssueDeleteArgs = {
  id: Scalars["Int"];
  productCode: ProductCode;
};

export type MutationKemuCreateArgs = {
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationKemuUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationKemuDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationLessonCreateArgs = {
  name: Scalars["String"];
  thumb: Scalars["String"];
  pics: Array<Scalars["String"]>;
  texts: Array<Scalars["String"]>;
  timePoints?: Maybe<Array<Scalars["Float"]>>;
  pointReads?: Maybe<Array<PointReadInput>>;
  unit: UnitInput;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  canScore?: Maybe<Scalars["Boolean"]>;
  duration?: Maybe<Scalars["Float"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationLessonUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
  thumb: Scalars["String"];
  pics: Array<Scalars["String"]>;
  texts: Array<Scalars["String"]>;
  timePoints?: Maybe<Array<Scalars["Float"]>>;
  pointReads?: Maybe<Array<PointReadInput>>;
  unit: UnitInput;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  canScore?: Maybe<Scalars["Boolean"]>;
  duration?: Maybe<Scalars["Float"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationLessonDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationNotifyCreateArgs = {
  productCode: ProductCode;
  title: Scalars["String"];
  content: Scalars["String"];
  pushDate?: Maybe<Scalars["Date"]>;
  isPushNow: Scalars["Boolean"];
};

export type MutationNotifyUpdateArgs = {
  id: Scalars["Int"];
  productCode?: Maybe<ProductCode>;
  title?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  pushDate?: Maybe<Scalars["Date"]>;
  isPushNow?: Maybe<Scalars["Boolean"]>;
};

export type MutationNotifyDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationOrderCreateArgs = {
  sn: Scalars["String"];
  money: Scalars["Int"];
  status: OrderStatus;
  paymentType?: Maybe<PaymentType>;
};

export type MutationOrderUpdateArgs = {
  id: Scalars["Int"];
  sn: Scalars["String"];
  money: Scalars["Int"];
  status: OrderStatus;
  paymentType?: Maybe<PaymentType>;
};

export type MutationOrderDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationPaperCreateArgs = {
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationPaperUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationPaperDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationPermissionCreateArgs = {
  roleVer: Scalars["String"];
  roleAuth: Scalars["String"];
  productCode: ProductCode;
  module: Scalars["String"];
  path: Scalars["String"];
};

export type MutationPermissionUpdateArgs = {
  id: Scalars["Int"];
  roleVer: Scalars["String"];
  roleAuth: Scalars["String"];
  productCode: ProductCode;
  module: Scalars["String"];
  path: Scalars["String"];
};

export type MutationPermissionDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationPhotoCreateArgs = {
  pic?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  adwardPaper?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationPhotoUpdateArgs = {
  id: Scalars["Int"];
  pic?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  adwardPaper?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationPhotoDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationPhotoGroupCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  takeDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  photos?: Maybe<Array<PhotoInput>>;
  training: TrainingInput;
};

export type MutationPhotoGroupUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  takeDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  photos?: Maybe<Array<PhotoInput>>;
};

export type MutationPhotoGroupAddArgs = {
  id: Scalars["Int"];
  photos: Array<PhotoInput>;
};

export type MutationPhotoGroupRemoveArgs = {
  id: Scalars["Int"];
  photos: Array<PhotoInput>;
};

export type MutationPhotoGroupDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationPointReadCreateArgs = {
  name: Scalars["String"];
};

export type MutationPointReadUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type MutationPointReadDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationPressCreateArgs = {
  name: Scalars["String"];
};

export type MutationPressUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type MutationPressDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationProgramCreateArgs = {
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  album?: Maybe<AlbumInput>;
  status?: Maybe<OnOffStatus>;
};

export type MutationProgramUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  album?: Maybe<AlbumInput>;
  status?: Maybe<OnOffStatus>;
};

export type MutationProgramDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationPublishCreateArgs = {
  version: Scalars["String"];
  versionCode: Scalars["Int"];
  major: Scalars["Int"];
  minor: Scalars["Int"];
  patch: Scalars["Int"];
  content: Scalars["String"];
  productCode: ProductCode;
  buildCommand: Scalars["String"];
  tag: RoleVer;
  download?: Maybe<Scalars["String"]>;
};

export type MutationPublishUpdateArgs = {
  id: Scalars["Int"];
  version: Scalars["String"];
  versionCode: Scalars["Int"];
  content: Scalars["String"];
  productCode: ProductCode;
  tag: RoleVer;
  download?: Maybe<Scalars["String"]>;
};

export type MutationPublishDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationQuestionCreateArgs = {
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationQuestionUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationQuestionDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationRewardCreateArgs = {
  money: Scalars["Int"];
};

export type MutationRewardUpdateArgs = {
  id: Scalars["Int"];
  money: Scalars["Int"];
};

export type MutationRewardDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationScreenCreateArgs = {
  productCode: ProductCode;
  garden?: Maybe<GardenInput>;
  type: ScreenType;
  name: Scalars["String"];
  background: Scalars["String"];
  borderBottom: Scalars["String"];
  titleColor?: Maybe<Scalars["String"]>;
  textColor?: Maybe<Scalars["String"]>;
  status: OnOffStatus;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  sorting?: Maybe<Scalars["Int"]>;
};

export type MutationScreenUpdateArgs = {
  id: Scalars["Int"];
  productCode?: Maybe<ProductCode>;
  type?: Maybe<ScreenType>;
  name?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  borderBottom?: Maybe<Scalars["String"]>;
  titleColor?: Maybe<Scalars["String"]>;
  textColor?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  sorting?: Maybe<Scalars["Int"]>;
};

export type MutationScreenDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationSeoRecordDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationSettingCreateArgs = {
  value: Scalars["String"];
  productCode: ProductCode;
  module: Module;
  name: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
};

export type MutationSettingUpdateArgs = {
  id: Scalars["Int"];
  value: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
};

export type MutationSettingDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationSettleCreateArgs = {
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationSettleUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationSettleDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationSpriteCreateArgs = {
  name: Scalars["String"];
  garden: GardenInput;
  productId: Scalars["Int"];
  publicKey?: Maybe<Scalars["String"]>;
  secretKey?: Maybe<Scalars["String"]>;
};

export type MutationSpriteDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationTeacherCreateArgs = {
  trueName: Scalars["String"];
  mobile?: Maybe<Scalars["String"]>;
  kemus?: Maybe<Array<KemuInput>>;
  weUser?: Maybe<WeUserInput>;
  status: OnOffStatus;
  trainings?: Maybe<Array<TrainingInput>>;
};

export type MutationTeacherUpdateArgs = {
  id: Scalars["Int"];
  trueName: Scalars["String"];
  mobile?: Maybe<Scalars["String"]>;
  kemus?: Maybe<Array<KemuInput>>;
  weUser?: Maybe<WeUserInput>;
  status: OnOffStatus;
  trainings?: Maybe<Array<TrainingInput>>;
};

export type MutationTeacherDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationTrainingTeacherSaveArgs = {
  trueName: Scalars["String"];
  mobile?: Maybe<Scalars["String"]>;
  kemus?: Maybe<Array<KemuInput>>;
  weUser?: Maybe<WeUserInput>;
  trainings?: Maybe<Array<TrainingInput>>;
};

export type MutationTimePlanCreateArgs = {
  day: Scalars["Int"];
  place?: Maybe<Scalars["String"]>;
  startTime?: Maybe<Scalars["String"]>;
  endTime?: Maybe<Scalars["String"]>;
  datePlan: DatePlanInput;
  status?: Maybe<OnOffStatus>;
};

export type MutationTimePlanUpdateArgs = {
  id: Scalars["Int"];
  day: Scalars["Int"];
  place?: Maybe<Scalars["String"]>;
  startTime?: Maybe<Scalars["String"]>;
  endTime?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
};

export type MutationTimePlanDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationTrainingCreateArgs = {
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  status: OnOffStatus;
  kids?: Maybe<Array<KidNameInput>>;
  teachers?: Maybe<Array<TeacherInput>>;
  weUsers?: Maybe<Array<WeUserInput>>;
};

export type MutationTrainingUpdateArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  kids?: Maybe<Array<KidNameInput>>;
  teachers?: Maybe<Array<TeacherInput>>;
  weUsers?: Maybe<Array<WeUserInput>>;
};

export type MutationTrainingDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationUnitCreateArgs = {
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationUnitUpdateArgs = {
  id: Scalars["Int"];
  name: Scalars["String"];
  status: OnOffStatus;
};

export type MutationUnitDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationWeUserLoginArgs = {
  openId: Scalars["String"];
  mobile?: Maybe<Scalars["String"]>;
  trueName?: Maybe<Scalars["String"]>;
  nickName?: Maybe<Scalars["String"]>;
  avatarUrl?: Maybe<Scalars["String"]>;
  gender?: Maybe<Gender>;
  city?: Maybe<Scalars["String"]>;
  province?: Maybe<Scalars["String"]>;
  role?: Maybe<WeUserRole>;
  gardenId?: Maybe<Scalars["String"]>;
  trainingId?: Maybe<Scalars["String"]>;
};

export type MutationWeUserUpdateArgs = {
  id: Scalars["Int"];
  mobile?: Maybe<Scalars["String"]>;
  trueName?: Maybe<Scalars["String"]>;
  nickName?: Maybe<Scalars["String"]>;
  avatarUrl?: Maybe<Scalars["String"]>;
  gender?: Maybe<Gender>;
  city?: Maybe<Scalars["String"]>;
  province?: Maybe<Scalars["String"]>;
  role?: Maybe<WeUserRole>;
};

export type MutationWeUserDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationWxLoginArgs = {
  code: Scalars["String"];
};

export type NeedUpdateItem = {
  total: Scalars["Int"];
  createdCount: Scalars["Int"];
  updatedCount: Scalars["Int"];
  deletedCount: Scalars["Int"];
  reason: Scalars["String"];
};

export type Notify = {
  id: Scalars["Int"];
  productCode: ProductCode;
  title: Scalars["String"];
  content: Scalars["String"];
  pushDate?: Maybe<Scalars["Date"]>;
  isPushNow: Scalars["Boolean"];
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  sorting?: Maybe<Scalars["Int"]>;
};

export type NotifyPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Notify>;
};

export enum OnOffStatus {
  On = "on",
  Off = "off"
}

export enum OpStatus {
  Padding = "padding",
  Working = "working",
  Success = "success",
  Fail = "fail",
  Forbidden = "forbidden"
}

export type Order = {
  id: Scalars["Int"];
  sn: Scalars["String"];
  paymentType: PaymentType;
  money: Scalars["Int"];
  garden?: Maybe<Garden>;
  status?: Maybe<OrderStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type OrderPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Order>;
};

export enum OrderStatus {
  Pending = "pending",
  Paying = "paying",
  Paid = "paid",
  Fail = "fail"
}

export type Paper = {
  id: Scalars["Int"];
  answers: Array<Array<Letter>>;
  exercise: Exercise;
  kid: Kid;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type PaperPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Paper>;
};

export enum PaymentType {
  Alipay = "alipay",
  Wxpay = "wxpay"
}

export enum PeriodType {
  Always = "always",
  Week = "week",
  Month = "month",
  Quarter = "quarter",
  HalfYear = "halfYear",
  FullYear = "fullYear",
  EndDate = "endDate"
}

export type Permission = {
  id: Scalars["Int"];
  ptype: Scalars["String"];
  roleVer?: Maybe<Scalars["String"]>;
  roleAuth: Scalars["String"];
  productCode: ProductCode;
  module?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
};

export type PermissionPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Permission>;
};

export type Photo = {
  id: Scalars["Int"];
  photoType?: Maybe<PhotoType>;
  pic?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  adwardPaper?: Maybe<AdwardPaper>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type PhotoGroup = {
  id: Scalars["Int"];
  name: Scalars["String"];
  thumb: Scalars["String"];
  about?: Maybe<Scalars["String"]>;
  takeDate?: Maybe<Scalars["Date"]>;
  training?: Maybe<Training>;
  photos: Array<Photo>;
  status?: Maybe<OnOffStatus>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type PhotoGroupPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<PhotoGroup>;
};

export type PhotoInput = {
  id?: Maybe<Scalars["Int"]>;
  photoType?: Maybe<PhotoType>;
  pic?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  adwardPaper?: Maybe<AdwardPaperInput>;
};

export type PhotoPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Photo>;
};

export enum PhotoType {
  Any = "any",
  Pic = "pic",
  Audio = "audio",
  Video = "video",
  AdwardPaper = "adwardPaper"
}

export enum PlayType {
  VideoList = "videoList",
  AudioList = "audioList"
}

export type PointRead = {
  id: Scalars["Int"];
  original: Scalars["String"];
  translate: Scalars["String"];
  start: Scalars["Float"];
  end: Scalars["Float"];
  rect?: Maybe<Rect>;
  page: Scalars["Int"];
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type PointReadIdInput = {
  id: Scalars["Int"];
};

export type PointReadInput = {
  id?: Maybe<Scalars["Int"]>;
  original: Scalars["String"];
  translate: Scalars["String"];
  start: Scalars["Float"];
  end: Scalars["Float"];
  rect?: Maybe<RectInput>;
  page: Scalars["Int"];
};

export type Press = {
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type PressNameInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Product = {
  name: Scalars["String"];
  code: Scalars["String"];
};

export enum ProductCode {
  All = "all",
  Server = "server",
  AdminWeb = "adminWeb",
  CloudSaas = "cloudSaas",
  RobotZushou = "robotZushou",
  RobotLauncher = "robotLauncher",
  UserAndroid = "userAndroid",
  UserIos = "userIos",
  UserAndroidIos = "userAndroidIos",
  UserWeb = "userWeb",
  TeacherMiniProgram = "teacherMiniProgram"
}

export type Program = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  album?: Maybe<Album>;
  comments: Array<Comment>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
};

export type ProgramInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  thumb?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
  audio?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  status?: Maybe<OnOffStatus>;
};

export type ProgramPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Program>;
};

export type Publish = {
  id: Scalars["Int"];
  version: Scalars["String"];
  major: Scalars["Int"];
  minor: Scalars["Int"];
  patch: Scalars["Int"];
  versionCode: Scalars["Int"];
  content: Scalars["String"];
  productCode: ProductCode;
  download: Scalars["String"];
  email: Scalars["String"];
  buildStatus?: Maybe<Status>;
  buildCommand: Scalars["String"];
  tag: RoleVer;
  publishDate?: Maybe<Scalars["Date"]>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type PublishBuildMessage = {
  id: Scalars["Int"];
  message: Scalars["String"];
  code?: Maybe<Scalars["Int"]>;
};

export type PublishPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Publish>;
};

export type Query = {
  kids: KidPageResult;
  kidsNotToTraining: KidPageResult;
  kid: Kid;
  users: UserPageResult;
  user: User;
  canInput?: Maybe<Scalars["Boolean"]>;
  userLogs: UserLogPageResult;
  userLogsByUser: UserLogPageResult;
  admins: AdminPageResult;
  admin?: Maybe<Admin>;
  adwardPapers: AdwardPaperPageResult;
  adwardPaper: AdwardPaper;
  albums: AlbumPageResult;
  album: Album;
  apps: AppPageResult;
  app: App;
  banners: BannerPageResult;
  banner: Banner;
  books: BookPageResult;
  book: Book;
  cacheKeys: Array<Scalars["String"]>;
  cacheValue?: Maybe<Scalars["String"]>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  shortcuts?: Maybe<Array<Shortcut>>;
  chartCourseLatest?: Maybe<Chart>;
  chartCourseGarden?: Maybe<ChartGarden>;
  chartCourseMonth?: Maybe<Chart>;
  chartCourseGeo?: Maybe<Chart>;
  comments: CommentPageResult;
  comment: Comment;
  courses: CoursePageResult;
  course?: Maybe<Course>;
  dashboard: Dashboard;
  datePlans: DatePlanPageResult;
  datePlan: DatePlan;
  devices?: Maybe<DevicePageResult>;
  device?: Maybe<Device>;
  deviceLogs: DeviceLogPageResult;
  deviceLog: DeviceLog;
  exercises: ExercisePageResult;
  exercise: Exercise;
  favorites: FavoritePageResult;
  favorite: Favorite;
  feedbacks: FeedbackPageResult;
  feedback: Feedback;
  gardens: GardenPageResult;
  gardenCurrent?: Maybe<Garden>;
  garden?: Maybe<Garden>;
  gardenByCode?: Maybe<Garden>;
  homeworks: HomeworkPageResult;
  homework: Homework;
  homeworkRecords: HomeworkRecordPageResult;
  homeworkRecord: HomeworkRecord;
  iconDiys: IconDiyPageResult;
  iconDiy: IconDiy;
  incomeSettings: IncomeSettingPageResult;
  incomeSetting: IncomeSetting;
  issues: IssuePageResult;
  issue?: Maybe<Issue>;
  kemus: KemuPageResult;
  kemu: Kemu;
  lessons: LessonPageResult;
  lesson: Lesson;
  notifies: NotifyPageResult;
  notify?: Maybe<Notify>;
  orders: OrderPageResult;
  order: Order;
  papers: PaperPageResult;
  paper: Paper;
  permissions: PermissionPageResult;
  permission?: Maybe<Permission>;
  permissionReload?: Maybe<Scalars["Boolean"]>;
  photos: PhotoPageResult;
  photo: Photo;
  photoGroups: PhotoGroupPageResult;
  photoGroup: PhotoGroup;
  pointReadLists: Array<Array<PointRead>>;
  pointRead: PointRead;
  presss: Array<Maybe<Press>>;
  press: Press;
  products: Array<Product>;
  programs: ProgramPageResult;
  program: Program;
  publishes: PublishPageResult;
  publishesLatest: Array<Publish>;
  publish: Publish;
  publishLog?: Maybe<Scalars["Boolean"]>;
  publishDetection: Publish;
  questions: QuestionPageResult;
  question: Question;
  rewards: RewardPageResult;
  reward: Reward;
  screens: ScreenPageResult;
  screenByGarden?: Maybe<Screen>;
  screen: Screen;
  seoRecords: SeoRecordPageResult;
  seoRecord: SeoRecord;
  settings: Array<Setting>;
  setting: Setting;
  settles: SettlePageResult;
  settle: Settle;
  sprites: SpritePageResult;
  sprite: Sprite;
  spriteGardenValid?: Maybe<Garden>;
  spriteIframeHash: Scalars["String"];
  teachers: TeacherPageResult;
  teacher: Teacher;
  timePlans: TimePlanPageResult;
  timePlan: TimePlan;
  trainings: TrainingPageResult;
  training: Training;
  units: UnitPageResult;
  unit: Unit;
  weUsers: WeUserPageResult;
  weUser: WeUser;
};

export type QueryKidsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  trueName?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  birthDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type QueryKidsNotToTrainingArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  trueName?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  birthDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type QueryKidArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryUsersArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  type?: Maybe<UserType>;
  userName?: Maybe<Scalars["String"]>;
  trueName?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  mobile?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryCanInputArgs = {
  userName?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
};

export type QueryUserLogsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  userOp?: Maybe<UserOp>;
  platform?: Maybe<Scalars["String"]>;
  client?: Maybe<Scalars["String"]>;
  ip?: Maybe<Scalars["String"]>;
  userAgent?: Maybe<Scalars["String"]>;
  header?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type QueryUserLogsByUserArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  userOp?: Maybe<UserOp>;
  platform: Scalars["String"];
  client?: Maybe<Scalars["String"]>;
  ip?: Maybe<Scalars["String"]>;
  userAgent?: Maybe<Scalars["String"]>;
  header?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type QueryAdminsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryAdminArgs = {
  id: Scalars["Int"];
};

export type QueryAdwardPapersArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryAdwardPaperArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryAlbumsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  garden?: Maybe<GardenInput>;
  playType?: Maybe<PlayType>;
  category?: Maybe<CategoryInput>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type QueryAlbumArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryAppsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  garden?: Maybe<GardenInput>;
  name?: Maybe<Scalars["String"]>;
};

export type QueryAppArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryBannersArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  productCode?: Maybe<ProductCode>;
};

export type QueryBannerArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryBooksArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  category?: Maybe<CategoryInput>;
  bookType?: Maybe<BookType>;
  grade?: Maybe<Grade>;
  name?: Maybe<Scalars["String"]>;
};

export type QueryBookArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryCacheKeysArgs = {
  pattern: Scalars["String"];
};

export type QueryCacheValueArgs = {
  key: Scalars["String"];
};

export type QueryCategoriesArgs = {
  type: CategoryType;
  garden?: Maybe<GardenInput>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
};

export type QueryCategoryArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryShortcutsArgs = {
  garden?: Maybe<GardenInput>;
};

export type QueryCommentsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  content?: Maybe<Scalars["String"]>;
};

export type QueryCommentArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryCoursesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
};

export type QueryCourseArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryDatePlansArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  training?: Maybe<TrainingInput>;
};

export type QueryDatePlanArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryDevicesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  garden?: Maybe<GardenInput>;
  code?: Maybe<Scalars["String"]>;
};

export type QueryDeviceArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryDeviceLogsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryDeviceLogArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryExercisesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryExerciseArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryFavoritesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryFavoriteArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryFeedbacksArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  productCode?: Maybe<ProductCode>;
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  keyword?: Maybe<Scalars["String"]>;
};

export type QueryFeedbackArgs = {
  id: Scalars["Int"];
};

export type QueryGardensArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  gardenType?: Maybe<GardenType>;
};

export type QueryGardenArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryGardenByCodeArgs = {
  code: Scalars["String"];
};

export type QueryHomeworksArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  content?: Maybe<Scalars["String"]>;
  training?: Maybe<TrainingInput>;
};

export type QueryHomeworkArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryHomeworkRecordsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  homework?: Maybe<HomeworkInput>;
  content?: Maybe<Scalars["String"]>;
};

export type QueryHomeworkRecordArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryIconDiysArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  type?: Maybe<Scalars["String"]>;
  isParent?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
};

export type QueryIconDiyArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryIncomeSettingsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryIncomeSettingArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryIssuesArgs = {
  productCode: ProductCode;
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryIssueArgs = {
  id: Scalars["Int"];
};

export type QueryKemusArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryKemuArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryLessonsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  unit?: Maybe<UnitInput>;
  name?: Maybe<Scalars["String"]>;
};

export type QueryLessonArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryNotifiesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  title?: Maybe<Scalars["String"]>;
  productCode?: Maybe<ProductCode>;
};

export type QueryNotifyArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryOrdersArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  sn?: Maybe<Scalars["String"]>;
  money?: Maybe<Scalars["Int"]>;
  paymentType?: Maybe<PaymentType>;
};

export type QueryOrderArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPapersArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryPaperArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPermissionsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryPermissionArgs = {
  id: Scalars["Int"];
};

export type QueryPhotosArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryPhotoArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPhotoGroupsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  training?: Maybe<TrainingInput>;
  name?: Maybe<Scalars["String"]>;
};

export type QueryPhotoGroupArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPointReadListsArgs = {
  lesson: LessonInput;
};

export type QueryPointReadArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPresssArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryPressArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryProgramsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type QueryProgramArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPublishesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryPublishArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPublishLogArgs = {
  id: Scalars["Int"];
  createdDate: Scalars["Date"];
};

export type QueryPublishDetectionArgs = {
  productCode: ProductCode;
  version: Scalars["String"];
};

export type QueryQuestionsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryQuestionArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryRewardsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryRewardArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryScreensArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  garden?: Maybe<GardenInput>;
  productCode?: Maybe<ProductCode>;
};

export type QueryScreenByGardenArgs = {
  garden: GardenInput;
  type: ScreenType;
};

export type QueryScreenArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QuerySeoRecordsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  kid?: Maybe<KidInput>;
};

export type QuerySeoRecordArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QuerySettingArgs = {
  id: Scalars["Int"];
};

export type QuerySettlesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QuerySettleArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QuerySpritesArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QuerySpriteArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QuerySpriteGardenValidArgs = {
  gardenId: Scalars["Int"];
};

export type QueryTeachersArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryTeacherArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryTimePlansArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryTimePlanArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryTrainingsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
};

export type QueryTrainingArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryUnitsArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  book: BookInput;
  name?: Maybe<Scalars["String"]>;
};

export type QueryUnitArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryWeUsersArgs = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type QueryWeUserArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type Question = {
  id: Scalars["Int"];
  title: Scalars["String"];
  options: Array<Scalars["String"]>;
  abcd?: Maybe<Array<Maybe<Letter>>>;
  reason?: Maybe<Scalars["String"]>;
  status?: Maybe<OnOffStatus>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type QuestionPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Question>;
};

export type Rect = {
  x: Scalars["Float"];
  y: Scalars["Float"];
  width: Scalars["Float"];
  height: Scalars["Float"];
};

export type RectInput = {
  x: Scalars["Float"];
  y: Scalars["Float"];
  width: Scalars["Float"];
  height: Scalars["Float"];
};

export enum ReviewGrade {
  Best = "best",
  Better = "better",
  Good = "good",
  Normal = "normal",
  Bad = "bad",
  Worse = "worse",
  Worst = "worst",
  Marked = "marked"
}

export type Reward = {
  id: Scalars["Int"];
  money: Scalars["Int"];
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type RewardPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Reward>;
};

export enum RoleAuth {
  None = "none",
  Guest = "guest",
  Member = "member",
  Teacher = "teacher",
  Garden = "garden",
  Admin = "admin",
  Hyper = "hyper"
}

export enum RoleVer {
  Free = "free",
  Latest = "latest",
  Beta = "beta",
  Alpha = "alpha",
  Dev = "dev"
}

export type Route = {
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Route>>;
};

export enum RunStatus {
  Padding = "padding",
  Running = "running",
  Overdue = "overdue"
}

export type Screen = {
  id: Scalars["Int"];
  productCode: ProductCode;
  name?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  borderBottom?: Maybe<Scalars["String"]>;
  titleColor?: Maybe<Scalars["String"]>;
  textColor?: Maybe<Scalars["String"]>;
  link: Scalars["String"];
  status: OnOffStatus;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  sorting?: Maybe<Scalars["Int"]>;
  type?: Maybe<ScreenType>;
};

export type ScreenPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Screen>;
};

export enum ScreenType {
  ScreenFirst = "ScreenFirst",
  ScreenSecond = "ScreenSecond",
  ScreenThird = "ScreenThird",
  ScreenSetting = "ScreenSetting",
  ScreenAlert = "ScreenAlert"
}

export type SeoRecord = {
  id: Scalars["Int"];
  accuracy: Scalars["Float"];
  book?: Maybe<Book>;
  lesson?: Maybe<Lesson>;
  pointRead?: Maybe<PointRead>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
};

export type SeoRecordPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<SeoRecord>;
};

export type SessionLogsMessage = {
  prev: Array<SessionLogsMessage>;
  methodName: Scalars["String"];
  productCode: Scalars["String"];
  timestamp: Scalars["Date"];
};

export type Setting = {
  id: Scalars["Int"];
  productCode: ProductCode;
  module: Module;
  name: Scalars["String"];
  value: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  admin?: Maybe<Admin>;
};

export type Settle = {
  id: Scalars["Int"];
  name: Scalars["String"];
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type SettlePageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Settle>;
};

export type Shortcut = {
  id?: Maybe<Scalars["Int"]>;
  type?: Maybe<ShortcutType>;
  category?: Maybe<Category>;
  appLink?: Maybe<AppLink>;
};

export type ShortcutInput = {
  id: Scalars["Int"];
  type: ShortcutType;
  sorting: Scalars["Int"];
};

export enum ShortcutType {
  Category = "category",
  AppLink = "appLink"
}

export type Sprite = {
  id: Scalars["Int"];
  name: Scalars["String"];
  userId?: Maybe<Scalars["String"]>;
  productId: Scalars["Int"];
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type SpritePageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Sprite>;
};

export enum Status {
  Pending = "pending",
  Success = "success",
  Fail = "fail"
}

export enum SubmitType {
  Any = "any",
  Photo = "photo",
  Audio = "audio",
  Video = "video"
}

export type Subscription = {
  sessionLogsLatest: SessionLogsMessage;
  publishBuild?: Maybe<PublishBuildMessage>;
  publishLatest: Publish;
};

export type SubscriptionSessionLogsLatestArgs = {
  productCode: ProductCode;
  token: Scalars["String"];
};

export type SubscriptionPublishLatestArgs = {
  productCode: ProductCode;
  version: Scalars["String"];
};

export type Teacher = {
  id: Scalars["Int"];
  trueName: Scalars["String"];
  avatar: Scalars["String"];
  mobile: Scalars["String"];
  weUser?: Maybe<WeUser>;
  kemus: Array<Kemu>;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate: Scalars["Date"];
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type TeacherInput = {
  id: Scalars["Int"];
};

export type TeacherPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Teacher>;
};

export type TimePlan = {
  id: Scalars["Int"];
  day: Scalars["Int"];
  place?: Maybe<Scalars["String"]>;
  startTime?: Maybe<Scalars["String"]>;
  endTime?: Maybe<Scalars["String"]>;
  datePlan?: Maybe<DatePlan>;
  status?: Maybe<OnOffStatus>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type TimePlanPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<TimePlan>;
};

export type Training = {
  id: Scalars["Int"];
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  status?: Maybe<OnOffStatus>;
  kids: Array<Kid>;
  courses: Array<Course>;
  garden?: Maybe<Garden>;
  runStatus?: Maybe<RunStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  admin?: Maybe<Admin>;
  teachers: Array<Teacher>;
  weUsers?: Maybe<Array<WeUser>>;
};

export type TrainingInput = {
  id: Scalars["Int"];
};

export type TrainingPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Training>;
};

export type Unit = {
  id: Scalars["Int"];
  name: Scalars["String"];
  lessons: Array<Lesson>;
  book?: Maybe<Book>;
  garden?: Maybe<Garden>;
  status?: Maybe<OnOffStatus>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type UnitInput = {
  id: Scalars["Int"];
};

export type UnitNameInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type UnitPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<Unit>;
};

export type User = {
  id: Scalars["Int"];
  email?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  qq?: Maybe<Scalars["String"]>;
  wechat?: Maybe<Scalars["String"]>;
  userName?: Maybe<Scalars["String"]>;
  trueName?: Maybe<Scalars["String"]>;
  shortName?: Maybe<Scalars["String"]>;
  nickName?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  type?: Maybe<UserType>;
  status?: Maybe<OnOffStatus>;
  gender?: Maybe<Gender>;
  birthDate?: Maybe<Scalars["Date"]>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
  device?: Maybe<Device>;
  devices?: Maybe<Array<Device>>;
  courses?: Maybe<Array<Course>>;
  password?: Maybe<Scalars["String"]>;
  roleVer: RoleVer;
  roleAuth: RoleAuth;
};

export type UserInput = {
  id: Scalars["Int"];
};

export type UserLog = {
  id?: Maybe<Scalars["Int"]>;
  userOp?: Maybe<Scalars["String"]>;
  userAgent?: Maybe<Scalars["String"]>;
  header?: Maybe<Scalars["String"]>;
  client?: Maybe<Scalars["String"]>;
  ip?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  platform?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["Date"]>;
};

export type UserLogPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<UserLog>;
};

export enum UserOp {
  All = "all",
  Login = "login",
  Logout = "logout",
  Profile = "profile"
}

export type UserPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<User>;
};

export enum UserType {
  All = "all",
  Real = "real",
  Test = "test",
  Demo = "demo"
}

export type WeUser = {
  id: Scalars["Int"];
  trueName?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  nickName: Scalars["String"];
  city: Scalars["String"];
  province: Scalars["String"];
  avatarUrl: Scalars["String"];
  /** openId: String! 相当于密码，不可以返回到老师端 */
  gender: Gender;
  role: WeUserRole;
  opStatus: OpStatus;
  shareId: Scalars["String"];
  user?: Maybe<User>;
  kid?: Maybe<Kid>;
  teacher?: Maybe<Teacher>;
  garden?: Maybe<Garden>;
  createdDate?: Maybe<Scalars["Date"]>;
  updatedDate?: Maybe<Scalars["Date"]>;
};

export type WeUserInput = {
  id: Scalars["Int"];
};

export type WeUserLoginResult = {
  weUser: WeUser;
  loginInfo: LoginInfo;
  authInfo: AuthInfo;
};

export type WeUserPageResult = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  total: Scalars["Int"];
  items: Array<WeUser>;
};

export enum WeUserRole {
  None = "none",
  Admin = "admin",
  Teacher = "teacher",
  User = "user",
  Kid = "kid"
}

export type WxLoginResult = {
  session_key?: Maybe<Scalars["String"]>;
  openId?: Maybe<Scalars["String"]>;
  errcode?: Maybe<Scalars["String"]>;
  errmsg?: Maybe<Scalars["String"]>;
};
export type AdminLoginMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type AdminLoginMutation = { __typename?: "Mutation" } & {
  adminLogin: Maybe<
    { __typename?: "AdminLoginResult" } & {
      admin: { __typename?: "Admin" } & Pick<Admin, "id" | "email"> & {
          garden: { __typename?: "Garden" } & Pick<
            Garden,
            "id" | "code" | "name"
          >;
        };
      loginInfo: { __typename?: "LoginInfo" } & Pick<
        LoginInfo,
        "token" | "expiration"
      >;
      authInfo: { __typename?: "AuthInfo" } & Pick<AuthInfo, "moduleNames"> & {
          routes: Array<
            { __typename?: "Route" } & Pick<Route, "name" | "icon" | "path"> & {
                children: Maybe<
                  Array<
                    { __typename?: "Route" } & Pick<
                      Route,
                      "name" | "icon" | "path"
                    >
                  >
                >;
              }
          >;
        };
    }
  >;
};

export type DashboardQueryVariables = {};

export type DashboardQuery = { __typename?: "Query" } & {
  dashboard: { __typename?: "Dashboard" } & {
    user: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    banner: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    screen: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    feedback: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total" | "todo">
    >;
    course: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    admin: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    issue: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    album: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    program: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    kid: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total" | "todo">
    >;
    device: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    garden: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total">
    >;
    training: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total" | "todo">
    >;
    homeworkRecord: Maybe<
      { __typename?: "DashboardItem" } & Pick<DashboardItem, "total" | "todo">
    >;
    app: Maybe<{ __typename?: "DashboardItem" } & Pick<DashboardItem, "total">>;
  };
};

export type GardenByCodeQueryVariables = {
  code: Scalars["String"];
};

export type GardenByCodeQuery = { __typename?: "Query" } & {
  gardenByCode: Maybe<
    { __typename?: "Garden" } & Pick<
      Garden,
      "id" | "name" | "code" | "city" | "cover" | "wechat" | "qcode"
    >
  >;
};

export type SpriteIframeHashQueryVariables = {};

export type SpriteIframeHashQuery = { __typename?: "Query" } & Pick<
  Query,
  "spriteIframeHash"
>;

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

export const AdminLoginDocument = gql`
  mutation adminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      admin {
        id
        email
        garden {
          id
          code
          name
        }
      }
      loginInfo {
        token
        expiration
      }
      authInfo {
        moduleNames
        routes {
          name
          icon
          path
          children {
            name
            icon
            path
          }
        }
      }
    }
  }
`;

export class AdminLoginComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<AdminLoginMutation, AdminLoginMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<AdminLoginMutation, AdminLoginMutationVariables>
        mutation={AdminLoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type AdminLoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AdminLoginMutation, AdminLoginMutationVariables>
> &
  TChildProps;
export type AdminLoginMutationFn = ReactApollo.MutationFn<
  AdminLoginMutation,
  AdminLoginMutationVariables
>;
export function withAdminLogin<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AdminLoginMutation,
        AdminLoginMutationVariables,
        AdminLoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    AdminLoginMutation,
    AdminLoginMutationVariables,
    AdminLoginProps<TChildProps>
  >(AdminLoginDocument, operationOptions);
}
export const DashboardDocument = gql`
  query dashboard {
    dashboard {
      user {
        total
      }
      banner {
        total
      }
      screen {
        total
      }
      feedback {
        total
        todo
      }
      course {
        total
      }
      admin {
        total
      }
      issue {
        total
      }
      album {
        total
      }
      program {
        total
      }
      kid {
        total
        todo
      }
      device {
        total
      }
      garden {
        total
      }
      training {
        total
        todo
      }
      homeworkRecord {
        total
        todo
      }
      app {
        total
      }
    }
  }
`;

export class DashboardComponent extends React.Component<
  Partial<ReactApollo.QueryProps<DashboardQuery, DashboardQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<DashboardQuery, DashboardQueryVariables>
        query={DashboardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<DashboardQuery, DashboardQueryVariables>
> &
  TChildProps;
export function withDashboard<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardQuery,
        DashboardQueryVariables,
        DashboardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardQuery,
    DashboardQueryVariables,
    DashboardProps<TChildProps>
  >(DashboardDocument, operationOptions);
}
export const GardenByCodeDocument = gql`
  query gardenByCode($code: String!) {
    gardenByCode(code: $code) {
      id
      name
      code
      city
      cover
      wechat
      qcode
    }
  }
`;

export class GardenByCodeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GardenByCodeQuery, GardenByCodeQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GardenByCodeQuery, GardenByCodeQueryVariables>
        query={GardenByCodeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GardenByCodeProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GardenByCodeQuery, GardenByCodeQueryVariables>
> &
  TChildProps;
export function withGardenByCode<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GardenByCodeQuery,
        GardenByCodeQueryVariables,
        GardenByCodeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GardenByCodeQuery,
    GardenByCodeQueryVariables,
    GardenByCodeProps<TChildProps>
  >(GardenByCodeDocument, operationOptions);
}
export const SpriteIframeHashDocument = gql`
  query spriteIframeHash {
    spriteIframeHash
  }
`;

export class SpriteIframeHashComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      SpriteIframeHashQuery,
      SpriteIframeHashQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<SpriteIframeHashQuery, SpriteIframeHashQueryVariables>
        query={SpriteIframeHashDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SpriteIframeHashProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SpriteIframeHashQuery, SpriteIframeHashQueryVariables>
> &
  TChildProps;
export function withSpriteIframeHash<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SpriteIframeHashQuery,
        SpriteIframeHashQueryVariables,
        SpriteIframeHashProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    SpriteIframeHashQuery,
    SpriteIframeHashQueryVariables,
    SpriteIframeHashProps<TChildProps>
  >(SpriteIframeHashDocument, operationOptions);
}
