import { ICodingUsBlogUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import UserCard from "../card/UserCard";
import * as S from "./CodingUsBlog.Style";
export default function CodingUsBlogUI(props: ICodingUsBlogUIProps) {
  return (
    <div style={{backgroundColor: "#BDBDBD", width:"100vw", height: "100vh"}}>
      <Blank width="50px" />
      <Blank height="50px" />
      <UserCard
        width={387}
        id={"asd"}
        height={521}
        name={"crazyUs"}
        stackList={["JavaScript", "CSS3", "HTML5"]}
        title={"제목입니다~"}
        contents={
          "모든 국민은 학문과 예술의 자유를 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의…"
        }
        tags={["Java", "CSS", "개발"]}
        image={"https://source.unsplash.com/random"}
        followCount={5}
        commentCount={12}
        isFollowed={false}
        place={3}
        createdAt={"2022-03-18T 16:00:00"}
        avatar={"https://source.unsplash.com/random"}
      ></UserCard>
    </div>
  );
}
