import { AiFillTrophy } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import Blank from "../../../commons/Blank";
import CoachingUsSidebar from "../sidebar/CoachingUsSidebar.Container";
import * as S from "./CoachingUsCoaches.Style";

export default function CoachingUsCoachUI(props) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebar />
      </S.LeftSideBar>
      <S.CoachessBody>
        <p>Coach Ranking</p>
        <S.PeriodTags>
          {props.period.map((tag, index) => (
            <S.Tag
              onClick={() => {
                props.SendQuery(tag);
              }}
              isCurrent={
                props.isCurrentTag
                  ? props.isCurrentTag === tag
                  : tag === "Today"
              }
              key={index}
            >
              {tag}
            </S.Tag>
          ))}
        </S.PeriodTags>
        <Blank height="20px" />
        <S.MyRanking>
          <S.RestRanking2>
            <S.RankingNum>
              <p>{props.myList.ranking} </p>
              <p>
                {props.myList.changeRanking > 0 ? (
                  <S.IsUpDown style={{ color: "blue" }}>
                    {"▲"}&nbsp;
                    {props.myList.changeRanking}
                  </S.IsUpDown>
                ) : (
                  <S.IsUpDown style={{ color: "red" }}>
                    {"▼"}
                    {props.myList.changeRanking}
                  </S.IsUpDown>
                )}
              </p>
            </S.RankingNum>
            <S.TrophyBox>
              <AiFillTrophy style={{ width: "30px", height: "30px" }} />
              <S.MyText>내 순위</S.MyText>
            </S.TrophyBox>
            <S.ProfileBox>
              <S.RestCoachPicture></S.RestCoachPicture>
              <Blank width="20px" />
              <S.RestCoachText>
                <p>{props.myList.name}</p>
                <p>Lv.{Math.ceil(props.myList.score / 100)}</p>
              </S.RestCoachText>
            </S.ProfileBox>
            {/* <Blank width="150px" /> */}
            <S.RestCoachScore>
              <S.ScoreBox>
                {props.myList.score}점 <Blank width="10px" />
                {props.myList.changeRating > 0 ? (
                  <S.ChangeRate style={{ color: "red" }}>
                    {" "}
                    +{props.myList.changeRating}
                  </S.ChangeRate>
                ) : (
                  <S.ChangeRate style={{ color: "blue" }}>
                    {props.myList.changeRating}
                  </S.ChangeRate>
                )}
              </S.ScoreBox>
              <S.MyPageBtn2 onClick={props.moveToPage("/mypage")}>
                마이페이지
              </S.MyPageBtn2>
            </S.RestCoachScore>
          </S.RestRanking2>
        </S.MyRanking>
        <Blank height="50px" />

        <S.BestRankingCoach>
          {props.coachList.map((best, index) => (
            <>
              {index < 3 && (
                <S.BestRankingCoaches>
                  <S.ImageBox>
                    <img src={props.medal[index]} />
                  </S.ImageBox>

                  <S.CoachPicture></S.CoachPicture>
                  <Blank height="15px" />
                  <S.CoachName>{best.name}</S.CoachName>
                  <Blank height="5px" />
                  <S.CoachScore>{best.score}점</S.CoachScore>
                </S.BestRankingCoaches>
              )}
            </>
          ))}
        </S.BestRankingCoach>
        <Blank height="50px" />
        <S.RestRankingBox>
          {props.coachList.map((best, index) => (
            <>
              {index >= 3 && (
                <S.RestRanking>
                  <S.RankingNum>
                    <p>{index + 1} </p>
                    <p>
                      {best.changeRanking > 0 ? (
                        <S.IsUpDown style={{ color: "red" }}>
                          {"▲"}&nbsp;
                          {best.changeRanking}
                        </S.IsUpDown>
                      ) : (
                        <S.IsUpDown style={{ color: "blue" }}>
                          {"▼"}
                          {best.changeRanking}
                        </S.IsUpDown>
                      )}
                    </p>
                  </S.RankingNum>
                  {/* <Blank width="150px" /> */}
                  <S.ProfileBox>
                    <S.RestCoachPicture></S.RestCoachPicture>
                    <Blank width="20px" />
                    <S.RestCoachText>
                      <p>{best.name}</p>
                      <p>Lv.{Math.ceil(best.score / 100)}</p>
                    </S.RestCoachText>
                  </S.ProfileBox>
                  {/* <Blank width="150px" /> */}
                  <S.RestCoachScore>
                    <S.ScoreBox>
                      {best.score}점 <Blank width="10px" />
                      {best.changeRating > 0 ? (
                        <S.ChangeRate style={{ color: "red" }}>
                          {" "}
                          +{best.changeRating}
                        </S.ChangeRate>
                      ) : (
                        <S.ChangeRate style={{ color: "blue" }}>
                          {best.changeRating}
                        </S.ChangeRate>
                      )}
                    </S.ScoreBox>
                    <S.MyPageBtn
                      onClick={props.moveToPage("/coachingus/coaches/0")}
                    >
                      코치 보러가기
                    </S.MyPageBtn>
                  </S.RestCoachScore>
                </S.RestRanking>
              )}
            </>
          ))}
        </S.RestRankingBox>
        <S.BottonBox>
          <S.LoadMoreBtn>
            <MdExpandMore onClick={props.onLoadMore} size="50px" />
          </S.LoadMoreBtn>
        </S.BottonBox>
      </S.CoachessBody>
    </S.Wrapper>
  );
}
