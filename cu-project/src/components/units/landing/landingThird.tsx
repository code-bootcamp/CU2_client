import styled from "@emotion/styled";
import Color from "../../../commons/styles/color";
import { breakPoints } from "../../../commons/styles/media";
import Blank from "../../commons/Blank";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 30px;
  margin: 0;
  text-align: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${Color.medium};
  text-align: center;
`;

export default function ThirdPage() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>질문과 답변으로 지식을 쌓으세요 📚</Title>
        <Blank height="10px" />
        <SubTitle>
          혼자서 공부하면서 생기는 고민들은 현직 개발자에게 질문해보세요!{" "}
        </SubTitle>
        <Blank height="100px" />
        <ImageBox>
          <svg
            width="767"
            height="344"
            viewBox="0 0 767 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31 16C19.402 16 10 25.402 10 37V130V134V199.07C10 201.076 12.6237 201.833 13.6925 200.135L42.1111 155H463C474.598 155 484 145.598 484 134V37C484 25.402 474.598 16 463 16H31Z"
              fill="#DBDBDB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 0C9.40202 0 0 9.40202 0 21V114V118V183.07C0 185.076 2.62369 185.833 3.69247 184.135L32.1111 139H453C464.598 139 474 129.598 474 118V21C474 9.40202 464.598 0 453 0H21Z"
              fill="#9EC5FF"
            />
            <g filter="url(#filter0_d_72_54)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M742 336C753.598 336 763 326.598 763 315V222V218V152.93C763 150.924 760.376 150.167 759.308 151.865L730.889 197H310C298.402 197 289 206.402 289 218V315C289 326.598 298.402 336 310 336H742Z"
                fill="#DBDBDB"
              />
            </g>
            <g filter="url(#filter1_d_72_54)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M727 319.073C738.598 319.073 748 309.671 748 298.073V205.073V201.073V136.004C748 133.998 745.376 133.241 744.308 134.938L715.889 180.073H295C283.402 180.073 274 189.476 274 201.073V298.073C274 309.671 283.402 319.073 295 319.073H727Z"
                fill="#D5BDF2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_72_54"
                x="285"
                y="150.927"
                width="482"
                height="193.073"
                filterUnits="userSpaceOnUse"
                colorInterpolation-filters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_72_54"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_72_54"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_72_54"
                x="270"
                y="134"
                width="482"
                height="193.073"
                filterUnits="userSpaceOnUse"
                colorInterpolation-filters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_72_54"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_72_54"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </ImageBox>
      </TitleBox>
    </Wrapper>
  );
}
