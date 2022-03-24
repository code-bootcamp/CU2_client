import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border-radius: 100%;
  transform: rotate(180deg);
  margin-left: -25px;
  .circular {
    height: 60px;
    width: 60px;
    position: relative;
    /* border: solid green 1px; */
  }
  .circular .inner {
    position: absolute;
    z-index: 6;
    top: 50%;
    left: 50%;
    height: 48px;
    width: 48px;
    margin: -24px 0 0 -24px;
    background: white;
    border-radius: 100%;
  }
  .circular .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    font-size: 18px;
    font-weight: 500;
    color: #4158d0;
  }
  .circular .bar {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #fff;
    -webkit-border-radius: 100%;
    clip: rect(0px, 60px, 60px, 30px);
  }
  .circle .bar .progress {
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-border-radius: 100%;
    clip: rect(0px, 30px, 60px, 0px);
    background: pink;
  }

  .circle .right {
    transform: rotate(180deg);
    z-index: 3;
  }
  .circle .left .progress {
    z-index: 1;
    animation: left 1s linear both;
  }
  .circle .right .progress {
    animation: right 1s linear both;
    animation-delay: 1s;
  }
  @keyframes right {
    100% {
      transform: rotate(-150deg);
    }
  }
  @keyframes left {
    100% {
      transform: rotate(-180deg);
    }
  }
`;

export default function CoachingUsProfileRate() {
  return (
    <Wrapper>
      <div className="circular">
        <div className="inner"></div>
        <div className="circle">
          <div className="bar left">
            <div className="progress"></div>
          </div>
          <div className="bar right">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
