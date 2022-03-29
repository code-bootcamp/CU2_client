import Blank from "../../../../commons/Blank";
import * as S from "./CoachRegister.Style";
import { Button, Radio } from "antd";
import "antd/dist/antd.css";

export default function CoachRegisterUI(props) {
  return (
    <S.Wrapper>
      <S.RegisterImg src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202110/21/newswire/20211021230703945chkm.jpg" />
      <Blank width="30px" />
      <S.RegisterForm>
        <S.FormTitle>
          {props.isEdit ? `코치 정보 수정하기` : `코치 지원하기`}
        </S.FormTitle>
        <S.FormSubTitle>당신의 경험이 우리를 성장시킵니다.</S.FormSubTitle>
        <S.FormInput type="text" placeholder="회사명" />
        <S.FormInput type="text" placeholder="직무" />
        <S.FormInput type="text" placeholder="직책" />
        <S.FormInput type="text" placeholder="경력" />
        <div>
          (필수) 기업 유형을 선택해주세요
          <Blank height="10px" />
          <Radio.Group size="large">
            <Radio.Button value="a">대기업</Radio.Button>
            <Radio.Button value="b">중견기업</Radio.Button>
            <Radio.Button value="c">스타트업</Radio.Button>
            <Radio.Button value="d">공기업</Radio.Button>
            <Radio.Button value="e">외국계</Radio.Button>
          </Radio.Group>
        </div>
        <Blank height="10px" />
        <div>
          (필수) 본인을 나타내는 태그 2개
          <Blank height="10px" />
        </div>
        <S.HashDivrap>
          <div className="HashWrapOuter"></div>
          <input
            className="HashInput"
            type="text"
            value={props.hashtag}
            onChange={props.onChangeHashtag}
            onKeyUp={props.onKeyUp}
            placeholder={props.hashState}
          />
        </S.HashDivrap>
        <Blank height="10px" />
        <Button style={{ height: "50px", fontSize: "24px" }}>
          {props.isEdit ? `수정하기` : `지원하기`}
        </Button>
      </S.RegisterForm>
    </S.Wrapper>
  );
}
