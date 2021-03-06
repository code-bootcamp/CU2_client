import styled from "@emotion/styled";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaBloggerB, FaCommentDots } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import Color from "../../../commons/styles/color";
import { breakPoints } from "../../../commons/styles/media";
import Blank from "../../commons/Blank";

type Iprops = { width: string };

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Color.light};
  @media ${breakPoints.tablet} {
    min-width: 100%;
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  opacity: 0;
  animation: ${(props: { isPresent: boolean }) => props.isPresent && "fadeIn 3s forwards 0.5s"};
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
const Motto = styled.div`
  font-size: 18px;
  opacity: 0;
  line-height: 32px;
  color: ${Color.medium};
  animation: ${(props: { isPresent: boolean }) => props.isPresent && "fadeIn 3s forwards 0.5s"};
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const Service = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 24px;
    font-weight: 700;
  }
  & span {
    color: ${Color.medium};
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }
`;

const ServiceName = styled.div`
  display: flex;
  align-items: center;
  color: ${Color.main};
  font-size: 24px;
  font-weight: 700;
`;

const Ball = styled.div`
  width: 5px;
  height: 5px;
  background: ${Color.main};
  border-radius: 50%;
`;

const Line = styled.div`
  border-bottom: 1px solid ${Color.main};
  width: ${(props: Iprops) => props.width};
  height: 1px;
`;

const ServiceBox = styled.div`
  width: ${(props: Iprops) => props.width};
  display: flex;
  justify-content: space-around;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: ${(props: Iprops) => props.width};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SecondPage() {
  const [ref, inView] = useInView();

  return (
    <Wrapper>
      <Logo isPresent={inView} src="/CU2_LOGO2.png" width={287} />
      <Blank height="10px" />
      <Motto isPresent={inView}>
        ?????? ???????????? Self Study Solution??? ???????????? CU2
      </Motto>
      <Blank height="70px" />
      <BodyWrapper>
        <Box width={"544px"}>
          <ServiceName ref={ref}>
            <Ball />
            <Line width={"70px"} />
            <Blank width="15px" />
            CodingUs
            <Blank width="15px" />
            <Line width={"70px"} />
            <Ball />
          </ServiceName>
          <ServiceBox width="100%">
            <Service>
              <Blank height="75px" />
              <FaBloggerB size={50} />
              <Blank height="30px" />
              <p>Blog</p>
              <Blank height="25px" />
              <span>
                ????????? ??? ?????? ?????? ???????????????? ??????????????? ?????? ????????? ???????????????
                ????????? ??? ????????? ?????? ??????????????????!
              </span>
            </Service>
            <Service>
              <Blank height="75px" />
              <AiFillQuestionCircle size={50} />
              <Blank height="30px" />
              <p>{`Stack Q&A`}</p>
              <Blank height="25px" />
              <span>
                ?????? ????????????????????? ????????? ????????? ????????? ?????? ???????????????
                ???????????????!
              </span>
            </Service>
          </ServiceBox>
        </Box>
        <Blank width="30px" />
        <Box width={"826px"}>
          <ServiceName>
            <Ball />
            <Line width={"195px"} />
            <Blank width="15px" />
            CoachingUs
            <Blank width="15px" />
            <Line width={"195px"} />
            <Ball />
          </ServiceName>
          <ServiceBox width="100%">
            <Service>
              <Blank height="75px" />
              <BsPersonCircle size={50} />
              <Blank height="30px" />
              <p>Coaches</p>
              <Blank height="25px" />
              <span>
                ?????????????????? ??????, ????????? ?????? ?????? ?????? ???????????? ???????????????.
              </span>
            </Service>
            <Service>
              <Blank height="75px" />
              <FaCommentDots size={50} />
              <Blank height="30px" />
              <p>Comments</p>
              <Blank height="25px" />
              <span>
                ??????????????? ????????? ????????? ?????? ???????????????! ?????? ???????????????
                ???????????? ?????? ?????? ?????????????????????.
              </span>
            </Service>
            <Service>
              <Blank height="75px" />
              <IoNewspaperSharp size={50} />
              <Blank height="30px" />
              <p>Columns</p>
              <Blank height="25px" />
              <span>
                ???????????? ???????????? ????????? ?????? ????????????. ?????? ??? ????????????
                ??????????????? ?????????????????? ???????????? ???????????????!
              </span>
            </Service>
          </ServiceBox>
        </Box>
      </BodyWrapper>
    </Wrapper>
  );
}
