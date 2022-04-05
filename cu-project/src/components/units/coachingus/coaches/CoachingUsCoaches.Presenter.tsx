import { AiFillTrophy } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
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

        <Blank height="20px" />
        {props.isCoach && (
          <S.MyRanking>
            <S.RestRanking2>
              <S.RankingNum>
                <p>{props.myRanking} </p>
              </S.RankingNum>

              <S.TrophyBox>
                <AiFillTrophy style={{ width: "30px", height: "30px" }} />
                <S.MyText>내 순위</S.MyText>
              </S.TrophyBox>
              <S.ProfileBox>
                <S.RestCoachPicture>
                  <BsFillPersonFill style={{ width: "40px", height: "40px" }} />
                </S.RestCoachPicture>
                <Blank width="20px" />
                <S.RestCoachText>
                  <p>{props.myList?.name}</p>
                  <p>Lv.{Math.ceil(props.myList?.score / 100)}</p>
                </S.RestCoachText>
              </S.ProfileBox>
              {/* <Blank width="150px" /> */}
              <S.RestCoachScore>
                <S.ScoreBox>
                  {props.myList?.score}점 <Blank width="10px" />
                </S.ScoreBox>
                <S.MyPageBtn2 onClick={props.moveToPage("/mypage")}>
                  마이페이지
                </S.MyPageBtn2>
              </S.RestCoachScore>
            </S.RestRanking2>
          </S.MyRanking>
        )}
        <Blank height="50px" />

        <S.BestRankingCoach>
          {props.coachList?.map((best, index) => (
            <>
              {index < 3 && (
                <S.BestRankingCoaches
                  onClick={() =>
                    props.router.push(`/coachingus/coaches/${best.id}`)
                  }
                >
                  <S.ImageBox>
                    <img src={props.medal[index]} />
                  </S.ImageBox>

                  <S.CoachPicture>
                    <BsFillPersonFill
                      style={{ width: "80px", height: "80px" }}
                    />
                  </S.CoachPicture>
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
                <S.RestRanking isMyInfo={best.id === props.myList?.id}>
                  <S.RankingNum>
                    <p>{index + 1} </p>
                  </S.RankingNum>
                  {/* <Blank width="150px" /> */}
                  <S.ProfileBox>
                    <S.RestCoachPicture>
                      <BsFillPersonFill
                        style={{ width: "40px", height: "40px" }}
                      />
                    </S.RestCoachPicture>
                    <Blank width="20px" />
                    <S.RestCoachText isMyInfo={best.id === props.myList?.id}>
                      <p>{best.name}</p>
                      <p>Lv.{Math.ceil(best.score / 100)}</p>
                    </S.RestCoachText>
                  </S.ProfileBox>
                  {/* <Blank width="150px" /> */}
                  <S.RestCoachScore>
                    <S.ScoreBox>
                      {best.score}점 <Blank width="10px" />
                    </S.ScoreBox>
                    <S.MyPageBtn
                      isMyInfo={best.id === props.myList?.id}
                      onClick={props.moveToPage(
                        `/coachingus/coaches/${best.id}`
                      )}
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
          {props.isActive && (
            <S.LoadMoreBtn>
              <MdExpandMore onClick={props.onLoadMore} size="50px" />
            </S.LoadMoreBtn>
          )}
        </S.BottonBox>
      </S.CoachessBody>
    </S.Wrapper>
  );
}
